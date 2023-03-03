<template>
  <div style="min-height: 400vh">
    <div class="drop-photo-container" style="min-height: 400vh">
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
          <div class="frame-2-image" v-for="item in data.principles" :key="item">
            <img class="frame-2-image-inner" :src="item[0]" :alt="item[1]"/>
            <h1 class="image-desc">{{ item[2] }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationPhotoDescriptionScroll',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    onScroll: function (e) {
      const offset = this.$container.getBoundingClientRect().y
      const height = this.$container.getBoundingClientRect().height
      const carHeight = this.$car.getBoundingClientRect().height

      const downBorder = -height + carHeight

      if (!this.fixed && (offset < 0 && offset > downBorder)) {
        this.$car.style.position = 'fixed'
        this.$car.style.top = 0
        this.$car.style.bottom = null
        this.fixed = true
      } else if (this.fixed && offset > 0) {
        this.$car.style.position = 'absolute'
        this.$car.style.top = 0
        this.$car.style.bottom = null
        this.fixed = false
      } else if (this.fixed && offset < downBorder) {
        this.$car.style.position = 'absolute'
        this.$car.style.top = null
        this.$car.style.bottom = 0
        this.fixed = false
      }
    }
  },
  mounted () {
    this.$el.querySelector('.car')
    window.addEventListener('scroll', this.onScroll)
    this.$car = this.$el.querySelector('.car')
    this.$container = this.$el.querySelector('.drop-photo-container')
    this.fixed = false

    const offset = this.$container.getBoundingClientRect().top - document.body.getBoundingClientRect().top

    const height = this.$container.getBoundingClientRect().height - this.$car.getBoundingClientRect().height

    const offsets = [
      new CSSUnitValue(offset, 'px'), // start
      new CSSUnitValue(offset + 0.1 * height, 'px'), // image right 1500
      new CSSUnitValue(offset + 0.15 * height, 'px'), // image scale + text 500
      new CSSUnitValue(offset + 0.3 * height, 'px'), // title 1500
      new CSSUnitValue(offset + 0.4 * height, 'px'), // desc
      new CSSUnitValue(offset + 0.5 * height, 'px'), // 6.
      new CSSUnitValue(offset + 0.6 * height, 'px'), // 7. hide frame1
      new CSSUnitValue(offset + 0.7 * height, 'px'), // 8. show frame2
      new CSSUnitValue(offset + 0.8 * height, 'px'), // 9. size image principles
      new CSSUnitValue(offset + 0.9 * height, 'px') // 10. show text
    ]

    const framesImage = {
      transform: [
        'scale(1)',
        'scale(1)',
        'scale(1)',
        'scale(1)',
        'scale(1)',
        'scale(1)',
        'scale(1)',
        'scale(1)',
        'scale(1)',
        'scale(1)'

      ],
      marginLeft: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }

    const textContainer = {
      width: [
        '0vw',
        '20vw',
        '20vw',
        '20vw',
        '20vw',
        '20vw',
        '20vw',
        '20vw',
        '20vw'
      ],
      marginLeft: [
        0,
        '5em',
        '5em',
        '5em',
        '5em',
        '5em',
        '5em',
        '5em',
        '5em'
      ],
      marginRight: [
        '0vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw'
      ]
    }

    const framesText = {
      transform: [
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)'
      ],
      opacity: [
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }

    const framesTitle = {
      transform: [
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)'
      ],
      opacity: [
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }

    const framesDesc = {
      transform: [
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)',
        'translateX(0)'
      ],
      opacity: [
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }

    const framesFrame1 = {
      opacity: [
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    }
    const framesFrame2 = {
      opacity: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1
      ]
    }

    const frames2Image = {
      transform: [
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(0.5)',
        'scale(0.5)',
        'scale(0.5)',
        'scale(1)',
        'scale(1)'
      ]
    }
    const frames2Desc = {
      opacity: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ]
    }

    const myScrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      scrollSource: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: offsets
    })

    this.$el.querySelector('.drop-photo-image').animate(
      framesImage,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.drop-photo-text-container').animate(
      textContainer,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.drop-photo-text').animate(
      framesText,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.drop-photo-text-title').animate(
      framesTitle,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )

    this.$el.querySelector('.drop-photo-text-desc').animate(
      framesDesc,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )
    this.$el.querySelector('.car-frame-1-container').animate(
      framesFrame1,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )
    this.$el.querySelector('.car-frame-2-container').animate(
      framesFrame2,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    )
    this.$el.querySelectorAll('.frame-2-image-inner').forEach((el) => el.animate(
      frames2Image,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    ))
    this.$el.querySelectorAll('.image-desc').forEach((el) => el.animate(
      frames2Desc,
      {
        duration: 1,
        fill: 'forwards',
        timeline: myScrollTimeline
      }
    ))
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll)
    // this.$el.querySelector(".drop-photo-image").animate(null);
    // this.$el.querySelector(".drop-photo-text").animate(null);
    // this.$el.querySelector(".drop-photo-text-title").animate(null);
    // this.$el.querySelector(".drop-photo-text-desc").animate(null);
    // this.$el.querySelector(".car-frame-1-container").animate(null);
    // this.$el.querySelector(".car-frame-2-container").animate(null);
    // this.$el.querySelector(".frame-2-image-inner").animate(null);
    // this.$el.querySelectorAll('.image-desc').forEach((el) => el.animate(null));
  }
}
</script>

<style scoped>
.car {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

.car-frame-1-container, .car-frame-2-container {
  position: absolute;
  display: flex;
  align-items: center;
  /*width: 60vw;*/
}

.car-frame-1-container {
  width: 100vw;
  justify-content: center;
}

.car-frame-2-container {
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
}

.drop-photo-image {
  height: 66vh;
  width: 50vw;
  background-size: cover;
  background-position: center;
  transform-origin: center left;
}

.drop-photo-text {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5em;
  line-height: 1.5em;
  color: var(--vt-c-white);
  /*animation: drop-text-animation 1s infinite;*/
  opacity: 0;
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
  width: 20vw;
  margin-left: 5em;
  margin-right: 10vw;
}

.frame-2-image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30em;
  margin-left: 3em;
  margin-right: 3em;
  margin-top: 3em;
}

.frame-2-image-inner {
  height: 8em;
}

.image-desc {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.1em;
  line-height: 1.5em;
  margin-top: 3em;
  color: var(--vt-c-white);
  width: 200%;
}

</style>
