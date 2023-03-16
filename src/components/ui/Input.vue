<template>
  <div class="input-container">
    <input class="input"
           :class="theme + ' ' + status"
           :id="ident"
           type="text"
           :name="ident"
           :placeholder="text"
           v-model="message"
           @input="onInput"
    />
    <label class="label"
           :class="theme"
           :for="ident">
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      message: ''
    }
  },
  props: {
    text: String,
    ident: String,
    theme: String,
    maxLength: {
      type: Number,
      default: 64
    },
    status: {
      type: String,
      default: 'none'
    }
  },
  methods: {
    onInput (event) {
      if (this.message.length > this.maxLength) {
        this.message = this.message.trim().substring(0, this.maxLength)
      }
      this.$emit('message-input', this.message)
    }
  }
}
</script>

<style scoped>
.input-container {
  width: 100%;
  height: 100%;
}

.input {
  height: 100%;
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;

  transition: 200ms;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
}

.input::placeholder {
  color: transparent;
}

.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875em;
  color: #888888;
  top: 15px;
}

.input:focus,
.input:active,
.input:not(:placeholder-shown) {
  border-radius: 10px;
  border-color: #888888;
}

.label {
  top: 50%;
  left: 20px;
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  transition: 200ms;
}

.input.dark {
  border-color: var(--vt-c-black);
  color: var(--vt-c-black);
}

.label.dark {
  color: var(--vt-c-black);
}

.input.light {
  border-color: var(--vt-c-white);
  color: var(--vt-c-white);
}

.label.light {
  color: var(--vt-c-white);
}

.input.success {
  border-color: var(--vt-c-green);
}

.input.danger {
  border-color: var(--vt-c-danger);
}

@media (max-width: 576px) {
  .label {
    left: 10px;
  }
  .input {
    padding-left: 10px;
    padding-right: 10px;
  }
  .input:focus ~ .label,
  .input:not(:placeholder-shown) ~ .label {
    top: 8px;
  }
}

</style>
