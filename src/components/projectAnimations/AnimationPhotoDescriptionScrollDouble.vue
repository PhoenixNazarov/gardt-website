<template>
  <div>
    <div class="drop-photo-container" style="min-height: 500vh">
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
          <div class="frame-2-image" v-for="item in data.principles.slice(0, sliceIndex)" :key="item">
            <img class="frame-2-image-inner" :src="item[0]" :alt="item[1]"/>
            <h1 class="image-desc">{{ item[2] }}</h1>
          </div>
        </div>
        <div class="car-frame-3-container">
          <div class="frame-3-image" v-for="item in data.principles.slice(sliceIndex)" :key="item">
            <img class="frame-3-image-inner" :src="item[0]" :alt="item[1]"/>
            <h1 class="image-2-desc">{{ item[2] }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BindScroll, BindScrollTimeline} from "@/components/projectAnimations/animationTools";

export default {
  name: 'AnimationPhotoDescriptionScrollDouble',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      sliceIndex: 3
    }
  },
  beforeMount() {
    if (this.data.principles.length === 4) {
      this.sliceIndex = 2;
    }
  },
  mounted () {
    this.$car = this.$el.querySelector('.car')
    this.$container = this.$el.querySelector('.drop-photo-container')
    this.bindScroll = new BindScroll(this.$container, this.$car);

    const offsets = [
      0, // start
      1/14, // image right 1500
      2/14, // image scale + text 500
      3/14, // title 1500
      4/14, // desc
      5/14, // 6.
      6/14, // 7. hide frame1
      7/14, // 8. show frame2
      8/14, // 9. size image principles
      9/14, // 10. show text
      10/14, // 11. hide frame2
      11/14, // 12. show frame3
      12/14, // 13. size image principles
      13/14 // 14. show text
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
        0,
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
        1,
        0,
        0,
        0,
        0
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
        'scale(1)',
        'scale(1)',
        'scale(1)',
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
        1,
        0,
        0,
        0,
        1
      ]
    }


    const framesFrame3 = {
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
        0,
        0,
        1,
        1,
        1
      ]
    }

    const frames3Image = {
      transform: [
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(0)',
        'scale(1)',
        'scale(0.5)',
        'scale(0.5)',
        'scale(1)',
        'scale(1)'
      ]
    }
    const frames3Desc = {
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
        0,
        0,
        0,
        0,
        1
      ]
    }

    this.bindScrollTimeline = new BindScrollTimeline(
        this.$container,
        this.$car,
        offsets,
        [
          {
            $elements: [this.$el.querySelector('.drop-photo-image')],
            keyframes: framesImage
          },
          {
            $elements: [this.$el.querySelector('.drop-photo-text-container')],
            keyframes: textContainer
          },
          {
            $elements: [this.$el.querySelector('.drop-photo-text')],
            keyframes: framesText
          },
          {
            $elements: [this.$el.querySelector('.drop-photo-text-title')],
            keyframes: framesTitle
          },
          {
            $elements: [this.$el.querySelector('.drop-photo-text-desc')],
            keyframes: framesDesc
          },
          {
            $elements: [this.$el.querySelector('.car-frame-1-container')],
            keyframes: framesFrame1
          },
          {
            $elements: [this.$el.querySelector('.car-frame-2-container')],
            keyframes: framesFrame2
          },
          {
            $elements: this.$el.querySelectorAll('.frame-2-image-inner'),
            keyframes: frames2Image
          },
          {
            $elements: this.$el.querySelectorAll('.image-desc'),
            keyframes: frames2Desc
          },
          {
            $elements: [this.$el.querySelector('.car-frame-3-container')],
            keyframes: framesFrame3
          },
          {
            $elements: this.$el.querySelectorAll('.frame-3-image-inner'),
            keyframes: frames3Image
          },
          {
            $elements: this.$el.querySelectorAll('.image-2-desc'),
            keyframes: frames3Desc
          },
        ]
    )
  },
  unmounted () {
    this.bindScroll.unbind();
    this.bindScrollTimeline.unbind();
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

.car-frame-1-container, .car-frame-2-container, .car-frame-3-container {
  position: absolute;
  display: flex;
  align-items: center;
  /*width: 60vw;*/
}

.car-frame-1-container {
  width: 100vw;
  justify-content: center;
}

.car-frame-2-container, .car-frame-3-container {
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
  border-radius: 10px;
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

.frame-2-image, .frame-3-image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30em;
  margin-left: 3em;
  margin-right: 3em;
  margin-top: 3em;
}

.frame-2-image-inner, .frame-3-image-inner {
  height: 8em;
}

.image-desc, .image-2-desc {
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
