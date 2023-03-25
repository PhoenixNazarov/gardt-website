<template>
  <div>
    <div class="modal" :class="status" @click.prevent="this.$emit('modalChangeStatus', 'hide')">
      <div class="modal-image" :style="'background-image: url('+ this.image +');'">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationPhotoModal",
  props: {
    image: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: "hide"
    }
  },
  methods: {
    hide: function () {
      this.status = 'hide';
    }
  }
}
</script>

<style scoped>

.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(2, 0, 26, 0.56);
}

.modal.show {
  position: fixed;
  top: 0;
  z-index: 10;
}

.modal.hide {
  display: none;
}

.modal-image {
  width: 70vw;
  height: 70vh;
  position: absolute;
  top: 50%;
  left: 50%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
}

</style>