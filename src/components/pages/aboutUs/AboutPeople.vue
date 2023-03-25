<template>
  <div class="people-container">
    <div class="image">
      <img class="image-people" src="../../../assets/images/about-peoples/Svetlana.png" v-if="image === 'Svetlana'"
           alt="GARDT Svetlana"/>
      <img class="image-people" src="../../../assets/images/about-peoples/Sergey.png" v-if="image === 'Sergey'"
           alt="GARDT Sergey"/>
      <img class="image-background" src="../../../assets/images/about-peoples/Background.svg" alt="GARDT Svetlana" v-if="image === 'Svetlana'"/>
      <img class="image-background" src="../../../assets/images/about-peoples/Background2.png" alt="GARDT Sergey" v-if="image === 'Sergey'"/>

    </div>
    <div class="text">
      <div class="title">
        <h1 class="job">
          <span class="name"> {{ name }}</span>
          — {{ job }}
        </h1>
      </div>
      <h1 class="description">
        {{ description }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPeople',
  props: ['name', 'job', 'image', 'description'],
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      if (this.$title === undefined) {
        this.$title = this.$el.querySelector('.image-people')
      }
      const hgParent = this.$title.getBoundingClientRect()
      if (hgParent.y - window.innerHeight / 2 <= 0) {
        this.$el.querySelector('.image').classList.add('anim')
        this.$el.querySelector('.title').classList.add('anim2')
        this.$el.querySelector('.description').classList.add('anim')
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style scoped>
.anim {
  animation: from-down-animate ease-in-out 1s forwards;
}

.anim2 {
  animation: from-right-animate ease-in-out 1s forwards;
}

.people-container {
  display: flex;
}

@media (max-width: 768px) {
  .people-container {
    flex-direction: column;
  }

  .image-people {
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
  }

  .image-background {
    left: calc(50% + 0.2em) !important;
    transform: translateX(-50%);
  }
}

.image-background {
  position: absolute;
  left: 0.2em;
  top: 2em;
  z-index: 0;
}

.image-people {
  z-index: 1;
}

.text {
  margin-left: 3em;
}

.image {
  opacity: 0;
}

.description {
  opacity: 0;
}

.title {
  margin-bottom: 3em;
  opacity: 0;
}

.name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
}

.job {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3em;
  line-height: 1.2em;
  color: var(--vt-c-white)
}

.name {
  background: linear-gradient(180deg, #FAFFEB -11.44%, #EFEFEF -11.44%, #EFEFEF -11.43%, #C8FF29 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2em;
  line-height: 1.15em;
  width: 90%;

  background: linear-gradient(180deg, rgba(239, 239, 239, 0.8) 0%, rgba(239, 239, 239, 0.15) 97.92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.image-people {
  max-height: 32em;
}

.image-background {
  max-height: 31em;
}

</style>
