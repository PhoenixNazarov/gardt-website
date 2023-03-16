<template>
  <div>
    <AnimationBackground style="overflow-x: clip"/>
    <Navigation theme="light" class="navigation"/>

    <div v-for="item in projectsData[projectName]">
      <div>
        <AnimationName v-if="item.animation === 'AnimationName'" :data="item.data"/>
        <AnimationNameVideo v-if="item.animation === 'AnimationNameVideo'" :data="item.data"/>

        <AnimationDescription v-if="item.animation === 'AnimationDescription'" :data="item.data"/>

        <AnimationPhotoDescriptionScroll
            v-if="item.animation === 'AnimationPhotoDescriptionScroll' && !isMobile && item.data.principles.length <= 3"
            :data="item.data"/>
        <AnimationPhotoDescriptionScrollDouble
            v-if="item.animation === 'AnimationPhotoDescriptionScroll' && !isMobile && item.data.principles.length > 3"
            :data="item.data"/>

        <AnimationPhotoDescriptionMobile
            v-if="item.animation === 'AnimationPhotoDescriptionScroll' && isMobile"
            :data="item.data"/>

        <AnimationMagnifierStatic v-if="item.animation === 'AnimationMagnifierStatic'" :data="item.data"/>
        <AnimationDropPhotoScroll v-if="item.animation === 'AnimationDropPhotoScroll'" :data="item.data"/>
        <AnimationThreePhotosScroll v-if="item.animation === 'AnimationThreePhotosScroll'" :data="item.data"/>
        <AnimationThreePhotosDoubleOneScroll v-if="item.animation === 'AnimationThreePhotosDoubleOneScroll'"
                                             :data="item.data"/>
        <AnimationFourPhotosScroll v-if="item.animation === 'AnimationFourPhotosScroll'" :data="item.data"/>
        <AnimationOpacityScroll v-if="item.animation === 'AnimationOpacityScroll'" :data="item.data"/>

        <AnimationAviastarFacade v-if="item.animation === 'AnimationAviastarFacade'" :data="item.data"/>

      </div>
    </div>

    <div class="main-outside back-btn">
      <Button text="Вернуться в портфолио" theme="accent" @click.prevent="changePage('Portfolio')"/>
    </div>

    <div class="main-outside">
      <Footer theme="light"/>
    </div>
  </div>
</template>

<script>
import {projectsData} from '@/assets/images/projects/import'
import AnimationBackground from '@/components/projectAnimations/AnimationBackground.vue'
import Navigation from '@/components/navigation/Navigation.vue'
import AnimationName from '@/components/projectAnimations/AnimationName.vue'
import AnimationDescription from '@/components/projectAnimations/AnimationDescription.vue'
import Footer from '@/components/footer/Footer.vue'
import AnimationPhotoDescriptionScroll from '@/components/projectAnimations/AnimationPhotoDescriptionScroll.vue'
import AnimationMagnifierStatic from '@/components/projectAnimations/AnimationMagnifierStatic.vue'
import AnimationDropPhotoScroll from '@/components/projectAnimations/AnimationDropPhotoScroll.vue'
import AnimationThreePhotosScroll from '@/components/projectAnimations/AnimationThreePhotosScroll.vue'
import AnimationThreePhotosDoubleOneScroll
  from '@/components/projectAnimations/AnimationThreePhotosDoubleOneScroll.vue'
import AnimationFourPhotosScroll from '@/components/projectAnimations/AnimationFourPhotosScroll.vue'
import Button from '@/components/ui/Button.vue'
import AnimationOpacityScroll from '@/components/projectAnimations/AnimationOpacityScroll.vue'
import AnimationNameVideo from '@/components/projectAnimations/AnimationNameVideo.vue'
import AnimationPhotoDescriptionMobile from "@/components/projectAnimations/AnimationPhotoDescriptionMobile.vue";
import AnimationAviastarFacade from "@/components/projectAnimations/AnimationAviastarFacade.vue";
import AnimationPhotoDescriptionScrollDouble
  from "@/components/projectAnimations/AnimationPhotoDescriptionScrollDouble.vue";

export default {
  components: {
    AnimationPhotoDescriptionScrollDouble,
    AnimationAviastarFacade,
    AnimationPhotoDescriptionMobile,
    AnimationNameVideo,
    AnimationOpacityScroll,
    Button,
    AnimationFourPhotosScroll,
    AnimationThreePhotosDoubleOneScroll,
    AnimationThreePhotosScroll,
    AnimationDropPhotoScroll,
    AnimationMagnifierStatic,
    AnimationPhotoDescriptionScroll,
    AnimationDescription,
    AnimationName,
    Navigation,
    AnimationBackground,
    Footer
  },
  data() {
    return {
      projectsData,
      isMobile: window.screen.width <= 576
    }
  },
  props: ['projectName'],
  name: 'ProjectBase',
  methods: {
    changePage: function (page) {
      this.$root.onChangePage(page)
    }
  }
}
</script>

<style scoped>
.navigation {
  z-index: 100;
  position: fixed;
}

.back-btn {
  width: 25%;
  height: 5em;
  margin-bottom: 5em;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 576px) {
  .back-btn {
    width: 75%;
  }
}

</style>
