<template>
  <div class="principles-item-container">
    <div class="principles-item-image">
      <img src="../../../assets/images/main-principles/VectorBackground.svg" alt="" style="position:absolute; left: 10px; z-index: 0; top: 10px">

      <img src="../../../assets/images/main-principles/approve-user1.svg" alt="" v-if="image === 'user'">
      <img src="../../../assets/images/main-principles/growth-graph.svg" alt="" v-if="image === 'growth'">
      <img src="../../../assets/images/main-principles/light-bulb.svg" alt="" v-if="image === 'light'">
      <img src="../../../assets/images/main-principles/process.svg" alt="" v-if="image === 'process'">
      <img src="../../../assets/images/main-principles/scenery.svg" alt="" v-if="image === 'sce'">
      <img src="../../../assets/images/main-principles/trees.svg" alt="" v-if="image === 'tree'">


    </div>
    <div class="principles-item-text">
      <h1 class="principles-item-title">{{ title }}</h1>
      <h1 class="principles-item-description">{{ description }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrinciplesItem",
  props: ["title", "description", "image"]
}
</script>

<style scoped>
.principles-item-container {
  display: flex;
  
}

.principles-item-image {
  margin-right: 30px;
}

.principles-item-title {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #02001A;
}

.principles-item-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #06004E;
}
</style>