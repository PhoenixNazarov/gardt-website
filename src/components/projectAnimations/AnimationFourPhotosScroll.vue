<template>
  <div>
    <div class="drop-photo-container" style="min-height: 300vh">
      <div class="car animation-container">

        <div class="animation-container-1">
          <div class="animation-1-container">
            <div class="animation-1" :style="'background-image: url('+ data.image1 +');'"
                 @click.prevent="modalSetImage(data.image1)">
              <h1 class="image-text">{{ data.description1 }}</h1>
            </div>
          </div>

          <div class="animation-2-container">
            <div class="animation-2" :style="'background-image: url('+ data.image2 +');'"
                 @click.prevent="modalSetImage(data.image2)">
              <h1 class="image-text">{{ data.description2 }}</h1>
            </div>
          </div>
        </div>

        <div class="animation-container-2">
          <div class="animation-3-container">
            <div class="animation-3" :style="'background-image: url('+ data.image3 +');'"
                 @click.prevent="modalSetImage(data.image3)">
              <h1 class="image-text">{{ data.description3 }}</h1>
            </div>
          </div>
          <div class="animation-4-container">
            <div class="animation-4 image-text-left" :style="'background-image: url('+ data.image4 +');'"
                 @click.prevent="modalSetImage(data.image4)">
              <h1 class="image-text">{{ data.description4 }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AnimationPhotoModal :image="this.modalImage" :status="this.modalStatus" @modalChangeStatus="(st) => this.modalStatus = st"/>

  </div>
</template>

<script>
import {BindScroll, BindScrollTimeline} from "@/components/projectAnimations/animationTools";
import AnimationPhotoModal from "@/components/projectAnimations/AnimationPhotoModal.vue";

export default {
  name: 'AnimationFourPhotosScroll',
  components: {AnimationPhotoModal},
  data: function () {
    return {
      modalStatus: "hide",
      modalImage: null
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    modalSetImage(image) {
      this.modalStatus = 'show';
      this.modalImage = image;
    }
  },
  mounted() {
    this.$car = this.$el.querySelector('.car')
    this.$container = this.$el.querySelector('.drop-photo-container')
    this.bindScroll = new BindScroll(this.$container, this.$car);

    let keyframes1 = {
      height: ['100%', '100%', '100%'],
      width: ['55%', '40%', '40%'],
      transform: ['translate(40%, 15%)', 'translate(0, 0)', 'translate(0, 0)']
    }

    let keyframes2 = {
      height: ['115%', '100%', '100%'],
      width: ['35%', '60%', '60%'],
      transform: ['translate(50%, -10%)', 'translate(0, 0)', 'translate(0, 0)']
    }

    let keyframes3 = {
      height: ['100%', '100%', '100%'],
      width: ['90%', '90%', '90%'],
      transform: ['translate(20%, 80%)', 'translate(0, 0)', 'translate(0, 0)']
    }

    let keyframes4 = {
      height: ['110%', '100%', '100%'],
      width: ['90%', '100%', '100%'],
      transform: ['translate(-170%, -40%)', 'translate(0, 0)', 'translate(0, 0)']
    }

    if (window.innerWidth < 576) {
      keyframes1 = {
        height: ['40%', '60%', '60%'],
        width: ['110%', '90%', '90%'],
        transform: ['translate(70%, 80%)', 'translate(0, 0)', 'translate(0, 0)']
      };

      keyframes2 = {
        height: ['100%', '60%', '60%'],
        width: ['110%', '90%', '90%'],
        transform: ['translate(20%, -10%)', 'translate(0, 1vh)', 'translate(0, 1vh)']
      }

      keyframes3 = {
        height: ['100%', '100%', '100%'],
        width: ['100%', '90%', '90%'],
        transform: ['translate(10%, 60%)', 'translate(0, 0)', 'translate(0, 0)']
      }

      keyframes4 = {
        height: ['100%', '80%', '80%'],
        width: ['120%', '100%', '100%'],
        transform: ['translate(-100%, -50%)', 'translate(0, 1vh)', 'translate(0, 1vh)']
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
            $elements: [this.$el.querySelector('.animation-4')],
            keyframes: keyframes4
          },
          {
            $elements: this.$el.querySelectorAll('.image-text'),
            keyframes: {
              opacity: [0, 0, 1]
            }
          },
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


@media (max-width: 576px) {
  .animation-1-container {
    height: 55%;
    margin-bottom: 3em;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }

  .animation-1 {
    margin-left: 10%;
  }

  .animation-2-container {
    height: calc(45% - 3em);
    width: 100%;
  }

  .animation-2 {
    margin-left: 10%;
  }

  .animation-3-container {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 3em;
    width: 40vw;
    height: 30%;
    margin-bottom: 3em;
  }

  .animation-4-container {
    height: 30%;
    width: 40vw;
  }


  .image-text {
    line-height: 1em;
  }
}

</style>
