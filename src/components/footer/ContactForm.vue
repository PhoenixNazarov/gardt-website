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
        <Input class="feedback-input" text="Имя" ident="name"/>
        <Input class="feedback-input feedback-input-long" text="E-mail" ident="email"/>
      </div>
      <div class="feedback-form-raw">
        <Input class="feedback-input" text="Телефон" ident="phone"/>
        <Input class="feedback-input feedback-input-long" text="Комментарий" ident="comment"/>
      </div>
      <div class="feedback-form-raw ">
        <h1 class="feedback-text-description feedback-input feedback-input-long">
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования платформой
        </h1>
        <div class="feedback-input">
          <DarkButton text="Отправить"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from "@/components/pages/main/PartName.vue";
import Input from "@/components/ui/Input.vue";
import DarkButton from "@/components/ui/DarkButton.vue";

export default {
  name: "ContactForm",
  components: {DarkButton, Input, PartName}
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
  margin-left: 20px;
  margin-bottom: 20px;
}

.feedback-input-long {
  width: 420px;
}

.feedback-text-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  line-height: 24px;
  color: #02001A;
}
</style>