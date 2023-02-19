<template>
  <div>
    <div class="principles-image">
      <img class="principles-image-inner" src="../../../assets/images/main-slider/1а.jpg" alt=""
           style="max-width: 100%; position: absolute">
      <img src="../../../assets/images/main-slider/1а.jpg" alt="" style="max-width: 100%; opacity: 0">
    </div>
    <div class="principles-container">
      <div class="principles-title">
        <PartName text="Наши принципы работы"/>
      </div>
      <div class="principles-row">
        <PrinciplesItem class="principles-item" title="Фокус на человека" image="user"
                        description="Формируем комфортную среду для человека, продумывая все детали: функционал, эстетику, эмоции и чувства"/>
        <PrinciplesItem class="principles-item" title="Рентабельность" image="growth"
                        description="Создаем дополнительную ценность архитектурного проекта и увеличиваем его доходность"/>
      </div>

      <div class="principles-row">
        <PrinciplesItem class="principles-item" title="Экоустойчивые материалы" image="process"
                        description="Внедряем в наши проекты экологически устойчивые материалы"/>
        <PrinciplesItem class="principles-item" title="Природоподобные решения" image="tree"
                        description="Применяем уникальные решения, базирующиеся на природных"/>
      </div>

      <div class="principles-row">
        <PrinciplesItem class="principles-item" title="Айдентика" image="light"
                        description="Придаем каждому проекту уникальность, сохраняя историческую ценность и создавая новую"/>
        <PrinciplesItem class="principles-item" title="Экология и окружающая среда" image="sce"
                        description="Учитываем уникальные особенности окружающей среды и преобразуем их в сильные стороны"/>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from "@/components/pages/main/PartName.vue";
import PrinciplesItem from "@/components/pages/main/PrinciplesItem.vue";

export default {
  name: "PrinciplesSlide",
  components: {PrinciplesItem, PartName},
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.fixed = false;
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (this.$princ === undefined) {
        this.$princ = this.$el.querySelector(".principles-image");
      }
      let hgParent = this.$princ.getBoundingClientRect();
      if (!this.fixed && hgParent.y <= 0) {
        this.$el.querySelector(".principles-image-inner").style.position = "fixed";
        this.$el.querySelector(".principles-image-inner").style.top = "0px";

        this.fixed = true;
      } else if (this.fixed && hgParent.y > 0) {
        this.$el.querySelector(".principles-image-inner").style.position = "absolute";
        this.$el.querySelector(".principles-image-inner").style.top = null;
        this.fixed = false;
      }
    }
  }
}
</script>

<style scoped>
.principles-container {
  min-height: 100vh;
  background-color: #FFFFFF;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 100px;
}

.principles-row {
  display: flex;
  margin-top: 40px;
}

.principles-item {
  max-width: 35vw;
}

.principles-item:nth-child(2n) {
  margin-left: 5vw;
}

</style>