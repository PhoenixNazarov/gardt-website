<template>
  <div style="">
    <input type="text" :id="ident" name="ident"
           :value="model"
           :placeholder="text"/>
    <label :for="ident">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["text", "ident", "theme", "model"],
  methods: {
    getElems: function () {
      return this.$el.querySelectorAll("input, label");
    },
    clear: function () {
      let elems = this.getElems();
      elems.forEach((i) => i.classList.remove("dark"));
      elems.forEach((i) => i.classList.remove("light"));
      elems.forEach((i) => i.classList.remove("danger"));
      elems.forEach((i) => i.classList.remove("success"));
    },
    setTheme: function () {
      this.clear();
      this.getElems().forEach((i) => i.classList.add(this.theme));
    }
  },
  mounted() {
    this.setTheme();
  },
  watch: {
    theme: function (newVal, oldVal) {
      this.setTheme();
    }
  }
}
</script>

<style scoped>
input {
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

input::placeholder {
  color: transparent;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875em;
  color: #888888;
  top: 15px;
}

input:focus,
input:active,
input:not(:placeholder-shown) {
  border-radius: 10px;
  border-color: #888888;
}

label {
  top: 50%;
  left: 20px;
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  transition: 200ms;
}


input.dark {
  border-color: var(--vt-c-black);
  color: var(--vt-c-black);
}

label.dark {
  color: var(--vt-c-black);
}

input.light {
  border-color: var(--vt-c-white);
  color: var(--vt-c-white);
}

label.light {
  color: var(--vt-c-white);
}

input.success {
  border-color: var(--vt-c-green);
}

input.danger {
  border-color: var(--vt-c-danger);
}

</style>