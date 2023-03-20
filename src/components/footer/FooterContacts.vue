<template>
  <div class="footer-contacts-container">
    <div class="footer-contacts-text">
      <img class="navigation-logo" :class="theme" src="../../assets/logo.svg" width="47"
           @click.prevent="changePage('Main')"
           alt="gardt logo"/>
      <h1 class="footer-contacts-text-inner" :class="theme">{{
          translate('Мы проецируем природу на городскую среду')
        }}</h1>
    </div>
    <div class="navigation">
      <div class="navigation-button">
        <FooterNavigationButton :text="translate('Блог')" class="navigation-button-item" :theme="theme"
        />
        <FooterNavigationButton :text="translate('О нас')" class="navigation-button-item" :theme="theme"
                                @click.prevent="changePage('About')"/>
        <FooterNavigationButton :text="translate('Портфолио')" class="navigation-button-item" :theme="theme"
                                @click.prevent="changePage('Portfolio')"/>
        <FooterNavigationButton :text="translate('Контакты')" class="navigation-button-item" :theme="theme"
                                @click.prevent="toDownPage()"/>
      </div>
    </div>
    <div class="footer-contacts-names">
      <h1 class="footer-contacts-names-inner" :class="theme">{{ translate('Дизайн:') }} <a class="jura" :class="theme" href="http://localhost"
          style="text-decoration: underline">{{ translate('Боровиков Юрий') }}</a>
      </h1>
      <div style="margin-bottom: 1em">
        <a href="" v-if="getLanguage() !== 'ru'" style="margin-right: 2em">
          <img class="img-link" v-if="theme === 'dark'" src="../../assets/images/inst.svg" width="22" alt="Gardt inst">
          <img class="img-link" v-if="theme === 'light'" src="../../assets/images/instLight.svg" width="22" alt="Gardt inst">
        </a>

        <a href="">
          <img class="img-link" style="margin-right: 2em" v-if="theme === 'light'" src="../../assets/images/TelegramLight.svg" width="22"
               alt="Gardt telegram">
          <img class="img-link" style="margin-right: 2em" v-if="theme === 'dark'" src="../../assets/images/Telegram.svg" width="22"
               alt="Gardt telegram">
        </a>

        <a href="">
          <img class="img-link" v-if="theme === 'dark'" src="../../assets/images/VK.svg" width="22" alt="Gardt vk">
          <img class="img-link" v-if="theme === 'light'" src="../../assets/images/VKLight.svg" width="22" alt="Gardt vk">
        </a>

      </div>
    </div>
  </div>
</template>

<script>
import FooterNavigationButton from '@/components/footer/FooterNavigationButton.vue'
import {getLanguage, translate} from "@/assets/js/i18n";

export default {
  name: 'FooterContacts',
  components: {FooterNavigationButton},
  props: ['theme'],
  methods: {
    getLanguage,
    translate,
    changePage: function (page) {
      this.$root.onChangePage(page)
    },
    toDownPage: function () {
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
    }
  }
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

.img-link {
  cursor: pointer;
}

.footer-contacts-text-inner.light {
  color: var(--vt-c-white)
}

.footer-contacts-text-inner.dark {
  color: var(--vt-c-black)
}

.jura {
  cursor: pointer;
}

.jura.light {
  color: var(--vt-c-white)
}

.jura.dark {
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

@media (max-width: 576px) {
  .footer-contacts-container {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .footer-contacts-text-inner {
    display: none;
  }

  .footer-contacts-text {
    width: 20%;
  }

  .navigation-logo {
    width: 35px;
  }

  .navigation-button-item {
    margin-bottom: 0 !important;
  }
}

</style>
