<template>
  <div class="slide-container"
       :style="'background-image: linear-gradient(to bottom, transparent 70%, #000000), url('+image+');'">

    <div class="portfolio-property-container">
      <div class="portfolio-property" v-if="principles.includes('user')">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/approve-user.svg">
      </div>
      <div class="portfolio-property" v-if="principles.includes('trees')">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/trees.svg">
      </div>
      <div class="portfolio-property" v-if="principles.includes('process')">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/process.svg">
      </div>
      <div class="portfolio-property" v-if="principles.includes('scenery')">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/scenery.svg">
      </div>
      <div class="portfolio-property" v-if="principles.includes('light')">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/light-bulb.svg">
      </div>
      <div class="portfolio-property" v-if="principles.includes('growth')">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/growth-graph.svg">
      </div>
    </div>
    <div class="slide-item">

      <h1 class="portfolio-item-name">{{ name }}</h1>
      <h1 class="portfolio-item-place">{{ place }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainProjectItem',
  props: {
    name: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    principles: {
      type: Array,
      required: true
    },
    image: {
      type: [String, String]
      // required: true
    }
  }
}
</script>

<style scoped>
.slide-container {
  min-height: 520px;
  min-width: 370px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;

  border: 1px solid var(--vt-c-white);
}

.slide-item {
  position: absolute;
  bottom: 0;
  width: 100%;
}


.portfolio-item-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: var(--vt-c-white);

  position: absolute;
  left: 4.44%;
  bottom: 4em;
  width: 100%;
}

.portfolio-item-place {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: var(--vt-c-white);

  position: absolute;
  left: 4.44%;
  bottom: 2em;
  width: 100%;
}

.portfolio-property-container {
  margin-top: 1em;
  margin-left: 1em;
  display: flex;
}

.portfolio-property:not(:nth-child(1)) {
  margin-left: 0.5em;
}

.portfolio-property {
  width: 2.5em;
  height: 2.5em;
  background: var(--vt-c-white);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.portfolio-property-image {
  left: calc(50% - 1em);
  top: calc(50% - 1em);
  width: 2em;
}


</style>
