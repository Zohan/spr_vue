(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86c14af4"],{"31c1":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Switcher"},[s("button",{staticClass:"btn btn-primary switchBtn",on:{click:t.toggleLive}},[t._v(t._s(t.isLive?"to playback":"to live"))])])},c=[],i=(s("b0c0"),{computed:{isLive:function(){return"live"===this.$route.name}},methods:{toggleLive:function(){this.isLive?this.$router.push("/playback"):this.$router.push("/")}}}),n=i,r=(s("d8d1"),s("2877")),l=Object(r["a"])(n,a,c,!1,null,"561e1134",null);e["a"]=l.exports},"3a77":function(t,e,s){},"432c":function(t,e,s){},"8e30":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playbackView"},[s("h3",[t._v("Vue Video.js Playback Demo")]),t._m(0),s("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions}}),s("div",{staticClass:"optionsWrapper"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:""}},[t._v("Playback: ")]),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"playback url here"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),s("div",{staticClass:"w-100 mt-3 text-center"},[s("button",{staticClass:"btn btn-primary",on:{click:t.handleApply}},[t._v("apply")])])])]),s("Switcher")],1)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Current Type: "),s("span",{staticClass:"badge badge-success"},[t._v("mp4")])])}],i=s("31c1"),n={name:"playback",components:{Switcher:i["a"]},data:function(){return{url:"",playerOptions:{autoplay:!1,controls:!0,sources:[{type:"video/mp4",src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"}]}}},methods:{handleApply:function(){this.playerOptions.sources[0].src=this.url}}},r=n,l=(s("abcd"),s("2877")),o=Object(l["a"])(r,a,c,!1,null,"ef2c2d68",null);e["default"]=o.exports},abcd:function(t,e,s){"use strict";var a=s("3a77"),c=s.n(a);c.a},d8d1:function(t,e,s){"use strict";var a=s("432c"),c=s.n(a);c.a}}]);
//# sourceMappingURL=chunk-86c14af4.7ea30b99.js.map