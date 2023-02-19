<template>
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
  <div>
    <Footer/>
  </div>
</template>

<script>
import PresentationSlide from "@/components/pages/main/PresentationSlide.vue";
import ScrollSlide from "@/components/pages/main/ScrollSlide.vue";
import MissionSlide from "@/components/pages/main/MissionSlide.vue";
import PrinciplesSlide from "@/components/pages/main/PrinciplesSlide.vue";
import ProjectSlide from "@/components/pages/main/ProjectSlide.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "MainPage",
  components: {Footer, ProjectSlide, PrinciplesSlide, MissionSlide, ScrollSlide, PresentationSlide}
}
</script>

<style scoped>
.slide {
}

</style>