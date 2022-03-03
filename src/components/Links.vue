<template>
  <nav class="nav">
    <router-link to="/" exact class="link">Home</router-link>
    <router-link to="about" class="link">About</router-link>
    <router-link to="blog" class="link">Blog</router-link>
    <router-link to="pricing" class="link">Pricing</router-link>
  </nav>
</template>

<script>
export default { name: "Links" };
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.link {
  text-decoration: none;
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  padding-bottom: 3px;
  border-bottom: 4px solid transparent;
}
.router-link-active,
.router-link-exact-active {
  border-bottom: 4px solid rgb(101, 123, 236);
}
@media screen and (max-width: 600px) {
  .link {
    font-size: 20px;
  }
}
</style>
