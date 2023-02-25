<template>
  <div class="slide-container">
    <div class="slide-item">

    </div>
  </div>
</template>

<script>
export default {
  name: "MainProjectItem"
}
</script>

<style scoped>
.slide-container {
  min-height: 520px;
  min-width: 370px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  background-image: linear-gradient(to bottom, transparent 70%, #000000),
  url("../../../assets/images/main-projects/1.jpg");
  border: 1px solid var(--vt-c-white);
}

.slide-item {

}

</style>