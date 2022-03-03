<template>
  <kinesis-container class="wrapp">
    <kinesis-element class="element" :strength="10"> About</kinesis-element>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "About",
  components: {
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<style scoped>
.wrapp {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.element {
  font-family: emilio;
  font-size: 45px;
}
.element:hover {
  font-size: 55px;
}
</style>
