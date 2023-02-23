<template>
  <div style="background-color: var(--vt-c-white)">
    <div>
      <Navigation id="navigation" :theme="this.theme" class="main-outside"/>
    </div>

    <div class="pres-slide">
      <PresentationSlide/>
    </div>
    <div>
      <ScrollSlide/>
    </div>
    <div style="margin-bottom: 20em;">
      <MissionSlide/>
    </div>
    <div style="background-color: var(--vt-c-white)">
      <PrinciplesSlide/>
    </div>
    <div style="background-color: var(--vt-c-white); margin-bottom: 20em;">
      <ProjectSlide/>
    </div>
    <div style="background-color: var(--vt-c-white)">
      <Footer class="main-outside"/>
    </div>
  </div>
</template>

<script>
import PresentationSlide from "@/components/pages/main/presentation/PresentationSlide.vue";
import ScrollSlide from "@/components/pages/main/scrolling/ScrollSlide.vue";
import MissionSlide from "@/components/pages/main/mission/MissionSlide.vue";
import PrinciplesSlide from "@/components/pages/main/principles/PrinciplesSlide.vue";
import ProjectSlide from "@/components/pages/main/projects/ProjectSlide.vue";
import Footer from "@/components/footer/Footer.vue";
import Navigation from "@/components/navigation/Navigation.vue";

export default {
  name: "MainPage",
  data() {
    return {
      theme: "light",
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      let pres = this.$el.querySelector(".pres-slide").getBoundingClientRect();
      let offset = pres.y + pres.height;
      if (offset < 0) {
        this.theme = "dark"
      } else {
        this.theme = "light"
      }
    }
  },
  components: {Navigation, Footer, ProjectSlide, PrinciplesSlide, MissionSlide, ScrollSlide, PresentationSlide}
}
</script>

<style scoped>
#navigation {
  z-index: 100;
  position: fixed;
}


</style>