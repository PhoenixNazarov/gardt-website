<template>
  <div>
    <div class="page">
      <img class="main-photo" :src="data.image">
      <div class="pole">
        <div class="green-circle">
        </div>

        <div class="green-circle">
        </div>

        <div class="green-circle">
        </div>

        <div class="green-circle">
        </div>

        <div class="green-circle">
        </div>

        <div class="green-circle">
        </div>

        <div class="green-circle">
        </div>
        <!--      </div>-->
        <!--      <div class="pole">-->
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
  background-color: red;
}

.green-circle:nth-child(2) {
  bottom: 16vw;
  right: 28vw;
  background-color: gray;
}

.green-circle:nth-child(3) {
  top: 17vw;
  left: 9vw;
  background-color: #060043;
}

.green-circle:nth-child(4) {
  top: 15vw;
  left: 41vw;
  background-color: yellowgreen;
}

.green-circle:nth-child(5) {
  top: 12vw;
  left: 47vw;
  background-color: peru;
}

.green-circle:nth-child(6) {
  top: 18vw;
  right: 11vw;
  background-color: aqua;
}

.green-circle:nth-child(7) {
  bottom: 0vw;
  left: 39vw;
  background-color: rosybrown;
}


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
  border-radius: 20px;
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

.green-circle:nth-child(6):hover ~ .modal-page:nth-child(12) {
  opacity: 1;
  z-index: 4;
}

.green-circle:nth-child(7):hover ~ .modal-page:nth-child(13) {
  opacity: 1;
  z-index: 4;
}

</style>