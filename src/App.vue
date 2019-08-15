<template>
  <div>
    <Navbar></Navbar>
    <LandingPage></LandingPage>
    <Content></Content>
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";

export default {
  components: {
    LandingPage,
    Navbar,
    Content
  }
};
</script>

<style scoped>
</style>