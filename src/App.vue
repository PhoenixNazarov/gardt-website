<template>
  <header>

  </header>

  <main>
    <div class="wrapper">
      <MainPage v-if="page === 'Main'"/>
      <Page v-if="page === 'Main1'"/>
    </div>
  </main>
</template>

<script>
import MainPage from "@/components/pages/main/Page.vue";
import Page from "@/components/pages/foot/Page.vue";

export default {
  name: 'App',
  data: function () {
    return {
      page: "Main"
    }
  },
  components: {Page, MainPage},
  beforeCreate() {
    this.$root.onChangePage = function (page) {
      this.page = page;
    }
  }
}
</script>

<style scoped>
.wrapper {
  min-height: 600vh;
}

</style>
