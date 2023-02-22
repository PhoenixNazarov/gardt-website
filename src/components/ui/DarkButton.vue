<template>
  <button class="btn">
    <h1 class="btn-text">{{ text }}</h1>
  </button>
</template>

<script>
export default {
  name: "DarkButton",
  props: ["text"]
}
</script>

<style scoped>
.btn {
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-color: #02001A;
  border-style:solid;
  background: #02001A;
  transition: 500ms;
}

.btn:hover {
  border-width:1px;
  background: transparent;
}


.btn-text {
  color: #EFEFEF;
  transition: 500ms;
}

.btn:hover .btn-text {
  color: #02001A;
}

</style>