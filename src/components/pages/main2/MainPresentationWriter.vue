<template>
  <div class="main-writer main-outside">
    <div class="main-writer-row">
      <h1 class="main-writer-letter">G</h1>
      <h1 class="main-writer-letter">A</h1>
      <h1 class="main-writer-letter">R</h1>
      <h1 class="main-writer-letter">D</h1>
      <h1 class="main-writer-letter">T</h1>
    </div>
    <div class="main-writer-row">
      <h1 class="main-writer-letter">L</h1>
      <h1 class="main-writer-letter">a</h1>
      <h1 class="main-writer-letter">n</h1>
      <h1 class="main-writer-letter">d</h1>
      <h1 class="main-writer-letter">s</h1>
      <h1 class="main-writer-letter">c</h1>
      <h1 class="main-writer-letter">a</h1>
      <h1 class="main-writer-letter">p</h1>
      <h1 class="main-writer-letter">e</h1>
    </div>
    <div class="main-writer-row">
      <h1 class="main-writer-letter">A</h1>
      <h1 class="main-writer-letter">r</h1>
      <h1 class="main-writer-letter">c</h1>
      <h1 class="main-writer-letter">h</h1>
      <h1 class="main-writer-letter">i</h1>
      <h1 class="main-writer-letter">t</h1>
      <h1 class="main-writer-letter">e</h1>
      <h1 class="main-writer-letter">c</h1>
      <h1 class="main-writer-letter">t</h1>
      <h1 class="main-writer-letter">s</h1>
    </div>
    <h1 class="main-writer-rect">|</h1>

  </div>

</template>

<script>
export default {
  name: "MainPresentationWriter",
  data(){
    return {
      create: 0
    }
  },
  methods: {
    write: function () {
      let letters = this.$el.querySelectorAll(".main-writer-letter");
      let rect = this.$el.querySelector(".main-writer-rect");

      letters[0].style.display = "inline";
      letters[0].parentElement.appendChild(rect);
      rect.style.display = "inline";

      function key1() {
        rect.style.display = "none";
        window.setTimeout(key2, 1000);
      }

      function key2() {
        rect.style.display = "inline";
        window.setTimeout(key3, 1000);
      }

      let index = 1

      function key3() {
        letters[index].style.display = "inline";
        letters[index].parentElement.appendChild(rect);
        index += 1;
        if (index + 1 <= letters.length) {
          window.setTimeout(key3, 250);
        } else {
          window.setTimeout(() => rect.remove(), 250);
        }
      }
      window.setTimeout(key1, 1000);
    }
  },
  mounted() {
    if (this.$el.querySelector(".main-writer-rect") !== null) {
      this.write();
    }
  },
  unmounted() {
    if (this.$el.querySelector(".main-writer-rect") !== null) {
      this.$el.querySelectorAll(".main-writer-letter").forEach((i) => i.style.display = "inline");
      this.$el.querySelector(".main-writer-rect").remove();
    }
  }
}
</script>

<style scoped>
.main-writer {
  top: calc(150px);

  position: absolute;
  z-index: 10;
}

.main-writer img {
  margin-right: 7px;
}

.main-writer-row {
  /*margin-bottom: 40px;*/
  min-height: 120px;
  display: flex;
  align-items: flex-end;
}

.main-writer-letter, .main-writer-rect {
  font-family: 'NeueMatana', sans-serif;
  font-size: 10em;
  line-height: 1.2em;
  display: none;
  color: var(--vt-c-white);
}

</style>