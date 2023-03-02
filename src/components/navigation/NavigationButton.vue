<template>
  <div class="btn-navigation-container">
    <a class="btn-navigation">{{ text }}
      <div class="btn-navigation-underline" :class="getActive()"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavigationButton",
  props: ['text', "theme", 'active'],
  methods: {
    light: function () {
      this.$el.querySelector(".btn-navigation").style.color="var(--vt-c-white)"
      this.$el.querySelector(".btn-navigation-underline").style.background="var(--vt-c-white)"
    },
    dark: function () {
      this.$el.querySelector(".btn-navigation").style.color="#02001A";
      this.$el.querySelector(".btn-navigation-underline").style.background="#02001A";
    },
    getActive: function () {
      if (this.active) {
        return 'active';
      } else {
        return 'inactive'
      }
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
  },
}
</script>

<style scoped>
.btn-navigation-container {
  display: inline-block;
}

.btn-navigation-container:hover .btn-navigation-underline {
  width: 100%;
}

.active {
  width: 100%!important;
}

.btn-navigation {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;

  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #02001A;
  transition: 500ms;
  cursor: pointer;
}

.btn-navigation-underline {
  transition: 500ms;
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  background: #02001A;
}

</style>