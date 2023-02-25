<template>
  <div class="main-gradient">
    <div>
      <Navigation theme="light" class="navigation"/>
    </div>

    <div class="portfolio-navigation main-outside">
      <h1 class="portfolio-navigation-item">Частные территории</h1>
      <h1 class="portfolio-navigation-item">Жилые комплексы</h1>
    </div>

    <div class="portfolio-car play-hide-animation" style="display: flex">
      <div style="width:100vw">
        <div class="main-outside portfolio-viewer" style="display: flex;">
          <PortfolioItem/>
          <PortfolioItem/>
        </div>
      </div>

      <div style="width:100vw">
        <div class="main-outside portfolio-viewer" style="display: flex;">
          <PortfolioItem/>
          <PortfolioItem/>
        </div>
      </div>
    </div>

    <div class="main-outside">
      <Footer theme="light"/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import Footer from "@/components/footer/Footer.vue";
import PortfolioItem from "@/components/pages/portfolio/PortfolioItem.vue";

export default {
  name: "PortfolioPage",
  components: {PortfolioItem, Navigation, Footer}
}
</script>

<style scoped>

/*@keyframes hide-animation {*/
/*  from {*/
/*    opacity: 1;*/
/*    transform: translateX(0px);*/
/*    display: none*/
/*  }*/
/*  to {*/
/*    opacity: 0;*/
/*    transform: translateX(-100%);*/
/*  }*/
/*}*/

.play-hide-animation {
  transition: 1s;
  transform: translateX(-100vw);
  /*animation: hide-animation 1s ease infinite;*/
}


.main-gradient {
  background-color: var(--vt-c-black);
}

.portfolio-navigation {
  margin-top: 1em;
  margin-bottom: 3em;
  display: flex;
}

.portfolio-navigation-item:not(:nth-child(1)) {
  margin-left: 4em;
}

.portfolio-navigation-item {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: var(--vt-c-white);
}

.portfolio-viewer {
  margin-bottom: 5em;
}

</style>