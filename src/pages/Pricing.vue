<template>
  <kinesis-container class="wrapp">
    <kinesis-element :strength="15">
      <div class="element">Pricing</div></kinesis-element
    >
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "Blog",
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
  font-family: Pentagon;
  font-size: 60px;
  transition: 1.5s;
}
.element:hover {
  transform: scale(1.3);
  transition: 0.7s;
}
</style>
  