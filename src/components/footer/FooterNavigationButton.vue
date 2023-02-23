<template>
  <div class="btn-navigation-container">
    <a class="btn-navigation">{{ text }}</a>
    <div class="btn-navigation-underline"></div>
  </div>
</template>

<script>
export default {
  name: "FooterNavigationButton",
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
  line-height: 24px;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: #02001A;
}

.btn-navigation-underline {
  transition: 500ms;
  position: relative;
  width: 0;
  height: 1px;
  bottom: 3px;
  background: #02001A;
}

</style>