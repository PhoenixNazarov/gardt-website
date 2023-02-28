<template>
  <div>
    <div>
      <Navigation theme="dark" class="navigation"/>
    </div>
    <div class="main-gradient">

      <div class="portfolio-navigation main-outside">
        <h1 class="portfolio-navigation-item" @click.prevent="this.onSurfPage(0)">Частные территории</h1>
        <h1 class="portfolio-navigation-item" @click.prevent="this.onSurfPage(1)">Жилые комплексы</h1>
        <h1 class="portfolio-navigation-item" @click.prevent="this.onSurfPage(2)">Муниципальные объекты</h1>
      </div>

      <div class="portfolio-car play-hide-animation" style="display: flex">
        <div style="width:100vw">
          <div class="main-outside portfolio-viewer">
            <PortfolioItem class="portfolio-item" @click.prevent="toProject('ProjectZelenogorsk')"/>
            <PortfolioItem class="portfolio-item"/>
          </div>
        </div>

        <div style="width:100vw">
          <div class="main-outside portfolio-viewer">
            <PortfolioItem class="portfolio-item"/>
          </div>
        </div>
        <div style="width:100vw">
          <div class="main-outside portfolio-viewer">
            <PortfolioItem class="portfolio-item"/>
          </div>
        </div>
      </div>

      <div class="main-outside">
        <Footer theme="dark"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import Footer from "@/components/footer/Footer.vue";
import PortfolioItem from "@/components/pages/portfolio/PortfolioItem.vue";

export default {
  name: "PortfolioPage",
  components: {PortfolioItem, Navigation, Footer},
  methods: {
    onSurfPage: function (numb) {
      this.$el.querySelector('.portfolio-car').style.transform = `translateX(${-numb * 100}vw)`
    },
    toProject: function (proj) {
      this.$root.onChangePage(proj);
    }
  }
}
</script>

<style scoped>
.navigation {
  z-index: 100;
  position: fixed;
}

.play-hide-animation {
  /*transform: translateX(-100vw);*/
  /*animation: hide-animation 1s ease infinite;*/
}

.portfolio-car {
  transition: 1s;
}

.main-gradient {
  background-color: var(--vt-c-white);
}

.portfolio-navigation {
  padding-top: 9em;
  margin-bottom: 3em;
  display: flex;
}

.portfolio-navigation-item:not(:nth-child(1)) {
  margin-left: 4em;
}

.portfolio-navigation-item {
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: var(--vt-c-black);
}

.portfolio-viewer {
  margin-bottom: 5em;
  display: flex;
  flex-wrap: wrap;
}

.portfolio-item {
  cursor: pointer;
  margin-top: 3em;
  margin-left: 1.5em;
  margin-right: 1.5em;
}

</style>