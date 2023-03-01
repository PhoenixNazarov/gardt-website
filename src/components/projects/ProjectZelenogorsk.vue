<template>
  <div>
    <AnimationBackground/>
    <Navigation theme="light" class="navigation"/>

    <AnimationName :name="['Двухуровневая','Загородная', 'Терраса']"/>
    <AnimationDescription name="Зеленогорск"
                          description="Уютная загородная терраса, расположенная на кровле жилого дома, недалеко от Финского залива, в окружении соснового леса. Разделена на зоны нижней и верхней террасы, каждая из которой имеет свой характер и тональность."
                          square="60"
                          year="2022"
                          client="Частное лицо"/>

    <AnimationPhotoDescriptionScroll
        description1="Зоны разделены таким образом, что функционал нижней террасы плавно переходит в зону отдыха верхней."
        description2="Ассортимент растений подобран с учетом особенностей каждой зоны:
на нижней - пряные травы и декоративные цветочные композиции;
на верхней - декоративно лиственные растения, попеременно цветущие в течение весенне-осеннего сезона"
        :image="image" name1="Озеленение"
        :principles="[[pImageUser,'todo','Подобранные растения требуют минимального ухода, не аллергенны, не имеют ярких ароматов. Кашпо с туями и гортензиями создают уединенное пространство на нижней террасе, закрытое от посторонних глаз.'],
                                     [pImageProcess, 'todo', 'Подобраны кашпо из облегченного бетона, с длительным сроком эксплуатации и минимальным воздействием на окружающую среду'],
                                     [pImageScenery, 'todo', 'Зеленая кровля на верхней террасе обеспечивает регуляцию теплового режима дома, охлаждает и увлажняет окружающую местность, а также удерживает влагу.']]"/>
    <AnimationMagnifierStatic/>
    <AnimationDropPhotoScroll :image="pImageScenery" description="Функциональное пространство с обеденной зоной"/>
    <AnimationThreePhotosScroll/>
    <PartName text="Нижняя терраса" show=20 theme="light" class="main-outside"/>
    <AnimationMagnifier/>
    <AnimationDropPhotoScroll :image="pImageScenery" description="Зона отдыха среди крон деревьев"/>
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
import AnimationName from "@/components/projectAnimations/AnimationName.vue";
import AnimationDescription from "@/components/projectAnimations/AnimationDescription.vue";
import AnimationBackground from "@/components/projectAnimations/AnimationBackground.vue";

import image from "../../assets/images/main-slider/1.jpg"
import {pImageScenery, pImageUser, pImageProcess} from "../../assets/images/portfolio-principles/import.js"
import AnimationMagnifierStatic from "@/components/projectAnimations/AnimationMagnifierStatic.vue";

export default {
  name: "ProjectZelenogorsk",
  data: function () {
    return {
      image, pImageScenery, pImageUser, pImageProcess
    }
  },
  components: {
    AnimationMagnifierStatic,
    AnimationBackground,
    AnimationDescription,
    AnimationName,
    AnimationThreePhotosScroll,
    AnimationDropPhotoScroll, PartName, AnimationMagnifier, AnimationPhotoDescriptionScroll, Navigation, Footer
  }
}
</script>

<style scoped>
.navigation {
  z-index: 100;
  position: fixed;
}
</style>