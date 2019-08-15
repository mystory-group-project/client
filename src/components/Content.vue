<template>
  <div class="d-flex container-fluid content">
      <!-- ============ story list -->
    <StoryList
      :class="{'col-7': isFormCreate, 'col': !isFormCreate}"
      @to-add-story="toAddStory"
      :isFormCreateStory="isFormCreate"
    ></StoryList>
    <!-- ============= form create story -->
    <FormCreateStory class="col-5" v-if="isFormCreate" @cancel-add="cancelAdd"></FormCreateStory>
  </div>
</template>

<script>
import StoryList from "./StoryList.vue";
import FormCreateStory from "./FormCreateStory.vue";

export default {
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
    }
  }
};
</script>

<style scoped>
.content {
  margin-top: 50px;
}
</style>