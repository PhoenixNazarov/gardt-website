<template>
  <header>

  </header>

  <main>
    <div class="wrapper">
      <MainPage v-if="page === 'Main'"/>
      <AboutPage v-if="page === 'About'"/>
      <Test v-if="page === 'Ui'"/>
    </div>
  </main>
</template>

<script>
import MainPage from "@/components/pages/main/MainPage.vue";
import AboutPage from "@/components/pages/aboutUs/AboutPage.vue";
import Test from "@/components/pages/ui/UiPage.vue";

export default {
  name: 'App',
  data: function () {
    return {
      page: "Main"
    }
  },
  components: {Test, AboutPage, MainPage},
  beforeCreate() {
    this.$root.onChangePage = function (page) {
      this.page = page;
    }
  }
}
</script>

<style scoped>
.wrapper {
  /*min-height: 600vh;*/
}

</style>
