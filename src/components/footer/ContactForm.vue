<template>
  <div class="feedback-container">
    <div class="feedback-text">
      <PartName text="Связаться с нами" class="feedback-text-title"/>
      <h1 class="feedback-text-description">
        Если вы хотите начать проект или заказать консультацию, оставьте свой номер - мы позвоним
      </h1>
    </div>
    <div class="feedback-form">
      <div class="feedback-form-raw">
        <input class="feedback-input">
        <input class="feedback-input">
      </div>
      <div class="feedback-form-raw">
        <input class="feedback-input">
        <input class="feedback-input">
      </div>
    </div>
  </div>
</template>

<script>
import PartName from "@/components/pages/main/PartName.vue";

export default {
  name: "ContactForm",
  components: {PartName}
}
</script>

<style scoped>
.feedback-container {
  display: flex;
}

.feedback-text {
  width: 40%;
}

.feedback-form {
  width: 60%;
}

.feedback-form-raw {
  display: flex;
  justify-content: flex-end;
}

.feedback-text-title {
  margin-bottom: 20px;
}

.feedback-input {
  width: 250px;
  height: 80px;
  margin-left: 40px;
  margin-bottom: 10px;
}

.feedback-text-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 31px;
  color: #02001A;
}
</style>