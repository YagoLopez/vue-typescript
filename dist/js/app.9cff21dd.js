(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);v&&v(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4acb8e88"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"70c3351c"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],v.parentNode.removeChild(v),n(i)},v.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(v);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var v=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var a=n("8a23"),o=n.n(a);o.a},"0cfd":function(e,t,n){},"1cd4":function(e,t,n){},"4e80":function(e,t,n){"use strict";var a=n("cc01"),o=n.n(a);o.a},"8a23":function(e,t,n){},b2c0:function(e,t,n){"use strict";var a=n("0cfd"),o=n.n(a);o.a},cc01:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-toolbar",{staticClass:"toolbar"},[n("v-toolbar-items",{attrs:{id:"nav"}},[n("v-btn",{attrs:{text:""}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("v-btn",{attrs:{text:""}},[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1)],1),n("keep-alive",[n("router-view",{key:e.$route.fullPath})],1)],1)},r=[],i=(n("034f"),n("2877")),c=n("6544"),s=n.n(c),l=n("8336"),u=n("71d9"),d=n("2a7f"),v={},m=Object(i["a"])(v,o,r,!1,null,null,null),f=m.exports;s()(m,{VBtn:l["a"],VToolbar:u["a"],VToolbarItems:d["a"]});n("d3b7");var p=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content"},[n("v-text-field",{staticClass:"game-title-input",attrs:{label:"Game Name",rules:e.rules},model:{value:e.game.title,callback:function(t){e.$set(e.game,"title",t)},expression:"game.title"}}),n("game",{ref:"game",attrs:{"dices-collection":e.game.diceIds,"dices-list":e.dices,"max-dices":"2"},on:{onRemoveDice:e.onRemoveDice,onRemoveAllDices:e.onRemoveAllDices,onSaveGame:e.onSaveGame,onLoadGames:e.onLoadGames}}),n("v-card",{staticClass:"mx-auto card",attrs:{"max-width":"75%"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[n("h2",[e._v("Dices")])])],1)],1),n("hr"),n("v-card-text",e._l(e.dices,(function(t,a){return n("div",{key:""+t.name+a,staticClass:"items-list"},[n("span",{staticClass:"dice-name-title"},[e._v("Dice Name: ")]),n("span",{staticClass:"item"},[e._v(e._s(t.name))]),n("v-btn",{staticClass:"btn",attrs:{large:""},on:{click:function(n){return e.onAddDiceToGame(t)}}},[e._v("Add to Game")])],1)})),0),n("hr"),n("v-card-actions",[n("v-btn",{staticStyle:{margin:"auto"},attrs:{large:""},on:{click:e.onCreateDice}},[e._v("Create Dice")])],1)],1),this.games.length>0?n("v-card",{staticClass:"mx-auto card",attrs:{"max-width":"75%"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[n("h2",[e._v("Saved Games")])])],1)],1),n("hr"),n("v-card-text",e._l(e.games,(function(t,a){return n("div",{key:a,staticClass:"items-list"},[n("span",{staticClass:"dice-name-title"},[e._v("Game Name: ")]),n("span",{staticClass:"item"},[e._v(e._s(t.title))]),n("v-btn",{staticClass:"btn",attrs:{large:""},on:{click:function(t){return e.onLoadGame(a)}}},[e._v("Load Game")])],1)})),0)],1):e._e(),n("v-checkbox",{staticClass:"checkbox",attrs:{label:"Show/Hide Debug Info"},model:{value:e.showDebugInfo,callback:function(t){e.showDebugInfo=t},expression:"showDebugInfo"}}),e.showDebugInfo?n("div",{staticClass:"debug-info"},[n("hr"),n("h4",[e._v("DEBUG INFO")]),n("h5",[e._v("Dices")]),n("vue-json-pretty",{staticClass:"json-block",attrs:{data:e.dices}}),n("hr"),n("h5",[e._v("Current Game")]),n("vue-json-pretty",{staticClass:"json-block",attrs:{data:e.game}}),n("hr"),n("h5",[e._v("Saved Games")]),n("vue-json-pretty",{staticClass:"json-block",attrs:{data:e.games}}),n("hr")],1):e._e()],1)},h=[],g=(n("a4d3"),n("4de4"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),y=n("d4ec"),O=n("bee2"),D=n("99de"),j=n("7e84"),w=n("262e"),k=n("9ab4"),_=n("60a3"),C=n("d538"),S=n.n(C),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"dices-collection-container"},[e.isThereDicesInMemory?e._l(e.dicesCollection,(function(t,a){return n("div",{key:a,staticClass:"dice-container"},[n("Dice",{ref:a,refInFor:!0,attrs:{dice:e.selectDiceTypeByName(t)}})],1)})):n("div",{staticClass:"info-msg"},[e._v(" Please add a new dice using the button ")])],2),n("div",[e.isThereDicesInMemory?n("v-btn",{attrs:{large:""},on:{click:e.onRollDices}},[n("v-icon",[e._v("mdi-dice-multiple-outline")]),e._v("Roll dice/s ")],1):e._e(),e.isThereDicesInMemory?n("v-btn",{attrs:{large:""},on:{click:e.onRemoveDice}},[e._v(" Remove Dice ")]):e._e(),e.isThereDicesInMemory?n("v-btn",{attrs:{large:""},on:{click:e.onSaveGame}},[e._v(" Save Game ")]):e._e(),e.isThereDicesInMemory?n("v-btn",{attrs:{large:""},on:{click:e.onRemoveAllDices}},[e._v(" Remove All Dices ")]):e._e()],1)])},R=[],G=(n("25f0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:{rotation:e.isRolling},attrs:{id:"face-container"}},[n("div",{staticClass:"first-face"},[n("span",{staticClass:"face-number"},[e._v(e._s(e.sideValue))])])]),n("div",{staticClass:"item"},[e._v(e._s(e.dice.name))])])}),A=[],x=(n("e25e"),function(e){function t(){var e;return Object(y["a"])(this,t),e=Object(D["a"])(this,Object(j["a"])(t).call(this)),e.isRolling=!1,e.currentValue=e.dice.current,e}return Object(w["a"])(t,e),Object(O["a"])(t,[{key:"sideValue",get:function(){var e=parseInt(this.currentValue);return this.dice.sides[e]}}]),t}(_["d"]));k["a"]([Object(_["c"])()],x.prototype,"dice",void 0),x=k["a"]([_["a"]],x);var P=x,T=P,E=(n("d0f6"),Object(i["a"])(T,G,A,!1,null,"1a33949e",null)),L=E.exports,V="dicesGames",N={onAddDice:"onAddDice",onRemoveDice:"onRemoveDice",onRemoveAllDices:"onRemoveAllDices",onSaveGame:"onSaveGame",onLoadGames:"onLoadGames",onRollDices:"onRollDices"},M=function(e,t){return Math.floor(Math.random()*e)+t};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(g["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){function t(){return Object(y["a"])(this,t),Object(D["a"])(this,Object(j["a"])(t).apply(this,arguments))}return Object(w["a"])(t,e),Object(O["a"])(t,[{key:"selectDiceTypeByName",value:function(e){var t=this.dicesList.filter((function(t){return t.name===e}))[0];return $({},t,{current:"0",isRolling:!1})}},{key:"mounted",value:function(){this.isThereDicesInLocalStorage&&this.$emit(N.onLoadGames)}},{key:"onAddDice",value:function(){}},{key:"onRemoveDice",value:function(){}},{key:"onRollDices",value:function(){for(var e=this,t=function(t){var n=e.$refs[t][0];n.isRolling=!0;var a=M(n.dice.sides.length,0).toString(10);setTimeout((function(){n.currentValue=a,n.isRolling=!1}),1e3*(t+1))},n=0;n<this.dicesCollection.length;n++)t(n)}},{key:"onRemoveAllDices",value:function(){}},{key:"onSaveGame",value:function(){}},{key:"isThereDicesInMemory",get:function(){return this.dicesCollection.length>0}},{key:"isThereDicesInLocalStorage",get:function(){var e=window.localStorage.getItem(V);return e&&""!==e}}]),t}(_["d"]);k["a"]([Object(_["c"])()],J.prototype,"maxDices",void 0),k["a"]([Object(_["c"])({default:[]})],J.prototype,"dicesCollection",void 0),k["a"]([Object(_["c"])({default:[]})],J.prototype,"dicesList",void 0),k["a"]([Object(_["b"])(N.onAddDice)],J.prototype,"onAddDice",null),k["a"]([Object(_["b"])(N.onRemoveDice)],J.prototype,"onRemoveDice",null),k["a"]([Object(_["b"])(N.onRemoveAllDices)],J.prototype,"onRemoveAllDices",null),k["a"]([Object(_["b"])(N.onSaveGame)],J.prototype,"onSaveGame",null),J=k["a"]([Object(_["a"])({components:{Dice:L}})],J);var F=J,q=F,H=(n("b2c0"),n("132d")),U=Object(i["a"])(q,I,R,!1,null,"2a4bade0",null),K=U.exports;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(g["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s()(U,{VBtn:l["a"],VIcon:H["a"]});var W=function(e){function t(){var e;return Object(y["a"])(this,t),e=Object(D["a"])(this,Object(j["a"])(t).apply(this,arguments)),e.dices=[{name:"six sided",sides:["1","2","3","4","5","6"]},{name:"coin",sides:["head","tails"]}],e.game={title:"",diceIds:new Array(0)},e.games=[],e.showDebugInfo=!1,e.rules=[function(e){return!!e||"Required."}],e}return Object(w["a"])(t,e),Object(O["a"])(t,[{key:"onRemoveDice",value:function(){this.game.diceIds.pop()}},{key:"onRemoveAllDices",value:function(){this.game.diceIds=[]}},{key:"onRemoveAllGames",value:function(){if(window.confirm("Confirm: Remove All Dices from memory and disk")){this.onRemoveAllDices();try{localStorage.removeItem(V)}catch(e){console.error(e)}}}},{key:"onSaveGame",value:function(){if(this.game.title){var e,t=[];try{var n=window.localStorage.getItem(V);n&&""!==n&&(t=JSON.parse(n)),e=Q({},this.game,{diceTypes:this.dices}),t.push(e),window.localStorage.setItem(V,JSON.stringify(t)),this.game.title="",this.onLoadGames(),window.alert("Saving dices to disk...")}catch(a){window.alert("Error: dices could not be saved to disk"),console.error(a)}}else alert("Game name is mandatory to save a game")}},{key:"onLoadGames",value:function(){try{var e=window.localStorage.getItem(V);e&&""!==e&&(this.games=JSON.parse(e))}catch(t){window.alert("Error: dices could not be loaded from disk"),console.error(t)}}},{key:"onLoadGame",value:function(e){var t=this.games[e],n=t.title,a=t.diceIds,o=t.diceTypes;this.dices=o,this.game.title=n,this.game.diceIds=a}},{key:"createDiceName",value:function(){return prompt("Enter dice name","dice1")}},{key:"createSideValue",value:function(){return prompt("Enter face value or cancel to stop entering values: ")}},{key:"onCreateSidesCollection",value:function(e,t){if(e){var n,a={name:e,sides:new Array(0)};while(null!==n)n=this.createSideValue(),n&&a.sides.push(n);a.sides.length>0&&t.push(a)}}},{key:"onCreateDice",value:function(){var e=this.createDiceName();this.onCreateSidesCollection(e,this.dices)}},{key:"onAddDiceToGame",value:function(e){this.game.diceIds.push(e.name)}}]),t}(_["d"]);W=k["a"]([Object(_["a"])({components:{Game:K,VueJsonPretty:S.a}})],W);var X=W,Y=X,Z=(n("4e80"),n("b0af")),ee=n("99d9"),te=n("ac7c"),ne=n("da13"),ae=n("5d23"),oe=n("8654"),re=Object(i["a"])(Y,b,h,!1,null,"3f14ccd6",null),ie=re.exports;s()(re,{VBtn:l["a"],VCard:Z["a"],VCardActions:ee["a"],VCardText:ee["b"],VCheckbox:te["a"],VListItem:ne["a"],VListItemContent:ae["a"],VListItemTitle:ae["b"],VTextField:oe["a"]}),a["a"].use(p["a"]);var ce=[{path:"/",name:"home",component:ie},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],se=new p["a"]({routes:ce}),le=se,ue=n("2f62");a["a"].use(ue["a"]);var de=new ue["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ve=n("f309");a["a"].use(ve["a"]);var me=new ve["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:le,store:de,vuetify:me,render:function(e){return e(f)}}).$mount("#app")},d0f6:function(e,t,n){"use strict";var a=n("1cd4"),o=n.n(a);o.a}});
//# sourceMappingURL=app.9cff21dd.js.map