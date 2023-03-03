<template>
  <div style="height: 100vh">
    <div class="container">
      <img class="image" src="../../assets/images/main-slider/1.jpg"/>

      <div class="image-loop">
        <img class="big-image" src="../../assets/images/main-slider/1.jpg"/>
<!--        <div-->
<!--            style="position: absolute; top: calc(50% - 2px); left: calc(50% - 2px); width: 2px; height: 2px; background: #FF3838"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
import PartName from '@/components/ui/PartName.vue'

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
export default {
  name: 'AnimationMagnifier',
  components: { PartName },
  mounted () {
    this.$el.querySelector('.image').onmousemove = this.onMove

    this.$loop = this.$el.querySelector('.image-loop')
    this.$imageBig = this.$el.querySelector('.big-image')
  },
  unmounted () {
    this.$el.querySelector('.image').onmousemove = null
  },
  methods: {
    onMove: function (event) {
      const x = event.layerX
      const y = event.layerY

      if (this.width === undefined) {
        this.width = this.$el.querySelector('.image').getBoundingClientRect().width
        this.widthBig = this.$imageBig.getBoundingClientRect().width
        this.offsetWidth = this.$loop.getBoundingClientRect().width
      }
      if (this.height === undefined) {
        this.height = this.$el.querySelector('.image').getBoundingClientRect().height
        this.heightLoop = this.$imageBig.getBoundingClientRect().height
        this.offsetHeight = this.$loop.getBoundingClientRect().height
      }

      const offsetXp = x / this.width
      const offsetYp = y / this.height
      const offsetX = clamp(-this.widthBig * offsetXp + this.offsetWidth / 2, -this.widthBig + this.offsetWidth, 0)
      const offsetY = clamp(-this.heightLoop * offsetYp + this.offsetHeight / 2, -this.heightLoop + this.offsetHeight, 0)
      this.$el.querySelector('.big-image').style.top = offsetY + 'px'
      this.$el.querySelector('.big-image').style.left = offsetX + 'px'
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.image {
  margin-left: 20px;
  margin-top: 20px;
  height: 50vh;
  background-size: cover;
  background-position: center;
}

.image-loop {
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
  width: 20vw;
}

.big-image {
  position: absolute;
  height: 80vh;
}

</style>
