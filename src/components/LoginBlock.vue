<template>
  <div class="container">
    <div class="wrapp">
      <div class="logo">Digital</div>
      <Congratulation v-if="checkAuth" />

      <div v-else>
        <div class="title">
          Artificial Intelligence Driving Results For The Travel Industry
        </div>
        <div class="subtitle">
          Welcome back! Please
          <button class="changeAuth" @click="isLogin = !isLogin">
            <!-- {{ isLogin ? "login" : "registration" }} -->
            <span v-if="isLogin" key="login">login</span>
            <span v-else key="registration">registration</span>
          </button>
          to your account.
        </div>
        <Form :isLogin="isLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import Congratulation from "./Congratulation.vue";
import Form from "./Form.vue";
import { mapGetters } from "vuex";
export default {
  components: { Form, Congratulation },
  computed: {
    ...mapGetters(["checkAuth"]),
  },
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    changeAuth() {
      this.isLogin = !this.isLogin;
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  max-width: 554px;
  margin: 0 auto;
}
.wrapp {
  width: 95%;
  margin: 0 auto;
}
.logo {
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #3751fe;
  margin-top: 86px;
}
.title {
  font-family: OpenSans-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  color: #3751fe;
  margin-top: 109px;
  margin-bottom: 28px;
}
.subtitle {
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 65px;
}
.changeAuth {
  color: #3751fe;
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  background: transparent;
  border: 0;
  outline: 0;
}
.changeAuth:hover {
  cursor: pointer;
}
@media screen and (max-width: 700px) {
  .container {
    width: 95%;
  }
  .logo,
  .title,
  .subtitle {
    text-align: center;
  }
}
</style>
