<template>
  <div :class="['list', { active: openFlag }]">
    <header>
      <h1>排行top 5歌單</h1>
      <div class="list__menu" @click="openList">List</div>
    </header>
    <ul class="list__song">
      <li v-for="(item, i) in songList" @click="setSelect(i)" :key="i">
        <h4>{{ item.name }}</h4>
        <p>{{ item.author }}</p>
        <p class="time">{{ item.time }}</p>
      </li>
    </ul>
    <div class="list__pic">
      <img
        :src="require(`../assets/cover/${songList[selectIndex].pic}.jpg`)"
        alt=""
      />
    </div>
    <span class="cc_text" @click="openCC">創用 CC</span>
    <ul class="cc_content" v-if="showCC" @click="openCC">
      <li>
        Kevin MacLeod創作的「And Awaken - Stings」是依據 創用 CC (姓名標示) 4.0
        授權使用。 https://creativecommons.org/licenses/by/4.0/ 來源：
        http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100331
        演出者： http://incompetech.com/
      </li>
      <li>
        Kevin MacLeod創作的「Ecossaise in E-flat」是依據 創用 CC (姓名標示) 4.0
        授權使用。 https://creativecommons.org/licenses/by/4.0/ 來源：
        http://incompetech.com/music/royalty-free/?keywords=ecossaise&Search=Search
        演出者： http://incompetech.com/
      </li>
      <li>
        Kevin MacLeod創作的「Bassa Island Game Loop - Latinesque」是依據 創用 CC
        (姓名標示) 4.0 授權使用。 https://creativecommons.org/licenses/by/4.0/
        來源：
        http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100840
        演出者： http://incompetech.com/
      </li>
      <li>
        Kevin MacLeod創作的「Guiton Sketch」是依據 創用 CC (姓名標示) 4.0
        授權使用。 https://creativecommons.org/licenses/by/4.0/ 來源：
        http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100473
        演出者： http://incompetech.com/
      </li>
      <li>
        Audionautix創作的「30 Second Classical」是依據 創用 CC (姓名標示) 4.0
        授權使用。 https://creativecommons.org/licenses/by/4.0/ 演出者：
        http://audionautix.com/
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songList: Array,
    openFlag: Boolean,
    selectIndex: Number,
  },
  data() {
    return {
      showCC: false,
    };
  },
  methods: {
    setSelect(index) {
      this.$emit("setSelect", index);
    },
    openList() {
      this.$emit("openList");
    },
    openCC() {
      this.showCC = !this.showCC;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin line {
  border: 3px solid #000;
}

.list {
  height: 80vh;
  width: 500px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  transition-duration: 0.5s;
  transform: translate(-560px) rotate(22deg);
  @include line;
  &.active {
    transform: translate(0px) rotate(0deg);
  }
  header {
    padding: 20px;
    text-align: left;
    font-weight: 900;
    font-size: 28px;
  }
  &__menu {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }
  &__song {
    padding: 80px 20px 0;
    li {
      padding: 10px 0;
      text-align: left;
      cursor: pointer;
      position: relative;
      border-top: 3px solid #000;
      h4 {
        font-size: 22px;
        font-weight: bold;
        padding: 5px 0;
      }
      .time {
        position: absolute;
        right: 0;
        top: 10px;
      }
    }
  }
  &__pic {
    overflow: hidden;
    height: 300px;
    @include line;
    img {
      width: 100%;
    }
  }
}

.cc_text {
  font-weight: 900;
  text-align: right;
  display: inline-block;
  cursor: pointer;
  padding-top: 20px;
}

.cc_content {
  max-width: 500px;
  text-align: left;
  line-height: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: #f5f5f5;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  cursor: pointer;
  li{
    padding: 20px 0;
    border-bottom: 1px dashed #ccc;
  }
}

.list__song::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.list__song::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.list__song::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>

