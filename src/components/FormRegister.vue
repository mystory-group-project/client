<template>
  <div id="box-register">
    <header>
      <h1>REGISTER</h1>
    </header>
    <input type="text" v-model="registerFullName" class="form-control" placeholder="Username">
    <input type="email" v-model="registerEmail" class="form-control" placeholder="Email">
    <input type="password" v-model="registerPassword" class="form-control" placeholder="Password">
    <button @click="register" class="btn btn-primary btn-lg btn-block mt-5">Register</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: [ "baseUrl" ],
  data() {
    return {
      registerFullName: "",
      registerEmail: "",
      registerPassword: "",
    }
  },
  created() {

  },
  methods: {
    register() {
      axios({
        method: "POST",
        url: `${this.baseUrl}/user/register`,
        data: {
          username: this.registerFullName,
          email: this.registerEmail,
          password: this.registerPassword
        }
      })
      .then(({ data }) => {
        // DO STUFF HERE ...
        this.$swal({
          type: 'success',
          title: 'Please login to continue'
        })
        console.log(data);
      })
      .catch(err => {
        // DO STUFF HERE ...
        this.$swal({
          type: 'error',
          title: err.response.data
        })
        console.log(err);
      })
    }
  },
  components: {

  }
}
</script>

<style scoped>
  #box-register {
    position: relative;
    padding: 20px 50px;
    background-color: rgba(240, 240, 240, 0.3);
    top: 0;
    border-radius: 0 0 10px 10px;
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 37px;
    letter-spacing: 4px;
    color: #474747;
    margin: 20px 0;
    color: white;
  }

  input {
    height: 50px;
    border-radius: 10px;
    padding: 20px 30px;
    font-size: 1.2em;
    color: #707070;
    margin: 7px 0;
    border: 1.5px solid #888888;
  }

  input:focus {
    color: #474747;
    /* border: none; */
    /* box-shadow: none; */
  }

</style>