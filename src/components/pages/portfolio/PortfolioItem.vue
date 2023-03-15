<template>
  <div class="portfolio-item-container"
       :style="'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 57.07%, #000000 100%),url('+image +');'">
    <div class="portfolio-property-container">
      <div class="portfolio-property" v-if="principles.includes('user')">
        <div class="tooltip">
          <img class="portfolio-property-image" src="../../../assets/images/main-principles/approve-user.svg">
          <span class="tooltiptext">Фокус на человека</span>
        </div>
      </div>
      <div class="portfolio-property" v-if="principles.includes('trees')">
        <div class="tooltip">
          <img class="portfolio-property-image" src="../../../assets/images/main-principles/trees.svg">
          <span class="tooltiptext">Природоподобные решения</span>
        </div>
      </div>
      <div class="portfolio-property" v-if="principles.includes('process')">
        <div class="tooltip">
          <img class="portfolio-property-image" src="../../../assets/images/main-principles/process.svg">
          <span class="tooltiptext">Экоустойчивые материалы</span>
        </div>
      </div>
      <div class="portfolio-property" v-if="principles.includes('scenery')">
        <div class="tooltip">
          <img class="portfolio-property-image" src="../../../assets/images/main-principles/scenery.svg">
          <span class="tooltiptext">Экология и окружающая среда</span>
        </div>
      </div>
      <div class="portfolio-property" v-if="principles.includes('light')">
        <div class="tooltip">
          <img class="portfolio-property-image" src="../../../assets/images/main-principles/light-bulb.svg">
          <span class="tooltiptext">Айдентика</span>
        </div>
      </div>
      <div class="portfolio-property" v-if="principles.includes('growth')">
        <div class="tooltip">
          <img class="portfolio-property-image" src="../../../assets/images/main-principles/growth-graph.svg">
          <span class="tooltiptext">Рентабельность</span>
        </div>
      </div>
    </div>

    <div class="portfolio-click"
         @click.prevent="toProject(nameProject)"
    ></div>

    <h1 class="portfolio-item-name">{{ name }}</h1>
    <h1 class="portfolio-item-place">{{ place }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    name: {
      type: String,
      required: true
    },
    nameProject: {
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
  },
  methods: {
    toProject: function (proj) {
      this.$root.onChangePage(proj)
    }
  }
}
</script>

<style scoped>
.portfolio-click {
  width: 100%;
  height: calc(100% - 4em);
  cursor: pointer;
}

.portfolio-item-container {
  width: 22.5em;
  height: 20.625em;

  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.2));
  border-radius: 10px;
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

.tooltip {
  width: 100%;
  height: 100%;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  height: 2em;
  vertical-align: middle;
  background-color: #555;
  color: var(--vt-c-white);
  text-align: center;
  border-radius: 6px;
  padding: 10px 0 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}


@media (max-width: 576px) {
  .portfolio-item-container {
    width: 35em;
    height: 30em;
  }
}


</style>
