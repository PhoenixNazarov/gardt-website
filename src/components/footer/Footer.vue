<template>
  <div class="footer-container">
    <FooterContactForm class="footer-contact-form" :theme="theme"/>
    <div class="hr"></div>
    <FooterContacts :theme="theme"/>
    <div class="hr"></div>
    <div class="footer-info">
      <h1 class="footer-artifact">© 2022, GARDT Landscape Architects</h1>
    </div>
  </div>
</template>

<script>
import FooterContactForm from "@/components/footer/FooterContactForm.vue";
import FooterContacts from "@/components/footer/FooterContacts.vue";

export default {
  name: "Footer",
  components: {FooterContacts, FooterContactForm},
  props: ["theme"],
  methods: {
    getElems: function () {
      return this.$el.querySelectorAll(".hr, .footer-artifact");
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