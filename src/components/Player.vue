<template>
  <div :class="['player', { active: openFlag }]">
    <div class="preload">
      <img src="../assets/cover/01.jpg" alt="" />
      <img src="../assets/cover/02.jpg" alt="" />
      <img src="../assets/cover/03.jpg" alt="" />
      <img src="../assets/cover/04.jpg" alt="" />
      <img src="../assets/cover/05.jpg" alt="" />
    </div>
    <canvas
      v-show="canvasFlag[0]"
      id="myCanvas"
      width="600"
      height="600"
    ></canvas>
    <canvas
      v-show="canvasFlag[1]"
      id="myCanvas2"
      width="600"
      height="600"
    ></canvas>
    <div :class="['player__cd', { playing: status }]">
      <img
        :src="require(`../assets/cover/${nowSong && nowSong.pic}.jpg`)"
        alt=""
      />
    </div>
    <div class="player__btn">
      <div class="player__btn--next" @click="next(1)">
        <img src="../assets/F2E_week3/prev.svg" alt="" />
      </div>
      <div class="player__btn--prev" @click="next(-1)">
        <img src="../assets/F2E_week3/prev.svg" alt="" />
      </div>
      <div class="player__btn--repeat">
        <img src="../assets/F2E_week3/Group 20.svg" alt="" />
      </div>
    </div>
    <div class="player__control">
      <div class="player__control__info">
        <h2>{{ nowSong && nowSong.name }}</h2>
        <p>{{ nowSong && nowSong.author }}</p>
      </div>
      <div class="player__control__play">
        <img
          :class="{ active: status }"
          src="../assets/F2E_week3/player.png"
          alt=""
        />
        <button @click="controlMusic">
          <img
            :src="
              require(`../assets/F2E_week3/${status ? 'stop' : 'play'}.svg`)
            "
            alt=""
          />
        </button>
      </div>
      <div class="player__control__vol">
        <input
          class="vol"
          :value="volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          @change="controlVol"
        />
        <img src="../assets/F2E_week3/sound.svg" alt="" />
      </div>
      <span class="time seek">{{ formateTime(time.seek) }}</span>
      <input
        class="progress"
        :value="progress"
        @change="setProgress"
        type="range"
        min="0"
        :max="Math.round(time.duration)"
        step="1"
      />
      <span class="time duration">{{ nowSong && nowSong.time }}</span>
    </div>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";
