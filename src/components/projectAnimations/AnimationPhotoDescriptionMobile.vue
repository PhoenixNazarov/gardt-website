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
        <div class="car-frame-2-container">
          <div class="frame-2-image" v-for="(item, index) in data.principles" :key="item">
            <img class="frame-2-image-inner" @click.prevent="this.setVisible(index)" :src="item[0]" :alt="item[1]"/>
          </div>
        </div>

        <div class="car-frame-3-container">
          <div class="frame-3-text-container hidden" v-for="item in data.principles" :key="item">
            <h1 class="description-i">
              {{ item[2] }}
            </h1>
          </div>
        </div>

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
  methods: {
    setVisible: function (index) {
      this.$el.querySelectorAll('.frame-3-text-container').forEach(
          (el) => el.classList.add("hidden")
      )
      this.$el.querySelectorAll('.frame-3-text-container')[index].classList.remove("hidden")


      this.$el.querySelectorAll('.frame-2-image-inner').forEach(
          (el) => el.classList.remove("active")
      )
      this.$el.querySelectorAll('.frame-2-image-inner')[index].classList.add("active")

    }
  },
  mounted() {
    this.setVisible(0);
  }
}
</script>

<style scoped>
.drop-photo-container {
  margin-top: 10em;
}

.drop-photo-image {
  height: 30vh;
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

.car-frame-1-container {
  margin-bottom: 3em;
}

.car-frame-2-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 66vw;
  margin-left: 14vw;
  margin-right: auto;
}

.frame-2-image-inner {
  height: 35px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
  transition: 0.5s;
}

.frame-2-image-inner.active {
  transform: scale(1.25);
}

.frame-2-image {
  width: calc(66vw / 3);
}

.car-frame-3-container {
  height: 12em;
}

.frame-3-text-container {
  position: absolute;
  width: 66vw;
  left: 17vw;
  transition: 0.5s;
}

.description-i {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.15em;
  line-height: 1.5em;
  color: var(--vt-c-white)
}

.hidden {
  opacity: 0;
}

</style>