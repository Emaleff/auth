<template>
  <div>
    <img src="../assets/images/home.png" alt="" class="element" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.element {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 100px;
  transition: 0.6s;
}
.element:hover {
  transform: scale(1.2);
  transition: 0.4s;
}
</style>
