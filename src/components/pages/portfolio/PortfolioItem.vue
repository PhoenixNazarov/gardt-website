<template>
  <div class="portfolio-item-container">
    <div class="portfolio-property-container">
      <div class="portfolio-property">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/approve-user.svg">
      </div>
      <div class="portfolio-property">
        <img class="portfolio-property-image" src="../../../assets/images/main-principles/trees.svg">
      </div>
    </div>
    <h1 class="portfolio-item-name">Озеленение терассы</h1>
    <h1 class="portfolio-item-place">г. Зеленогорск, Россия</h1>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem"
}
</script>

<style scoped>

.portfolio-item-container {
  width: 22.5em;
  height: 20.625em;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 57.07%, #000000 100%),
  url("../../../assets/images/main-slider/1.jpg");
  background-size: cover;
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

</style>