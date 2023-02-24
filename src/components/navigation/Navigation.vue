<template>
  <div class="navigation-container">
    <div class="navigation-logo-container">
      <img class="navigation-logo" src="../../assets/logo.svg" @click.prevent="changePage('Main')" alt="gardt logo"/>
    </div>
    <div>
      <NavigationButton text="Блог" :theme="theme" class="navigation-button" @click.prevent="changePage('Test')"/>
      <NavigationButton text="О нас" :theme="theme" class="navigation-button" @click.prevent="changePage('About')"/>
      <NavigationButton text="Портфолио" :theme="theme" class="navigation-button"/>
      <NavigationButton text="Контакты" :theme="theme" class="navigation-button" @click.prevent="toDownPage()"/>
    </div>
    <div class="navigation-button-inner">
      <Button text="Оставить заявку" :theme="theme" @click.prevent="toDownPage()"/>
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



@media (max-width: 1450px) {
  .navigation-logo-container {
    /*width: 250px;*/
  }
}

@media (min-width: 1450px) {
  .navigation-logo-container {
    width: 250px;
  }
}


.navigation-container {
  padding: 0;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


@media (min-width: 1000px) {
  .navigation-button:not(:last-child) {
    margin-right: 60px;
  }
  .navigation-button-inner {
    width: 250px;
    height: 50px;
  }
}


@media (max-width: 1000px) {
  .navigation-button:not(:last-child) {
    margin-right: 15px;
  }
  .navigation-button-inner {
    width: 150px;
    height: 50px;
  }
}

.navigation-logo {
  transition: 500ms;
}

</style>