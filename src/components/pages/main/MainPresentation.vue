<template>
  <MainPresentationSlider/>
  <MainPresentationWriter/>
  <h1 class="pres-text">{{ translate('Мы проецируем природу на городскую среду') }}</h1>

</template>

<script>
import MainPresentationSlider from '@/components/pages/main/MainPresentationSlider.vue'
import MainPresentationWriter from '@/components/pages/main/MainPresentationWriter.vue'
import {translate} from "@/assets/js/i18n";

export default {
  name: 'MainPresentation',
  methods: {
    translate
  },
  components: {MainPresentationWriter, MainPresentationSlider}
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

  opacity: 0;

  color: var(--vt-c-white);
  animation: pres-text 1s ease forwards;
}

@media (max-width: 576px) {
  .pres-text {
    bottom: 35%;
  }
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
