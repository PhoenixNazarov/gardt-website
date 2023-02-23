<template>
  <div class="btn-navigation-container">
    <a class="btn-navigation">{{ text }}
      <div class="btn-navigation-underline"></div>
    </a>
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
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;

  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #01000E;
}

.btn-navigation-underline {
  transition: 500ms;
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  background: #EFEFEF;
}

</style>