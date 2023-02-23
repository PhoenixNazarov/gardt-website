<template>
  <div class="navigation-container">
    <div style="width: 250px">
      <img class="navigation-logo" src="../../assets/logo.svg" @click.prevent="changePage('Main')" alt="gardt logo"/>
    </div>
    <div>
      <NavigationButton text="Блог" :theme="theme" class="navigation-button" @click.prevent="changePage('Main1')"/>
      <NavigationButton text="О нас" :theme="theme" class="navigation-button" @click.prevent="changePage('About')"/>
      <NavigationButton text="Портфолио" :theme="theme" class="navigation-button"/>
      <NavigationButton text="Контакты" :theme="theme" class="navigation-button" @click.prevent="toDownPage()"/>
    </div>
    <div>
      <Button text="Оставить заявку" :theme="theme" style="width: 250px; height: 50px" @click.prevent="toDownPage()"/>
    </div>
  </div>
</template>

<script>
import NavigationButton from "@/components/navigation/NavigationButton.vue";
import Button from "@/components/ui/Button.vue";

export default {
  name: "Navigation",
  props: ["theme"],
  components: {Button, NavigationButton},
  methods: {
    changePage: function (page) {
      window.scrollTo({top: 0});
      this.$root.onChangePage(page);
    },
    toDownPage: function () {
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    },
    light: function () {
      this.$el.querySelector(".navigation-logo").style.filter = 'invert(0)';
    },
    dark: function () {
      this.$el.querySelector(".navigation-logo").style.filter = 'invert(1)';
    }
  },
  mounted() {
    if (this.theme === 'light') {
      this.light();
    } else {
      this.dark();
    }
  },
  watch: {
    theme: function (newVal, oldVal) {
      if (newVal === 'light') {
        this.light();
      } else {
        this.dark();
      }
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

.navigation-logo {
  transition: 500ms;
}

</style>