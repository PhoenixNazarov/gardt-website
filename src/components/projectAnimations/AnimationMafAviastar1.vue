<template>
  <div>
    <div class="drop-photo-container">
      <div class="car">
        <PartName :show="20" :text="data.name" :tire="false" :theme="'accent'" class="name"/>

        <div class="slide1">
          <h1 class="slide1-name">{{ data.slide1.name }}</h1>
          <div class="slide1-container">
            <div class="slide1-image1-container">
              <div class="slide1-image" :style="'background-image: url('+ data.slide1.image1 +');'"></div>
              <h1 class="slide1-desc">{{ data.slide1.description1 }}</h1>
            </div>

            <div class="slide1-image1-container">
              <div class="slide1-image" :style="'background-image: url('+ data.slide1.image2 +');'"></div>
              <h1 class="slide1-desc">{{ data.slide1.description2 }}</h1>
            </div>
          </div>
        </div>

        <div class="slide2">
          <div class="slide2-raw">
            <div class="slide2-container">
              <div :style="'background-image: url('+ data.slide2.image1 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide2.description1 }}</h1>
            </div>
            <div class="slide2-container">
              <div :style="'background-image: url('+ data.slide2.image2 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide2.description2 }}</h1>
            </div>
          </div>
          <div class="slide2-raw">
            <div class="slide2-container">
              <div :style="'background-image: url('+ data.slide2.image3 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide2.description3 }}</h1>
            </div>
            <div class="slide2-container small">
              <div :style="'background-image: url('+ data.slide2.image4 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide2.description4 }}</h1>
            </div>
          </div>
        </div>

        <div class="slide3">
          <div class="slide2-raw">
            <div class="slide2-container">
              <div :style="'background-image: url('+ data.slide3.image1 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide3.description1 }}</h1>
            </div>
            <div class="slide2-container">
              <div :style="'background-image: url('+ data.slide3.image2 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide3.description2 }}</h1>
            </div>
          </div>
          <div class="slide2-raw">
            <div class="slide2-container">
              <div :style="'background-image: url('+ data.slide3.image4 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide3.description4 }}</h1>
            </div>
            <div class="slide2-container small">
              <div :style="'background-image: url('+ data.slide3.image5 +');'" class="slide2-image"/>
              <h1 class="slide2-desc">{{ data.slide3.description5 }}</h1>
            </div>
          </div>


          <div class="slide2-container slide3-container">
            <div :style="'background-image: url('+ data.slide3.image3 +');'" class="slide2-image"/>
            <h1 class="slide2-desc">{{ data.slide3.description3 }}</h1>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {BindScroll, BindScrollTimeline} from "@/components/projectAnimations/animationTools";
import PartName from "@/components/ui/PartName.vue";

export default {
  name: "AnimationMafAviastar1",
  components: {PartName},
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
        [0, 0.4, 0.6, 1],
        [
          {
            $elements: [this.$el.querySelector('.slide1')],
            keyframes: {
              opacity: [1, 0, 0, 0]
            }
          },
          {
            $elements: [this.$el.querySelector('.slide2')],
            keyframes: {
              opacity: [0, 1, 1, 0]
            }
          },
          {
            $elements: [this.$el.querySelector('.slide3')],
            keyframes: {
              opacity: [0, 0, 0, 1]
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
.name {
  position: absolute;
  top: 8em;
  transform: translateX(-50%);
  left: 50%;
  width: 80%;
  display: flex;
  justify-content: center;
}

.car {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

.drop-photo-container {
  height: 300vh;
}

.slide1, .slide2, .slide3 {
  position: absolute;
  top: 15em;
  left: 50%;
  transform: translateX(-50%);
}

.slide1-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  line-height: 1.5em;
  color: var(--vt-c-white);

  text-align: center;
  margin-bottom: 20px;
}

.slide1-container {
  display: flex;
}

.slide1-image {
  width: 20vw;
  height: 20vw;
  margin-bottom: 20px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
}

.slide1-image1-container:nth-child(1) {
  margin-right: 10px;
}

.slide1-image1-container:nth-child(2) {
  margin-left: 10px;
}

.slide1-desc {
  width: 20vw;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5em;
  color: var(--vt-c-white);
}

.slide1, .slide2 {
  opacity: 0;
}

.slide2-image, .slide2-desc {
  width: 20em;
}

.slide2-image {
  height: 15em;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.slide2 {
  display: flex;
  flex-direction: column;
}

.slide2-raw {
  display: flex;
  margin-bottom: 2em;
}

.slide2-container {
  display: flex;
  flex-direction: column;
}

.slide2-container:nth-child(1) {
  margin-right: 7em;
}

.slide2-container:nth-child(2) {
  margin-left: 7em;
}

.slide2-desc {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.5em;
  color: var(--vt-c-white);
  text-align: center;
}

.slide3-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 576px) {
  .slide1-image {
    width: 40vw;
    height: 40vw;
  }
  .slide1-desc {
    width: 40vw;
    font-size: 1.2em;
  }
  .slide1 {
    top: 30vh;
  }

  .slide2-raw {
    flex-direction: column;
  }

  .slide2-container:nth-child(1) {
    margin-right: 0;
  }

  .slide2-container:nth-child(2) {
    margin-left: 0;
  }

  .slide3-container {
    display: none;
  }
}
@media (max-height: 830px) and (max-width: 576px) {
  .small {
    display: none;
  }
}

</style>