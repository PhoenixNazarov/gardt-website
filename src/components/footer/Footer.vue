<template>
  <div class="footer-container">
    <div style="z-index: 1;">
      <FooterContactForm class="footer-contact-form" :theme="theme"/>
      <div class="hr" :class="theme"></div>
      <FooterContacts class="footer-contacts-m" :theme="theme"/>
<!--      <div class="hr" :class="theme"></div>-->

<!--      <div class="address-container">-->
<!--        <h1 class="address-text" :class="theme">-->
<!--          {{ translate('Saint-Petersburg, Russia') }}-->
<!--        </h1>-->
<!--        <h1 class="address-text" :class="theme">-->
<!--          {{ translate('Address: 191002, Saint-Petersburg, Rubinsteina 26-15') }}-->
<!--        </h1>-->
<!--        <a class="address-text show-number" :class="theme" @click.prevent="showNumber()">-->
<!--          +7 (999) 888-31-32-->
<!--        </a>-->
<!--      </div>-->

      <div class="hr" :class="theme"></div>
      <div class="footer-info">
        <h1 class="footer-artifact" :class="theme">{{ translate('© 2023, GARDT Landscape Architects') }}</h1>
      </div>
    </div>
    <img class="background-figure" src="../../assets/images/background/circle5.png" alt="gardt circle background"
         v-if="theme === 'dark'"/>
  </div>
</template>

<script>
import FooterContactForm from '@/components/footer/FooterContactForm.vue'
import FooterContacts from '@/components/footer/FooterContacts.vue'
import {translate} from "../../assets/js/i18n";

export default {
  name: 'Footer',
  methods: {
    translate,
    showNumber() {
      let $number = this.$el.querySelector('.show-number');
      if ($number !== null) {
        $number.innerText = '+7 (931) 965-' + [0,8].reverse().join("") + ['9','0','-'].reverse().join("");
        $number.href = 'tel:+7931965' + [0,8].reverse().join("") + ['9','0'].reverse().join("");
        $number.classList.remove('show-number');
      }
    }
  },
  components: {FooterContacts, FooterContactForm},
  props: ['theme'],
}
</script>

<style scoped>
.footer-container {
  overflow: hidden;
}

.background-figure {
  position: absolute;
  bottom: -500px;
  width: 40vw;
  z-index: 0;
  left: 50px;
}

.footer-contact-form {
  margin-bottom: 6em;
}

.hr {
  width: 100%;
  height: 1px;
  margin-bottom: 1px;
}

.footer-info {
  height: 60px;
  display: flex;
  align-content: center;
  justify-content: center;
}

.footer-info h1 {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;

  color: #02001A;
  margin-bottom: auto;
  margin-top: auto;
}

.hr.light {
  background-color: var(--vt-c-white);
}

.hr.dark {
  background-color: var(--vt-c-black);
}

.footer-artifact.light {
  color: var(--vt-c-white);
}

.footer-artifact.dark {
  color: var(--vt-c-black);
}

.address-container {
  height: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.address-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  line-height: 1.5em;
}

.address-text.light {
  color: var(--vt-c-white);
}

.address-text.dark {
  color: var(--vt-c-black);
}

.show-number {
  cursor: pointer;
  color: transparent !important;
}

.show-number.light {
  text-shadow: 0 0 5px rgba(255,255,255,0.5) !important;
}

.show-number.dark {
  text-shadow: 0 0 5px rgba(0,0,0,0.5) !important;
}

@media (max-width: 576px) {
  .footer-info {
    height: 40px;
  }

  .footer-contact-form {
    margin-bottom: 1.5em;
  }

  .address-container {
    align-items: flex-start;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    height: 9em;
  }
  .address-text {
    /*margin-bottom: 0.1em;*/
  }
}

</style>
