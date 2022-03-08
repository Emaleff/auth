<template>
  <ValidationObserver v-slot="{ invalid }">
    <form @submit.prevent="" class="form">
      <ValidationProvider
        class="input"
        name="email"
        rules="email|required"
        v-slot="{ errors }"
      >
        <label class="input__label">Enter emails here:</label>
        <div class="input__wrapp">
          <input
            v-model="testData"
            type="email"
            name="email"
            id="email"
            class="input__actions"
          />
        </div>
        <span class="err" :key="errors[0]">{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider
        class="input"
        name="password"
        rules="required|min:6"
        v-slot="{ errors }"
      >
        <label class="input__label">password</label>
        <div class="input__wrapp">
          <input
            class="input__actions"
            type="password"
            v-model="testPass"
            name="password"
            id="password"
          />
        </div>
        <span class="err" :key="errors[0]">{{ errors[0] }}</span>
      </ValidationProvider>
      <button
        class="btn login"
        type="submit"
        :disabled="invalid"
        @click="onLogin"
        v-if="isLogin"
      >
        login
      </button>
      <button
        class="btn signup"
        type="submit"
        :disabled="invalid"
        @click="registration"
        v-else
      >
        Sign Up
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import axios from "axios";
// import { mapActions } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "Form",
  data() {
    return {
      testData: "",
      testPass: "",
    };
  },
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
  },
  components: { ValidationObserver, ValidationProvider },
  methods: {
    // ...mapActions(["registration", "login"]),
    async registration() {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(url, {
          email: this.testData,
          password: this.testPass,
          returnSecureToken: true,
        });
        this.$store.commit("updateTkn", data.idToken);
        this.$store.commit("updateMail", data.email);
        localStorage.setItem("tkn", data.idToken);
        localStorage.setItem("email", data.email);
      } catch (e) {
        alert(e.response.data.error.message);
      }
    },
    async onLogin() {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(url, {
          email: this.testData,
          password: this.testPass,
          returnSecureToken: true,
        });
        this.$store.commit("updateTkn", data.idToken);
        this.$store.commit("updateMail", data.email);
        localStorage.setItem("tkn", data.idToken);
        localStorage.setItem("email", data.email);
      } catch (e) {
        alert(e.response.data.error.message);
      }
    },
  },
};
</script>

<style scoped>
.input__actions {
  padding: 39px 27px 0;
  width: 98%;
  height: 96%;
  border: 0;
  outline: 0;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3751fe;
}
.input__actions:focus {
  border-left: 4px solid #3751fe;
}
.btn {
  width: 129px;
  height: 54px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  border: 1px solid #3751fe;
  line-height: 21px;
}
.btn:hover {
  cursor: pointer;
}
.login {
  background: #3751fe;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  transition: 0.3s;
}
.login:hover {
  background: #ffffff;
  color: #3751fe;
  transition: 0.3s;
}
.signup {
  background: #ffffff;
  color: #3751fe;
  transition: 0.3s;
}
.signup:hover {
  background: #3751fe;
  color: #ffffff;
  transition: 0.3s;
}
.btn:disabled {
  background: gray;
  border: 1px solid gray;
  color: #ffffff;
}
.btn:disabled:hover {
  cursor: auto;
}
.form {
  width: 100%;
}
.input {
  position: relative;
  display: block;
  width: 100%;
  height: 74px;
  box-sizing: border-box;
  border: 1px solid #c1bbbb;
  z-index: 9;
}
.input__label {
  display: block;
  position: relative;
  z-index: 4;
  margin-top: 12px;
  margin-left: 27px;
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.61);
}
.input__wrapp {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  box-sizing: border-box;
}

.err {
  display: block;
  z-index: 4;
  position: relative;
  color: red;
  margin: -24px 0px 0 230px;
}
@media screen and (max-width: 700px) {
  .btn {
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
