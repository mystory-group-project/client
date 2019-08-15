<template>
  <div>
    <LandingPage @login="login" :baseUrl="baseUrl"></LandingPage>
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage";

export default {
  data() {
    return {
      isLogin: false,
      baseUrl: `http://localhost:3000`
    }
  },
  components: {
    LandingPage
  },
  methods: {
    login() {
      console.log('oke');
    }
  }
};
</script>

<style scoped>
</style>