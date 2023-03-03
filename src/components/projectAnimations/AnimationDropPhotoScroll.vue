<template>
  <div>
    <PartName v-if="data.name !== undefined" :text="data.name" show=20 theme="light" class="main-outside"/>
    <div class="drop-photo-container" style="min-height: 300vh">
      <div class="car">
        <div class="drop-photo-image" :style="'background-image: url('+data.image+')'"></div>
        <h1 class="drop-photo-text">{{ data.description }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/js/scroll-timeline.js'
import PartName from '@/components/ui/PartName.vue'

export default {
  name: 'AnimationDropPhotoScroll',
  components: { PartName },
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
      orientation: 'block',
      scrollOffsets: [
        new CSSUnitValue(offset, 'px'),
        new CSSUnitValue(offset + height * 0.3, 'px'),
        new CSSUnitValue(offset + height * 0.6, 'px'),
        new CSSUnitValue(offset + height * 0.99, 'px')
      ]
    })

    this.$el.querySelector('.drop-photo-image').animate(
      {
        transform: ['scale(1)', 'scale(0.6)', 'scale(0.6)', 'scale(0.7)'],
        opacity: [0.7, 1, 1, 0.25]
      },
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.drop-photo-text').animate(
      {
        opacity: [0, 0, 0, 1]
      },
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll)
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
}

.drop-photo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 5em;
  line-height: 1.15em;
  color: var(--vt-c-white);

  text-align: center;
}

</style>
