<template>
  <div style="overflow-x: clip">
    <div class="mission-slide">
      <div class="mission-text main-outside">
        <PartName class="mission-title" :text="translate('Наша миссия')" theme="light" :show=15 />
        <h1 class="mission-description" style="white-space: pre">
          {{ desc }}
        </h1>
      </div>
      <FigureBackground1 class="mission-image" style="right: -10vw; height: 40vh; top:-10vh; width: 30vw; z-index: 0"/>
    </div>
  </div>
</template>

<script>
import PartName from '@/components/ui/PartName.vue'
import FigureBackground1 from "@/components/figures/FigureBackground1.vue";
import {translate} from "../../../assets/js/i18n";

export default {
  name: 'MainMission',
  components: {FigureBackground1, PartName},
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  data: function () {
    return {
      desc: translate('“Мы проектируем точечные\n' +
          'ландшафтные решения для\n' +
          'людей, которые влияют на\n' +
          'социальные, экономические и\n' +
          'экологические аспекты города”')
    }
  },
  methods: {
    translate,
    handleScroll(event) {
      if (this.$mission === undefined) {
        this.$mission = this.$el.querySelector('.mission-description')
      }
      const hgParent = this.$mission.getBoundingClientRect()
      if (hgParent.y - window.innerHeight <= -200) {
        // this.$el.querySelector('.mission-image').classList.add('mission-image-animate')
        this.$el.querySelector('.mission-description').classList.add('mission-description-animate')

        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style scoped>
.mission-slide {
  overflow-x: clip;
  background-color: var(--vt-c-black);
}

.mission-text {
  z-index: 1;
}

@keyframes description-animate {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes description-animate {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes image-animate {
  from {
    right: -400px;
    transform: scale(0.5) rotate(-25deg);
  }
  to {
    right: -150px;
    transform: scale(1) rotate(0deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .mission-description-animate {
    animation: description-animate 1s forwards;
  }

  .mission-image-animate {
    animation: image-animate 1s forwards;
  }
}

.mission-title {
  margin-bottom: 70px;
}

.mission-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 3em;
  line-height: 59px;
  color: var(--vt-c-white);
  opacity: 0;
}

.mission-image {
}

@media (max-width: 576px) {
  .mission-description {
    font-size: 1.7em;
    line-height: 1.2em;
  }
}

</style>
