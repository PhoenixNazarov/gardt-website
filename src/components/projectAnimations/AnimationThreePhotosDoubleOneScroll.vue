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
import {BindScroll, BindScrollTimeline} from "@/components/projectAnimations/animationTools";

export default {
  name: 'AnimationThreePhotosDoubleOneScroll',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$car = this.$el.querySelector('.car')
    this.$container = this.$el.querySelector('.drop-photo-container')
    this.bindScroll = new BindScroll(this.$container, this.$car);


    let keyframes1 = {
      height: ['150%', '100%', '100%'],
      width: ['50%', '60%', '60%'],
      transform: ['translate(90%, 20%)', 'translate(0, 0)', 'translate(0, 0)']
    }
    let keyframes2 = {
      height: ['150%', '100%', '100%'],
      width: ['50%', '60%', '60%'],
      transform: ['translate(50%, -70%)', 'translate(0, 0)', 'translate(0, 0)']
    }
    let keyframes3 = {
      height: ['55vh', '50vh', '50vh'],
      width: ['80%', '100%', '100%'],
      transform: ['translate(-100%, 10%)', 'translate(0, 0)', 'translate(0, 0)']
    }

    if (window.innerWidth < 576) {
      keyframes1 = {
        height: ['50%', '60%', '60%'],
        width: ['120%', '100%', '100%'],
        transform: ['translate(20%, 80%)', 'translate(0, 0)', 'translate(0, 0)']
      }
      keyframes2 = {
        height: ['50%', '60%', '60%'],
        width: ['120%', '100%', '100%'],
        transform: ['translate(50%, -30%)', 'translate(0, 0)', 'translate(0, 0)']
      }
      keyframes3 = {
        height: ['15vh', '20vh', '20vh'],
        width: ['150%', '200%', '200%'],
        transform: ['translate(-160%, 100%)', 'translate(-40%, 20%)', 'translate(-40%, 20%)']
      }
    }


      this.bindScrollTimeline = new BindScrollTimeline(
        this.$container,
        this.$car,
        [0, 0.6, 0.9],
        [
          {
            $elements: [this.$el.querySelector('.animation-1')],
            keyframes: keyframes1
          },
          {
            $elements: [this.$el.querySelector('.animation-2')],
            keyframes: keyframes2
          },
          {
            $elements: [this.$el.querySelector('.animation-3')],
            keyframes: keyframes3
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
  unmounted () {
    this.bindScroll.unbind();
    this.bindScrollTimeline.unbind();
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

.animation-2 {
  height: 100%;
  margin-right: 40%;
  width: 60%;
  z-index: 1;
}


.animation-3 {
  margin-top: 30vh;
  height: 50vh;
  background-image: url("../../assets/images/main-slider/4.jpg");
  /*animation: animation-3 4s infinite alternate;*/
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
  /*animation: animation-text 4s infinite alternate;*/
}

.image-text-left {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 576px) {
  .animation-1 {
    margin-left: 0;
    justify-content: start;
  }
  .animation-3 {
    z-index: 4;
  }
  .animation-3 {
    margin-left: 0;
    display: flex;
    justify-content: flex-end !important;
  }
  .image-text {
    line-height: 1.5em;
  }
}

</style>
