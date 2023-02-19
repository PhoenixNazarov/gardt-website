<template>
  <div>
    <div class="principles-image">
      <img class="principles-image-inner" src="src/assets/images/main-slider/1а.jpg" alt="" style="max-width: 100%; position: absolute">
      <img src="src/assets/images/main-slider/1а.jpg" alt="" style="max-width: 100%; opacity: 0">
    </div>
    <div class="" style="min-height: 100vh; background-color: black">
      <h1 style="color: white">Принципы</h1>
    </div>


  </div>
</template>

<script>
export default {
  name: "PrinciplesSlide",
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
      console.log(hgParent.y);
      if (!this.fixed && hgParent.y <= 0) {
        console.log("hide")
        this.$el.querySelector(".principles-image-inner").style.position = "fixed";
        this.$el.querySelector(".principles-image-inner").style.top = "0px";

        this.fixed = true;
      } else if (this.fixed && hgParent.y > 0) {
        console.log("show")
        this.$el.querySelector(".principles-image-inner").style.position = "absolute";
        this.$el.querySelector(".principles-image-inner").style.top = null;
        this.fixed = false;
      }
    }
  }
}
</script>

<style scoped>

</style>