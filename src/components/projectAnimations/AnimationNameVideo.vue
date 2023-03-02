<template>
  <div>
    <div class="page">
      <div class="background-video-frame">
        <video class="background-video" autoplay loop muted playsinline style="background-color: black">
          <source :src='data.video.source' :type='data.video.type'>
          <!--                        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4">-->
          <!--        <source src="https://rr17-&#45;&#45;sn-axq7sn7z.googlevideo.com/videoplayback?expire=1675303242&ei=6sTaY4_7EM_flu8P98OIsAw&ip=216.131.77.64&id=o-AL5gRR4eej6sI2FdjlTuxDGwKlEgTWJaL16eyF4fWOiw&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&spc=H3gIhhexEpeQJhFlFBPgODhZZfeaW0A&vprv=1&mime=video%2Fwebm&ns=lZoRhZTLgw83NkE_AwJyubUL&gir=yes&clen=474900176&dur=253.433&lmt=1560477277203727&keepalive=yes&fexp=24007246&c=WEB&txp=5532432&n=Rca3qW7oy68g6w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMP1754anHUGnJAgW94T8pP6P5InnlwEZOyvDJJPjfM4CIDl2HcmwxqV5ZFA9pEnxT1YBTYlvr_EQCpT4Iim6xzEq&redirect_counter=1&rm=sn-vgqese7e&req_id=768a6231859ea3ee&cms_redirect=yes&ipbypass=yes&mh=_n&mip=93.157.120.172&mm=31&mn=sn-axq7sn7z&ms=au&mt=1675280962&mv=m&mvi=17&pl=21&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAIhbn8v3rwbm5jpfOXTeDAQAobje_s9hxD77OgrcDywCAiEAzMm8oqtYZLpAI74AJa9m5Lm24l659xiy-tTyk7UodlQ%3D" type="video/webm">-->
        </video>
      </div>
      <h1 class="name-text show-animate">
        {{ data.name.join("\n") }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationNameVideo",
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

.background-video {
  width: 100vw;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.background-video-frame {
  height: 100vh;
  overflow: hidden;
}


.name-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8em;
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