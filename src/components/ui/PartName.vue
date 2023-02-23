<template>
  <div class="part-name">
    <nav class="part-second-name"><span style="color: var(--vt-c-green); padding-right: 20px" class="part-first-name">—</span>{{ text }}</nav>
  </div>
</template>

<script>
export default {
  name: "PartName",
  props: ["text", "theme"],
  mounted() {
    if (this.theme === "light") {
      this.$el.querySelector('.part-second-name').classList.add("part-light");
    } else {
      this.$el.querySelector('.part-second-name').classList.add("part-dark");
    }
  }
}
</script>

<style scoped>
.part-name {
  display: flex;
}

.part-second-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 4em;
  line-height: 1.3em;
}

.part-light {
  color: var(--vt-c-white)
}

.part-dark {
  color: var(--vt-c-black)
}

.part-first-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
}


</style>