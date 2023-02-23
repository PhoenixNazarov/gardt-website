<template>
  <div class="footer-container">
    <ContactForm class="footer-contact-form"/>
    <div class="hr"></div>
    <Contacts/>
    <div class="hr"></div>
    <div class="footer-info">
      <h1>© 2022, GARDT Landscape Architects</h1>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/footer/ContactForm.vue";
import Contacts from "@/components/footer/Contacts.vue";

export default {
  name: "Footer",
  components: {Contacts, ContactForm}
}
</script>

<style scoped>

.footer-contact-form {
  margin-bottom: 6em;
}

.hr {
  width: 100%;
  height: 1px;
  background-color: #02001A;
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
</style>