<template>
  <div>
    <div class="main-slider-container">
      <div class="main-slider-image"></div>
      <div class="main-slider-image"></div>
      <div class="main-slider-image"></div>
      <div class="main-slider-image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  methods: {
    nextImage: function () {
      if (this.$images === undefined) {
        this.$images = this.$el.querySelectorAll(".main-slider-image");
        this.index = this.$images.length - 1;
        this.$images.forEach((el) => {
          el.style.opacity = 0;
          el.style.position = "absolute";
          el.style.zIndex = null;
        });
      }

      let nextIndex = this.index + 1;
      let beforeIndex = this.index - 1;
      if (this.index + 1 >= this.$images.length) {
        nextIndex = 0;
      }
      if (beforeIndex < 0) {
        beforeIndex = this.$images.length - 1;
      }

      this.$images[beforeIndex].style.zIndex = null;
      this.$images[nextIndex].style.zIndex = null;
      this.$images[this.index].style.zIndex = 2;


      this.$images[nextIndex].style.transition = "0s";
      this.$images[nextIndex].style.opacity = 1;

      this.$images[this.index].style.transition = "1s";
      this.$images[this.index].style.opacity = 0;
      this.index = nextIndex;
    }
  },

  mounted() {
    this.nextImage();
    this.interval = window.setInterval(this.nextImage, 2000);
  },
  unmounted() {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }
}
</script>

<style scoped>
.main-slider-container {
  min-height: 100vh;
}

.main-slider-image {
  background: black;
  mix-blend-mode: normal;
}

.main-slider-image:nth-child(1) {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 24.81%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url("../../../assets/images/main-slider/1.jpg");
}

.main-slider-image:nth-child(2) {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 24.81%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url("../../../assets/images/main-slider/2.jpg");
}

.main-slider-image:nth-child(3) {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 24.81%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url("../../../assets/images/main-slider/3.jpg");
}

.main-slider-image:nth-child(4) {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 24.81%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url("../../../assets/images/main-slider/4.jpg");
}

.main-slider-image {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100%;
}

</style>