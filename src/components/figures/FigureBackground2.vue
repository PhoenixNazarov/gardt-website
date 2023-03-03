<template>
  <div class="container">
    <img class="background-circle" src="../../assets/images/background/circle3.svg" alt="gardt circle background"/>
    <img class="background-figure" src="../../assets/images/background/figure1.svg" alt="gardt circle background"/>
  </div>
</template>

<script>
export default {
  name: "FigureBackground2"
}
</script>

<style scoped>
.container {
  position: absolute;
}
.background-circle {
  width: 30vw;
  height: 50vh;

  background: radial-gradient(50% 50% at 50% 50%, #C8FF29 0%, rgba(217, 217, 217, 0) 100%);
  transform: rotate(36.25deg);
}
.background-figure {
  position: absolute;
  height: 40vh;
  top: 10vh;
  right: -10vw;
}

</style>