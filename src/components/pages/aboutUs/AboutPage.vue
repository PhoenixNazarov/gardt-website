<template>
  <div style="overflow: hidden">
    <AnimationBackground/>
    <div class="diamond-gradient">
    </div>

    <div class="diamond-gradient2">
    </div>

    <div class="diamond-gradient3">
    </div>
    <div>
      <Navigation theme="light" class="navigation"/>
      <NavigationLogo/>

    </div>
    <div>
      <AboutPresentation class="main-outside bottom-outside"/>
    </div>
    <div class="main-outside">
      <PartName class="bottom-outside-low"
                :text="translate('Основатели')"
                :show=15
                theme="light"/>
      <AboutPeople class="bottom-outside"
                   :name="translate('Светлана ГАРДТ')"
                   :job="translate('Основатель, генеральный директор')"
                   image="Svetlana"
                   :description="translate('“Мы создаем пространства, в которых вы хотите жить. Создавая проект, ' +
                    'мы ставим во главу угла человека и его потребности. Заботясь о здоровье наших клиентов ' +
                    'и окружающей среде, мы предлагаем уникальные решения, основанные на естественных подходах.”')"/>
      <AboutPeople class="bottom-outside"
                   :name="translate('Сергей ВАСИНГИН')"
                   :job="translate('Соучредитель')"
                   image="Sergey"
                   :description="translate('“Наши ландшафты создают выгодное преимущество для вашей собственности. ' +
              'Для наших клиентов мы предлагаем уникальные проекты с учетом экономической эффективности, помогаем инвестировать в ландшафтные' +
              'проекты, которые принесут прибыль в будущем. Предоставляя полный цикл проекта “под ключ”, мы уважаем время наших клиентов”')"/>
    </div>

    <PartName :text="translate('Наша философия')" class="main-outside"/>
    <h1 class="over-text main-outside">
      {{ translate('Наш подход меняет отношение человека\n'+
        'к природе, создавая особую связь') }}
    </h1>

    <PartName :text="translate('Наша стратегия')" class="main-outside"/>
    <h1 class="over-text main-outside">
      {{ translate('1. Масштабировать наш подход\n' +
        '2. Адаптировать решения под современные веения\n' +
        '3. Внедрять актуальные технологии') }}
    </h1>

    <div class="main-outside">
      <Footer theme="light"/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation.vue'
import AboutPresentation from '@/components/pages/aboutUs/AboutPresentation.vue'
import PartName from '@/components/ui/PartName.vue'
import AboutPeople from '@/components/pages/aboutUs/AboutPeople.vue'
import Footer from '@/components/footer/Footer.vue'
import AnimationBackground from '@/components/projectAnimations/AnimationBackground.vue'
import NavigationLogo from "@/components/ui/NavigationLogo.vue";
import {translate} from "@/assets/js/i18n";

export default {
  name: 'AboutPage',
  methods: {translate},
  components: {NavigationLogo, AnimationBackground, Footer, AboutPeople, PartName, AboutPresentation, Navigation}
}
</script>

<style scoped>
.bottom-outside {
  margin-bottom: 15em;
}

.bottom-outside-low {
  margin-bottom: 7em;
}

.navigation {
  z-index: 100;
  position: fixed;
}

@keyframes gradient-animate2 {
  to {
    /*filter: blur(5px);*/
    transform: scale(1.1, 1.1);
  }
}

.diamond-gradient {
  width: 700px;
  height: 1100px;
  left: -400px;
  top: 408px;

  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #C8FF29 0%, transparent 100%);
  /*backdrop-filter: blur(3px);*/

  transform: rotate(28.77deg);
  z-index: 0;
  animation: gradient-animate2 2s infinite alternate;
}

.diamond-gradient2 {
  width: 600px;
  height: 1000px;
  right: -400px;
  top: 100vh;

  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #C8FF29 0%, transparent 100%);
  /*backdrop-filter: blur(3px);*/

  transform: rotate(-28.77deg);
  z-index: 0;
  animation: gradient-animate2 3s infinite alternate;
}

.diamond-gradient3 {
  width: 600px;
  height: 1000px;
  right: 50vw;
  bottom: -700px;

  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #C8FF29 0%, transparent 100%);
  /*backdrop-filter: blur(3px);*/

  transform: rotate(60.77deg);
  z-index: 0;
}

.over-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2em;
  line-height: 1em;

  color: var(--vt-c-white);
  margin-bottom: 3em;
  padding-top: 1em;
  padding-left: 3em;
  white-space: break-spaces;
}

</style>
