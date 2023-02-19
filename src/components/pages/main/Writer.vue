<template>
  <div id="main-writer">
    <div class="main-writer-row">
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg.svg" alt="G"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-1.svg" alt="A"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-2.svg" alt="R"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-3.svg" alt="D"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-4.svg" alt="T"/>
    </div>
    <div class="main-writer-row">
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-5.svg" alt="L"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-6.svg" alt="a"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-7.svg" alt="n"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-8.svg" alt="d"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-9.svg" alt="s"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-10.svg" alt="c"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-11.svg" alt="a"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-12.svg" style="top: 25px" alt="p"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-13.svg" alt="e"/>
    </div>
    <div class="main-writer-row">
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-14.svg" alt="A"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-15.svg" alt="r"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-16.svg" alt="c"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-17.svg" alt="h"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-18.svg" alt="i"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-19.svg" alt="t"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-20.svg" alt="e"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-21.svg" alt="c"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-22.svg" alt="t"/>
      <img class="main-writer-letter" src="src/assets/images/main-writer/svg-23.svg" alt="s"/>
    </div>
    <img id="main-writer-rect" src="src/assets/images/main-writer/Rectangle.svg" alt="|"/>

  </div>

</template>

<script>
export default {
  name: "Writer",
  mounted() {
    let letters = [...document.getElementsByClassName("main-writer-letter")]
    let rect = document.getElementById("main-writer-rect")

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
      if (index + 1 < letters.length) {
        window.setTimeout(key3, 250);
      } else {
        window.setTimeout(() => rect.remove(), 250);
      }
    }

    window.setTimeout(key1, 1000);
  }
}
</script>

<style scoped>
#main-writer {
  top: 150px;
  left: 200px;

  position: absolute;
  z-index: 10;
}

#main-writer img {
  margin-right: 7px;
}

.main-writer-row {
  /*margin-bottom: 40px;*/
  min-height: 120px;
  display: flex;
  align-items: flex-end;
}

.main-writer-letter, #main-writer-rect {
  /*height: 120%;*/
  display: none;
}

</style>