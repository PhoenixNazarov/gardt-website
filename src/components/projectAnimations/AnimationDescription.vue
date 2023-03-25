<template>
  <div>
    <div class="page page-m">
      <div class="car">
        <h1 class="main-text">{{ data.name }}</h1>
        <h1 class="main-description">{{ data.description }}</h1>
        <div class="sub-description">
          <div class="sub-sub-description" v-if="data.square">
            <h1 class="sub-name">{{ translate('Площадь:') }}</h1>
            <h1 class="sub-value">{{ data.square }}</h1>
          </div>
          <div class="sub-sub-description" v-if="data.year">
            <h1 class="sub-name">{{ translate('Год:') }}</h1>
            <h1 class="sub-value">{{ data.year }}</h1>
          </div>
          <div class="sub-sub-description" v-if="data.client">
            <h1 class="sub-name">{{ translate('Заказчик:') }}</h1>
            <h1 class="sub-value">{{ data.client }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {translate} from "@/assets/js/i18n";

export default {
  name: 'AnimationDescription',
  data: function () {
    return {
      show: 20
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    translate,
    waitShow: function (e) {
      if (this.sh === undefined) {
        this.sh = this.$el.querySelector('.sub-description')
      }

      const partY = this.sh.getBoundingClientRect().y
      if ((partY - window.innerHeight * (100 - this.show) / 100) <= 0) {
        this.sh.classList.add('play-show')
        document.removeEventListener('scroll', this.waitShow)
      }
    }
  },
  mounted() {
    if (this.show !== -1) {
      this.$el.querySelector('.sub-description').classList.add('hide')
      document.addEventListener('scroll', this.waitShow)
    }
  },
  unmounted() {
    if (this.show !== -1) {
      document.removeEventListener('scroll', this.waitShow)
    }
  }
}
</script>

<style scoped>

@keyframes title-animate {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.hide {
  opacity: 0;
  transform: translateX(-200px);
}

.play-show {
  animation: title-animate 1s forwards;
}

.page {
  height: 100vh;
}

.main-text {
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6em;
  line-height: 1.25em;
  text-align: left;
  background: linear-gradient(180deg, #E9FFA9 0%, #C8FF29 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transform: translateX(-1em);
}

.main-description {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2em;
  line-height: 1.5em;
  color: var(--vt-c-white);
  width: 100%;
  margin: 0.5em auto 1em;
}

.car {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.sub-description {
  display: flex;
  /*justify-content: space-between;*/
}

.sub-sub-description {
  width: 33%;
  display: flex;
  flex-direction: column;
  /*margin*/
}

.sub-sub-description:nth-child(2) {
  /*margin-left: 3em;*/
  /*margin-right: 3em;*/
}

.sub-name {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  line-height: 1em;

  background: linear-gradient(180deg, #E9FFA9 0%, #C8FF29 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.sub-value {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1em;
  color: var(--vt-c-white);
  width: 100%;
  margin-top: 0.5em;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 576px) {
  .main-text {
    font-size: 3em;
    margin-bottom: 0.5em;
    margin-left: 1em;
    transform: none;
    width: calc(100vw - 1em);
  }

  .main-description {
    font-size: 1.2em;
    width: 76vw;
  }

  .page-m {
    margin-top: 5em;
    height: auto;
  }

  .car {
    position: static;
    transform: none;
    top: 0;
    left: 0;
  }

  .sub-description {
    width: 76vw;
    margin-left: auto;
    margin-right: auto;
  }

  .sub-name {
    font-size: 1.3em;
  }

  .sub-value {
    font-size: 1.2em;
  }
}

</style>
