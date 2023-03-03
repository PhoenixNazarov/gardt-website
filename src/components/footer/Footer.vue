<template>
  <div class="footer-container">
    <FooterContactForm class="footer-contact-form" :theme="theme"/>
    <div class="hr" :class="theme"></div>
    <FooterContacts :theme="theme"/>
    <div class="hr" :class="theme"></div>
    <div class="footer-info">
      <h1 class="footer-artifact" :class="theme">© 2022, GARDT Landscape Architects</h1>
    </div>
  </div>
</template>

<script>
import FooterContactForm from '@/components/footer/FooterContactForm.vue'
import FooterContacts from '@/components/footer/FooterContacts.vue'

export default {
  name: 'Footer',
  components: { FooterContacts, FooterContactForm },
  props: ['theme']
}
</script>

<style scoped>

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

</style>
