(this["webpackJsonpnocode-develop"]=this["webpackJsonpnocode-develop"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(15),o=c.n(s),i=c(11),d=c(2),r=c.p+"static/media/logo.6ce24c58.svg",l=(c(21),c(14)),j=(c(22),c(1)),u=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=(t[0],t[1]),a=Object(n.useRef)(null),s=Object(n.useRef)(null),o={audio:!1,video:{width:300,height:200,facingMode:"user"}};return Object(j.jsxs)("div",{className:"test",children:[Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("video",{id:"camera",width:"300",height:"200",ref:a,className:"border rounded mt-3"}),Object(j.jsx)("canvas",{id:"picture",width:"300",height:"200",ref:s,className:"border rounded mt-3"})]}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("button",{onClick:function(){var e=a.current;e&&navigator.mediaDevices.getUserMedia(o).then((function(t){c(t),e.srcObject=t,e.onloadedmetadata=function(t){e.play()}})).catch((function(e){console.log(e.name+": "+e.message)}))},className:"btn btn-outline-dark mt-3",children:"\u30ab\u30e1\u30e9\u8d77\u52d5"}),Object(j.jsx)("button",{onClick:function(){var e=a.current,t=s.current;if(t&&e){var c=t.getContext("2d");c&&c.drawImage(e,0,0,t.width,t.height)}},className:"btn btn-outline-dark mt-3",children:"\u30ab\u30e1\u30e9\u64ae\u5f71"})]})]})},b=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=(t[0],t[1]),a=Object(n.useRef)(null),s=Object(n.useRef)(null),o={audio:!1,video:{width:300,height:200,facingMode:{exact:"environment"}}};return Object(j.jsxs)("div",{className:"test",children:[Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("video",{id:"camera",width:"300",height:"200",ref:a,className:"border rounded mt-3"}),Object(j.jsx)("canvas",{id:"picture",width:"300",height:"200",ref:s,className:"border rounded mt-3"})]}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("button",{onClick:function(){var e=a.current;e&&navigator.mediaDevices.getUserMedia(o).then((function(t){c(t),e.srcObject=t,e.onloadedmetadata=function(t){e.play()}})).catch((function(e){console.log(e.name+": "+e.message)}))},className:"btn btn-outline-dark mt-3",children:"\u30ab\u30e1\u30e9\u8d77\u52d5"}),Object(j.jsx)("button",{onClick:function(){var e=a.current,t=s.current;if(t&&e){var c=t.getContext("2d");c&&c.drawImage(e,0,0,t.width,t.height)}},className:"btn btn-outline-dark mt-3",children:"\u30ab\u30e1\u30e9\u64ae\u5f71"})]})]})},h=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"mt-3",children:"\u30ab\u30e1\u30e9\u63a5\u7d9a\u30c6\u30b9\u30c8"}),Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"mt-3",children:"iPhone\u7528"}),Object(j.jsx)(b,{})]})},m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(j.jsx)(i.b,{to:"/nocode-develop/develop",className:"App-link",children:"Go to evelopment page..."})]})})},x=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(d.b,{path:"/nocode-develop",exact:!0,component:m}),Object(j.jsx)(d.b,{path:"/nocode-develop/develop",exact:!0,component:h}),Object(j.jsx)(d.b,{children:Object(j.jsx)(d.a,{to:"/nocode-develop"})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};c(32);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.1c07c288.chunk.js.map