<template>
  <div>
    <PartName v-if="data.name !== undefined" :text="data.name" show=20 theme="accent" class="main-outside"/>
    <div class="drop-photo-container" style="min-height: 200vh">
      <div class="car">
        <div style="height: 100vh">
          <div class="drop-photo-image" :style="'background-image: url('+data.image+')'"></div>
          <h1 class="drop-photo-text">{{ data.description }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/js/scroll-timeline.js'
import PartName from '@/components/ui/PartName.vue'
import {BindScroll, BindScrollTimeline} from "@/components/projectAnimations/animationTools";

export default {
  name: 'AnimationDropPhotoScroll',
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

    let _keyframes = {
      transform: ['scale(1)', 'scale(0.6)', 'scale(0.6)', 'scale(0.7)'],
      opacity: [0.7, 1, 1, 0.25]
    };
    if (window.innerWidth < 576) {
      _keyframes = {
        height: ['100vh', '100vh', '50vh', '50vh'],
        opacity: [0.7, 1, 1, 0.25]
      };
    }

    this.bindScroll = new BindScroll(this.$container, this.$car);
    this.bindScrollTimeline = new BindScrollTimeline(
        this.$container,
        this.$car,
        [0, 0.3, 0.5, 0.9],
        [
          {
            $elements: [this.$el.querySelector('.drop-photo-image')],
            keyframes: _keyframes
          },
          {
            $elements: [this.$el.querySelector('.drop-photo-text')],
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
.car {
  width: 100vw;
}

.drop-photo-image {
  height: 100vh;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

@media (max-width: 576px) {
  .drop-photo-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
  }
}


.drop-photo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 4.5vw;
  line-height: 1.15em;
  color: var(--vt-c-white);

  text-align: center;
}

</style>
