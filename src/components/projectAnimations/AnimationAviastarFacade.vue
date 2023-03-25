<template>
  <div>
    <div class="page">
      <img class="main-photo" :src="data.image">
      <div class="pole">
        <div class="green-circle" @click.prevent="show(0)">
        </div>

        <div class="green-circle" @click.prevent="show(1)">
        </div>

        <div class="green-circle" @click.prevent="show(2)">
        </div>

        <div class="green-circle" @click.prevent="show(3)">
        </div>

        <div class="green-circle" @click.prevent="show(4)">
        </div>

        <div class="green-circle" @click.prevent="show(4)">
        </div>

        <div class="green-circle" @click.prevent="show(5)">
        </div>

        <div class="modal-page">
          <h1 class="modal-name">
            {{ data.materials[0].name }}
          </h1>
          <h1 class="modal-description">
            {{ data.materials[0].description }}
          </h1>
          <div class="modal-image" :style="'background-image: url('+data.materials[0].image+')'"></div>
        </div>

        <div class="modal-page">
          <h1 class="modal-name">
            {{ data.materials[1].name }}
          </h1>
          <h1 class="modal-description">
            {{ data.materials[1].description }}
          </h1>
          <div class="modal-image" :style="'background-image: url('+data.materials[1].image+')'"></div>
        </div>

        <div class="modal-page">
          <h1 class="modal-name">
            {{ data.materials[2].name }}
          </h1>
          <h1 class="modal-description">
            {{ data.materials[2].description }}
          </h1>
          <div class="modal-image" :style="'background-image: url('+data.materials[2].image+')'"></div>
        </div>

        <div class="modal-page">
          <h1 class="modal-name">
            {{ data.materials[3].name }}
          </h1>
          <h1 class="modal-description">
            {{ data.materials[3].description }}
          </h1>
          <div class="modal-image" :style="'background-image: url('+data.materials[3].image+')'"></div>
        </div>

        <div class="modal-page">
          <h1 class="modal-name">
            {{ data.materials[4].name }}
          </h1>
          <h1 class="modal-description">
            {{ data.materials[4].description }}
          </h1>
          <div class="modal-image" :style="'background-image: url('+data.materials[4].image+')'"></div>
        </div>

        <div class="modal-page">
          <h1 class="modal-name">
            {{ data.materials[5].name }}
          </h1>
          <h1 class="modal-description">
            {{ data.materials[5].description }}
          </h1>
          <div class="modal-image" :style="'background-image: url('+data.materials[5].image+')'"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationAviastarFacade",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    if (window.innerWidth <= 576) {
      this.show(0);
    }
  },
  methods: {
    show(ind) {
      if (window.innerWidth <= 576) {
        console.log(ind)
        this.$el.querySelectorAll('.modal-page').forEach((el) => el.classList.remove('active'));
        this.$el.querySelectorAll('.modal-page')[ind].classList.add('active');
      }
    }
  }
}
</script>

<style scoped>
.pole {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
}

.main-photo {
  margin-left: 10vw;
  width: 80vw;
  margin-right: 10vw;
}

.page {
  margin-bottom: 10em;
}

.green-circle {
  width: 2.5em;
  height: 2.5em;
  background: var(--vt-c-green);
  border-radius: 25px;
  border: 4px solid var(--vt-c-white);
  position: absolute;
  cursor: pointer;
  z-index: 3;
}

.green-circle:nth-child(1) {
  top: 12vw;
  right: 14vw;
}

.green-circle:nth-child(2) {
  bottom: 16vw;
  right: 28vw;
}

.green-circle:nth-child(3) {
  top: 17vw;
  left: 9vw;
}

.green-circle:nth-child(4) {
  top: 15vw;
  left: 41vw;
}

.green-circle:nth-child(5) {
  top: 12vw;
  left: 47vw;
}

.green-circle:nth-child(6) {
  top: 18vw;
  right: 11vw;
}

.green-circle:nth-child(7) {
  bottom: 0vw;
  left: 39vw;
}

@media (min-width: 576px) {
  .modal-page:nth-child(8) {
    right: 18vw;
    top: 15vw;
  }

  .modal-page:nth-child(9) {
    right: 32vw;
    bottom: 16vw;
  }

  .modal-page:nth-child(10) {
    left: 13vw;
    top: 15vw;
  }

  .modal-page:nth-child(11) {
    left: 33vw;
    top: 18vw;
  }

  .modal-page:nth-child(12) {
    right: 25vw;
    top: 10vw;
  }

  .modal-page:nth-child(13) {
    left: 43vw;
    bottom: 0vw;
  }
}


.modal-page {
  /*height: 20em;*/
  width: 14em;
  background-color: var(--vt-c-white);
  border-radius: 15px;
  position: absolute;
  opacity: 0;
  transition: 0.5s;
  padding: 1em;
  z-index: 2;
}

.modal-page.active {
  opacity: 1 !important;
  z-index: 4;
}

.modal-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1em;
  color: var(--vt-c-black);
  margin-bottom: 1em;
}

.modal-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 1em;
  color: var(--vt-c-black);
  white-space: pre;
  margin-bottom: 2em;
}

.modal-image {
  height: 7em;

  background-position: center;
  background-size: cover;
  border-radius: 10px;
  border: 1px solid var(--vt-c-black);
}

.green-circle:nth-child(1):hover ~ .modal-page:nth-child(8) {
  opacity: 1;
  z-index: 4;
}

.green-circle:nth-child(2):hover ~ .modal-page:nth-child(9) {
  opacity: 1;
  z-index: 4;
}

.green-circle:nth-child(3):hover ~ .modal-page:nth-child(10) {
  opacity: 1;
  z-index: 4;
}

.green-circle:nth-child(4):hover ~ .modal-page:nth-child(11) {
  opacity: 1;
  z-index: 4;
}

.green-circle:nth-child(5):hover ~ .modal-page:nth-child(12) {
  opacity: 1;
  z-index: 4;
}

.green-circle:nth-child(6):active ~ .modal-page:nth-child(12),
.green-circle:nth-child(6):hover ~ .modal-page:nth-child(12) {
  opacity: 1;
  z-index: 4;
}

.green-circle:nth-child(7):hover ~ .modal-page:nth-child(13) {
  opacity: 1;
  z-index: 4;
}

@media (max-width: 576px) {
  .page {
    margin-bottom: 24vh;
  }
  .modal-page {
    bottom: calc(-25vh) !important;
    left: 50vw !important;
    transform: translateX(-50%);
    /*height: 20vh !important;*/
    /*right: none !important;*/
    /*top: calc(20vw + em) !important;*/
  }
}

</style>