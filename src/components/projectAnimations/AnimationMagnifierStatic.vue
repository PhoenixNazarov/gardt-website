<template>
  <div class="main-container">
    <div>

      <div class="container">
        <div style="display: flex; flex-direction: column;">
          <PartName v-if="data.name !== undefined" :text="data.name" :tire="false" show=20 theme="accent"/>
          <div class="image" :style="`background-image: url(${data.image})`"/>
        </div>
        <div class="image-loop">
            <img class="big-image" :src="data.bigImage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartName from '@/components/ui/PartName.vue'

export default {
  name: 'AnimationMagnifierStatic',
  components: { PartName },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.main-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center
}

.container {
  display: flex;
  justify-content: center;
}

.image {
  margin-top: 20px;
  height: 50vh;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.image-loop {
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
  width: 20vw;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

.big-image {
  position: absolute;
  height: 50vh;
  border-radius: 10px;
}

@media (max-width: 576px) {
  .image-loop {
    display: none;
  }
  .image {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
  }
  .main-container {
    height: 70vh;
  }
}

</style>
