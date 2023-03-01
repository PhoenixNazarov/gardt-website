<template>
  <div>
    <div class="drop-photo-container" style="min-height: 300vh">
      <div class="car animation-container">
        <div class="animation-container-1">
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
        </div>
        <div class="animation-3-container">
          <div class="animation-3" :style="'background-image: url('+ data.image3 +');'">
            <h1 class="image-text">{{ data.description3 }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationThreePhotosDoubleOneScroll",
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
        new CSSUnitValue(offset + height * 0.9, 'px'), // text
      ],
    });

    this.$el.querySelector(".animation-1").animate(
        {
          height: ['150%', '100%', '100%'],
          width: ['50%', '60%', '60%'],
          transform: ["translate(90%, 20%)", "translate(0, 0)", "translate(0, 0)"],
        },
        {
          duration: 1, fill: "forwards", timeline: myScrollTimeline
        }
    );


    this.$el.querySelector(".animation-2").animate(
        {
          height: ['150%', '100%', '100%'],
          width: ['50%', '60%', '60%'],
          transform: ["translate(50%, -70%)", "translate(0, 0)", "translate(0, 0)"],
        },
        {
          duration: 1, fill: "forwards", timeline: myScrollTimeline
        }
    );

    this.$el.querySelector(".animation-3").animate(
        {
          height: ['55vh', '50vh', '50vh'],
          width: ['80%', '100%', '100%'],
          transform: ["translate(-100%, 10%)", "translate(0, 0)", "translate(0, 0)"],
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
.animation-container {
  /*margin-left: 10vw;*/
  /*margin-right: 10vw;*/
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-3-container {
  height: 100%;
}

.animation-1-container {
  height: 50%;
  margin-bottom: 2em;
  width: 100%;
}

.animation-2-container {
  height: 50%;
  width: 100%;
}

.animation-container-1 {
  height: 80%;
  width: 50vw;
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
  height: 100%;
  margin-left: 40%;
  width: 60%;
  background-image: url("../../assets/images/main-slider/1.jpg");
  /*animation: animation-1 4s infinite alternate;*/
  z-index: 3;
}

@keyframes animation-1 {
  0% {
    height: 150%;
    width: 50%;
    transform: translate(90%, 20%);
  }
  50% {
    height: 100%;
    width: 60%;
    transform: translate(0, 0);
  }
}

.animation-2 {
  height: 100%;
  margin-right: 40%;
  width: 60%;
  z-index: 1;
}

@keyframes animation-2 {
  0% {
    height: 150%;
    width: 50%;
    transform: translate(50%, -70%);
  }
  50% {
    height: 100%;
    width: 60%;
    transform: translate(0, 0);
  }
}

.animation-3 {
  margin-top: 30vh;
  height: 50vh;
  background-image: url("../../assets/images/main-slider/4.jpg");
  /*animation: animation-3 4s infinite alternate;*/
  z-index: 2;
}

@keyframes animation-3 {
  0% {
    height: 55vh;
    width: 80%;
    transform: translate(-100%, 10%);
  }
  50% {
    height: 50vh;
    width: 100%;
    transform: translate(0, 0);
  }
}

.image-text {
  position: absolute;
  top: calc(100% + 1em);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;

  color: var(--vt-c-white);
  /*animation: animation-text 4s infinite alternate;*/
}

@keyframes animation-text {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.image-text-left {
  display: flex;
  justify-content: flex-end;
}


</style>