<template>
  <div>
    <Navbar></Navbar>
    <LandingPage @login="login" :baseUrl="baseUrl"></LandingPage>
    <Content></Content>
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";

export default {
  data() {
    return {
      isLogin: false,
      baseUrl: `http://localhost:3000`
    };
  },
  components: {
    Navbar,
    Content,
    LandingPage
  },
  methods: {
    login() {
      console.log("oke");
      this.isLogin = true;
    }
  }
};
</script>

<style scoped>
</style>