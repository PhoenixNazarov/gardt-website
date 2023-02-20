<template>
  <div class="btn-navigation-container">
    <a class="btn-navigation">{{ text }}</a>
    <div class="btn-navigation-underline"></div>
  </div>
</template>

<script>
export default {
  name: "NavigationButton",
  props: ['text']
}
</script>

<style scoped>
.btn-navigation-container {
  display: inline-block;
}

.btn-navigation-container:hover .btn-navigation-underline {
  width: 100%;
}

.btn-navigation {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #EFEFEF;

  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.btn-navigation-underline {
  transition: 500ms;
  position: relative;
  width: 0;
  height: 1px;
  bottom: 3px;
  background: #EFEFEF;
}

</style>