<template>
  <div style="background-color: var(--vt-c-black)">
    <div>
      <Navigation id="navigation" :theme="this.theme"/>
    </div>
    <NavigationLogo/>
    <div class="pres-slide">
      <MainPresentation/>
    </div>
    <div>
      <MainScroll/>
    </div>
    <div style="margin-bottom: 20em;">
      <MainMission/>
    </div>
    <div style="background-color: var(--vt-c-black)">
      <MainPrinciples/>
    </div>
    <div style="background-color: var(--vt-c-black); margin-bottom: 20em;">
      <MainProject/>
    </div>
    <div style="background-color: var(--vt-c-black)">
      <Footer class="main-outside" theme="light"/>
    </div>
  </div>
</template>

<script>
import MainPresentation from '@/components/pages/main/MainPresentation.vue'
import MainScroll from '@/components/pages/main/MainScroll.vue'
import MainMission from '@/components/pages/main/MainMission.vue'
import MainPrinciples from '@/components/pages/main/MainPrinciples.vue'
import MainProject from '@/components/pages/main/MainProject.vue'
import Footer from '@/components/footer/Footer.vue'
import Navigation from '@/components/navigation/Navigation.vue'
import axios from 'axios'
import NavigationLogo from "@/components/ui/NavigationLogo.vue";

export default {
  name: 'MainPage',
  components: {NavigationLogo, Navigation, Footer, MainProject, MainPrinciples, MainMission, MainScroll, MainPresentation },
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
      // if (offset < 0) {
      //   this.theme = "dark"
      // } else {
      //   this.theme = "light"
      // }
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
