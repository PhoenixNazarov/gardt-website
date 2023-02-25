<template>
  <div>
    <div class="principles-image">
      <img class="principles-image-inner" src="../../../assets/images/main-slider/1.png" alt=""
           style="width: 100%; position: absolute">
      <img src="../../../assets/images/main-slider/1.png" alt="" style="max-width: 100%; opacity: 0; visibility: hidden;">
    </div>
    <div class="principles-container">
      <div class="main-outside">
        <div class="principles-title">
          <PartName text="Наши принципы работы" theme="dark"/>
        </div>
        <div class="principles-row">
          <MainPrinciplesItem class="principles-item" title="Фокус на человека" image="user"
                              description="Формируем комфортную среду для человека, продумывая все детали: функционал, эстетику, эмоции и чувства"/>
          <MainPrinciplesItem class="principles-item" title="Рентабельность" image="growth"
                              description="Создаем дополнительную ценность архитектурного проекта и увеличиваем его доходность"/>
        </div>

        <div class="principles-row">
          <MainPrinciplesItem class="principles-item" title="Экоустойчивые материалы" image="process"
                              description="Внедряем в наши проекты экологически устойчивые материалы"/>
          <MainPrinciplesItem class="principles-item" title="Природоподобные решения" image="tree"
                              description="Применяем уникальные решения, базирующиеся на природных"/>
        </div>

        <div class="principles-row">
          <MainPrinciplesItem class="principles-item" title="Айдентика" image="light"
                              description="Придаем каждому проекту уникальность, сохраняя историческую ценность и создавая новую"/>
          <MainPrinciplesItem class="principles-item" title="Экология и окружающая среда" image="sce"
                              description="Учитываем уникальные особенности окружающей среды и преобразуем их в сильные стороны"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from "@/components/ui/PartName.vue";
import MainPrinciplesItem from "@/components/pages/mainLight/MainPrinciplesItem.vue";

export default {
  name: "MainPrinciples",
  components: {MainPrinciplesItem, PartName},
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.fixed = false;
    this.show = true;
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
      } else if (this.show && hgParent.y + hgParent.height + 100 < 0) {
        this.$el.querySelector(".principles-image-inner").style.display = "none";
        this.show = false;
      } else if (!this.show && hgParent.y + hgParent.height + 100 > 0) {
        this.$el.querySelector(".principles-image-inner").style.display = null;
        this.show = true;
      }
    }
  }
}
</script>

<style scoped>
.principles-container {
  background-color: var(--vt-c-white);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
}

.principles-row {
  display: flex;
  margin-top: 40px;
}

.principles-item {
  width: 35vw;
}

.principles-item:nth-child(2n) {
  margin-left: 3em;
}

</style>