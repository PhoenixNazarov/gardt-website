<template>
  <MainPresentationSlider/>
  <MainPresentationWriter/>
  <h1 class="pres-text">Мы проецируем природу на городскую среду</h1>

</template>

<script>
import MainPresentationSlider from '@/components/pages/main/MainPresentationSlider.vue'
import MainPresentationWriter from '@/components/pages/main/MainPresentationWriter.vue'

export default {
  name: 'MainPresentation',
  components: { MainPresentationWriter, MainPresentationSlider }
}
</script>

<style scoped>
.pres-text {
  position: absolute;

  bottom: 10%;
  width: 100%;
  text-align: center;
  z-index: 3;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2em;
  line-height: 36px;

  font-variant: small-caps;

  opacity: 0;

  color: var(--vt-c-white);
  animation: pres-text 1s ease forwards;
}

@keyframes pres-text {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
