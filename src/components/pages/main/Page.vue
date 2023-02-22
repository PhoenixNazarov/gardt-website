<template>
  <div>
    <div>
      <Navigation id="navigation" class="main-outside"/>
    </div>

    <div>
      <PresentationSlide/>
    </div>
    <div>
      <ScrollSlide/>
    </div>
    <div>
      <MissionSlide/>
    </div>
    <div>
      <PrinciplesSlide/>
    </div>
    <div>
      <ProjectSlide/>
    </div>
    <div style="background-color: #EFEFEF">
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
  components: {Navigation, Footer, ProjectSlide, PrinciplesSlide, MissionSlide, ScrollSlide, PresentationSlide}
}
</script>

<style scoped>
#navigation {
  mix-blend-mode: difference;
  z-index: 100;
  position: fixed;
}



</style>