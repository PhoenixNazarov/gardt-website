<template>
  <div>
    <div class="drop-photo-container">
      <div class="drop-photo-image"></div>
      <h1 class="drop-photo-text">Функциональное пространство с обеденной зоной</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnimationDropPhoto',
  mounted () {
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = this.$el.querySelector('.drop-photo-image')
    const offset = elemRect.getBoundingClientRect().top - bodyRect.top

    window.addEventListener('scroll', (e) => {
      const offset = this.$el.querySelector('.drop-photo-container').getBoundingClientRect()
      if (offset.y < 0) {
        this.$el.querySelector('.drop-photo-image').classList.add('play-photo')
        this.$el.querySelector('.drop-photo-text').classList.add('play-text')
      }
    })
  }
}
</script>

<style scoped>
.drop-photo-image {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/images/main-slider/1.jpg");
  opacity: 1;
}

.drop-photo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6em;
  line-height: 1.15em;
  color: var(--vt-c-white);
  opacity: 0;
}

.play-photo {
  animation: drop-animation 4.5s forwards;
}

.play-text {
  animation: drop-text-animation 4.5s forwards;
}

@keyframes drop-animation {
  0% {
    opacity: 1;
  }
  22% {
    transform: scale(0.6);
    opacity: 1;
  }
  66% {
    transform: scale(0.6);
    opacity: 1;
    /*filter: saturate(100%);*/
  }
  100% {
    transform: scale(0.7);
    opacity: 0.25;
    /*filter: saturate(70%);*/
  }
}

@keyframes drop-text-animation {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/*@supports (animation-timeline: scroll()) {*/
/*  !* Hide warning when native support *!*/
/*  .warning {*/
/*    display: none;*/
/*  }*/
/*}*/

</style>
