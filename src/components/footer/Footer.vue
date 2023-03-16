<template>
  <div class="footer-container">
    <div style="z-index: 1;">
      <FooterContactForm class="footer-contact-form" :theme="theme"/>
      <div class="hr" :class="theme"></div>
      <FooterContacts class="footer-contacts-m" :theme="theme"/>
      <div class="hr" :class="theme"></div>
      <div class="footer-info">
        <h1 class="footer-artifact" :class="theme">© 2022, GARDT Landscape Architects</h1>
      </div>
    </div>
    <img class="background-figure" src="../../assets/images/background/circle5.png" alt="gardt circle background" v-if="theme === 'dark'"/>
  </div>
</template>

<script>
import FooterContactForm from '@/components/footer/FooterContactForm.vue'
import FooterContacts from '@/components/footer/FooterContacts.vue'

export default {
  name: 'Footer',
  components: {FooterContacts, FooterContactForm},
  props: ['theme']
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

@media (max-width: 576px) {
  .footer-info {
    height: 40px;
  }
  .footer-contact-form {
    margin-bottom: 1.5em;
  }
}

</style>
