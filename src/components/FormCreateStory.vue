<template>
  <div class="form-create-story d-flex flex-column align-items-center">
    <div class="title">
      <h1>Upload a Story</h1>
    </div>
    <div class="form-create">
      <h4>Title:</h4>
      <b-form-input placeholder="Title ..."></b-form-input>
      <h4>Description:</h4>
      <b-form-input placeholder="Description ..."></b-form-input>
      <h4>PDF File:</h4>
      <b-form-file
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        class="input-file"
      ></b-form-file>
      <h4>Featured Image:</h4>
      <b-form-file
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        class="input-file"
      ></b-form-file>
      <b-button variant="outline-primary" class="upload mt-3">Upload</b-button>
      <b-button class="mt-3" @click.prevent="cancelAddStory">Cancel</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formCreate: {
        title: "",
        description: "",
        pdf: "",
        image: ""
      }
    };
  },
  methods: {
    cancelAddStory() {
      this.$emit("cancel-add");
    },
    createStory() {
      axios({
        method: "post"
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