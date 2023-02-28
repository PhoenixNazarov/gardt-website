<template>
  <div class="main-gradient">
    <div class="diamond-gradient">
    </div>
    <div>
      <Navigation theme="light" class="navigation"/>
    </div>
    <div class="page">
      <h1 class="name-text show-animate">ДВУХУРОВНЕВАЯ<br>ЗАГОРОДНАЯ<br>ТЕРРАСА</h1>
    </div>

    <div class="page main-outside">
      <h1 class="main-text">Зеленогорск</h1>
      <h1 class="main-description">Уютная загородная терраса, расположенная на кровле жилого дома, недалеко от Финского залива, в окружении соснового леса. Разделена на зоны нижней и верхней террасы, каждая из которой имеет свой характер и тональность.</h1>
    </div>

    <AnimationPhotoDescriptionScroll/>
    <PartName text="Нижняя терраса" show="20" theme="light" class="main-outside"/>
    <AnimationMagnifier/>
    <AnimationDropPhotoScroll/>
    <AnimationThreePhotosScroll/>
    <PartName text="Нижняя терраса" show="20" theme="light" class="main-outside"/>
    <AnimationMagnifier/>
    <AnimationDropPhotoScroll/>
    <AnimationThreePhotosScroll/>

    <div class="main-outside">
      <Footer theme="light"/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import AnimationPhotoDescriptionScroll from "@/components/projectAnimations/AnimationPhotoDescriptionScroll.vue";
import AnimationMagnifier from "@/components/projectAnimations/AnimationMagnifier.vue";
import PartName from "@/components/ui/PartName.vue";
import AnimationDropPhotoScroll from "@/components/projectAnimations/AnimationDropPhotoScroll.vue";
import AnimationThreePhotosScroll from "@/components/projectAnimations/AnimationThreePhotosScroll.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "ProjectZelenogorsk",
  components: {
    AnimationThreePhotosScroll,
    AnimationDropPhotoScroll, PartName, AnimationMagnifier, AnimationPhotoDescriptionScroll, Navigation, Footer}
}
</script>

<style scoped>
@keyframes from-down-name-animate {
  from {
    opacity: 0;
    transform: translate(-50%, 10%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes gradient-animate {
  to {
    background-position: top left;
  }
}

.show-animate {
  animation: from-down-name-animate ease-in-out 1s forwards;
}

.main-gradient {
  /*background: rebeccapurple;*/
  background: radial-gradient(87.55% 171.44% at 19.97% 22.27%, #02001A 36.2%, #FFFFFF 100%) top right/200% 200%;
  animation: gradient-animate 7s infinite alternate;
}

.navigation {
  z-index: 100;
  position: fixed;
}

.page {
  height: 100vh;
}

.name-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8em;
  line-height: 1.5em;

  text-align: center;
  text-transform: uppercase;

  background: linear-gradient(100.14deg, var(--vt-c-white) 0.54%, rgba(239, 239, 239, 0) 114.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0 4px 46px rgba(239, 239, 239, 0.15);
}

.main-text {
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8em;
  line-height: 1.25em;

  text-align: left;

  background: linear-gradient(180deg, #E9FFA9 0%, #C8FF29 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

}

.main-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2.5em;
  line-height: 1.5em;
  color: var(--vt-c-white);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}




</style>