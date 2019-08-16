<template>
  <div class="d-flex container-fluid content">
    <!-- ============ story list -->
    <StoryList
      :class="{'col-7': isFormCreate, 'col': !isFormCreate}"
      :allStories="stories"
      :baseUrl="baseUrl"
      @to-add-story="toAddStory"
      @search-story="searchStory($event)"
      @delete-story="deleteStory"
      :isFormCreateStory="isFormCreate"
    ></StoryList>
    <!-- ============= form create story -->
    <transition name="fading">
      <FormCreateStory
        class="col-5"
        v-if="isFormCreate"
        @cancel-add="cancelAdd"
        :baseUrl="baseUrl"
        @create-story="createStory"
      ></FormCreateStory>
    </transition>
  </div>
</template>

<script>
import StoryList from "./StoryList.vue";
import FormCreateStory from "./FormCreateStory.vue";

export default {
  props: ["baseUrl", "stories"],
  components: {
    StoryList,
    FormCreateStory
  },
  data() {
    return {
      isFormCreate: false
    };
  },
  methods: {
    toAddStory() {
      this.isFormCreate = true;
    },
    cancelAdd() {
      this.isFormCreate = false;
    },
    createStory(payload) {
      this.isFormCreate = false;
      this.$emit("create-story", payload);
    },
    searchStory(payload) {
      this.$emit("search-story", payload);
    },
    deleteStory() {
      this.$emit("delete-story");
    }
  }
};
</script>

<style scoped>
.content {
  margin-top: 50px;
  padding-top: 50px;
  background-color: rgb(224, 224, 224);
}

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

.col-7 {
  flex-grow: 1;
  transition: all 400ms ease;
}

.col {
  width: 0;
  flex-shrink: 1;
  transition: all 400ms ease;
}
</style>