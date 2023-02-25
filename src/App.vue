<template>
  <header>

  </header>

  <main>
    <div class="wrapper">
      <MainPage v-if="page === 'Main'"/>
      <MainPageLight v-if="page === 'MainLight'"/>
      <AboutPage v-if="page === 'About'"/>
      <UiPage v-if="page === 'Ui'"/>
      <PortfolioPage v-if="page === 'Portfolio'"/>
    </div>
  </main>
</template>

<script>
import MainPage from "@/components/pages/main/MainPage.vue";
import AboutPage from "@/components/pages/aboutUs/AboutPage.vue";
import UiPage from "@/components/pages/ui/UiPage.vue";
import PortfolioPage from "@/components/pages/portfolio/PortfolioPage.vue";
import MainPageLight from "@/components/pages/mainLight/MainPage.vue";

export default {
  name: 'App',
  data: function () {
    return {
      page: "Main"
    }
  },
  components: {MainPageLight, PortfolioPage, UiPage, AboutPage, MainPage},
  beforeCreate() {
    this.$root.onChangePage = function (page) {
      window.scrollTo({top: 0});
      this.page = page;
    }
    window.addEventListener('scroll', (e) => {
      document.body.style.cssText=`--scrollTop: ${window.scrollY}px`;
    })
  }
}
</script>

<style scoped>
.wrapper {
  /*min-height: 600vh;*/
}

</style>
