<template>
  <div class="main-gradient">
    <div class="diamond-gradient">

    </div>
    <div>
      <Navigation theme="light" class="navigation main-outside"/>
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
import Navigation from "@/components/navigation/Navigation.vue";
import AboutPresentation from "@/components/pages/aboutUs/AboutPresentation.vue";
import PartName from "@/components/ui/PartName.vue";
import AboutPeople from "@/components/pages/aboutUs/AboutPeople.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "AboutPage",
  components: {Footer, AboutPeople, PartName, AboutPresentation, Navigation}
}
</script>

<style scoped>

@keyframes gradient-animate {
  to {
    background-position: top left;
  }
}

.main-gradient {
  /*background: rebeccapurple;*/
  background: radial-gradient(87.55% 171.44% at 19.97% 22.27%, #02001A 36.2%, #FFFFFF 100%) top right/200% 200%;
  animation: gradient-animate 7s infinite alternate;
}

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
  width: 798px;
  height: 1121px;
  left: -400px;
  top: 408px;

  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #C8FF29 0%, transparent 100%);
  /*backdrop-filter: blur(3px);*/

  transform: rotate(28.77deg);
  animation: gradient-animate2 2s infinite alternate;
}

</style>