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
                text="Основатели"
                :show=15
                theme="light"/>
      <AboutPeople class="bottom-outside"
                   name="Светлана ГАРДТ"
                   job="Основатель, генеральный директор"
                   image="Svetlana"
                   description="“Мы создаем пространства, в которых вы хотите жить. Создавая проект,
              мы ставим во главу угла человека и его потребности. Заботясь о здоровье наших клиентов
              и окружающей среде, мы предлагаем уникальные решения, основанные на естественных подходах.”"/>
      <AboutPeople class="bottom-outside"
                   name="Сергей ВАСИНГИН"
                   job="Соучредитель"
                   image="Sergey"
                   description="“Наши ландшафты создают выгодное преимущество для вашей собственности.
              Для наших клиентов мы предлагаем уникальные проекты с учетом экономической эффективности, помогаем инвестировать в ландшафтные
              проекты, которые принесут прибыль в будущем. Предоставляя полный цикл проекта “под ключ”, мы уважаем время наших клиентов”"/>
    </div>
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

export default {
  name: 'AboutPage',
  components: {NavigationLogo, AnimationBackground, Footer, AboutPeople, PartName, AboutPresentation, Navigation }
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

</style>
