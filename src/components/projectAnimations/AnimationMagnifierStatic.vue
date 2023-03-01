<template>
  <div class="main-container">
    <div>

      <div class="container">
        <div style="display: flex; flex-direction: column;">
          <PartName :text="data.name" show=20 theme="light"/>
          <img class="image" :src="data.image"/>
        </div>
        <div class="image-loop">
<!--          <div style="display: flex">-->
            <img class="big-image" :src="data.bigImage"/>
            <!--        <div-->
            <!--            style="position: absolute; top: calc(50% - 2px); left: calc(50% - 2px); width: 2px; height: 2px; background: #FF3838"></div>-->
<!--          </div>-->
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
}

.big-image {
  position: absolute;
  height: 50vh;
  object-fit: cover;
  object-position: center;
}

</style>