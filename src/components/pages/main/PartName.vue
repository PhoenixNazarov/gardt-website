<template>
  <div class="part-name">
    <nav class="part-second-name"><span style="color: #B9EF1E; padding-right: 20px" class="part-first-name">—</span>{{ text }}</nav>
  </div>
</template>

<script>
export default {
  name: "PartName",
  props: ["text"]
}
</script>

<style scoped>
.part-name {
  display: flex;
}

.part-first-name, .part-second-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
}
</style>