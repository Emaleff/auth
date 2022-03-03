<template>
  <div class="content">
    <Links />
    <router-view class="container" />
  </div>
</template>

<script>
import Links from "./Links.vue";
export default {
  name: "Content",
  components: { Links },
};
</script>

<style scoped>

.content {
  background: #f4f4f4;
}
</style>
