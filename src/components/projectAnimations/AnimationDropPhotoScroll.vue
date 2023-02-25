<template>
  <div>
    <div class="drop-photo-container" style="min-height: 300vh">
      <div class="car">
        <div class="drop-photo-image"></div>
        <h1 class="drop-photo-text">Функциональное пространство с обеденной зоной</h1>
      </div>
    </div>
  </div>
</template>

<script>
import 'https://rawcdn.githack.com/flackr/scroll-timeline/94866999efe41b3ccba846be7ed37c9313dd880e/dist/scroll-timeline.js';

export default {
  name: "AnimationDropPhotoScroll",
  mounted() {

    let bodyRect = document.body.getBoundingClientRect();
    let elemRect = this.$el.querySelector(".drop-photo-image")
    let offset   = elemRect.getBoundingClientRect().top - bodyRect.top;

    let fixed = false;

    window.addEventListener("scroll", (e) => {
      let offset = this.$el.querySelector(".drop-photo-container").getBoundingClientRect();
      let car = this.$el.querySelector(".car");

      if (!fixed && offset.y < 0) {
        car.style.position = "fixed";
        car.style.top = "0";
        fixed = true;
      } else if (fixed && offset.y > 0) {
        car.style.position = null;
        car.style.top = null;
        fixed = false;
      }

    })

    const myScrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      scrollSource: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: [
        new CSSUnitValue(offset, 'px'),
        new CSSUnitValue(offset + 400, 'px'),
        new CSSUnitValue(offset + 800, 'px'),
        new CSSUnitValue(offset + 1000, 'px'),
      ],
    });

    this.$el.querySelector(".drop-photo-image").animate(
        {
          transform: ["scale(1)", "scale(0.6)", "scale(0.6)", "scale(0.7)"],
          opacity: [0, 1, 1, 0.25]
        },
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );

    this.$el.querySelector(".drop-photo-text").animate(
        {
          opacity: [0, 0, 0, 1]
        },
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );

  }
}
</script>

<style scoped>
.car {
  width: 100vw;
}
.drop-photo-image {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/images/main-slider/1.jpg");
}

.drop-photo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6em;
  line-height: 1.15em;
  color: var(--vt-c-white);
}

</style>