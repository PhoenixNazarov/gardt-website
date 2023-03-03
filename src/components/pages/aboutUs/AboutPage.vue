<template>
  <div>
    <AnimationBackground/>
    <div>
      <Navigation theme="light" class="navigation"/>
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

export default {
  name: 'AboutPage',
  components: { AnimationBackground, Footer, AboutPeople, PartName, AboutPresentation, Navigation }
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

</style>
