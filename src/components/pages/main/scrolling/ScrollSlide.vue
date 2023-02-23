<template>
  <div>
    <div class="main-scroll-container">
      <div class="main-scroll-carriage">
        <h1 class="main-scroll-text">Мы создаем<br>пространства,<br>наполненные<br>смыслом</h1>
      </div>

      <div class="main-scroll-outside">

      </div>
      <div class="main-scroll-gradient" style="
      background-color: #02001A; height: 100vh">
        <div style="position: absolute; height: 55vh; width: 100%; top: 0;
          background: radial-gradient(160% 155% at top, var(--vt-c-white) 30%, rgba(200,255,41,0.5) 45%, transparent 60%);">
        </div>
        <div style="position: absolute; height: 55vh; width: 100%; bottom: 0;
          background: radial-gradient(160% 155% at bottom, var(--vt-c-white) 30%, rgba(200,255,41,0.5) 45%, transparent 60%);">
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "ScrollSlide",
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.fixed = false;
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (this.$carriage === undefined) {
        this.$carriage = this.$el.querySelector(".main-scroll-carriage");
      }

      if (this.$container === undefined) {
        this.$container = this.$el.querySelector(".main-scroll-container");
      }

      let hgParent = this.$container.getBoundingClientRect();
      if (!this.fixed && (hgParent.y <= 0 && hgParent.y >= -(hgParent.height - window.innerHeight))) {
        this.$carriage.style.position = "fixed";
        this.$carriage.style.top = "0px";
        this.fixed = true;
      } else if (this.fixed && hgParent.y > 0) {
        this.$carriage.style.position = "absolute";
        this.$carriage.style.top = null;
        this.fixed = false;
      } else if (this.fixed && (hgParent.y + hgParent.height - window.innerHeight) <= 0) {
        this.$carriage.style.position = "absolute";
        this.$carriage.style.top = (hgParent.height - window.innerHeight) + "px";
        this.fixed = false;
      }

    }
  }
}
</script>

<style scoped>
.main-scroll-container {
  min-height: 170vh;
  background-color: var(--vt-c-white);
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

.main-scroll-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 4.75em;
  line-height: 96px;
  text-align: center;
  color: var(--vt-c-white);
}

.main-scroll-outside {
  height: 70vh;
}

</style>