<template>
  <div class="story-list d-flex flex-column align-items-center">
    <div class="nav-story d-flex align-items-center">
      <!-- ===== search -->
      <b-input-group class="search">
        <b-input-group-prepend>
          <span class="input-group-text">
            <font-awesome-icon icon="search"></font-awesome-icon>
          </span>
        </b-input-group-prepend>
        <b-form-input class="LoginInput" size="lg" placeholder="Search ..."></b-form-input>
      </b-input-group>
      <!-- ===== add-story-btn -->
      <a
        href
        class="add-story-button d-flex ml-4"
        @click.prevent="toAddStory"
        v-if="!isFormCreateStory"
      >
        <font-awesome-icon icon="plus-circle" class="mr-2 add-button-symbol"></font-awesome-icon>
        <h6>Upload Story</h6>
      </a>
    </div>
    <Story></Story>
    <Story></Story>
    <Story></Story>
  </div>
</template>

<script>
import Story from "./Story.vue";

export default {
  props: ["isFormCreateStory"],
  components: {
    Story
  },
  methods: {
    toAddStory() {
      this.$emit("to-add-story");
    }
  }
};
</script>

<style scoped>
.nav-story {
  margin-bottom: 30px;
}

.input-group {
  width: 500px;
}

h6 {
  margin: 0;
}

a.add-story-button {
  background-color: rgb(0, 123, 255);
  padding: 10px;
  border-radius: 18px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.61);
  position: relative;
  top: 0;
  text-decoration: none;
  transition: 0.2s;
}

a.add-story-button:hover {
  top: -5px;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.384);
}

a h6 {
  color: white;
}

.add-button-symbol {
  color: white;
}
</style>