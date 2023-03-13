<template>
  <div>
    <PartName v-if="data.name !== undefined" :text="data.name" show=20 theme="light" class="main-outside"/>
    <div class="drop-photo-container" :style="'height: '+data.height+'vh'">
      <div class="car">
        <div class="container" style="height: 100vh; overflow-x: clip">
          <img class="anim" :src=item.image v-for="item in data.images"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from '@/components/ui/PartName.vue'

export default {
  name: 'AnimationOpacityScroll',
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

    const offsets = []

    for (let i = 0; i < this.data.matrix[0].length; i++) {
      offsets.push(new CSSUnitValue(offset + height * (i / this.data.matrix[0].length), 'px'))
    }

    const myScrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: offsets
    })

    const $imgs = this.$el.querySelectorAll('.anim')

    for (let i = 0; i < this.data.matrix.length; i++) {
      $imgs[i].animate(
        {
          opacity: this.data.matrix[i]
        },
        {
          duration: 1,
          fill: 'forwards',
          timeline: myScrollTimeline
        }
      )
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
}

.anim {
  height: 70vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
