<template>
  <div style="background-color: var(--vt-c-white)">
    <div>
      <Navigation id="navigation" :theme="this.theme"/>
    </div>

    <div class="pres-slide">
      <MainPresentation/>
    </div>
    <div>
      <MainScroll/>
    </div>
    <div style="margin-bottom: 20em;">
      <MainMission/>
    </div>
    <div style="background-color: var(--vt-c-white)">
      <MainPrinciples/>
    </div>
    <div style="background-color: var(--vt-c-white); margin-bottom: 20em;">
      <MainProject/>
    </div>
    <div style="background-color: var(--vt-c-white)">
      <Footer class="main-outside" theme="dark"/>
    </div>
  </div>
</template>

<script>
import MainPresentation from '@/components/pages/mainLight/MainPresentation.vue'
import MainScroll from '@/components/pages/mainLight/MainScroll.vue'
import MainMission from '@/components/pages/mainLight/MainMission.vue'
import MainPrinciples from '@/components/pages/mainLight/MainPrinciples.vue'
import MainProject from '@/components/pages/mainLight/MainProject.vue'
import Footer from '@/components/footer/Footer.vue'
import Navigation from '@/components/navigation/Navigation.vue'

export default {
  name: 'MainPageLight',
  components: { Navigation, Footer, MainProject, MainPrinciples, MainMission, MainScroll, MainPresentation },
  data () {
    return {
      theme: 'light'
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      const pres = this.$el.querySelector('.pres-slide').getBoundingClientRect()
      const offset = pres.y + pres.height
      if (offset < 0) {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
    }
  }
}
</script>

<style scoped>
#navigation {
  z-index: 100;
  position: fixed;
}

</style>