export default {
  props: {
    openFlag: Boolean,
    nowSong: Object,
    songList: Array,
  },
  computed: {
    iconStatus() {
      return `../assets/F2E_week3/${status ? "stop" : "play"}.svg`;
    },
    audioFiles() {
      return this.songList.map((vo) => vo.src);
    },
  },
  watch: {
    nowSong: {
      handler() {
        this.time = {
          duration: 0,
          seek: 0,
        };
        this.player.pause();
        this.status = false;
        this.initPlayer();
      },
      deep: true,
    },
  },
  data() {
    return {
      groupList: ["Classical", "EDM", "Hip-hop / Rap", "Jazz/Blues", "Pop"],
      volume: 0.5,
      status: false, //0=stop, 1=play
      player: null,
      progress: 0,
      timer: null,
      time: {
        duration: 0,
        seek: 0,
      },
      canvasFlag: [false, false],
      publicPath: process.env.BASE_URL,
      loaded: 0,
    };
  },
  methods: {
    next(num) {
      this.$emit("switchSong", num);
    },
    preloadAudioFirst(){
      let temp = [...this.audioFiles]
      let beginArr = temp.splice(0,1)
      beginArr.forEach((vo) => {
        const audio = new Audio();
        audio.addEventListener("canplaythrough", this.loadedAudio, false);
        audio.src = `${this.publicPath}mp3/${vo}`;
      });
      this.preloadAudio(temp)
    },
    preloadAudio(arr) {
      arr.forEach((vo) => {
        const audio = new Audio();
        // audio.addEventListener("canplaythrough", this.loadedAudio, false);
        audio.src = `${this.publicPath}mp3/${vo}`;
      });
    },
    loadedAudio() {
      this.loaded++;
      if (this.loaded === 1) {
        this.initPlayer();
        this.$bus.$emit("close");
      }
    },
    playMusic() {
      this.status = true;
      this.playPeriod()
    },
    controlMusic(){
      this.status = !this.status;
      this.playPeriod()
    },
    playPeriod(){
      if (this.status) {
        this.player.play();
        this.timerProgress();
      } else {
        clearInterval(this.timer);
        this.player.pause();
      }
    },
    initPlayer() {
      // this.player.pause();
      let src = `${this.publicPath}mp3/${this.nowSong.src}`;
      if (this.player == null) {
        this.player = new Howl({
          src: src,
          preload: true,
          autoplay: false,
          loop: false,
          volume: this.volume,
          onend: ()=>{
            this.next(1)
          }
        });
      } else {
        this.player.changeSong(src);
        // setTimeout(() => {
        //   this.playMusic()
        // }, 1000);
      }
    },
    canvasController() {
      this.canvasFlag = [false, false];
      if (this.progress % 2 === 0) {
        this.canvasFlag[0] = true;
      }

      if (this.progress % 3 === 0) {
        this.canvasFlag[1] = true;
      }
    },
    timerProgress() {
      clearInterval(this.timer);
      this.time.duration = this.player.duration();
      this.timer = setInterval(() => {
        this.time.seek = this.player.seek();
        this.progress = Math.round(this.player.seek());
        // console.log("this.progress", this.progress);
        this.canvasController();
      }, 500);
    },
    controlVol(event) {
      let val = event.target.value;
      this.volume = val;
      Howler.volume(val);
    },
    setProgress(event) {
      const value = event.target.value;
      this.player.seek(value);
    },
    formateTime(sec) {
      let s = Math.round(sec);
      let ss = s % 60;
      let mm = Math.floor(sec / 60);
      // console.log("ss", ss, "mm", mm);
      return this.addZero(`${mm}:${ss}`);
    },
    addZero(str) {
      let arr = str.split(":");
      let str1 = arr[0].length === 2 ? arr[0] : `0${arr[0]}`;
      let str2 = arr[1].length === 2 ? arr[1] : `0${arr[1]}`;
      return `${str1}:${str2}`;
    },
    canvasSet() {
      const c = document.getElementById("myCanvas");
      const ctx = c.getContext("2d");
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#aaa";
      ctx.beginPath();
      ctx.moveTo(120, 50);
      ctx.quadraticCurveTo(50, 100, 30, 150);

      ctx.moveTo(480, 90);
      ctx.quadraticCurveTo(540, 180, 550, 280);

      ctx.moveTo(470, 450);
      ctx.quadraticCurveTo(420, 520, 320, 540);
      ctx.stroke();

      const c2 = document.getElementById("myCanvas2");
      const ctx2 = c2.getContext("2d");
      ctx2.lineWidth = 2;
      ctx2.strokeStyle = "#888";
      ctx2.beginPath();
      ctx2.moveTo(500, 150);
      ctx2.quadraticCurveTo(520, 180, 528, 220);

      ctx2.moveTo(0, 300);
      ctx2.quadraticCurveTo(10, 350, 25, 380);

      ctx2.moveTo(80, 60);
      ctx2.quadraticCurveTo(40, 100, 30, 120);
      ctx2.stroke();
    },
  },
  mounted() {
    Howl.prototype.changeSong = function (src,callback) {
      var self = this;
      self.unload();
      self._duration = 0; // init duration
      self._sprite = {}; // init sprite
      self._src = typeof src !== "string" ? src : [src];
      self.load(); // => update duration, sprite(var timeout)
      // self.play();
    };
    this.$bus.$emit("open");
    this.preloadAudioFirst();
    this.canvasSet();
  },
};
</script>

<style lang="scss" scoped>
@mixin line {
  border: 3px solid #000;
}

