<template>
  <div>
    <div>
      <Navigation theme="dark" class="navigation"/>
      <NavigationLogo :background="true"/>
    </div>
    <div class="main-gradient" style="overflow-y: clip">
      <FigureBackground2 style="top: 16vh; height: 20vh; width: 20vw; left: -15vw"/>
      <FigureBackground3 style="top: 80vh; height: 20vh; width: 20vw; right: -10vw"/>

      <div class="portfolio-navigation main-outside">
        <NavigationButton class="portfolio-navigation-item"
                          @click.prevent="this.onSurfPage(0)"
                          :text="translate('Благоустройство')"
                          :active="activeNavigation === 0"/>
        <NavigationButton class="portfolio-navigation-item"
                          @click.prevent="this.onSurfPage(1)"
                          :text="translate('Комерческое озеленение')"
                          :active="activeNavigation === 1"/>
        <NavigationButton class="portfolio-navigation-item"
                          @click.prevent="this.onSurfPage(2)"
                          :text="translate('Частные объекты')"
                          :active="activeNavigation === 2"/>
      </div>

      <div class="portfolio-car play-hide-animation" style="display: flex">
        <div style="width:100vw">
          <div class="main-outside portfolio-viewer">
            <PortfolioItem class="portfolio-item" v-for="item in portfolioItemData[0]" key="item.name"
                           :image="item.image"
                           :name="item.name"
                           :place="item.place"
                           :principles="item.principles"
                           :name-project="item.nameProject"/>
          </div>
        </div>

        <div style="width:100vw">
          <div class="main-outside portfolio-viewer">
            <PortfolioItem class="portfolio-item" v-for="item in portfolioItemData[1]" key="item.name"
                           :image="item.image"
                           :name="item.name"
                           :place="item.place"
                           :principles="item.principles"
                           :name-project="item.nameProject"
            />
          </div>
        </div>
        <div style="width:100vw">
          <div class="main-outside portfolio-viewer">
            <PortfolioItem class="portfolio-item" v-for="item in portfolioItemData[2]" key="item.name"
                           :image="item.image"
                           :name="item.name"
                           :place="item.place"
                           :principles="item.principles"
                           :name-project="item.nameProject"
            />
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
import Navigation from '@/components/navigation/Navigation.vue'
import Footer from '@/components/footer/Footer.vue'
import PortfolioItem from '@/components/pages/portfolio/PortfolioItem.vue'

import {portfolioItemData} from '@/assets/images/portfolio-items/import'
import FigureBackground2 from "@/components/figures/FigureBackground2.vue";
import FigureBackground3 from "@/components/figures/FigureBackground3.vue";
import NavigationButton from "@/components/navigation/NavigationButton.vue";
import NavigationLogo from "@/components/ui/NavigationLogo.vue";
import {translate} from "@/assets/js/i18n";

export default {
  name: 'PortfolioPage',
  data() {
    return {
      portfolioItemData,
      activeNavigation: 0
    }
  },
  components: {NavigationLogo, NavigationButton, FigureBackground3, FigureBackground2, PortfolioItem, Navigation, Footer},
  methods: {
    translate,
    onSurfPage: function (numb) {
      this.$el.querySelector('.portfolio-car').style.transform = `translateX(${-numb * 100}vw)`;
      this.activeNavigation=numb;
    }
  }
}
</script>

<style scoped>
.navigation {
  z-index: 100;
  position: fixed;
  background-color: #0000002e;
}

.play-hide-animation {
  /*transform: translateX(-100vw);*/
  /*animation: hide-animation 1s ease infinite;*/
}

.portfolio-car {
  transition: 1s;
  /*overflow-x: clip;*/
}

.main-gradient {
  background-color: var(--vt-c-white);
  overflow-x: clip;
}

.portfolio-navigation {
  padding-top: 12em;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
}

.portfolio-navigation-item:not(:nth-child(1)) {
  margin-left: 4em;
}

.portfolio-navigation-item.active {
  text-decoration: underline;
}

.portfolio-navigation-item {
  transition: 0.5s;
  line-height: 1em;
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
  justify-content: center;
}

.portfolio-item {
  margin-top: 3em;
  margin-left: 1.5em;
  margin-right: 1.5em;
}

@media (max-width: 576px) {
  .portfolio-navigation {
    padding-top: 10em !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em !important;
  }
  .portfolio-navigation-item {
    margin-left: 0 !important;
    margin-top: 1em !important;
    font-size: 1.2em;
  }
}

</style>
