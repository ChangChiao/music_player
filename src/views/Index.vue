<template>
  <div>
    <Player :nowSong="nowSong" @switchSong="switchSong" :songList="songList" :openFlag="openFlag" />
    <List @openList="openList" @setSelect="setSelect" :selectIndex="selectIndex" :songList="songList" :openFlag="openFlag" />
  </div>
</template>

<script>
import Player from "@/components/Player.vue";
import List from "@/components/List.vue";
export default {
  computed: {
    nowSong() {
      return this.songList[this.selectIndex];
    },
  },
  data() {
    return {
      selectIndex: 0,
      openFlag: false,
      songList: [
        {
          name: "Guiton Sketch",
          author: "Kevin MacLeod",
          src: "Guiton Sketch - Kevin MacLeod.mp3",
          pic: "01",
          time: "00:34",
          type: "pop",
        },
        {
          name: "30 Second Classical",
          author: "Audionautix",
          src: "30 Second Classical - Audionautix.mp3",
          pic: "02",
          time: "00:36",
          type: "pop",
        },
        {
          name: "And Awaken",
          author: "Kevin MacLeod",
          src: "And Awaken - Stings - Kevin MacLeod.mp3",
          pic: "03",
          time: "00:30",
          type: "pop",
        },
        {
          name: "Find A Way",
          author: "TKevin MacLeod",
          src: "Bassa Island Game Loop - Latinesque - Kevin MacLeod.mp3",
          pic: "04",
          time: "00:33",
          type: "pop",
        },
        {
          name: "Ecossaise in E-flat",
          author: "Kevin MacLeod",
          src: "Ecossaise in E-flat - Kevin MacLeod.mp3",
          pic: "05",
          time: "00:31",
          type: "pop",
        },
      ],
    };
  },
  components: {
    Player,
    List,
  },
  methods: {
    openList() {
      this.openFlag = !this.openFlag;
      console.log("this.openFlag", this.openFlag);
    },
    setSelect(index){
      this.selectIndex = index
      console.log('setSelect',this.selectIndex)
    },
    switchSong(num){
      this.selectIndex += num
      if(this.selectIndex>this.songList.length-1){
        this.selectIndex = 0
      }
      if(this.selectIndex<0){
        this.selectIndex = this.songList.length
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>

