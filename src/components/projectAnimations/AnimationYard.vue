<template>
  <div>
    <div class="drop-photo-container">
      <div class="car">
        <PartName :show="20" :text="data.name" :tire="false" :theme="'accent'" class="yard-name"/>
        <!--        <div :style="'background-image: url('+ data.image +');'" class="yard-image"></div>-->
        <div class="yard-image-container">
          <img :src="data.image" class="yard-image">
        </div>
        <div class="yard-slider">
          <div class="yard-slider-car">

            <div class="yard-slider-item-container" v-for="item in data.components" >
              <h1 class="yard-slider-item-name">{{ item.name }}</h1>
              <div class="yard-slider-item-row">
                <div class="yard-slider-item-image"
                     :style="'background-image: url('+ item.image +');'"></div>
                <div class="yard-description-container">
                  <div class="yard-slider-item-sub-image-container">
                    <div class="yard-slider-item-sub-image" v-for="subImage in item.subImages"
                         :style="'background-image: url('+ subImage +');'"></div>
                  </div>
                  <h1 class="yard-slider-item-description">{{ item.description }}</h1>
                </div>
              </div>
            </div>


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
  name: "AnimationYard",
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

    let sliderCar = this.$el.querySelector('.yard-slider-car');
    let offset = sliderCar.getBoundingClientRect().width - window.innerWidth;

    if (offset <= 0) {
      offset = 0
    }

    this.$container.style = `height: calc(100vh + ${offset}px)`;

    this.bindScroll = new BindScroll(this.$container, this.$car);

    this.bindScrollTimeline = new BindScrollTimeline(
        this.$container,
        this.$car,
        [0, 1],
        [
          {
            $elements: [this.$el.querySelector('.yard-slider-car')],
            keyframes: {
              transform: ['translateX(0px)', `translateX(-${offset}px)`]
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

.drop-photo-container {
  height: 100vh;
  margin-bottom: 3em;
}

.car {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  /*flex-direction: column;*/
  /*justify-content: center;*/

}

.yard-name {
  position: absolute;
  top: 8em;
  transform: translateX(-50%);
  left: 50%;
  width: 80%;
  display: flex;
  justify-content: center;
}

.yard-image-container {
  /*width: 100vw;*/
  position: absolute;
  top: 15em;
  transform: translateX(-50%);
  left: 50%;
}

.yard-image {
  height: 35vh;
  background-position: center;
  background-size: cover;

}

.yard-slider {
  width: 100vw;
  height: 30vh;
  overflow-x: clip;

  position: absolute;
  bottom: 4em;
}

.yard-slider-car {
  width: max-content;
  height: 100%;
  display: flex;
}

.yard-slider-item-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  margin-right: 2em;
}

.yard-slider-item-container:last-child {
  margin-right: 0;
}

.yard-slider-item-container:nth-child(1) {
  margin-left: 2em;
}

.yard-slider-item-name {
  margin-bottom: 0.7em;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  line-height: 1em;
  color: var(--vt-c-white);
}

.yard-slider-item-row {
  display: flex;
}

.yard-slider-item-description {
  white-space: break-spaces;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2em;
  line-height: 1.1em;

  color: var(--vt-c-white)

}


.yard-slider-item-image {
  margin-right: 2em;
  height: calc(25vh - 3em);
  width: calc(25vh - 3em);

  background-color: #EAFFAC;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}


.yard-slider-item-sub-image-container {
  display: flex;
  margin-bottom: 1em;
}

.yard-description-container {
  display: flex;
  flex-direction: column;
  width: 300px;
}


.yard-slider-item-sub-image {
  height: 3em;
  width: 3em;
  border-radius: 10px;
  margin-right: 1em;
}


@media (max-width: 576px) {
  .yard-image-container {
    top: 16em;
  }

  .yard-image {
    width: 70vw;
  }

  .yard-slider {
    bottom: 6em;
  }

  .yard-description-container {
    width: 180px;
  }
}


</style>