@mixin center {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

@mixin btnShadow {
  box-shadow: 3px 3px 0 0 #c5c5c5, 6px 6px 0 0 #000;
}

@mixin btnHoverEffect {
  box-shadow: 3px 3px 0 0 #000 inset;
  transform: translate(3px, 3px);
  background-color: #c5c5c5;
}

@mixin button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @include line;
  display: flex;
  justify-content: center;
  align-items: center;
  @include btnShadow;
}

@mixin border {
  content: "";
  background-color: #c5c5c5;
  @include line;
  position: absolute;
  transform-origin: top left;
}

.player {
  width: 732px;
  height: 732px;
  position: relative;
  background-color: #fff;
  transition-duration: 0.5s;
  @include center;
  @include line;
  &.active {
    left: 40%;
  }
  &::before {
    @include border;
    width: 20px;
    height: 100%;
    right: -26px;
    top: -5px;
    transform: skewY(45deg);
  }
  &::after {
    @include border;
    height: 20px;
    width: 100%;
    bottom: -25px;
    left: -5px;
    transform: skewX(45deg);
  }
  &__cd {
    width: 500px;
    height: 500px;
    overflow: hidden;
    position: relative;
    top: 50px;
    left: 80px;
    border-radius: 50%;
    @include line;
    &.playing {
      animation: rotating 2s linear infinite;
    }
    img {
      height: 100%;
      opacity: 0.5;
      @include center;
    }
    &::after {
      content: "";
      background-color: #fff;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      @include center;
      @include line;
    }
  }
  &__btn {
    position: absolute;
    height: 500px;
    right: 20px;
    cursor: pointer;
    top: 50px;
    display: flex;
    flex-direction: column;
    div[class^="player__btn"] {
      @include button;
      display: flex;
      align-items: center;
      justify-content: center;
      @include line;
      &:hover {
        @include btnHoverEffect;
      }
    }
    &--next {
      img {
        transform: scaleX(-1);
      }
    }
    &--prev {
      margin-top: 15px;
    }
    &--repeat {
      margin-top: 200px;
    }
  }
  &__control {
    height: 250px;
    position: relative;
    bottom: 0;
    &__play {
      position: absolute;
      bottom: 50px;
      left: 100px;
      > img {
        transition-duration: 0.5s;
        transform: translate(-10%, 7%) rotate(-20deg);
        &.active {
          transform: translate(4%, -2%) rotate(0deg);
        }
      }
      button {
        position: absolute;
        border: none;
        height: 80px;
        width: 80px;
        bottom: 55px;
        background-color: #fff;
        right: 6px;
        border-radius: 50%;
        cursor: pointer;
        > img {
          width: 30px;
        }
      }
    }
    &__info {
      text-align: left;
      padding: 80px 20px;
      h2 {
        font-size: 32px;
        font-weight: 900;
      }
      p {
        font-size: 22px;
      }
    }
    &__vol {
      width: 40%;
      padding-right: 20px;
      position: absolute;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      bottom: 70px;
      img {
        width: 30px;
      }
    }
  }
}

.time {
  font-weight: bold;
}

.seek {
  position: absolute;
  left: 20px;
  bottom: 40px;
}

.duration {
  position: absolute;
  right: 20px;
  bottom: 40px;
}

.progress {
  position: absolute;
  width: 80%;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 40px;
}

input[type="range"] {
  outline: 0;
  background: transparent;
  appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 14px;
  height: 30px;
  cursor: pointer;
  border-radius: 3px;
  background: #fff;
  margin-top: -12px;
  // appearance: none;
  // background: #fff;
  @include line;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border-radius: 1.3px;
  @include line;
}

#myCanvas,
#myCanvas2 {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  margin: auto;
}

.preload {
  display: none;
}

@keyframes rotating{
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  50%{
    transform: translateY(10px) rotate(180deg);
  }

  100% {
    transform: translateY(0px) rotate(360deg);
  }
}



</style>
