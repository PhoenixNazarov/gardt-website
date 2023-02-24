<template>
  <div class="footer-contacts-container">
    <div class="footer-contacts-text">
      <img class="navigation-logo" src="../../assets/logo.svg" width="47" @click.prevent="changePage('Main')"
           alt="gardt logo"/>
      <h1 class="footer-contacts-text-inner">Мы проецируем природу на городскую среду</h1>
    </div>
    <div class="navigation">
      <div class="navigation-button">
        <FooterNavigationButton text="Блог" class="navigation-button-item" :theme="theme"/>
        <FooterNavigationButton text="О нас" class="navigation-button-item" :theme="theme"/>
        <FooterNavigationButton text="Портфолио" class="navigation-button-item" :theme="theme"/>
        <FooterNavigationButton text="Контакты" class="navigation-button-item" :theme="theme"/>
      </div>
    </div>
    <div class="footer-contacts-names">
      <h1 class="footer-contacts-names-inner">Дизайн: <span style="text-decoration: underline">Боровиков Юрий</span>
      </h1>
<!--      <img src="../../assets/logo_black..svg" width="47" alt="Gardt logo">-->
    </div>
  </div>
</template>

<script>
import FooterNavigationButton from "@/components/footer/FooterNavigationButton.vue";

export default {
  name: "FooterContacts",
  components: {FooterNavigationButton},
  props: ["theme"],
  methods: {
    getElems: function () {
      return this.$el.querySelectorAll(".footer-contacts-text-inner, .navigation-logo, .footer-contacts-names-inner");
    },
    clear: function () {
      let elems = this.getElems();
      elems.forEach((i) => i.classList.remove("dark"))
      elems.forEach((i) => i.classList.remove("light"))
    },
    light: function () {
      this.clear();
      this.getElems().forEach((i) => i.classList.add("light"))
    },
    dark: function () {
      this.clear();
      this.getElems().forEach((i) => i.classList.add("dark"))
    }
  },
  mounted() {
    if (this.theme === 'light') {
      this.light();
    } else {
      this.dark();
    }
  },
}
</script>

<style scoped>
.footer-contacts-container {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 41px;
}

.footer-contacts-text {
  width: 33%
}

.navigation {
  width: 33%;
  display: contents;
}

.navigation-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.navigation-button-item:not(:last-child) {
  margin-bottom: 0.85em;
}

.footer-contacts-names {
  width: 33%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  align-items: flex-end;
}


.footer-contacts-text-inner {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  line-height: 1.5em;
  margin-top: 40px;
}

.footer-contacts-text-inner.light {
  color: var(--vt-c-white)
}


.footer-contacts-text-inner.dark {
  color: var(--vt-c-black)
}

.footer-contacts-names-inner {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 18px;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: #02001A;
}

.footer-contacts-names-inner.dark {
  color: var(--vt-c-black)
}


.footer-contacts-names-inner.light {
  color: var(--vt-c-white)
}

.navigation-logo.dark {
  filter: invert(1);
}

</style>