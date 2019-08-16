<template>
  <div>
    <div id="box-login">
      <header>
        <h1>LOGIN</h1>
      </header>
      <input type="email" v-model="loginEmail" class="form-control" placeholder="Email" />
      <input type="password" v-model="loginPassword" class="form-control" placeholder="Password" />
      <button @click="login" class="btn btn-primary btn-lg btn-block mt-5">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["baseUrl"],
  data() {
    return {
      loginEmail: "",
      loginPassword: ""
    };
  },
  created() {},
  methods: {
    login() {
      axios({
        method: "POST",
        url: `${this.baseUrl}/user/login`,
        data: {
          email: this.loginEmail,
          password: this.loginPassword
        }
      })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username);
          console.log(data);
          this.$emit("login");
          // DO STUFF HERE ...
        })
        .catch(err => {
          // DO STUFF HERE ...
          console.log(err);
          this.$swal({
            type: "error",
            title: "Oops",
            text: err.response.data
          });
        });
    }
  }
};
</script>

<style scoped>
#box-login {
  position: absolute;
  top: -100%;
  width: 100%;
  border-radius: 0 0 10px 10px;
  padding: 20px 50px;
  background-color: rgba(240, 240, 240, 0.3);
  opacity: 0;
  transition: 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 37px;
  letter-spacing: 5px;
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
}
</style>