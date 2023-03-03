<template>
  <div class="container">
    <div class="background-circle"></div>
    <img class="background-figure" src="../../assets/images/background/circle1.svg" alt="gardt circle background"/>
  </div>
</template>

<script>
export default {
  name: "FigureBackground1"
}
</script>

<style scoped>
.container {
  position: absolute;
}

.background-circle {
  width: 45vw;
  height: 70vh;

  background: radial-gradient(50% 50% at 50% 50%, #C8FF29 0%, rgba(217, 217, 217, 0) 100%);
  transform: rotate(36.25deg);
}

.background-figure {
  position: absolute;
  height: 55vh;
  width: 40vw;
  top: 10vh;
  left: -5vw;
}

</style>