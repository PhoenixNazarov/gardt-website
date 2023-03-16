<template>
  <div>
    <div class="drop-photo-container">
      <div class="car">
        <div class="car-frame-1-container">
          <div class="drop-photo-image" :style="'background-image: url('+data.image+')'"></div>
          <div class="drop-photo-text-container">
            <h1 class="drop-photo-text">{{ data.description1 }}</h1>
            <h1 class="drop-photo-text-title">{{ data.name1 }}</h1>
            <h1 class="drop-photo-text-desc">{{ data.description2 }}</h1>
          </div>
        </div>
<!--        <div class="car-frame-2-container">-->
<!--          <div class="frame-2-image" v-for="item in data.principles" :key="item">-->
<!--            <img class="frame-2-image-inner" :src="item[0]" :alt="item[1]"/>-->
<!--            <h1 class="image-desc">{{ item[2] }}</h1>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationPhotoDescriptionMobile",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.drop-photo-container {
  margin-top: 10em;
}

.drop-photo-image {
  height: 60vh;
  width: 80vw;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;

  background-size: cover;
  background-position: center;
}


.drop-photo-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2em;
  line-height: 1.6em;
  color: var(--vt-c-white);
}

.drop-photo-text-title {
  margin-top: 2em;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  line-height: 1em;

  background: linear-gradient(180deg, #FFFFFF -12.66%, #F9FFE9 -12.65%, #C8FF29 87.84%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.drop-photo-text-desc {
  margin-top: 1em;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.15em;
  line-height: 1.5em;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.drop-photo-text-container {
  width: 66vw;
  margin-top: 3em;
  margin-left: auto;
  margin-right: auto;
}

</style>