(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],u=0,g=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(g.length)g.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},o={app:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/music_player/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"14a4":function(t,e,n){var s={"./Group 20.svg":"9984","./line.svg":"fa21","./line2.svg":"a92a","./line3.svg":"c8e9","./next.svg":"77b0","./play.svg":"7b17","./play2.svg":"62c7","./player.svg":"2bbf","./prev.svg":"3b75","./search.svg":"8441","./sound.svg":"9656","./stop.svg":"b38c","./stop2.svg":"f2dc","./tra.svg":"901d"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=a,t.exports=o,o.id="14a4"},"1a1c":function(t,e,n){"use strict";n("56d1")},"1b45":function(t,e,n){t.exports=n.p+"img/02.009acb16.jpg"},"22c7":function(t,e,n){"use strict";n("76e4")},"2bbf":function(t,e,n){t.exports=n.p+"img/player.35d7ffce.svg"},"3b75":function(t,e,n){t.exports=n.p+"img/prev.8b81dc29.svg"},"56d1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("5c0b"),n("2877")),i={},c=Object(r["a"])(i,o,a,!1,null,null,null),l=c.exports,p=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Player",{attrs:{nowSong:t.nowSong,openFlag:t.openFlag},on:{switchSong:t.switchSong}}),n("List",{attrs:{selectIndex:t.selectIndex,songList:t.songList,openFlag:t.openFlag},on:{openList:t.openList,setSelect:t.setSelect}})],1)},g=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["player",{active:t.openFlag}]},[s("canvas",{directives:[{name:"show",rawName:"v-show",value:t.canvasFlag[0],expression:"canvasFlag[0]"}],attrs:{id:"myCanvas",width:"600",height:"600"}}),s("canvas",{directives:[{name:"show",rawName:"v-show",value:t.canvasFlag[1],expression:"canvasFlag[1]"}],attrs:{id:"myCanvas2",width:"600",height:"600"}}),s("div",{class:["player__cd",{playing:t.status}]},[s("img",{attrs:{src:n("9d29")("./"+t.nowSong.pic+".jpg"),alt:""}})]),s("div",{staticClass:"player__btn"},[s("div",{staticClass:"player__btn--next",on:{click:function(e){return t.next(1)}}},[s("img",{attrs:{src:n("3b75"),alt:""}})]),s("div",{staticClass:"player__btn--prev",on:{click:function(e){return t.next(-1)}}},[s("img",{attrs:{src:n("3b75"),alt:""}})]),t._m(0)]),s("div",{staticClass:"player__control"},[s("div",{staticClass:"player__control__info"},[s("h2",[t._v(t._s(t.nowSong.name))]),s("p",[t._v(t._s(t.nowSong.author))])]),s("div",{staticClass:"player__control__play"},[s("img",{class:{active:t.status},attrs:{src:n("f9fa"),alt:""}}),s("button",{on:{click:t.playMusic}},[s("img",{attrs:{src:n("14a4")("./"+(t.status?"stop":"play")+".svg"),alt:""}})])]),s("div",{staticClass:"player__control__vol"},[s("input",{staticClass:"vol",attrs:{type:"range",min:"0",max:"1",step:"0.1"},domProps:{value:t.volume},on:{change:t.controlVol}}),s("img",{attrs:{src:n("9656"),alt:""}})]),s("span",{staticClass:"time seek"},[t._v(t._s(t.formateTime(t.time.seek)))]),s("input",{staticClass:"progress",attrs:{type:"range",min:"0",max:Math.round(t.time.duration),step:"1"},domProps:{value:t.progress},on:{change:t.setProgress}}),s("span",{staticClass:"time duration"},[t._v(t._s(t.formateTime(t.time.duration)))])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player__btn--repeat"},[s("img",{attrs:{src:n("9984"),alt:""}})])}],d=(n("28a5"),n("1e5c")),m={props:{openFlag:Boolean,nowSong:Object},computed:{iconStatus:function(){return"../assets/F2E_week3/".concat(status?"stop":"play",".svg")}},watch:{nowSong:{handler:function(){this.player.pause(),this.status=!1,this.initPlayer()},deep:!0}},data:function(){return{groupList:["Classical","EDM","Hip-hop / Rap","Jazz/Blues","Pop"],volume:.5,status:!1,player:null,progress:0,timer:null,time:{duration:0,seek:0},canvasFlag:[!1,!1],publicPath:"/music_player/"}},methods:{next:function(t){this.$emit("switchSong",t)},playMusic:function(){this.status=!this.status,this.status?(this.player.play(),this.timerProgress()):(clearInterval(this.timer),this.player.pause())},initPlayer:function(){var t="".concat(publicPath,"mp3/").concat(this.nowSong.src);null==this.player?this.player=new d["Howl"]({src:t,preload:!0,autoplay:!1,loop:!1,volume:this.volume}):this.player.changeSong(t)},canvasController:function(){this.canvasFlag=[!1,!1],this.progress%2===0&&(this.canvasFlag[0]=!0),this.progress%3===0&&(this.canvasFlag[1]=!0)},timerProgress:function(){var t=this;clearInterval(this.timer),this.time.duration=this.player.duration(),this.timer=setInterval((function(){t.time.seek=t.player.seek(),t.progress=Math.round(t.player.seek()),console.log("this.progress",t.progress),t.canvasController()}),500)},controlVol:function(t){var e=t.target.value;this.volume=e,d["Howler"].volume(e)},setProgress:function(t){var e=t.target.value;this.player.seek(e)},formateTime:function(t){var e=Math.round(t),n=e%60,s=Math.floor(t/60);return this.addZero("".concat(s,":").concat(n))},addZero:function(t){var e=t.split(":"),n=2===e[0].length?e[0]:"0".concat(e[0]),s=2===e[1].length?e[1]:"0".concat(e[1]);return"".concat(n,":").concat(s)},canvasSet:function(){var t=document.getElementById("myCanvas"),e=t.getContext("2d");e.lineWidth=3,e.strokeStyle="#aaa",e.beginPath(),e.moveTo(120,50),e.quadraticCurveTo(50,100,30,150),e.moveTo(480,90),e.quadraticCurveTo(540,180,550,280),e.moveTo(470,450),e.quadraticCurveTo(420,520,320,540),e.stroke();var n=document.getElementById("myCanvas2"),s=n.getContext("2d");s.lineWidth=2,s.strokeStyle="#888",s.beginPath(),s.moveTo(500,150),s.quadraticCurveTo(520,180,528,220),s.moveTo(0,300),s.quadraticCurveTo(10,350,25,380),s.moveTo(80,60),s.quadraticCurveTo(40,100,30,120),s.stroke()}},mounted:function(){d["Howl"].prototype.changeSong=function(t){var e=this;e.unload(),e._duration=0,e._sprite={},e._src="string"!==typeof t?t:[t],e.load()},this.initPlayer(),this.canvasSet()}},h=m,_=(n("22c7"),Object(r["a"])(h,v,f,!1,null,"3d5e899d",null)),y=_.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["list",{active:t.openFlag}]},[s("header",[s("h1",[t._v("排行top 5歌單")]),s("div",{staticClass:"list__menu",on:{click:t.openList}},[t._v("List")])]),s("ul",{staticClass:"list__song"},t._l(t.songList,(function(e,n){return s("li",{key:n,on:{click:function(e){return t.setSelect(n)}}},[s("h4",[t._v(t._s(e.name))]),s("p",[t._v(t._s(e.author))]),s("p",{staticClass:"time"},[t._v(t._s(e.time))])])})),0),s("div",{staticClass:"list__pic"},[s("img",{attrs:{src:n("9d29")("./"+t.songList[t.selectIndex].pic+".jpg"),alt:""}})])])},x=[],w=(n("c5f6"),{props:{songList:Array,openFlag:Boolean,selectIndex:Number},methods:{setSelect:function(t){this.$emit("setSelect",t)},openList:function(){this.$emit("openList")}}}),C=w,S=(n("1a1c"),Object(r["a"])(C,b,x,!1,null,"201cb9f7",null)),L=S.exports,j={computed:{nowSong:function(){return this.songList[this.selectIndex]}},data:function(){return{selectIndex:0,openFlag:!1,songList:[{name:"Heart of a Lion",author:"RENAE",src:"RENAE_-_Heart_of_a_Lion__Leo_.mp3",pic:"01",time:"03:52",type:"pop"},{name:"Aching",author:"ALLES",src:"Alles_-_Aching.mp3",pic:"02",time:"03:32",type:"pop"},{name:"Criminal",author:"AXL & ARTH",src:"Axl__amp__Arth_-_Criminal.mp3",pic:"03",time:"02:45",type:"pop"},{name:"Find A Way",author:"THE DLX",src:"THE_DLX_-_Find_A_Way.mp3",pic:"04",time:"02:45",type:"pop"},{name:"It Is Well",author:"THE DEVIL MUSIC CO.",src:"The_Devil_Music_Co._-_It_Is_Well.mp3",pic:"05",time:"02:45",type:"pop"}]}},components:{Player:y,List:L},methods:{openList:function(){this.openFlag=!this.openFlag,console.log("this.openFlag",this.openFlag)},setSelect:function(t){this.selectIndex=t,console.log("setSelect",this.selectIndex)},switchSong:function(t){this.selectIndex+=t,this.selectIndex>this.songList.length-1&&(this.selectIndex=0),this.selectIndex<0&&(this.selectIndex=this.songList.length)}}},F=j,k=Object(r["a"])(F,u,g,!1,null,"4e850072",null),I=k.exports;s["a"].use(p["a"]);var O=new p["a"]({routes:[{path:"/",name:"Index",component:I}]}),T=n("2f62");s["a"].use(T["a"]);var P=new T["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:O,store:P,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("e332")},"62c7":function(t,e,n){t.exports=n.p+"img/play2.ea279fe4.svg"},"76e4":function(t,e,n){},"77b0":function(t,e,n){t.exports=n.p+"img/next.b41b6646.svg"},"7b17":function(t,e,n){t.exports=n.p+"img/play.c363353e.svg"},8441:function(t,e,n){t.exports=n.p+"img/search.fbafc176.svg"},"8c56":function(t,e,n){t.exports=n.p+"img/05.27d71d6d.jpg"},"901d":function(t,e,n){t.exports=n.p+"img/tra.89528d4d.svg"},9656:function(t,e,n){t.exports=n.p+"img/sound.d3cc93dd.svg"},9984:function(t,e,n){t.exports=n.p+"img/Group 20.4c0e792a.svg"},"9d29":function(t,e,n){var s={"./01.jpg":"c9b5","./02.jpg":"1b45","./03.jpg":"c4ea","./04.jpg":"a18c","./05.jpg":"8c56"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=a,t.exports=o,o.id="9d29"},a18c:function(t,e,n){t.exports=n.p+"img/04.9ad41ab9.jpg"},a92a:function(t,e,n){t.exports=n.p+"img/line2.31778624.svg"},b38c:function(t,e,n){t.exports=n.p+"img/stop.a54fda48.svg"},c4ea:function(t,e,n){t.exports=n.p+"img/03.a29505c6.jpg"},c8e9:function(t,e,n){t.exports=n.p+"img/line3.f311fb90.svg"},c9b5:function(t,e,n){t.exports=n.p+"img/01.6cab9a4e.jpg"},e332:function(t,e,n){},f2dc:function(t,e,n){t.exports=n.p+"img/stop2.37ef04e8.svg"},f9fa:function(t,e,n){t.exports=n.p+"img/player.38aaf7f2.png"},fa21:function(t,e,n){t.exports=n.p+"img/line.1482722a.svg"}});
//# sourceMappingURL=app.32f724f7.js.map