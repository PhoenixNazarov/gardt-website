<template>
  <div>
    <div class="page">
      <h1 class="name-text show-animate">
        {{ data.name.join("\n") }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationName',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.page {
  height: 100vh;
}

@keyframes from-down-name-animate {
  from {
    opacity: 0;
    transform: translate(-50%, 10%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.show-animate {
  animation: from-down-name-animate ease-in-out 1s forwards;
}

.name-text {
  /*width: 75vw;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 7vw;
  line-height: 1.5em;

  text-align: center;
  text-transform: uppercase;

  background: linear-gradient(100.14deg, var(--vt-c-white) 0.54%, rgba(239, 239, 239, 0) 114.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0 4px 46px rgba(239, 239, 239, 0.15);
}

</style>
