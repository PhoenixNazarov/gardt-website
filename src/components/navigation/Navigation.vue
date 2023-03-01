<template>
  <div style="backdrop-filter: blur(40px);">
    <div class="navigation-container main-outside">
      <div class="navigation-logo-container">
        <img class="navigation-logo" :class="theme" src="../../assets/logo.svg" @click.prevent="changePage('Main')"
             alt="gardt logo"/>
      </div>
      <div>
        <NavigationButton text="Блог"
                          :theme="theme"
                          class="navigation-button"
                          @click.prevent="changePage('Ui')"/>
        <NavigationButton text="О нас"
                          :theme="theme"
                          :active="getPage() === 'About'"
                          class="navigation-button"
                          @click.prevent="changePage('About')"/>
        <NavigationButton text="Портфолио"
                          :theme="theme"
                          :active="getPage() === 'Portfolio'"
                          class="navigation-button"
                          @click.prevent="changePage('Portfolio')"/>
        <NavigationButton text="Контакты"
                          :theme="theme"
                          class="navigation-button"
                          @click.prevent="toDownPage()"/>
      </div>
      <div class="navigation-button-inner">
        <Button text="Оставить заявку" :theme="theme" @click.prevent="toDownPage()"/>
      </div>
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
      this.$root.onChangePage(page);
    },
    getPage: function () {
      console.log(this.$root.getPage())
      return this.$root.getPage();
    },
    toDownPage: function () {
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }
  }
}
</script>

<style scoped>
.navigation-logo {
  cursor: pointer;
}

.navigation-logo-container {
  transition: 500ms;
}

.navigation-logo-container:hover {
  transform: scale(1.1);
  transform-origin: center center;
}


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

.navigation-logo.dark {
  filter: invert(1);
}

</style>