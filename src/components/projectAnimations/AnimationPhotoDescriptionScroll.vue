<template>
  <div style="min-height: 600vh">
    <div class="drop-photo-container" style="min-height: 400vh">
      <div class="car">
        <div class="car-frame-1-container">
          <div class="drop-photo-image"></div>
          <div class="drop-photo-text-container">
            <h1 class="drop-photo-text">Зоны разделены таким образом, что функционал нижней террасы плавно переходит в
              зону отдыха верхней.</h1>
            <h1 class="drop-photo-text-title">Озеленение</h1>
            <h1 class="drop-photo-text-desc">Ассортимент растений подобран с учетом особенностей каждой зоны:
              на нижней - пряные травы и декоративные цветочные композиции;
              на верхней - декоративно лиственные растения, попеременно цветущие в течение весенне-осеннего сезона</h1>
          </div>
        </div>
        <div class="car-frame-2-container">
          <div class="frame-2-image">
            <img class="frame-2-image-inner" src="../../assets/images/portfolio-principles/approve-user.svg"/>
            <h1 class="image-desc">Подобранные растения требуют минимального ухода, не аллергенны, не имеют ярких
              ароматов. Кашпо с туями и гортензиями создают уединенное пространство на нижней террасе, закрытое от
              посторонних глаз.</h1>
          </div>
          <div class="frame-2-image">
            <img class="frame-2-image-inner" src="../../assets/images/portfolio-principles/process.svg"/>
            <h1 class="image-desc">Подобранные растения требуют минимального ухода, не аллергенны, не имеют ярких
              ароматов. Кашпо с туями и гортензиями создают уединенное пространство на нижней террасе, закрытое от
              посторонних глаз.</h1>
          </div>
          <div class="frame-2-image">
            <img class="frame-2-image-inner" src="../../assets/images/portfolio-principles/Vector.svg"/>
            <h1 class="image-desc">Подобранные растения требуют минимального ухода, не аллергенны, не имеют ярких
              ароматов. Кашпо с туями и гортензиями создают уединенное пространство на нижней террасе, закрытое от
              посторонних глаз.</h1>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationPhotoDescriptionScroll",
  methods: {
    onScroll: function (e) {
      let offset = this.$container.getBoundingClientRect().y;
      let height = this.$container.getBoundingClientRect().height;
      let carHeight = this.$car.getBoundingClientRect().height;

      let downBorder = -height + carHeight;

      if (!this.fixed && (offset < 0 && offset > downBorder)) {
        this.$car.style.position = "fixed";
        this.$car.style.top = 0;
        this.$car.style.bottom = null;
        this.fixed = true;
      } else if (this.fixed && offset > 0) {
        this.$car.style.position = "absolute";
        this.$car.style.top = 0;
        this.$car.style.bottom = null;
        this.fixed = false;
      } else if (this.fixed && offset < downBorder) {
        this.$car.style.position = "absolute";
        this.$car.style.top = null;
        this.$car.style.bottom = 0;
        this.fixed = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.$car = this.$el.querySelector(".car");
    this.$container = this.$el.querySelector(".drop-photo-container");
    this.fixed = false;

    let offset = this.$container.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

    let height = this.$container.getBoundingClientRect().height - this.$car.getBoundingClientRect().height;

    console.log(0.1 * height)
    let offsets = [
      new CSSUnitValue(offset, 'px'), // start
      new CSSUnitValue(offset + 0.1 * height, 'px'), // image right 1500
      new CSSUnitValue(offset + 0.2 * height, 'px'), // image scale + text 500
      new CSSUnitValue(offset + 0.3 * height, 'px'), // title 1500
      new CSSUnitValue(offset + 0.4 * height, 'px'), // desc
      new CSSUnitValue(offset + 0.5 * height, 'px'), // 6.
      new CSSUnitValue(offset + 0.7 * height, 'px'), // 7. hide frame1
      new CSSUnitValue(offset + 0.8 * height, 'px'), // 8. show frame2
      new CSSUnitValue(offset + 0.9 * height, 'px'), // 9. size image principles
      new CSSUnitValue(offset + 0.98 * height, 'px'), // 10. show text
    ]

    let framesImage = {
      transform: [
        "scale(1.2)",
        "scale(1.2)",
        "scale(1)",
        "scale(1)",
        "scale(1)",
        "scale(1)",
        "scale(1)",
        "scale(1)",
        "scale(1)",
        "scale(1)",

      ],
      marginLeft: [
        0,
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw',
        '10vw'
      ]
    };

    let framesText = {
      transform: [
        "translateX(100vw)",
        "translateX(100vw)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)"
      ],
      opacity: [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    };

    let framesTitle = {
      transform: [
        "translateX(100vw)",
        "translateX(100vw)",
        "translateX(100vw)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)"
      ],
      opacity: [
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    };

    let framesDesc = {
      transform: [
        "translateX(100vw)",
        "translateX(100vw)",
        "translateX(100vw)",
        "translateX(100vw)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)",
        "translateX(0)"
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
    };

    let framesFrame1 = {
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
    };
    let framesFrame2 = {
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
    };

    let frames2Image = {
      transform: [
        "scale(0)",
        "scale(0)",
        "scale(0)",
        "scale(0)",
        "scale(0.5)",
        "scale(0.5)",
        "scale(0.5)",
        "scale(1)",
        "scale(1)"
      ],
    };
    let frames2Desc = {
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
      ]
    };


    const myScrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      scrollSource: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: offsets,
    });

    this.$el.querySelector(".drop-photo-image").animate(
        framesImage,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );

    this.$el.querySelector(".drop-photo-text").animate(
        framesText,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );

    this.$el.querySelector(".drop-photo-text-title").animate(
        framesTitle,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );

    this.$el.querySelector(".drop-photo-text-desc").animate(
        framesDesc,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );
    this.$el.querySelector(".car-frame-1-container").animate(
        framesFrame1,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );
    this.$el.querySelector(".car-frame-2-container").animate(
        framesFrame2,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    );
    this.$el.querySelectorAll('.frame-2-image-inner').forEach((el) => el.animate(
        frames2Image,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    ));
    this.$el.querySelectorAll('.image-desc').forEach((el) => el.animate(
        frames2Desc,
        {
          duration: 1,
          fill: "forwards",
          timeline: myScrollTimeline
        }
    ));
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
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

.car-frame-2-container {
  justify-content: space-evenly;
  width: 100%;
}

.drop-photo-image {
  height: 66vh;
  width: 50vw;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/images/main-slider/1.jpg");
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

  background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.11) 100%);
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
  width: 20em;
}

.image-desc {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  line-height: 1.5em;
  /* or 30px */
  margin-top: 3em;
  color: var(--vt-c-white);
}

</style>