<template>
  <div>
    <LandingPage :baseUrl="baseUrl"></LandingPage>
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
  }
};
</script>

<style scoped>
</style>