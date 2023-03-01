<template>
  <div>
    <div class="drop-photo-container" style="min-height: 300vh">
      <div class="car">
        <div class="animation-container">
          <div class="animation-1-container">
            <div class="animation-1 image-text-left" :style="'background-image: url('+ data.image1 +');'">
              <h1 class="image-text">{{ data.description1 }}</h1>
            </div>
          </div>

          <div class="animation-2-container">
            <div class="animation-2 image-text-left" :style="'background-image: url('+ data.image2 +');'">
              <h1 class="image-text">{{ data.description2 }}</h1>
            </div>
          </div>

          <div class="animation-3-container">
            <div class="animation-3" :style="'background-image: url('+ data.image3 +');'">
              <h1 class="image-text">{{ data.description3 }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationThreePhotosScroll",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
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
    this.fixed = false;window.addEventListener("scroll", this.onScroll);
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
        new CSSUnitValue(offset + height * 0.6, 'px'), // images
        new CSSUnitValue(offset + height * 1, 'px'), // text
      ],
    });

    this.$el.querySelector(".animation-1").animate(
        {
          height: ['30vw', '40vh', '40vh'],
          width: ['25vw', '30vw', '30vw'],
          transform: ["translate(20vw, -40vh)", "translate(0, 0)", "translate(0, 0)"],
        },
        {
          duration: 1, fill: "forwards", timeline: myScrollTimeline
        }
    );


    this.$el.querySelector(".animation-2").animate(
        {
          height: ['50vh', '50vh', '50vh'],
          width: ['25vw', '25vw', '25vw'],
          transform: ["translate(20vw, 5vh)", "translate(0, 0)", "translate(0, 0)"],
        },
        {
          duration: 1, fill: "forwards", timeline: myScrollTimeline
        }
    );

    this.$el.querySelector(".animation-3").animate(
        {
          height: ['30vw', '25vw', '25vw'],
          width: ['25vw', '25vw', '25vw'],
          transform: ["translate(-27vw, -5vh)", "translate(0, 0)", "translate(0, 0)"],
        },
        {
          duration: 1, fill: "forwards", timeline: myScrollTimeline
        }
    );

    this.$el.querySelectorAll(".image-text").forEach((e) => e.animate(
        {
          opacity: [0, 0, 1],
        },
        {
          duration: 1, fill: "forwards", timeline: myScrollTimeline
        }
    ))
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
    this.$car.style.position = "absolute";
    this.$car.style.top = 0;
    this.$car.style.bottom = null;
    this.fixed = false;
    // this.$el.querySelector(".animation-1").animate(null);
    // this.$el.querySelector(".animation-2").animate(null);
    // this.$el.querySelector(".animation-3").animate(null);
    // this.$el.querySelectorAll(".image-text").forEach((e) => e.animate(null));
  }
}
</script>

<style scoped>
.car {
  width: 100vw;
}

.animation-container {
  /*margin-left: 10vw;*/
  /*margin-right: 10vw;*/
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-1-container, .animation-2-container, .animation-3-container {
  height: 100%;
}

.animation-1-container {
  width: 30vw;
}

.animation-2-container {
  margin-left: 2em;
  width: 25vw;
}

.animation-3-container {
  margin-left: 2em;
  width: 25vw;
}

.animation-1, .animation-2, .animation-3 {
  position: absolute;
  width: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
}

.animation-1 {
  top: 50vh;
  height: 40vh;
  z-index: 1;
}

.animation-2 {
  top: 15vh;
  height: 50vh;
  z-index: 3;

}

.animation-3 {
  margin-top: 40vh;
  height: 25vw;
  z-index: 2;
}

.image-text {
  position: absolute;
  top: calc(100% + 1em);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;

  color: var(--vt-c-white);
}

.image-text-left {
  display: flex;
  justify-content: flex-end;
}
</style>