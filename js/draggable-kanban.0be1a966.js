(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["draggable-kanban"],{"0d05":function(t,a,e){},1518:function(t,a,e){},"20b8":function(t,a,e){"use strict";e("1518")},5847:function(t,a,e){"use strict";e("8458")},8458:function(t,a,e){t.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},d83e:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"components-container board"},[e("draggable-kanban",{key:1,staticClass:"kanban todo",attrs:{list:t.list1,group:t.group,"header-text":"Todo"}}),e("draggable-kanban",{key:2,staticClass:"kanban working",attrs:{list:t.list2,group:t.group,"header-text":"Working"}}),e("draggable-kanban",{key:3,staticClass:"kanban done",attrs:{list:t.list3,group:t.group,"header-text":"Done"}})],1)},i=[],s=e("d4ec"),o=e("262e"),r=e("2caf"),c=e("9ab4"),b=e("1b40"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"board-column"},[e("div",{staticClass:"board-column-header"},[t._v(" "+t._s(t.headerText)+" ")]),e("draggable",t._b({staticClass:"board-column-content",attrs:{list:t.list}},"draggable",t.$attrs,!1),t._l(t.list,(function(a){return e("div",{key:a.id,staticClass:"board-item"},[t._v(" "+t._s(a.name)+" "+t._s(a.id)+" ")])})),0)],1)},d=[],u=e("b76a"),g=e.n(u),p=function(t){Object(o["a"])(e,t);var a=Object(r["a"])(e);function e(){return Object(s["a"])(this,e),a.apply(this,arguments)}return e}(b["c"]);Object(c["a"])([Object(b["b"])({default:"header"})],p.prototype,"headerText",void 0),Object(c["a"])([Object(b["b"])({default:function(){return[]}})],p.prototype,"list",void 0),Object(c["a"])([Object(b["b"])({default:function(){return null}})],p.prototype,"options",void 0),p=Object(c["a"])([Object(b["a"])({name:"DraggableKanban",components:{Draggable:g.a}})],p);var m=p,f=m,j=(e("20b8"),e("0c7c")),v=Object(j["a"])(f,l,d,!1,null,"cd7a8c9c",null),O=v.exports,k=function(t){Object(o["a"])(e,t);var a=Object(r["a"])(e);function e(){var t;return Object(s["a"])(this,e),t=a.apply(this,arguments),t.group="mission",t.list1=[{name:"Mission",id:1},{name:"Mission",id:2},{name:"Mission",id:3},{name:"Mission",id:4}],t.list2=[{name:"Mission",id:5},{name:"Mission",id:6},{name:"Mission",id:7}],t.list3=[{name:"Mission",id:8},{name:"Mission",id:9},{name:"Mission",id:10}],t}return e}(b["c"]);k=Object(c["a"])([Object(b["a"])({name:"DraggableKanbanDemo",components:{DraggableKanban:O}})],k);var h=k,_=h,x=(e("5847"),e("eb7a"),Object(j["a"])(_,n,i,!1,null,"0d8d0bce",null));a["default"]=x.exports},eb7a:function(t,a,e){"use strict";e("0d05")}}]);