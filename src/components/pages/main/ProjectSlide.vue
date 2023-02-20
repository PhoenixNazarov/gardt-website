<template>
  <div style="background-color: #EFEFEF; height: 100vh">
    <PartName class="project-title" text="Наши проекты" style="margin-left: 100px"/>
    <div class="project-slider">
      <img class="project-slider-button left" src="../../../assets/images/slider-controller.svg">
      <div class="project-slider-car">
        <ProjectSlideItem class="project-slider-item"/>
        <ProjectSlideItem class="project-slider-item"/>
        <ProjectSlideItem class="project-slider-item"/>
        <ProjectSlideItem class="project-slider-item"/>
        <ProjectSlideItem class="project-slider-item"/>
        <ProjectSlideItem class="project-slider-item"/>
        <ProjectSlideItem class="project-slider-item"/>
      </div>
      <img class="project-slider-button right" src="../../../assets/images/slider-controller.svg">
    </div>
  </div>
</template>

<script>
import PartName from "@/components/pages/main/PartName.vue";
import ProjectSlideItem from "@/components/pages/main/ProjectSlideItem.vue";

export default {
  name: "ProjectSlide",
  components: {ProjectSlideItem, PartName},
  mounted() {
    let $car = this.$el.querySelector(".project-slider-car");

    let x = 0;
    let count = this.$el.querySelectorAll(".project-slider-item").length;
    let width = $car.getBoundingClientRect().width;
    let part = width / (count * 1.2);
    this.$el.querySelector(".project-slider-button.left").addEventListener("click", function () {
      x += part;
      if (x > 0) {
        x = 0;
      }
      $car.style.transform = "translateX(" + x + "px)";
    })
    this.$el.querySelector(".project-slider-button.right").addEventListener("click", function () {
      x -= part;
      if (x < -width + window.innerWidth) {
        x = -width + window.innerWidth;
      }
      $car.style.transform = "translateX(" + x + "px)";
    })
  }
}
</script>

<style scoped>
.project-title {
  margin-bottom: 40px;
}

.project-slider {
  min-height: 50vh;
}

.project-slider-car {
  position: absolute;
  display: flex;
  transition: 500ms;
}

.project-slider-item {
  margin-right: 50px;
  margin-left: 50px;
}

.project-slider-button {
  position: absolute;
  z-index: 1;
  top: 50%;

  filter: opacity(50%) drop-shadow(0px 0px 2px rgb(0 0 0 / 0.4));
}

.project-slider-button.left {
  left: 0;
  transform: rotate(180deg);
}

.project-slider-button.right {
  right: 0;
}


</style>