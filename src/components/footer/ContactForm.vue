<template>
  <div class="feedback-container">
    <div class="feedback-text">
      <PartName text="Связаться с нами" :theme="theme" class="feedback-text-title"/>
      <h1 class="feedback-text-description">
        Если вы хотите начать проект или заказать консультацию, оставьте свой номер - мы позвоним
      </h1>
    </div>
    <div class="feedback-form" v-if="!showForm()">
      <div class="feedback-form-raw">
        <Input class="feedback-input" text="Имя" ident="name" :theme="nameTheme" @input="inputName"/>
        <Input class="feedback-input feedback-input-long" text="E-mail" ident="email" :theme="mailTheme"
               @input="inputMail"/>
      </div>
      <div class="feedback-form-raw">
        <Input class="feedback-input" text="Телефон" ident="phone" :theme="phoneTheme" @input="inputPhone"/>
        <Input class="feedback-input feedback-input-long" text="Комментарий" ident="comment" :theme="commentTheme"
               @input="inputComment"/>
      </div>
      <div class="feedback-form-raw">
        <h1 class="feedback-text-description feedback-input feedback-input-long">
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования платформой
        </h1>
        <div class="feedback-input">
          <Button text="Отправить" :theme="theme === 'light'?'accent':'dark'" @click.prevent="validate"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from "@/components/ui/PartName.vue";
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import {setCookie, getCookie, deleteCookie} from "@/assets/js/cookie.js";

export default {
  name: "ContactForm",
  components: {Button, Input, PartName},
  props: ["theme"],
  data() {
    return {
      nameValue: "",
      nameTheme: this.theme,
      mailValue: "",
      mailTheme: this.theme,
      phoneValue: "",
      phoneTheme: this.theme,
      commentValue: "",
      commentTheme: this.theme,
      phoneRe: /^((\+7|7|8)+([0-9]){10})$/,
      mailRe: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    }
  },
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
    },

    inputName: function (event) {
      if (event.target.value.length >= 16) {
        event.target.value = event.target.value.trim().substring(0, 16);
      }
      this.nameTheme = this.theme;
      this.nameValue = event.target.value;
    },
    inputMail: function (event) {
      if (event.target.value.length >= 26) {
        event.target.value = event.target.value.trim().substring(0, 26);
      }
      this.mailTheme = this.theme;
      this.mailValue = event.target.value;
    },
    inputPhone: function (event) {
      if (event.target.value.length >= 16) {
        event.target.value = event.target.value.trim().substring(0, 16);
      }
      this.phoneTheme = this.theme;
      this.phoneValue = event.target.value;
    },
    inputComment: function (event) {
      if (event.target.value.length >= 26) {
        event.target.value = event.target.value.trim().substring(0, 26);
      }
      this.commentTheme = this.theme;
      this.commentValue = event.target.value;
    },
    validate: function (event) {
      let error = false;
      if (this.nameValue.trim().length < 4) {
        this.nameTheme = 'danger';
        error=true;
      }
      if (!this.phoneRe.test(this.phoneValue)) {
        this.phoneTheme = 'danger';
        error=true;
      }
      if (!this.mailRe.test(this.mailValue)) {
        this.mailTheme = 'danger';
        error=true;
      }

      if (!error) {
        if (getCookie("contact") === undefined) {
          setCookie("contact", "1", {'max-age': 60 * 60})
        }
      }
    },
    showForm: function () {
      return getCookie('contact') !== undefined
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