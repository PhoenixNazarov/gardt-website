<template>
  <div>
    <h1 style="color: rebeccapurple">футер</h1>
    <ContactForm/>
    <Contacts/>
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

</style>