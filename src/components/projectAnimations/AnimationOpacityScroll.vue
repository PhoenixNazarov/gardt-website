<template>
  <div>
    <div class="drop-photo-container" :style="'height: '+data.height+'vh'">
      <div class="car">
        <div class="container" style="height: 100vh; overflow-x: clip">
          <PartName v-if="data.name !== undefined" :text="data.name" show=20 theme="accent" :tire="false"
                    class="name"/>
          <h1 class="description">{{ data.description }}</h1>

          <img class="anim" :src=item.image v-for="item in data.images"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from '@/components/ui/PartName.vue'
import {BindScroll, BindScrollTimeline} from "@/components/projectAnimations/animationTools";

export default {
  name: 'AnimationOpacityScroll',
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
    const offsets = []
    const binds = []
    const $imgs = this.$el.querySelectorAll('.anim')

    for (let i = 0; i < this.data.matrix[0].length; i++) {
      offsets.push(i / this.data.matrix[0].length)
    }

    for (let i = 0; i < this.data.matrix.length; i++) {
      binds.push({
        $elements: [$imgs[i]],
        keyframes: {
          opacity: this.data.matrix[i]
        }
      })
    }

    this.bindScrollTimeline = new BindScrollTimeline(
        this.$container,
        this.$car,
        offsets,
        binds
    )
  },
  unmounted() {
    this.bindScroll.unbind();
    this.bindScrollTimeline.unbind();
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
}

.anim {
  width: 80vw;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
}

.name {
  display: flex;
  justify-content: center;
  top: 8em;
  /*width: 90vw;*/
}

.description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 1em;
  color: var(--vt-c-white);
  text-align: center;
  top: 4em;
  margin-right: 10vw;
  margin-left: 10vw;

  width: 80vw;
}

</style>
