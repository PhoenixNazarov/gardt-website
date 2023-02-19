<template>
  <div>
    <div class="main-slider-container">
      <img class="main-slider-image" src="../../../assets/images/main-slider/1а.jpg" alt="" width=""
           style="max-width: 100%"/>
      <img class="main-slider-image" src="../../../assets/images/main-slider/2а.jpg" alt="" width=""
           style="max-width: 100%"/>
      <img class="main-slider-image" src="../../../assets/images/main-slider/3.jpg" alt="" width=""
           style="max-width: 100%"/>
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
  line-height: 0;
}

.main-slider-image {

}

</style>