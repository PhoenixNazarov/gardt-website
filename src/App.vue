<script setup>
import Navigation from './components/navigation/Navigation.vue'
import MainPage from "@/components/pages/main/Page.vue";
</script>

<template>
  <header>

  </header>

  <main>
    <Navigation id="navigation"/>
    <div class="wrapper">
      <MainPage />
<!--      <MainPage />-->

    </div>
  </main>
</template>

<style scoped>
#navigation {
  mix-blend-mode: difference;
  z-index: 100;
  position: fixed;
}

.wrapper {
  min-height: 600vh;
}

</style>
