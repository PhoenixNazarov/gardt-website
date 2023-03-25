<template>
  <div>
    <div style="backdrop-filter: blur(40px);" class="pc">
      <div class="navigation-container main-outside">
        <div class="navigation-logo-container">
          <img class="navigation-logo" :class="theme" src="../../assets/logo.svg" @click.prevent="changePage('Main')"
               alt="gardt logo"/>
        </div>
        <div>
          <NavigationButton :text="translate('О нас')"
                            :theme="theme"
                            :active="getPage() === 'About'"
                            class="navigation-button"
                            @click.prevent="changePage('About')"/>
          <NavigationButton :text="translate('Портфолио')"
                            :theme="theme"
                            :active="getPage() === 'Portfolio'"
                            class="navigation-button"
                            @click.prevent="changePage('Portfolio')"/>
          <NavigationButton :text="translate('Блог')"
                            :theme="theme"
                            class="navigation-button"/>
          <!--                          @click.prevent="changePage('Ui')"-->
          <NavigationButton :text="translate('Контакты')"
                            :theme="theme"
                            class="navigation-button"
                            @click.prevent="toDownPage()"/>
        </div>
        <div style="display: flex;">
          <div class="language-button-container">
            <button class="language-button active"
                    :class="theme">
              <h1 class="language-button-text">{{ getLanguage().toUpperCase() }}</h1>
            </button>
            <div class="language-button-container-inner"
                 :class="theme">
              <button class="language-button inactive"
                      :class="theme"
                      v-if="getLanguage() !== 'ru'"
                      @click.prevent="setLanguage('ru')">
                <h1 class="language-button-text">RU</h1>
              </button>
              <button class="language-button inactive"
                      :class="theme"
                      v-if="getLanguage() !== 'en'"
                      @click.prevent="setLanguage('en')">
                <h1 class="language-button-text">EN</h1>
              </button>
            </div>
          </div>

          <div class="navigation-button-inner">
            <Button :text="translate('Оставить заявку')" :theme="theme" @click.prevent="toDownPage()"/>
          </div>
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

        <h1 class="mob-btn-nav mob-btn-nav-start" @click.prevent="changePage('Main')">{{ translate('Главная') }}</h1>
        <h1 class="mob-btn-nav" @click.prevent="changePage('About')">{{ translate('О нас') }}</h1>
        <h1 class="mob-btn-nav" @click.prevent="changePage('Portfolio')">{{ translate('Портфолио') }}</h1>
        <h1 class="mob-btn-nav">{{ translate('БЛОГ') }}</h1>
        <h1 class="mob-btn-nav" @click.prevent="toDownPage()">{{ translate('Контакты') }}</h1>
        <h1 class="mob-btn-nav" @click.prevent="toDownPage()">{{ translate('Оставить заявку') }}</h1>

        <div style="display: flex; margin-top: 2em">
          <h1 class="mob-btn-nav" :class="getLanguage() === 'ru' ? 'mob-btn-nav-lang-active' : ''"
              @click.prevent="setLanguage('ru')">RU</h1>
          <h1 class="mob-btn-nav" :class="getLanguage() === 'en' ? 'mob-btn-nav-lang-active' : ''"
              @click.prevent="setLanguage('en')">EN</h1>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavigationButton from '@/components/navigation/NavigationButton.vue'
import Button from '@/components/ui/Button.vue'
import {getLanguage, setLanguage, translate} from "@/assets/js/i18n";

export default {
  name: 'Navigation',
  props: ['theme'],
  components: {Button, NavigationButton},
  methods: {
    setLanguage,
    getLanguage,
    translate,
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

.language-button-container {
  height: 50px;
  width: fit-content;
  margin-right: 2em;
}

.language-button {
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  width: 100%;
  justify-content: center;

  padding-left: 1em;
  padding-right: 1em;
  cursor: pointer;
  background-color: transparent;
  backdrop-filter: blur(40px);
}

.language-button.light {
  border: 1px solid var(--vt-c-white);
}


.language-button.dark {
  border: 1px solid var(--vt-c-black);
}


.language-button-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 0.25em;
  transition: 0.3s;
  cursor: pointer;
}

.language-button.light {
  color: var(--vt-c-white);
}

.language-button.dark {
  color: var(--vt-c-black);
}

.language-button.active:focus ~ .language-button-container-inner {
  opacity: 1;
  /*display: block;*/
}

.language-button.active:focus {
  border-bottom-width: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}


.language-button.inactive.light:hover {
  border: 1px solid var(--vt-c-white);
}

.language-button.inactive.dark:hover {
  border: 1px solid var(--vt-c-black);
}

.language-button.inactive {
  border: 1px solid transparent;
}

.language-button-container-inner {
  opacity: 0;
  transition: 0.5s;
  border-radius: 0 0 10px 10px;
  border-top-width: 0 !important;
  background: rgba(2, 0, 26, 0.01);
  backdrop-filter: blur(40px);
  /*display: none;*/
}

.language-button-container-inner.light {
  border: 1px solid var(--vt-c-white);
}

.language-button-container-inner.dark {
  border: 1px solid var(--vt-c-black);
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
  height: 100vh;
  width: 60vw;
  background-color: var(--vt-c-green);
  transition: 1s;
  left: calc(100vw);
  top: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;

}

.curtain.open {
  left: calc(40vw);
}

.mob-curtain {
  opacity: 0;
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

.mob-btn-nav-start {
  margin-top: 3em;
}

.mob-btn-nav {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3em;
  line-height: 1em;

  margin-left: 2em;
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

.mob-btn-nav-lang-active {
  font-weight: 700;
}


@media (max-width: 1450px) {
  .navigation-logo-container {
    /*width: 250px;*/
  }
}

@media (min-width: 1450px) {
  .navigation-logo-container {
    /*width: 140px;*/
  }
}

.navigation-container {
  padding: 0;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 1000px) {
  .navigation-button:not(:last-child) {
    margin-right: 40px;
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

@media (min-width: 650px) {
  .language-button.active.light::after {
    content: url("../../assets/images/caret-down-light.svg");
  }

  .language-button.active.dark::after {
    content: url("../../assets/images/caret-down.svg");
  }
}

@media (max-width: 650px) {
  .language-button-container {
    margin-right: 0.5em;
  }

  .navigation-button {
    margin-right: 5px !important;
  }
}


.navigation-logo {
  transition: 500ms;
}

.navigation-logo.dark {
  filter: invert(1);
}

</style>
