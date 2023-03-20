<template>
  <div>
    <div class="main-scroll-container">
      <div class="main-scroll-carriage">
        <h1 class="main-scroll-text" style="white-space: pre">{{ translate("Мы создаем\nпространства,\nнаполненные\nсмыслом") }}</h1>
      </div>

      <div class="main-scroll-outside">

      </div>
      <div class="main-scroll-gradient" style="background-color: var(--vt-c-black)">
        <!--        <div style="position: absolute; height: 55vh; width: 100%; top: 0;-->
        <!--          background: radial-gradient(160% 155% at top, var(&#45;&#45;vt-c-white) 30%, rgba(200,255,41,0.5) 45%, transparent 60%);">-->
        <!--        </div>-->
        <!--        <div style="position: absolute; height: 55vh; width: 100%; bottom: 0;-->
        <!--          background: radial-gradient(160% 155% at bottom, var(&#45;&#45;vt-c-white) 30%, rgba(200,255,41,0.5) 45%, transparent 60%);">-->
        <!--        </div>-->
        <img class="g-image" src="../../../assets/images/main-scrolling-dark.png" style="z-index: 0">

      </div>
    </div>
  </div>
</template>

<script>
import {translate} from "@/assets/js/i18n.js";

export default {
  name: 'MainScroll',
  data: function () {
    return {
      text: translate("Мы создаем\nпространства,\nнаполненные\nсмыслом")
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.fixed = false
  },
  unmounted () {
    if (this.$carriage !== undefined) {
      this.$carriage.style.position = 'absolute'
      this.$carriage.style.top = null
      this.fixed = false
    }
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    translate,
    handleScroll (event) {
      if (this.$carriage === undefined) {
        this.$carriage = this.$el.querySelector('.main-scroll-carriage')
      }

      if (this.$container === undefined) {
        this.$container = this.$el.querySelector('.main-scroll-container')
      }

      const hgParent = this.$container.getBoundingClientRect()
      const hgGradient = this.$el.querySelector('.main-scroll-gradient').getBoundingClientRect()
      if (hgParent.y > 0) {
        this.$carriage.style.position = 'absolute'
        this.$carriage.style.top = null
        this.fixed = false
      } else if (!this.fixed && (hgParent.y <= 0 && hgParent.y >= -(hgParent.height - window.innerHeight))) {
        this.$carriage.style.position = 'fixed'
        this.$carriage.style.top = '0px'
        this.fixed = true
      }
      if (this.fixed && hgParent.y > 0) {
        this.$carriage.style.position = 'absolute'
        this.$carriage.style.top = null
        this.fixed = false
      } else if (this.fixed && (hgGradient.y + (hgGradient.height - window.innerHeight) / 2) <= 0) {
        this.$carriage.style.position = 'absolute'
        this.$carriage.style.top = (hgParent.height - window.innerHeight - (hgGradient.height - window.innerHeight) / 2) + 'px'
        this.fixed = false
      }
    }
  }
}
</script>

<style scoped>
.main-scroll-container {
  /*height: 200vh;*/
  background-color: var(--vt-c-black);
}

.main-scroll-carriage {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.g-image {
  height: 100vh;
  width: 100%;
}

.main-scroll-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 4.75em;
  line-height: 1.7em;
  text-align: center;
  color: var(--vt-c-black);
}

@media (max-width: 576px) {
  .main-scroll-text {
    font-size: 4.3em;
    line-height: 1.2em;
  }
}

.main-scroll-outside {
  height: 20vh;
}

</style>
