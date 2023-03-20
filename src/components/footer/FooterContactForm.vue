<template>
  <div class="feedback-container">
    <div class="feedback-text">
      <PartName :text="translate('Связаться с нами')" :theme="theme" class="feedback-text-title"/>
      <h1 class="feedback-text-description" :class="theme">
        {{ translate('Если вы хотите начать проект или заказать консультацию, оставьте свой номер - мы позвоним') }}
      </h1>
    </div>
    <div class="feedback-form">
      <div class="feedback-form-write">
        <div class="feedback-form-raw">
          <Input class="feedback-input"
                 :text="translate('Имя') "
                 ident="name"
                 :theme="theme"
                 :status="form.name.status"
                 :max-length=16
                 @message-input="onInputName"/>
          <Input class="feedback-input feedback-input-long"
                 :text="translate('E-mail')"
                 ident="email"
                 :theme="theme"
                 :status="form.mail.status"
                 :max-length=32
                 @message-input="onInputMail"/>
        </div>
        <div class="feedback-form-raw">
          <Input class="feedback-input"
                 :text="translate('Телефон')"
                 ident="phone"
                 :status="form.phone.status"
                 :theme="theme"
                 :max-length=16
                 @message-input="onInputPhone"/>
          <Input class="feedback-input feedback-input-long"
                 :text="translate('Комментарий')"
                 ident="comment"
                 :status="form.comment.status"
                 :theme="theme"
                 :max-length=32
                 @message-input="onInputComment"/>
        </div>
        <div class="feedback-form-raw">
          <h1 class="feedback-text-description feedback-input feedback-input-long accept-rules" :class="theme">
            {{ translate('Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования платформой') }}
          </h1>
          <div class="feedback-input">
            <Button :text="translate('Отправить')" :theme="theme === 'light'?'accent':'dark'" @click.prevent="validate"/>
          </div>
        </div>
      </div>
      <h1 class="feedback-text-description feedback-text-send hide" :class="theme">
        {{ translate('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.') }}
      </h1>
    </div>
  </div>
</template>

<script>
import PartName from '@/components/ui/PartName.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import {setCookie, getCookie, deleteCookie} from '@/assets/js/cookie.js'
import axios from "axios";
import {translate} from "../../assets/js/i18n";

export default {
  name: 'FooterContactForm.vue',
  components: {Button, Input, PartName},
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: {
          status: 'none',
          value: ''
        },
        mail: {
          status: 'none',
          value: ''
        },
        phone: {
          status: 'none',
          value: ''
        },
        comment: {
          status: 'none',
          value: ''
        }
      },
      phoneRe: /^((\+7|7|8)+([0-9]){10})$/,
      mailRe: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    }
  },
  methods: {
    translate,
    onInputName: function (s) {
      this.form.name.value = s
      this.form.name.status = 'none'
    },
    onInputMail: function (s) {
      this.form.mail.value = s
      this.form.mail.status = 'none'
    },
    onInputPhone: function (s) {
      this.form.phone.value = s
      this.form.phone.status = 'none'
    },
    onInputComment: function (s) {
      this.form.comment.value = s
      this.form.comment.status = 'none'
    },
    validate: function (event) {
      let error = false
      if (this.form.name.value.trim().length < 4) {
        this.form.name.status = 'danger'
        error = true
      }
      if (!this.phoneRe.test(this.form.phone.value)) {
        this.form.phone.status = 'danger'
        error = true
      }
      if (!this.mailRe.test(this.form.mail.value)) {
        this.form.mail.status = 'danger'
        error = true
      }
      if (this.form.comment.value.length < 5) {
        this.form.comment.status = 'danger'
        error = true
      }

      if (!error) {
        this.hideForm()
        if (getCookie('contact') === undefined) {
          setCookie('contact', '1', {'max-age': 5})
          axios.post("https://gardtlandscape.com/api/contact/send/",
              {
                name: this.form.name.value,
                email: this.form.mail.value,
                phone: this.form.phone.value,
                comment: this.form.comment.value
              })
        }
      }
    },
    hideForm: function (smooth) {
      const form = this.$el.querySelector('.feedback-form-write')
      const status = this.$el.querySelector('.feedback-text-send')

      form.classList.add('hide')
      status.classList.remove('hide')
    },
    showForm: function () {
      const form = this.$el.querySelector('.feedback-form-write')
      const status = this.$el.querySelector('.feedback-text-send')

      form.classList.remove('hide')
      status.classList.add('hide')
    }
  }
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

.feedback-form {
  opacity: 1;
}

.feedback-text-description.light {
  color: var(--vt-c-white);
}

.feedback-text-send {
  position: absolute;
  top: calc(50% - 1em);
  left: 20px;
  transition: 500ms;
  z-index: 0;
}

.feedback-form-write {
  transition: 500ms;
  z-index: 1;
}

.hide {
  opacity: 0;
}

@media (max-width: 576px) {
  .feedback-input {
    height: 40px;
  }

  .accept-rules {
    display: none;
  }

  .feedback-form-raw {
    flex-wrap: wrap;
  }

  .feedback-text-title {
    font-size: 0.6em;
    margin-bottom: 4em;
  }

  .input-container, .feedback-input {
    margin-left: 1em;
    margin-bottom: 1em;
  }

  .feedback-text-description {
    font-size: 1.2em;
    line-height: 1.2em;
  }

  .feedback-text {
    width: 50%;
  }

  .feedback-form {
    width: 50%;
  }
}

</style>
