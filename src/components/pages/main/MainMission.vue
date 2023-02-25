<template>
  <div>
    <div class="mission-slide">
      <div class="mission-text main-outside">
        <PartName class="mission-title" text="Наша миссия" theme="light" :show=15 />
        <h1 class="mission-description">
          “Мы проектируем точечные<br>
          ландшафтные решения для<br>
          людей, которые влияют на<br>
          социальные, экономические и<br>
          экологические аспекты города”
        </h1>
      </div>
      <img class="mission-image" width="570" src="../../../assets/images/main-mission/Vector51.png" alt="over mission">
    </div>
  </div>
</template>

<script>
import PartName from "@/components/ui/PartName.vue";

export default {
  name: "MainMission",
  components: {PartName},
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (this.$mission === undefined) {
        this.$mission = this.$el.querySelector(".mission-description");
      }
      let hgParent = this.$mission.getBoundingClientRect();
      if (hgParent.y - window.innerHeight <= -200) {
        this.$el.querySelector(".mission-image").classList.add("mission-image-animate");
        this.$el.querySelector(".mission-description").classList.add("mission-description-animate");

        window.removeEventListener('scroll', this.handleScroll);
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
  position: absolute;
  top: -30px;
  right: -400px;
  transform: scale(0.5) rotate(-25deg);
}

</style>