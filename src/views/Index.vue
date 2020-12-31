<template>
  <div>
    <Player :nowSong="nowSong" @switchSong="switchSong" :openFlag="openFlag" />
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
          name: "Heart of a Lion",
          author: "RENAE",
          src: "RENAE_-_Heart_of_a_Lion__Leo_.mp3",
          pic: "01",
          time: "03:52",
          type: "pop",
        },
        {
          name: "Aching",
          author: "ALLES",
          src: "Alles_-_Aching.mp3",
          pic: "02",
          time: "03:32",
          type: "pop",
        },
        {
          name: "Criminal",
          author: "AXL & ARTH",
          src: "Axl__amp__Arth_-_Criminal.mp3",
          pic: "03",
          time: "02:45",
          type: "pop",
        },
        {
          name: "Find A Way",
          author: "THE DLX",
          src: "THE_DLX_-_Find_A_Way.mp3",
          pic: "04",
          time: "02:45",
          type: "pop",
        },
        {
          name: "It Is Well",
          author: "THE DEVIL MUSIC CO.",
          src: "The_Devil_Music_Co._-_It_Is_Well.mp3",
          pic: "05",
          time: "02:45",
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

