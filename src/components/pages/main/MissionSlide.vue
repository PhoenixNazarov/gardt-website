<template>
  <div>
    <div class="mission-slide">
      <div class="mission-text ">
        <div class="mission-title">
          <nav style="color: #B9EF1E;">—</nav>
          <nav>Наша миссия</nav>
        </div>
        <h1 class="mission-description">“Мы проектируем точечные<br>
          ландшафтные решения для<br>
          людей, которые влияют на<br>
          социальные, экономические и<br>
          экологические аспекты города”
        </h1>
      </div>

      <img class="mission-image" src="src/assets/images/main-mission/Vector%2051.svg" alt="over mission">
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionSlide",
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
      if (hgParent.y - window.innerHeight <= 0) {
        this.$el.querySelector(".mission-title").classList.add("mission-title-animate");
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
  height: 100vh;
  background-color: #FFFFFF;
}

.mission-text {
  margin-left: 100px;
}

.mission-title {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  /* identical to box height */
  color: #02001A;
  display: flex;
  opacity: 0;

  transform: matrix(1, 0, 0, 1, -10, 0);
}

@keyframes title-animate {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
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
    transform: rotate(20deg);
  }
  to {  right: -150px;
    transform: rotate(0deg);
  }
}


@media (prefers-reduced-motion: no-preference) {
  .mission-title-animate {
    animation: title-animate 1s forwards;
  }
  .mission-description-animate {
    animation: description-animate 1s forwards;
  }
  .mission-image-animate {
    animation: image-animate 1s forwards;
  }
}


.mission-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 59px;
  color: #02001A;
  opacity: 0;
}

.mission-image {
  position: absolute;
  top: -50px;
  right: -400px;
  transform: rotate(20deg);
}

</style>