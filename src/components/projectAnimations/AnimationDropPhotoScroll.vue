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
  methods: {
    onScroll: function (e) {
      let offset = this.$container.getBoundingClientRect().y;
      let height = this.$container.getBoundingClientRect().height;
      let carHeight = this.$car.getBoundingClientRect().height;

      let downBorder = -height + carHeight;

      if (!this.fixed && (offset < 0 && offset > downBorder)) {
        this.$car.style.position = "fixed";
        this.$car.style.top = 0;
        this.$car.style.bottom = null;
        this.fixed = true;
      } else if (this.fixed && offset > 0) {
        this.$car.style.position = "absolute";
        this.$car.style.top = 0;
        this.$car.style.bottom = null;
        this.fixed = false;
      } else if (this.fixed && offset < downBorder) {
        this.$car.style.position = "absolute";
        this.$car.style.top = null;
        this.$car.style.bottom = 0;
        this.fixed = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.$car = this.$el.querySelector(".car");
    this.$container = this.$el.querySelector(".drop-photo-container");
    this.fixed = false;

    let offset = this.$container.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

    let height = this.$container.getBoundingClientRect().height - this.$car.getBoundingClientRect().height;

    const myScrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      scrollSource: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: [
        new CSSUnitValue(offset, 'px'),
        new CSSUnitValue(offset + height * 0.3, 'px'),
        new CSSUnitValue(offset + height * 0.6, 'px'),
        new CSSUnitValue(offset + height * 0.99, 'px'),
      ],
    });

    this.$el.querySelector(".drop-photo-image").animate(
        {
          transform: ["scale(1)", "scale(0.6)", "scale(0.6)", "scale(0.7)"],
          opacity: [0.7, 1, 1, 0.25]
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

  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
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