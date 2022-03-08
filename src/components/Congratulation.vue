<template>
  <div class="congratulations">
    <div class="congratulation__actions">
      <span class="congratulation__email">{{ getEmail }}</span>
      <button class="congratulation__logout" @click="logout">Logout</button>
    </div>
    <img
      src="../assets/images/congratulations.png"
      alt=""
      class="congratulation__img"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import router from "../router/";
export default {
  name: "Congratulation",
  computed: {
    ...mapGetters(["getEmail"]),
  },
  methods: {
    // ...mapActions(["logout"]),
    logout() {
      this.$store.commit("updateTkn", null);
      localStorage.removeItem("tkn");
      this.$store.commit("updateMail", null);
      localStorage.removeItem("email");

      this.$router.push("/").catch(()=>{});
    },
  },
};
</script>

<style scoped>
.congratulation__email {
  font-family: emilio;
}
.congratulation__img {
  display: block;
  width: 80%;
  margin: 60px auto;
}
.congratulation__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.congratulation__logout {
  width: 129px;
  height: 54px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  border: 1px solid #3751fe;
  line-height: 21px;
  background: #3751fe;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  transition: 0.3s;
}
.congratulation__logout:hover {
  cursor: pointer;
  background: #ffffff;
  color: #3751fe;
  transition: 0.7s;
}
@media screen and (max-width: 800px) {
  .congratulation__actions {
    display: block;
  }
  .congratulation__logout {
    margin-top: 20px;
  }
}
</style>
