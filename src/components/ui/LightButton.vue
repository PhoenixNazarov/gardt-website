<template>
  <button class="btn">
    <h1 class="btn-text">{{ text }}</h1>
  </button>
</template>

<script>
export default {
  name: "LightButton",
  props: ["text"]
}
</script>

<style scoped>
.btn {
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-color:#EFEFEF;
  border-style:solid;
  background: #EFEFEF;
  transition: 500ms;
}

.btn:hover {
  border-width:1px;
  background: transparent;
}


.btn-text {
  color: #06004E;
  transition: 500ms;
}

.btn:hover .btn-text {
  color: #EFEFEF;
}

</style>