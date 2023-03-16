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
import {BindScroll, BindScrollTimeline} from "@/components/projectAnimations/animationTools";

export default {
  name: 'AnimationThreePhotosScroll',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.$car = this.$el.querySelector('.car')
    this.$container = this.$el.querySelector('.drop-photo-container')

    this.bindScroll = new BindScroll(this.$container, this.$car);
    this.bindScrollTimeline = new BindScrollTimeline(
        this.$container,
        this.$car,
        [0, 0.6, 0.9],
        [
          {
            $elements: [this.$el.querySelector('.animation-1')],
            keyframes: {
              height: ['30vw', '40vh', '40vh'],
              width: ['25vw', '30vw', '30vw'],
              transform: ['translate(20vw, -40vh)', 'translate(0, 0)', 'translate(0, 0)']
            }
          },
          {
            $elements: [this.$el.querySelector('.animation-2')],
            keyframes: {
              height: ['50vh', '50vh', '50vh'],
              width: ['25vw', '25vw', '25vw'],
              transform: ['translate(20vw, 5vh)', 'translate(0, 0)', 'translate(0, 0)']
            }
          },
          {
            $elements: [this.$el.querySelector('.animation-3')],
            keyframes: {
              height: ['30vw', '25vw', '25vw'],
              width: ['25vw', '25vw', '25vw'],
              transform: ['translate(-27vw, -5vh)', 'translate(0, 0)', 'translate(0, 0)']
            }
          },
          {
            $elements: this.$el.querySelectorAll('.image-text'),
            keyframes: {
              opacity: [0, 0, 1]
            }
          }
        ]
    )
  },
  unmounted() {
    this.bindScroll.unbind();
    this.bindScrollTimeline.unbind();
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
