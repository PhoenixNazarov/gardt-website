<template>
  <div class="footer-contacts-container">
    <div class="footer-contacts-text">
      <img src="../../assets/logo_black..svg" width="47" alt="Gardt logo">
      <h1 class="footer-contacts-text-inner">Мы проецируем природу на городскую среду</h1>
    </div>
    <div class="navigation">
      <div class="navigation-button">
        <FooterNavigationButton text="Блог" class="navigation-button-item"/>
        <FooterNavigationButton text="О нас" class="navigation-button-item"/>
        <FooterNavigationButton text="Портфолио" class="navigation-button-item"/>
        <FooterNavigationButton text="Контакты" class="navigation-button-item"/>
      </div>
    </div>
    <div class="footer-contacts-names">
      <h1 class="footer-contacts-names-inner">Дизайн: <span style="text-decoration: underline">Боровиков Юрий</span></h1>
      <img src="../../assets/logo_black..svg" width="47" alt="Gardt logo">
    </div>
  </div>
</template>

<script>
import FooterNavigationButton from "@/components/footer/FooterNavigationButton.vue";

export default {
  name: "Contacts",
  components: {FooterNavigationButton}
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
  line-height: 24px;
  color: #01000E;
  margin-top: 40px;

}

.footer-contacts-names-inner {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 18px;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: #01000E;
}

</style>