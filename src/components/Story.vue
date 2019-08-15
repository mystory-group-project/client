<template>
  <div class="story-card d-flex">
    <div class="featured-image col" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <div class="main-content-card col-9">
      <div class="title">
        <h3>This is story title</h3>
      </div>
      <div class="description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolores placeat quam quae! Repellendus, perferendis magnam modi excepturi nobis blanditiis!</p>
      </div>
      <footer class="d-flex justify-content-between">
        <div class="card-info">
          <h6>author: Samsudin Tralala</h6>
          <small>1 days ago</small>
        </div>
        <div class="link align-self-end">
          <a href class="share-twitter btn btn-primary">
            <font-awesome-icon icon="share-alt-square" class="mr-2 add-button-symbol"></font-awesome-icon>
            Twitter
          </a>
          <a class="btn btn-primary download" href>Download Story</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://s-ec.bstatic.com/images/hotel/max1024x768/102/102757357.jpg"
    };
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
</style>