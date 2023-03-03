<template>
  <div class="principles-item-container">
    <div class="principles-item-image">
      <div v-if="image === 'user'">
        <img src="../../../assets/images/main-principles/back-user.svg" class="principles-item-back-image" alt="">
        <img src="../../../assets/images/main-principles/approve-user.svg" alt="">
      </div>

      <div v-if="image === 'growth'">
        <img src="../../../assets/images/main-principles/back-growth.svg" class="principles-item-back-image" alt="">
        <img src="../../../assets/images/main-principles/growth-graph.svg" alt="">
      </div>

      <div v-if="image === 'light'">
        <img src="../../../assets/images/main-principles/back-light.svg" class="principles-item-back-image" alt="">
        <img src="../../../assets/images/main-principles/light-bulb.svg" alt="">
      </div>

      <div v-if="image === 'process'">
        <img src="../../../assets/images/main-principles/back-process.svg" class="principles-item-back-image" alt="">
        <img src="../../../assets/images/main-principles/process.svg" alt="">
      </div>

      <div v-if="image === 'sce'">
        <img src="../../../assets/images/main-principles/back-scenery.svg" class="principles-item-back-image" alt="" style="top:15px">
        <img src="../../../assets/images/main-principles/scenery.svg" alt="">
      </div>

      <div v-if="image === 'tree'">
        <img src="../../../assets/images/main-principles/back-trees.svg" class="principles-item-back-image" alt="" style="top:15px">
        <img src="../../../assets/images/main-principles/trees.svg" alt="">
      </div>
    </div>
    <div class="principles-item-text">
      <h1 class="principles-item-title">{{ title }}</h1>
      <h1 class="principles-item-description">{{ description }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrinciplesItem',
  props: ['title', 'description', 'image']
}
</script>

<style scoped>
.principles-item-back-image {
  position: absolute;
  left: 5px;
  z-index: 0;
  top: 5px;
}

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
  font-size: 2.25em;
  line-height: 44px;
  color: #02001A;
}

.principles-item-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 29px;
  color: #06004E;
}
</style>
