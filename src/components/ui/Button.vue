<template>
  <div class="btn-container">
    <button class="btn">
      <h1 class="btn-text">{{ text }}</h1>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "theme"],
  methods: {
    light: function () {
      let button = this.$el.querySelector(".btn");
      let buttonText = this.$el.querySelector(".btn-text");

      button.classList.remove("btn-dark");
      button.classList.add("btn-light");
      buttonText.classList.remove("btn-text-dark");
      buttonText.classList.add("btn-text-light");

    },
    dark: function () {
      let button = this.$el.querySelector(".btn");
      let buttonText = this.$el.querySelector(".btn-text");

      button.classList.remove("btn-light");
      button.classList.add("btn-dark");
      buttonText.classList.remove("btn-text-light");
      buttonText.classList.add("btn-text-dark");
    }
  },
  mounted() {
    if (this.theme === 'light') {
      this.light();
    } else {
      this.dark();
    }
  },
  watch: {
    theme: function (newVal, oldVal) {
      if (newVal === 'light') {
        this.light();
      } else {
        this.dark();
      }
    }
  }
}
</script>

<style scoped>
.btn-container {
  width: 100%;
  height: 100%;
}
.btn {
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-style: solid;
  transition: 500ms;
}

.btn-dark {
  border-color: var(--vt-c-black);
  background: var(--vt-c-black);
}

.btn-light {
  border-color: var(--vt-c-white);
  background: var(--vt-c-white);
}

.btn:hover {
  border-width: 1px;
  background: transparent;
}


.btn-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 24px;

  letter-spacing: 0.25em;
  text-transform: uppercase;
  transition: 500ms;
}

.btn-text-dark {
  color: var(--vt-c-white);
}

.btn-text-light {
  color: var(--vt-c-black);
}

.btn:hover .btn-text-dark {
  color: var(--vt-c-black);
}

.btn:hover .btn-text-light {
  color: var(--vt-c-white);
}

</style>