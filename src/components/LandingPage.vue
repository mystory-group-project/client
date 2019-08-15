<template>
  <div id="landing-page">
    <div id="box">
      <div id="box-head">
        <div @click="showRegister" id="head-register">
          REGISTER
        </div>
        <div @click="showLogin" id="head-login">
          LOGIN
        </div>
      </div>
      <div id="box-body">
        <FormRegister :baseUrl="baseUrl"></FormRegister>
        <FormLogin @login="$emit('login')" :baseUrl="baseUrl"></FormLogin>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from "./FormLogin.vue";
import FormRegister from "./FormRegister.vue";

export default {
  props: [ "baseUrl" ],
  data() {
    return {
      
    }
  },
  methods: {
    showRegister() {
      document.getElementById('box-register').style.opacity = 1;
      document.getElementById('box-register').style.top = '0';
      document.getElementById('box-login').style.opacity = 0;
      document.getElementById('box-login').style.top = '-150%';
    },
    showLogin() {
      document.getElementById('box-register').style.opacity = 0;
      document.getElementById('box-register').style.top = '-150%';
      document.getElementById('box-login').style.opacity = 1;
      document.getElementById('box-login').style.top = '0';
    }
  },
  created() {
  },
  components: {
    FormLogin,
    FormRegister
  }
};
</script>
  
<style scoped>
  #landing-page {
    font-family: 'Montserrat', sans-serif;
    background-image: 
    linear-gradient(to right,
    rgba(68, 103, 216, .4),
    rgba(0, 0, 0, .4)),
    url('../../static/bg.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    box-shadow: 0px;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #box {
    border-radius: 10px;
    width: 600px;
    overflow: hidden;
  }

  #box-head {
    background-color: white;
    height: 50px;
    display: flex;
    position: relative;
    z-index: 10;
    letter-spacing: 2px;
    color: #34393f;
  }

  #head-register, #head-login {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #head-register:hover, #head-login:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }
  #head-register:active, #head-login:active {
    background-color: #d1d1d1;
  }
  #box-body {
    position: relative;
  }
</style>