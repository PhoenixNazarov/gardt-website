<template>
  <header>

  </header>

  <main>
    <div class="wrapper">
      <MainPage v-if="page === 'Main'"/>
      <AboutPage v-if="page === 'About'"/>
      <UiPage v-if="page === 'Ui'"/>
      <PortfolioPage v-if="page === 'Portfolio'"/>

      <!--      <ProjectZelenogorsk v-if="page ==='ProjectZelenogorsk'"/>-->
      <ProjectBase :projectName="page" v-if="page.startsWith('Project')"/>
    </div>
  </main>
</template>

<script>
import MainPage from '@/components/pages/main/MainPage.vue'
import AboutPage from '@/components/pages/aboutUs/AboutPage.vue'
import UiPage from '@/components/pages/ui/UiPage.vue'
import PortfolioPage from '@/components/pages/portfolio/PortfolioPage.vue'
import ProjectBase from '@/components/projects/ProjectBase.vue'
import {getPage, setPage} from "@/pages";
import {setLanguage} from "@/assets/js/i18n";

export default {
  name: 'App',
  data: function () {
    return {
      page: getPage()
    }
  },
  components: {ProjectBase, PortfolioPage, UiPage, AboutPage, MainPage},
  beforeCreate() {
    document._fixScrollListeners = []
    this.$root.onChangePage = function (page) {
      window.scrollTo({top: 0})

      this.$nextTick(() => {
        document._fixScrollListeners.forEach((f) => document.removeEventListener('scroll', f))
        document._fixScrollListeners = []
      })
      this.page = page
      setPage(page);
    }
    this.$root.getPage = function () {
      return this.page;
    }

    window.addEventListener('scroll', (e) => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
    })
  }
}
</script>

<style scoped>
.wrapper {
  /*min-height: 600vh;*/
}

</style>
