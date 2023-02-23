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
    getElems: function () {
      return this.$el.querySelectorAll(".btn, .btn-text");
    },
    clear: function() {
      let elems = this.getElems();
      elems.forEach((i) => i.classList.remove("dark"));
      elems.forEach((i) => i.classList.remove("light"));
      elems.forEach((i) => i.classList.remove("accent"));

    },
    light: function () {
      this.clear();
      this.getElems().forEach((i) => i.classList.add("light"))
    },
    dark: function () {
      this.clear();
      this.getElems().forEach((i) => i.classList.add("dark"))
    },
    accent: function () {
      this.clear();
      this.getElems().forEach((i) => i.classList.add("accent"))
    },
    setTheme: function () {
      if (this.theme === 'light') {
        this.light();
      } else if (this.theme === 'accent') {
        this.accent();
      } else {
        this.dark();
      }
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

.btn.dark {
  border-color: var(--vt-c-black);
  background: var(--vt-c-black);
}

.btn.light {
  border-color: var(--vt-c-white);
  background: var(--vt-c-white);
}

.btn.accent {
  border-color: var(--vt-c-green);
  background: var(--vt-c-green);
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
  letter-spacing: 0.25em;
  text-transform: uppercase;
  transition: 500ms;
}

.btn-text.dark {
  color: var(--vt-c-white);
}

.btn-text.light {
  color: var(--vt-c-black);
}

.btn-text.accent {
  color: var(--vt-c-black);
}

.btn:hover .btn-text.dark {
  color: var(--vt-c-black);
}

.btn:hover .btn-text.light {
  color: var(--vt-c-white);
}

.btn:hover .btn-text.accent {
  color: var(--vt-c-green);
}

</style>