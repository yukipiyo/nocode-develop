(this["webpackJsonpnocode-develop"]=this["webpackJsonpnocode-develop"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),s=c(14),a=c.n(s),i=c(11),d=c(2),l=c.p+"static/media/logo.6ce24c58.svg",r=(c(21),c(16)),j=(c(22),c(1)),u=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],o=t[1],s=Object(n.useRef)(null),a=Object(n.useRef)(null),i={audio:!1,video:{width:360,height:640,facingMode:"user"}};return Object(j.jsx)("div",{className:"test",children:Object(j.jsxs)("div",{className:"d-flex flex-row mt-3",children:[Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(j.jsx)("video",{id:"camera",width:"360",height:"640",ref:s,className:"border rounded"}),Object(j.jsx)("button",{onClick:function(){null!==c&&c.getVideoTracks().forEach((function(e){e.stop()}));var e=s.current;e&&navigator.mediaDevices.getUserMedia(i).then((function(t){o(t),e.srcObject=t,e.onloadedmetadata=function(t){e.play()}})).catch((function(e){console.log(e.name+": "+e.message)}))},className:"btn btn-outline-dark camera mt-3",children:"\u30ab\u30e1\u30e9\u8d77\u52d5"})]}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(j.jsx)("canvas",{id:"picture",width:"360",height:"640",ref:a,className:"border rounded ml-3"}),Object(j.jsx)("button",{onClick:function(){var e=s.current,t=a.current;if(t&&e){var c=t.getContext("2d");c&&c.drawImage(e,0,0,t.width,t.height)}},className:"btn btn-outline-dark camera mt-3",children:"\u30ab\u30e1\u30e9\u64ae\u5f71"})]})]})})},b=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"mt-3",children:"\u30ab\u30e1\u30e9\u63a5\u7d9a\u30c6\u30b9\u30c8"}),Object(j.jsx)(u,{})]})},h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(j.jsx)(i.b,{to:"/nocode-develop/develop",className:"App-link",children:"Go to evelopment page..."})]})})},m=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(d.b,{path:"/nocode-develop",exact:!0,component:h}),Object(j.jsx)(d.b,{path:"/nocode-develop/develop",exact:!0,component:b}),Object(j.jsx)(d.b,{children:Object(j.jsx)(d.a,{to:"/nocode-develop"})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),s(e),a(e)}))};c(32);a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.b04d10aa.chunk.js.map