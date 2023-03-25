<template>
  <div>
    <PartName class="main-outside project-title" :text="translate('Наши проекты')" theme="light" :show=15 />
    <div class="project-slider">
      <img class="project-slider-button left" src="../../../assets/images/slider-controller.svg">
      <div class="project-slider-car">
        <MainProjectItem class="project-slider-item"
                         v-for="item in [...portfolioItemData[0], ...portfolioItemData[1], ...portfolioItemData[2]]"
                         :image="item.image"
                         :name="item.name"
                         :place="item.place"
                         :principles="item.principles"
                         @click.prevent="toProject(item.nameProject)"
        />
      </div>
      <img class="project-slider-button right" src="../../../assets/images/slider-controller.svg">
    </div>
  </div>
</template>

<script>
import PartName from '@/components/ui/PartName.vue'
import MainProjectItem from '@/components/pages/main/MainProjectItem.vue'
import {portfolioItemData} from "@/assets/images/portfolio-items/import";
import {translate} from "@/assets/js/i18n";

export default {
  name: 'MainProject',
  components: { MainProjectItem, PartName },
  data () {
    return {
      portfolioItemData
    }
  },
  methods: {
    translate,
    toProject: function (proj) {
      this.$root.onChangePage(proj)
    }
  },
  mounted () {
    const $car = this.$el.querySelector('.project-slider-car')

    let x = 0
    const count = this.$el.querySelectorAll('.project-slider-item').length
    let width = $car.getBoundingClientRect().width

    let part = width / count

    if (window.innerWidth < 576) {
      part = (width + 50) / count
    }
    this.$el.querySelector('.project-slider-button.left').addEventListener('click', function () {
      x += part
      if (x > 0) {
        x = 0
      }
      $car.style.transform = 'translateX(' + x + 'px)'
    })
    this.$el.querySelector('.project-slider-button.right').addEventListener('click', function () {
      x -= part
      if (x < -width + window.innerWidth) {
        x = -width + window.innerWidth
      }
      $car.style.transform = 'translateX(' + x + 'px)'
    })
  }
}
</script>

<style scoped>
.project-title {
  margin-bottom: 40px;
}

.project-slider {
  overflow-x: clip;
  min-height: 520px;
}

.project-slider-car {
  position: absolute;
  display: flex;
  transition: 500ms;
}

.project-slider-item {
  cursor: pointer;
  margin-right: 50px;
  margin-left: 50px;
}

.project-slider-button {
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, -50%);

  filter: opacity(70%) drop-shadow(0px 0px 2px rgb(0 0 0 / 0.4));
}

.project-slider-button.left {
  left: 80px;
  transform: rotate(180deg) translate(0, +50%);
}

@media (max-width: 576px) {
  .project-slider-button.left {
    left: 10px;
    transform: scale(0.7) rotate(180deg) translate(0, +50%);
  }

  .project-slider-button.right {
    right: 10px !important;
    transform: scale(0.7) translate(0, -50%);
  }

  .project-slider-item:nth-child(1) {
    margin-left: calc((100vw - 370px) / 2);
  }

  .project-slider-item:last-child {
    margin-right: calc((100vw - 370px) / 2);
  }

}

.project-slider-button.right {
  right: 80px;
}

</style>
