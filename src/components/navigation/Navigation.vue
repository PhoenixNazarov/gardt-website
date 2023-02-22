<template>
  <div class="navigation-container">
    <div>
      <img src="../../assets/logo.svg" @click.prevent="changePage('Main')"/>
    </div>
    <div>
      <NavigationButton text="Блог" class="navigation-button" @click.prevent="changePage('Main1')"/>
      <NavigationButton text="О нас" class="navigation-button"/>
      <NavigationButton text="Портфолио" class="navigation-button"/>
      <NavigationButton text="Контакты" class="navigation-button"/>
    </div>
    <div>
      <LightButton text="Оставить заявку" style="width: 250px; height: 50px" @click.prevent="toDownPage()"/>
    </div>
  </div>
</template>

<script>
import NavigationButton from "@/components/navigation/NavigationButton.vue";
import LightButton from "@/components/ui/LightButton.vue";

export default {
  name: "Navigation",
  components: {LightButton, NavigationButton},
  methods: {
    changePage: function (page) {
      this.$root.onChangePage(page);
    },
    toDownPage: function () {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.navigation-container {
  padding: 0;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation-button:not(:last-child) {
  margin-right: 60px;
}

</style>