<template>
  <div class="form-create-story d-flex flex-column align-items-center">
    <div class="title">
      <h1>Share a Story</h1>
    </div>
    <div class="form-create">
      <h4>Title:</h4>
      <b-form-input placeholder="Title ..." v-model="formCreate.title"></b-form-input>
      <h4>Description:</h4>
      <b-form-input placeholder="Description ..." v-model="formCreate.description"></b-form-input>
      <h4>PDF File:</h4>
      <b-form-file
        v-model="formCreate.pdf"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        class="input-file"
        accept=".pdf"
      ></b-form-file>
      <h4>Featured Image:</h4>
      <b-form-file
        v-model="formCreate.image"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        class="input-file"
        accept="image/*"
      ></b-form-file>
      <div class="button-options d-flex align-items-center">
        <b-button variant="outline-primary" class="upload mr-2" @click.prevent="createStory">Share</b-button>
        <b-button class="mr-4" @click.prevent="cancelAddStory">Cancel</b-button>
        <div class="spinner-loading" v-if="isLoading">
          <b-spinner variant="primary" type="grow"></b-spinner>
          <b-spinner variant="danger" type="grow"></b-spinner>
          <b-spinner variant="warning" type="grow"></b-spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["baseUrl"],
  data() {
    return {
      formCreate: {
        title: "",
        description: "",
        pdf: "",
        image: ""
      },
      isLoading: false
    };
  },
  methods: {
    inputFilePdf(e) {
      this.formCreate.pdf = e.target.files[0];
    },
    inputFileImage(e) {
      this.formCreate.image = e.target.files[0];
    },
    cancelAddStory() {
      this.$emit("cancel-add");
    },
    createStory() {
      this.isLoading = true;
      
      let formData = new FormData();
      formData.append("title", this.formCreate.title);
      formData.append("description", this.formCreate.description);
      formData.append("link", this.formCreate.pdf);
      formData.append("link", this.formCreate.image);
      //   console.log(formData);

      axios({
        method: "post",
        url: `${this.baseUrl}/story/create`,
        data: formData,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          console.log(data);
          this.isLoading = false;

          this.formCreate.title = "";
          this.formCreate.description = "";
          this.formCreate.pdf = "";
          this.formCreate.image = "";

          this.$swal({
            type: "success",
            title: "Success!",
            text: "Your story successfuly published!"
          });
          this.$emit("create-story", data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
div.form-create-story {
  padding-left: 30px;
  border-left: 1px solid rgb(206, 206, 206);
  position: fixed;
  right: 0;
  height: 100%;
}

h1 {
  font-family: "Lobster";
  margin-bottom: 30px;
}

h4 {
  font-family: "Oswald";
}

input {
  margin-bottom: 20px;
}

.form-create {
  width: 100%;
}

.input-file {
  margin-bottom: 20px;
}
</style>