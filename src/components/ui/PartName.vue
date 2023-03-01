<template>
  <div>
    <div class="part-name">
      <h1 class="part-second-name" :class="theme">
      <span style="color: var(--vt-c-green); padding-right: 20px"
            class="part-first-name">—</span>{{ text }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartName",
  props: {
    text: String,
    theme: {
      type: String,
      default: 'light'
    },
    show: {
      type: Number,
      default: -1
    }
  },
  methods: {
    waitShow: function (e) {
      let $part = this.$el.querySelector('.part-name');
      let partY = $part.getBoundingClientRect().y;
      if ((partY - window.innerHeight * (100 - this.show) / 100) <= 0) {
        $part.classList.add("play-show")
        document.removeEventListener('scroll', this.waitShow);
      }
    }
  },
  mounted() {
    if (this.show !== -1) {
      this.$el.querySelector('.part-name').classList.add("hide");
      document.addEventListener('scroll', this.waitShow);
    }
  },
  unmounted() {
    if (this.show !== -1) {
      document.removeEventListener('scroll', this.waitShow)
    }
  }
}
</script>

<style scoped>
@keyframes title-animate {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.hide {
  opacity: 0;
  transform: translateX(-200px);
}

.play-show {
  animation: title-animate 1s forwards;
}

.part-name {
  display: flex;
}

.part-second-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 4em;
  line-height: 1.3em;
}

.part-second-name.light {
  color: var(--vt-c-white)
}

.part-second-name.dark {
  color: var(--vt-c-black)
}

.part-first-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
}


</style>