<template>
  <div>
    <div class="drop-photo-container" style="min-height: 300vh">
      <div class="car animation-container">

        <div class="animation-container-1">
          <div class="animation-1-container">
            <div class="animation-1" :style="'background-image: url('+ data.image1 +');'">
              <h1 class="image-text">{{ data.description1 }}</h1>
            </div>
          </div>

          <div class="animation-2-container">
            <div class="animation-2" :style="'background-image: url('+ data.image2 +');'">
              <h1 class="image-text">{{ data.description2 }}</h1>
            </div>
          </div>
        </div>

        <div class="animation-container-2">
          <div class="animation-3-container">
            <div class="animation-3" :style="'background-image: url('+ data.image3 +');'">
              <h1 class="image-text">{{ data.description3 }}</h1>
            </div>
          </div>
          <div class="animation-4-container">
            <div class="animation-4 image-text-left" :style="'background-image: url('+ data.image4 +');'">
              <h1 class="image-text">{{ data.description4 }}</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationFourPhotosScroll',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    onScroll: function (e) {
      const offset = this.$container.getBoundingClientRect().y
      const height = this.$container.getBoundingClientRect().height
      const carHeight = this.$car.getBoundingClientRect().height

      const downBorder = -height + carHeight

      if (!this.fixed && (offset < 0 && offset > downBorder)) {
        this.$car.style.position = 'fixed'
        this.$car.style.top = 0
        this.$car.style.bottom = null
        this.fixed = true
      } else if (this.fixed && offset > 0) {
        this.$car.style.position = 'absolute'
        this.$car.style.top = 0
        this.$car.style.bottom = null
        this.fixed = false
      } else if (this.fixed && offset < downBorder) {
        this.$car.style.position = 'absolute'
        this.$car.style.top = null
        this.$car.style.bottom = 0
        this.fixed = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.$car = this.$el.querySelector('.car')
    this.$container = this.$el.querySelector('.drop-photo-container')
    this.fixed = false

    const offset = this.$container.getBoundingClientRect().top - document.body.getBoundingClientRect().top

    const height = this.$container.getBoundingClientRect().height - this.$car.getBoundingClientRect().height

    const myScrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      scrollSource: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: [
        new CSSUnitValue(offset, 'px'),
        new CSSUnitValue(offset + height * 0.6, 'px'), // images
        new CSSUnitValue(offset + height * 0.9, 'px') // text
      ]
    })

    this.$el.querySelector('.animation-1').animate(
      {
        height: ['100%', '100%', '100%'],
        width: ['55%', '40%', '40%'],
        transform: ['translate(40%, 15%)', 'translate(0, 0)', 'translate(0, 0)']
      },
      {
        duration: 1, fill: 'forwards', timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.animation-2').animate(
      {
        height: ['115%', '100%', '100%'],
        width: ['35%', '60%', '60%'],
        transform: ['translate(50%, -10%)', 'translate(0, 0)', 'translate(0, 0)']
      },
      {
        duration: 1, fill: 'forwards', timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.animation-3').animate(
      {
        height: ['100%', '100%', '100%'],
        width: ['90%', '90%', '90%'],
        transform: ['translate(20%, 80%)', 'translate(0, 0)', 'translate(0, 0)']
      },
      {
        duration: 1, fill: 'forwards', timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.animation-4').animate(
      {
        height: ['110%', '100%', '100%'],
        width: ['90%', '100%', '100%'],
        transform: ['translate(-170%, -40%)', 'translate(0, 0)', 'translate(0, 0)']
      },
      {
        duration: 1, fill: 'forwards', timeline: myScrollTimeline
      }
    )

    this.$el.querySelectorAll('.image-text').forEach((e) => e.animate(
      {
        opacity: [0, 0, 1]
      },
      {
        duration: 1, fill: 'forwards', timeline: myScrollTimeline
      }
    ))
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll)
    this.$car.style.position = 'absolute'
    this.$car.style.top = 0
    this.$car.style.bottom = null
    this.fixed = false
    // this.$el.querySelector(".animation-1").animate(null);
    // this.$el.querySelector(".animation-2").animate(null);
    // this.$el.querySelector(".animation-3").animate(null);
    // this.$el.querySelector(".animation-4").animate(null);
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
  height: 40%;
}

.animation-1-container {
  height: 55%;
  margin-bottom: 3em;
  width: 100%;
}

.animation-2-container {
  height: calc(45% - 3em);
  width: 100%;
}

.animation-container-1 {
  height: 80%;
  width: 50vw;
}

.animation-3-container {
  margin-top: 3em;
  width: 25vw;
  height: 40%;
  margin-bottom: 3em;
}

.animation-4-container {
  height: 40%;
  width: 25vw;
}

.animation-container-2 {
  height: 80%;
  width: 50vw;
  margin-left: 3em;
}

.animation-1, .animation-2, .animation-3, .animation-4 {
  position: absolute;
  width: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center center;
}

.animation-1 {
  height: 100%;
  margin-left: 60%;
  width: 40%;
  z-index: 3;
}

.animation-2 {
  height: 100%;
  margin-left: 40%;
  width: 60%;
  z-index: 1;
}

.animation-3 {
  height: 100%;
  width: 90%;
  z-index: 1;
}

.animation-4 {
  height: 100%;
  width: 100%;
  z-index: 0;
}

.image-text {
  position: absolute;
  top: calc(100% + 1em);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;

  color: var(--vt-c-white);
  animation: animation-text 4s infinite alternate;
}

.image-text-top {
  top: -1em;
}

.image-text-left {
  display: flex;
  justify-content: flex-end;
}

</style>
