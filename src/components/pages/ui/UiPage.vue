<template>
  <div class="white">
    <div>
      <Navigation theme="dark" class="main-outside"/>
    </div>
    <div class="black">
      <Navigation theme="light" class="main-outside"/>
    </div>
    <div style="margin-top:50px; margin-left:50px"></div>

    <div class="inline">
      <div class="btn-example">
        <Input
            text="Name"
            ident="name"
            theme="dark"
            :status="form.name.status"
            @message-input="onNameInput"
        />
      </div>
      <div class="btn-example">
        <Input
            text="Name"
            ident="name1"
            theme="dark"
            status="danger"
            @message-input="onNameInput"
        />
      </div>
      <div class="btn-example">
        <Input
            text="Name"
            ident="name2"
            theme="dark"
            status="success"
            @message-input="onNameInput"
        />
      </div>
    </div>
    <div class="black inline">
      <div class="btn-example">
        <Input
            text="Surname"
            ident="surname1"
            theme="light"
            :status="form.surname.status"
            @message-input="onSurnameInput"
        />
      </div>

      <div class="btn-example">
        <Input
            text="Surname"
            ident="surname2"
            theme="light"
            status="danger"
            @message-input="onSurnameInput"
        />
      </div>

      <div class="btn-example">
        <Input
            text="Surname"
            ident="surname3"
            theme="light"
            status="success"
            @message-input="onSurnameInput"
        />
      </div>
    </div>
    <div class="inline">
      <div class="btn-example">
        <Button text="Отправить" theme="dark"/>
      </div>
      <div class="btn-example">
        <Button text="Отправить" theme="accent"/>
      </div>
    </div>
    <div class="black inline">
      <div class="btn-example">
        <Button text="Отправить" theme="light"/>
      </div>
      <div class="btn-example">
        <Button text="Отправить" theme="accent"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/ui/Input.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import Button from "@/components/ui/Button.vue";

export default {
  name: "UiPage",
  components: {Button, Navigation, Input},
  data() {
    return {
      form: {
        name: {
          status: 'none',
          message: ''
        },
        surname: {
          status: 'none',
          message: ''
        }
      },
    }
  },
  methods: {
    onNameInput: function (s) {
      this.form.name.message = s;
      this.form.name.status = 'danger'
      console.log(this.form.name.message);
    },
    onSurnameInput: function (s) {
      this.form.surname.message = s;
      this.form.surname.status = 'danger'
      console.log(this.form.surname.message);
    }
  }
}
</script>

<style scoped>
.black {
  width: 100%;
  background-color: var(--vt-c-black)
}

.white {
  width: 100%;
  background-color: var(--vt-c-white)
}

.btn-example {
  width: 220px;
  height: 100px;
  padding: 10px;
}

.inline {
  display: flex;
}

</style>