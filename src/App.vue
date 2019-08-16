<template>
  <div>
    <Navbar :isLogin="isLogin" @logout="logout"></Navbar>
    <transition name="fading">
      <LandingPage @login="login" :baseUrl="baseUrl" v-if="!isLogin"></LandingPage>
      <Content
        v-if="isLogin"
        :baseUrl="baseUrl"
        :stories="stories"
        @create-story="createStory"
        @search-story="searchStory($event)"
        @delete-story="deleteStory"
      ></Content>
    </transition>
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";
import axios from "axios";

export default {
  data() {
    return {
      isLogin: false,
      baseUrl: `http://35.193.37.14`,
      stories: []
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
      this.fetchStories();
    },
    logout() {
      this.isLogin = false;
    },
    fetchStories() {
      axios({
        method: "get",
        url: `${this.baseUrl}/story`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          // console.log(data);
          this.stories = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    createStory(payload) {
      this.fetchStories();
      // this.stories.unshift(payload);
    },
    searchStory(payload) {
      axios({
        method: "get",
        url: `${this.baseUrl}/story`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          let searched = data.filter(story =>
            story.title.toLowerCase().includes(payload)
          );
          this.stories = searched;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteStory() {
      // console.log('sampe di appjs delete story')
      this.fetchStories();
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.isLogin = true;
    }
    this.fetchStories();
  }
};
</script>

<style scoped>
.fading-enter-active {
  transition: opacity 1s;
}

.fading-leave-active {
  transition: opacity 0.2s;
}

.fading-enter,
.fading-leave-to {
  opacity: 0;
}
</style>