<template>
  <div class="story-card d-flex">
    <div class="featured-image col" :style="{ backgroundImage: 'url(' + story.image + ')' }"></div>
    <div class="main-content-card col-9">
      <div class="title d-flex justify-content-between">
        <h3>{{story.title}}</h3>
        <a
          href
          class="delete-story-btn"
          v-if="isLoggedUser"
          @click.prevent="deleteStory(story._id)"
        >
          <i class="fas fa-minus"></i>
        </a>
      </div>
      <div class="description">
        <p>{{story.description}}</p>
      </div>
      <footer class="d-flex justify-content-between">
        <div class="card-info">
          <h6>author: {{story.author.username}}</h6>
          <small>1 days ago</small>
        </div>
        <div class="link align-self-end d-flex align-items-center">
          <!-- twitter -->
          <!-- <a href class="share-twitter btn btn-primary twitter-share" data-js="twitter-share">
            <font-awesome-icon icon="share-alt-square" class="mr-2 add-button-symbol"></font-awesome-icon>Twitter
          </a>-->
          <!-- facebook -->
          <a href="#" class="mr-3 facebook-btn">
            <social-sharing
              :url="story.pdf"
              title="story.title"
              hashtags="mystory"
              description="story.description"
              :quote="message"
              inline-template
              :media="story.image"
            >
              <div>
                <network network="facebook">
                  <i class="fab fa-facebook"></i>
                </network>
              </div>
            </social-sharing>
          </a>
          <a class="btn btn-primary download" :href="story.pdf">Download Story</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["story", "baseUrl"],
  data() {
    return {
      url: this.story.pdf,
      message: `I downloaded a story: "${this.story.title}" via MyStory, ${this.story.pdf}`,
      isLoggedUser: false
    };
  },
  methods: {
    deleteStory(id) {
      this.$swal({
        title: "Delete this story?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          axios({
            method: "delete",
            url: `${this.baseUrl}/story/${id}`,
            headers: {
              token: localStorage.getItem("token")
            }
          })
            .then(({ data }) => {
              this.$swal("Deleted!", "Your story has been deleted.", "success");
              console.log("Successfuly deleted story");
              this.$emit("delete-story");
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    shareTwitter() {
      window.open(
        "https://twitter.com/share?url=" + this.pdfLink,
        "twitter-popup",
        "height=350,width=600"
      );
      if (twitterWindow.focus) {
        twitterWindow.focus();
      }
      return false;
    }
  },
  created() {
    this.pdfLink = this.story.pdf;
    if (this.story.author.username == localStorage.getItem("username")) {
      this.isLoggedUser = true;
    }
  }
};
</script>

<style scoped>
div.story-card {
  background-color: rgb(240, 240, 240);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  width: 700px;
  margin-bottom: 15px;
  position: relative;
  top: 0;
  transition: 0.2s;
}

div.main-content-card {
  padding: 20px;
}

div.story-card:hover {
  top: -5px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.39);
}

.download {
  position: relative;
}

.title h3 {
  font-family: "Anton";
  font-size: 20px;
}

.description {
  border-bottom: 1px solid rgb(175, 175, 175);
  margin-bottom: 10px;
}

.description p {
  font-family: "Source Serif Pro";
  font-size: 15px;
}

small {
  color: rgb(116, 116, 116);
}

h6 {
  font-family: "Source Serif Pro";
  font-size: 13px;
}

.featured-image {
  background-size: cover;
  border-radius: 7px 0 0 7px;
}

.facebook-btn {
  font-size: 30px;
}

.delete-story-btn {
  color: rgb(163, 70, 70);
}
</style>