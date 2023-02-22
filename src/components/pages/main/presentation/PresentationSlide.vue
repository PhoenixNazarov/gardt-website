<template>
  <Slider/>
  <Writer/>
  <h1 class="pres-text">Мы проецируем природу на городскую среду</h1>

</template>

<script>
import Slider from "@/components/pages/main/presentation/Slider.vue";
import Writer from "@/components/pages/main/presentation/Writer.vue";

export default {
  name: "PresentationSlide",
  components: {Writer, Slider}
}
</script>

<style scoped>
.pres-text {
  position: absolute;

  bottom: 10%;
  width: 100%;
  text-align: center;
  z-index: 3;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 150;
  font-size: 36px;
  line-height: 36px;

  font-variant: small-caps;

  opacity: 0;

  color: #FFFFFF;
  animation: pres-text 1s ease forwards;
}

@keyframes pres-text {
  from { opacity: 0; }
  to { opacity: 1; }
}

</style>