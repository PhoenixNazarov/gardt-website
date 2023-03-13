<template>
  <div>
    <div style="backdrop-filter: blur(40px);" class="pc">
      <div class="navigation-container main-outside">
        <div class="navigation-logo-container">
          <img class="navigation-logo" :class="theme" src="../../assets/logo.svg" @click.prevent="changePage('Main')"
               alt="gardt logo"/>
        </div>
        <div>
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
          <NavigationButton text="Блог"
                            :theme="theme"
                            class="navigation-button"/>
          <!--                          @click.prevent="changePage('Ui')"-->
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

    <div class="mobile">
      <div class="mob-curtain" @click.prevent="close()">
      </div>
      <div class="mobile-button" @click.prevent="open()">
        <div class="hr"></div>
        <div class="hr"></div>
        <div class="hr"></div>
      </div>
      <div class="curtain">
        <h1 class="mob-btn-nav" @click.prevent="changePage('Main')">главная</h1>
        <h1 class="mob-btn-nav">БЛОГ</h1>
        <h1 class="mob-btn-nav" @click.prevent="changePage('About')">О НАС</h1>
        <h1 class="mob-btn-nav" @click.prevent="toDownPage()">КОНТАКТЫ</h1>
        <h1 class="mob-btn-nav" @click.prevent="changePage('Portfolio')">ПОРТФОЛИО</h1>
        <h1 class="mob-btn-nav" @click.prevent="toDownPage()">ОСТАВИТЬ ЗАЯВКУ</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButton from '@/components/navigation/NavigationButton.vue'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Navigation',
  props: ['theme'],
  components: {Button, NavigationButton},
  methods: {
    changePage: function (page) {
      this.close();
      this.$root.onChangePage(page)
    },
    getPage: function () {
      return this.$root.getPage()
    },
    toDownPage: function () {
      this.close();
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
    },

    open: function () {
      console.log("open");
      this.$el.querySelector(".mob-curtain").classList.add("open");
      this.$el.querySelector(".curtain").classList.add("open");
    },
    close: function () {
      this.$el.querySelector(".mob-curtain").classList.remove("open");
      this.$el.querySelector(".curtain").classList.remove("open");
    }

  }
}
</script>

<style scoped>
@media (max-width: 576px) {
  .pc {
    display: none;
  }

  .mobile {
    display: block;
  }
}


@media (min-width: 576px) {
  .pc {
    display: block;
  }

  .mobile {
    display: none !important;
  }
}

.mobile {
  display: flex;
}

.mobile-button {
  width: 50px;
  height: 50px;
  background-color: var(--vt-c-green);
  position: absolute;
  left: calc(100vw - 90px);
  top: 20px;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hr {
  height: 2px;
  background-color: var(--vt-c-black);
  border-radius: 3px;
}

.hr:nth-child(1), .hr:nth-child(3) {
  width: 40%;
}

.hr:nth-child(2) {
  width: 50%;
  margin-left: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
}

.curtain {
  position: absolute;
  height: 100dvh;
  width: 60vw;
  background-color: var(--vt-c-green);
  transition: 1s;
  left: calc(100vw);
  top: 0px;
  border-top-left-radius: 25px;
}

.curtain.open {
  left: calc(40vw);
}

.mob-curtain {
  opacity:0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: none;
  background-color: var(--vt-c-black);
  transition: 1s;
}

.mob-curtain.open {
  opacity: 0.3;
  display: block;
}

.mob-btn-nav:nth-child(1) {
  margin-top: 3em;
}

.mob-btn-nav {
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3em;
  line-height: 1em;

  margin-left: 1em;
  margin-top: 2em;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: var(--vt-c-black);
}

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
