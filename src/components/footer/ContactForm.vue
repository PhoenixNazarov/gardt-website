<template>
  <div class="feedback-container">
    <div class="feedback-text">
      <PartName text="Связаться с нами" :theme="theme" class="feedback-text-title"/>
      <h1 class="feedback-text-description">
        Если вы хотите начать проект или заказать консультацию, оставьте свой номер - мы позвоним
      </h1>
    </div>
    <div class="feedback-form">
      <div class="feedback-form-raw">
        <Input class="feedback-input" text="Имя" ident="name" :theme="theme"/>
        <Input class="feedback-input feedback-input-long" text="E-mail" ident="email" :theme="theme"/>
      </div>
      <div class="feedback-form-raw">
        <Input class="feedback-input" text="Телефон" ident="phone" :theme="theme"/>
        <Input class="feedback-input feedback-input-long" text="Комментарий" ident="comment" :theme="theme"/>
      </div>
      <div class="feedback-form-raw">
        <h1 class="feedback-text-description feedback-input feedback-input-long">
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования платформой
        </h1>
        <div class="feedback-input">
          <Button text="Отправить" :theme="theme === 'light'?'accent':'dark'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from "@/components/ui/PartName.vue";
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";

export default {
  name: "ContactForm",
  components: {Button, Input, PartName},
  props: ["theme"],
  methods: {
    getElems: function () {
      return this.$el.querySelectorAll(".feedback-text-description");
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
}

.feedback-text-description.dark {
  color: var(--vt-c-black);
}


.feedback-text-description.light {
  color: var(--vt-c-white);
}

</style>