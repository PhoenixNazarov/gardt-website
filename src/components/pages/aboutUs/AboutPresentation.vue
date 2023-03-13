<template>
  <div class="presentation-container show-animate">
    <h1 class="presentation-row">GARDT</h1>
    <h1 class="presentation-row">Landscape</h1>
    <h1 class="presentation-row">Architects</h1>
    <h1 class="presentation-text">Международное бюро городского планирования и ландшафтного дизайна</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutPresentation'
}
</script>

<style scoped>
.presentation-container {
  padding-top: 10em;
}

.presentation-row {
  padding-left: 5%;
  font-family: 'NeueMatana', sans-serif;
  font-size: 10vw;
  line-height: 1.2em;
  background-image: linear-gradient(180deg, #EAFFAC 0%, #C8FF29 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.presentation-text {
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2em;
  line-height: 1.2em;
  text-align: center;
  color: var(--vt-c-white)
}

.show-animate {
  animation: from-down-animate ease-in-out 1s forwards;
}

</style>
