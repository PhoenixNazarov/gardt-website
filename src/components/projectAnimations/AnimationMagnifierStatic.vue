<template>
  <div class="main-container">
    <div>

      <div class="container">
        <div style="display: flex; flex-direction: column;">
          <PartName v-if="data.name !== undefined" :text="data.name" show=20 theme="light"/>
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
import PartName from "@/components/ui/PartName.vue";

export default {
  name: "AnimationMagnifierStatic",
  components: {PartName},
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
}

.big-image {
  position: absolute;
  height: 50vh;
}

</style>