<template>
  <div>
    <div class="main-slider-container">
      <div class="main-slider-image" src=""></div>
      <div class="main-slider-image" src="../../../../assets/images/main-slider/2а.jpg"></div>
      <div class="main-slider-image" src="../../../../assets/images/main-slider/3.jpg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  mounted() {
    let images = [...this.$el.querySelectorAll(".main-slider-image")];
    let index = images.length - 1;

    images.slice(0, index).forEach((el) => {
      el.style.opacity = 0;
      el.style.position = "absolute"
    });

    window.setInterval(() => {
      let nextIndex = index + 1;
      if (index + 1 >= images.length) {
        nextIndex = 0;
      }
      images[nextIndex].style.transition = "0s";
      images[nextIndex].style.opacity = 1;

      images[index].style.transition = "1s";
      images[index].style.opacity = 0;


      let _nextIndex = nextIndex;
      let _index = index

      window.setTimeout(() => {
        images[_nextIndex].style.zIndex = 2;
        images[_index].style.zIndex = null;
      }, 1000);

      index = nextIndex;
    }, 3000);
  }
}
</script>

<style scoped>
.main-slider-container {
min-height: 100vh;
}

.main-slider-image:nth-child(1) {
  background-image:  url("../../../../assets/images/main-slider/1а.jpg");
}

.main-slider-image:nth-child(2) {
  background-image:  url("../../../../assets/images/main-slider/2а.jpg");
}

.main-slider-image:nth-child(3) {
  background-image:  url("../../../../assets/images/main-slider/3.jpg");
}

.main-slider-image {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100%;
}

</style>