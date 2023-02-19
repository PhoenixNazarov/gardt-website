<template>
  <ul class="navigation-container">
    <NavigationButton text="О нас"/>
    <NavigationButton text="Портфолио"/>
    <NavigationButton text="Контакты"/>
  </ul>
</template>

<script>
import NavigationButton from "@/components/navigation/NavigationButton.vue";

export default {
  name: "Navigation",
  components: {NavigationButton}
}
</script>

<style scoped>
.navigation-container {
  padding: 0;
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-container li {
  margin-right: 60px;
}

</style>