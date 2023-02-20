<template>
  <div>
    <div>
      <Navigation id="navigation" class="main-outside"/>
    </div>
    <div style="background-color: #EFEFEF">
      <Footer class="main-outside"/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "Page",
  components: {Navigation, Footer}
}
</script>

<style scoped>

</style>