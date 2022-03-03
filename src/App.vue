<template>
  <div id="app">
    <LoginBlock class="width" />
    <Content class="width" />
  </div>
</template>

<script>
import LoginBlock from "./components/LoginBlock";
import { mapActions } from "vuex";
import Content from "./components/Content";

export default {
  components: {
    LoginBlock,
    Content,
  },
  name: "App",
  methods: {
    ...mapActions(["checkTkn"]),
  },
  created() {
    this.checkTkn();
  },
};
</script>

<style>
@font-face {
  font-family: "emilio";
  src: url("./assets/fonts/emil.ttf");
}
@font-face {
  font-family: "Pentagon";
  src: url("./assets/fonts/Pentagon.ttf");
}
@font-face {
  font-family: "Coventry";
  src: url("./assets/fonts/Coventry.ttf");
}
@font-face {
  font-family: Roboto-Bold;
  src: url("./assets/fonts/Roboto-Bold.ttf");
}
@font-face {
  font-family: Roboto-Regular;
  src: url("./assets/fonts/Roboto-Regular.ttf");
}
@font-face {
  font-family: "OpenSans-Bold";
  src: url("./assets/fonts/OpenSans-Bold.ttf");
}
* {
  margin: 0;
}
#app {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100vh;
}
.width {
  width: 50%;
  flex-shrink: 0;
}
@media screen and (max-width: 700px) {
  #app {
    flex-direction: column;
  }
  .width {
    width: 100%;
  }
}
</style>
