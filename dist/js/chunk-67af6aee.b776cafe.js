(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67af6aee"],{"02f4":function(t,e,n){var o=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var a,c,i=String(r(e)),s=o(n),u=i.length;return s<0||s>=u?t?"":void 0:(a=i.charCodeAt(s),a<55296||a>56319||s+1===u||(c=i.charCodeAt(s+1))<56320||c>57343?t?i.charAt(s):a:t?i.slice(s,s+2):c-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var o=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var o=n("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var o=n("52a7"),r=n("4630"),a=n("6821"),c=n("6a99"),i=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=c(e,!0),s)try{return u(t,e)}catch(n){}if(i(t,e))return r(!o.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var o=n("2aba"),r=n("32e9"),a=n("79e5"),c=n("be13"),i=n("2b4c"),s=n("520a"),u=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),m=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=i(t),d=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=d?!a((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e})):void 0;if(!d||!p||"replace"===t&&!l||"split"===t&&!m){var h=/./[f],v=n(c,f,""[t],(function(t,e,n,o,r){return e.exec===s?d&&!r?{done:!0,value:h.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}})),g=v[0],b=v[1];o(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var o=n("aae3"),r=n("cb7c"),a=n("ebd6"),c=n("0390"),i=n("9def"),s=n("5f1b"),u=n("520a"),l=n("79e5"),m=Math.min,f=[].push,d="split",p="length",h="lastIndex",v=4294967295,g=!l((function(){RegExp(v,"y")}));n("214f")("split",2,(function(t,e,n,l){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(r,t,e);var a,c,i,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,d=void 0===e?v:e>>>0,g=new RegExp(t.source,l+"g");while(a=u.call(g,r)){if(c=g[h],c>m&&(s.push(r.slice(m,a.index)),a[p]>1&&a.index<r[p]&&f.apply(s,a.slice(1)),i=a[0][p],m=c,s[p]>=d))break;g[h]===a.index&&g[h]++}return m===r[p]?!i&&g.test("")||s.push(""):s.push(r.slice(m)),s[p]>d?s.slice(0,d):s}:"0"[d](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,o):b.call(String(r),n,o)},function(t,e){var o=l(b,t,this,e,b!==n);if(o.done)return o.value;var u=r(t),f=String(this),d=a(u,RegExp),p=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),x=new d(g?u:"^(?:"+u.source+")",h),y=void 0===e?v:e>>>0;if(0===y)return[];if(0===f.length)return null===s(x,f)?[f]:[];var _=0,w=0,C=[];while(w<f.length){x.lastIndex=g?w:0;var E,S=s(x,g?f:f.slice(w));if(null===S||(E=m(i(x.lastIndex+(g?0:w)),f.length))===_)w=c(f,w,p);else{if(C.push(f.slice(_,w)),C.length===y)return C;for(var $=1;$<=S.length-1;$++)if(C.push(S[$]),C.length===y)return C;w=_=E}}return C.push(f.slice(_)),C}]}))},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3b2b":function(t,e,n){var o=n("7726"),r=n("5dbc"),a=n("86cc").f,c=n("9093").f,i=n("aae3"),s=n("0bfb"),u=o.RegExp,l=u,m=u.prototype,f=/a/g,d=/a/g,p=new u(f)!==f;if(n("9e1e")&&(!p||n("79e5")((function(){return d[n("2b4c")("match")]=!1,u(f)!=f||u(d)==d||"/a/i"!=u(f,"i")})))){u=function(t,e){var n=this instanceof u,o=i(t),a=void 0===e;return!n&&o&&t.constructor===u&&a?t:r(p?new l(o&&!a?t.source:t,e):l((o=t instanceof u)?t.source:t,o&&a?s.call(t):e),n?this:m,u)};for(var h=function(t){t in u||a(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=c(l),g=0;v.length>g;)h(v[g++]);m.constructor=u,u.prototype=m,n("2aba")(o,"RegExp",u)}n("7a56")("RegExp")},"4d40":function(t,e,n){},"520a":function(t,e,n){"use strict";var o=n("0bfb"),r=RegExp.prototype.exec,a=String.prototype.replace,c=r,i="lastIndex",s=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[i]||0!==e[i]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(t){var e,n,c,l,m=this;return u&&(n=new RegExp("^"+m.source+"$(?!\\s)",o.call(m))),s&&(e=m[i]),c=r.call(m,t),s&&c&&(m[i]=m.global?c.index+c[0].length:e),u&&c&&c.length>1&&a.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},"5dbc":function(t,e,n){var o=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var a,c=e.constructor;return c!==n&&"function"==typeof c&&(a=c.prototype)!==n.prototype&&o(a)&&r&&r(t,a),t}},"5f1b":function(t,e,n){"use strict";var o=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"5fd0":function(t,e,n){"use strict";var o=n("4d40"),r=n.n(o);r.a},"6b54":function(t,e,n){"use strict";n("3846");var o=n("cb7c"),r=n("0bfb"),a=n("9e1e"),c="toString",i=/./[c],s=function(t){n("2aba")(RegExp.prototype,c,t,!0)};n("79e5")((function(){return"/a/b"!=i.call({source:"a",flags:"b"})}))?s((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?r.call(t):void 0)})):i.name!=c&&s((function(){return i.call(this)}))},"6b58":function(t,e,n){},8530:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapp",staticStyle:{width:"100%"}},[n("h1",{staticClass:"loadingtext"},[n("span",[t._v("加")]),n("span",[t._v("载")]),n("span",[t._v("数")]),n("span",[t._v("据")]),n("span",[t._v("中")]),n("span",[t._v("...")])])])}],a={},c=a,i=(n("5fd0"),n("2877")),s=Object(i["a"])(c,o,r,!1,null,"3789c4c2",null);e["a"]=s.exports},"8b97":function(t,e,n){var o=n("d3f4"),r=n("cb7c"),a=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var o=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},a2aa:function(t,e,n){},a481:function(t,e,n){"use strict";var o=n("cb7c"),r=n("4bf8"),a=n("9def"),c=n("4588"),i=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,m=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,h){return[function(o,r){var a=t(this),c=void 0==o?void 0:o[e];return void 0!==c?c.call(o,a,r):n.call(String(a),o,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var m=o(t),f=String(this),d="function"===typeof e;d||(e=String(e));var g=m.global;if(g){var b=m.unicode;m.lastIndex=0}var x=[];while(1){var y=s(m,f);if(null===y)break;if(x.push(y),!g)break;var _=String(y[0]);""===_&&(m.lastIndex=i(f,a(m.lastIndex),b))}for(var w="",C=0,E=0;E<x.length;E++){y=x[E];for(var S=String(y[0]),$=u(l(c(y.index),f.length),0),k=[],R=1;R<y.length;R++)k.push(p(y[R]));var L=y.groups;if(d){var O=[S].concat(k,$,f);void 0!==L&&O.push(L);var j=String(e.apply(void 0,O))}else j=v(S,f,$,k,L,e);$>=C&&(w+=f.slice(C,$)+j,C=$+S.length)}return w+f.slice(C)}];function v(t,e,o,a,c,i){var s=o+t.length,u=a.length,l=d;return void 0!==c&&(c=r(c),l=f),n.call(i,l,(function(n,r){var i;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(s);case"<":i=c[r.slice(1,-1)];break;default:var l=+r;if(0===l)return n;if(l>u){var f=m(l/10);return 0===f?n:f<=u?void 0===a[f-1]?r.charAt(1):a[f-1]+r.charAt(1):n}i=a[l-1]}return void 0===i?"":i}))}}))},a7fe:function(t,e,n){"use strict";var o={scroll:function(t){window.onscroll=function(){function e(){var t=0,e=0,n=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(n=document.documentElement.scrollTop),t=e-n>0?e:n,t}function n(){var t=0,e=0,n=0;return document.body&&(e=document.body.scrollHeight),document.documentElement&&(n=document.documentElement.scrollHeight),t=e-n>0?e:n,t}function o(){var t=0;return t="CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight,t}e()+o()>=n()-5&&t()}}};e["a"]=o},aae3:function(t,e,n){var o=n("d3f4"),r=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},b0c5:function(t,e,n){"use strict";var o=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},f356:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"comvue"}},[n("div",{ref:"comments",attrs:{id:"comments"}},[n("h2",[t._v("\n      # 评论\n      "),n("span",{staticStyle:{color:"red","font-size":"16px","padding-left":"10px"}},[t._v(t._s(t.alert))])]),n("div",[t.islogin?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.author,expression:"comment.author"}],staticClass:"comment-input",attrs:{type:"text",placeholder:"昵称*"},domProps:{value:t.comment.author},on:{input:function(e){e.target.composing||t.$set(t.comment,"author",e.target.value)}}}),t.islogin?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.mail,expression:"comment.mail"}],staticClass:"comment-input",attrs:{type:"email",placeholder:"邮箱*"},domProps:{value:t.comment.mail},on:{input:function(e){e.target.composing||t.$set(t.comment,"mail",e.target.value)}}}),t.islogin?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.url,expression:"comment.url"}],staticClass:"comment-input",attrs:{type:"text",placeholder:"网址"},domProps:{value:t.comment.url},on:{input:function(e){e.target.composing||t.$set(t.comment,"url",e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.text,expression:"comment.text"}],attrs:{name:"content",id:"comment-content",placeholder:t.placetxt},domProps:{value:t.comment.text},on:{input:function(e){e.target.composing||t.$set(t.comment,"text",e.target.value)}}}),n("button",{attrs:{id:"pushCom"},on:{click:t.pushCom}},[t._v("提交评论")])])]),n("div",{ref:"commentsList",attrs:{id:"commentsList"}},[t._l(t.comments,(function(t){return n("div",[n("CommentItem",{attrs:{commentsList:t}})],1)})),t.getComplete?t._e():n("Load")],2)])},r=[],a=(n("3b2b"),n("1bab")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"comment even thread-even depth-1"},[n("div",{staticClass:"comment-body"},[n("div",{staticClass:"comment-author vcard"},[n("img",{staticClass:"avatar avatar-32 photo",attrs:{alt:"",src:"https://cdn.v2ex.com/gravatar/"+t.commentsList.mailHash+"?s=100&d=mm&r=g",height:"32",width:"32"}}),n("cite",{staticClass:"fn"},[n("a",{staticClass:"url",attrs:{href:t.commentsList.url,rel:"external nofollow",target:"_blank"}},[t._v(t._s(t.commentsList.author))])]),"1"==t.commentsList.authorId?n("span",{staticClass:"admin"},[t._v("博主")]):t._e(),n("span",{staticClass:"says"},[t._v("说道：")])]),n("div",{staticClass:"comment-meta commentmetadata"},[n("a",{staticClass:"com-date"},[t._v(t._s(t.formatDate(t.commentsList.created)))])]),n("p",[t._v(t._s(t.commentsList.text))]),n("div",{staticClass:"reply"},[n("a",{staticClass:"comment-reply-link",attrs:{rel:"nofollow",href:"#comments?pid="+t.commentsList.coid},on:{click:t.scr}},[t._v("回复")])])]),void 0!=t.commentsList.children&&t.commentsList.children.length>0?n("div",{staticClass:"comment-child"},t._l(t.commentsList.children,(function(t){return n("div",[n("Comment",{attrs:{commentsList:t}})],1)})),0):t._e()])},i=[],s=(n("6b54"),n("a481"),{name:"Comment",props:["commentsList"],data:function(){return{}},components:{Comment:Comment},methods:{scr:function(){comments.scrollIntoView()}},computed:{formatDate:function(){function t(t,n){var o=["Y","M","D","h","m","s"],r=[],a=new Date(1e3*t);for(var c in r.push(a.getFullYear()),r.push(e(a.getMonth()+1)),r.push(e(a.getDate())),r.push(e(a.getHours())),r.push(e(a.getMinutes())),r.push(e(a.getSeconds())),r)n=n.replace(o[c],r[c]);return n}function e(t){return t=t.toString(),t[1]?t:"0"+t}return function(e){return t(e,"Y-M-D h:m:s")}}}}),u=s,l=(n("fefa"),n("2877")),m=Object(l["a"])(u,c,i,!1,null,"0a303bcd",null),f=m.exports,d=n("8530"),p=n("a7fe"),h={name:"CommentList",data:function(){return{comments:[],page:1,alert:"",placetxt:"不说几句就不够意思了:)",comment:{cid:null,parent:null,text:"",author:"",mail:"",url:"",token:""},loadend:!1,getComplete:!1,islogin:!1}},props:["csrfToken"],components:{CommentItem:f,Load:d["a"]},methods:{pushCom:function(){var t=this;this.comment.token=this.$props.csrfToken;var e=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");if(""!=this.comment.mail&&""!=this.comment.author&&""!=this.comment.text||this.islogin){this.alert="";var n=this.comment.mail;if(!this.islogin&&!e.test(n))return this.alert="你输入的不是邮箱",!1;var o=window.location.href.indexOf("pid=");o>-1&&(this.comment.parent=window.location.href.substr(o+4,10)),Object(a["a"])({method:"post",url:"/api/comment",data:this.comment,withCredentials:!0}).then((function(e){t.page=1,t.loadend=!1,t.comments=[],t.getComments(),t.comment.parent=null,t.comment.text="",window.history.pushState({},"","./"+t.comment.cid),"error"==e.status?t.alert=e.message:(t.alert="评论成功",t.placetxt="不说几句就不够意思了:)")})).catch((function(e){t.alert="评论过于频繁，请稍后再试"}))}else this.alert="请确保昵称、邮箱、内容不为空"},getComments:function(){var t=this;this.loadend||(this.loadend=!0,this.getComplete=!1,Object(a["a"])({url:"/api/comments?cid="+this.comment.cid+"&page="+this.page}).then((function(e){t.comments=t.comments.concat(e.data.dataSet),e.data.dataSet.length>0&&(t.loadend=!1),t.getComplete=!0})),this.page++)}},created:function(){var t=this;this.comment.cid=this.$route.params.id,this.getComments(),Object(a["a"])({url:"/api/comments?islogin=true",withCredentials:!0}).then((function(e){null!=e.key&&(t.islogin=!0)}))},mounted:function(){var t=this;p["a"].scroll((function(){t.getComments()}))},watch:{$route:function(){window.location.href.indexOf("#comments")>=0?this.placetxt="回复它：":(console.log("Changes"),this.comment.cid=this.$route.params.id,this.page=1,this.loadend=!1,this.comments=[],this.getComments())}}},v=h,g=(n("fda3"),Object(l["a"])(v,o,r,!1,null,"287d2884",null));e["a"]=g.exports},fda3:function(t,e,n){"use strict";var o=n("a2aa"),r=n.n(o);r.a},fefa:function(t,e,n){"use strict";var o=n("6b58"),r=n.n(o);r.a}}]);
//# sourceMappingURL=chunk-67af6aee.b776cafe.js.map