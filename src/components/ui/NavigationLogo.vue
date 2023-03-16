<template>
  <div>
    <div class="navigation-logo-container" :style="background?'background-color: var(--vt-c-black);': ''">
      <img src="../../assets/logo.svg" class="navigation-logo" @click.prevent="toMainPage()"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationLogo",
  props: {
    background: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toMainPage: function () {
      this.$root.onChangePage("Main")
    },
  }
}
</script>

<style scoped>
.navigation-logo-container {
  z-index: 4;
  width: 100vw;
  height: 8em;
  position: absolute;
}

.navigation-logo {
  position: absolute;
  z-index: 5;
  transform: translateX(-50%);
  left: 50%;
  margin-top: 3em;
}

@media (min-width: 576px) {
  .navigation-logo-container {
    display: none;
  }
}

</style>