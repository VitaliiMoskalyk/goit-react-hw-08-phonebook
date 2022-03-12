"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[32],{7967:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var i,r,o,s,c,a,d,l=t(6030),u=t(1413),x=t(3400),p=t(6002),f=t(9823),h=t(168),g=t(9958),j=g.Z.div(i||(i=(0,h.Z)(["\nposition: relative;\nz-index:0;\nmargin: 10px;\npadding: 5px;\ndisplay: flex;\nflex-direction:column;\njustify-items:center;\nalign-items:center;\nwidth:220px;\nheight:250px;\n\nborder-radius:6px;\nbox-shadow: 10px 9px 32px -12px rgba(0,0,0,0.2);\n\nbackground:linear-gradient(to bottom, \t#87CEEB 30%, #F0F8FF 30%) ;\n\n"]))),m=g.Z.img(r||(r=(0,h.Z)(["\nmargin:35px 0;\nwidth:60px;\nheight:60px;\nborder-radius:50px;\npadding:2px;\n"]))),v=g.Z.p(o||(o=(0,h.Z)(["\nwidth:120px;\npadding: 2px;\noverflow:hidden;\nmargin:0;\n\nfont-weight:bold;\n"]))),Z=g.Z.p(s||(s=(0,h.Z)(["\nwidth:120px;\npadding: 2px;\noverflow:hidden;\nmargin-top:10px;\n\nfont-style:italic;\nfont-weight:100px;\n"]))),b=g.Z.a(c||(c=(0,h.Z)(["\nposition: absolute;\nbottom:5px;\nleft:50%;\ntransform:translateX(-50%);\nwidth:120px;\npadding: 2px;\noverflow:hidden;\n\n"]))),w=g.Z.div(a||(a=(0,h.Z)(["\n\ndisplay: flex;\nflex-direction:column;\n"]))),y=(g.Z.button(d||(d=(0,h.Z)(["\nposition:absolute;\ntop:5px;\nright:5px;\nwidth:25px;\nheight: 25px;\npadding: 0;\nmargin:3px;\nborder-radius:50px;\noutline:none;\nborder:none;\noverflow:hidden;\ncursor: pointer;\n/* background-color:#b1bbdb */\n"]))),t(9174)),k=t(7488),F=t(7237),C=t(5372),_=t(184),M=function(n){var e=n.contact,t=n.deleteFunction,i=e.id,r=e.name,o=e.number;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(j,{children:[(0,_.jsx)(m,{src:C,alt:r}),(0,_.jsxs)(w,{children:[(0,_.jsx)(v,{children:r}),(0,_.jsx)(Z,{children:o}),(0,_.jsx)(b,{href:"tel:".concat(o),children:(0,_.jsx)(x.Z,{size:"small",color:"success",children:(0,_.jsx)(p.Z,{fontSize:"large"})})}),(0,_.jsx)(x.Z,{size:"small",style:{position:"absolute",top:"5px",right:"5px"},onClick:function(){return t(i)},sx:{color:"red"},children:(0,_.jsx)(f.Z,{fontSize:"small"})}),(0,_.jsx)(y.Z,(0,u.Z)((0,u.Z)({},{inputProps:{"aria-label":"Checkbox demo"}}),{},{icon:(0,_.jsx)(k.Z,{}),checkedIcon:(0,_.jsx)(F.Z,{}),color:"secondary",sx:{ml:20}}))]})]})})},z=t(3767),S=t(4554),L=t(7482);function X(){return(0,_.jsx)(S.Z,{sx:{width:"100%",position:"fixed",top:"0",zIndex:"2"},children:(0,_.jsx)(L.Z,{style:{height:"10px"}})})}var B=t(6052),E=t(2791),G=t(6140),I=t(885),K=t(4753),N=function(n,e,t){return"perspective(400px) rotateX(".concat(n,"deg) rotateY(").concat(e,"deg) scale(").concat(t,")")};function P(n){var e=n.children,t=Object.keys(K.config),i=(0,E.useRef)(null),r=(0,E.useState)([0,0,1]),o=(0,I.Z)(r,2),s=o[0],c=o[1],a={preset:{value:"default",options:t}}.preset,d=(0,K.useSpring)({xys:s,config:K.config[a]});return(0,_.jsx)("div",{ref:i,children:(0,_.jsx)(K.q.div,{className:"ccard",style:{transform:d.xys.to(N)},onMouseLeave:function(){return c([0,0,1])},onMouseMove:function(n){var e=i.current.getBoundingClientRect();c(function(n,e,t){return[-(e-t.top-t.height/2)/15,(n-t.left-t.width/2)/15,1.05]}(n.clientX,n.clientY,e))},children:e})})}var Y=function(){var n=(0,l.v9)((function(n){return n.search})),e=(0,l.I0)();(0,E.useEffect)((function(){e((0,B.K2)())}),[e]);var t=(0,l.v9)((function(n){return n.contacts})),i=t.contacts,r=t.error,o=t.isFetching;function s(){return i.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}return(0,_.jsxs)(_.Fragment,{children:[o?(0,_.jsx)(X,{}):(0,_.jsxs)(z.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",style:{marginTop:"120px"},children:[0===s().length&&(0,_.jsx)("p",{children:"no contacts"}),s().map((function(n){return(0,_.jsx)(P,{children:(0,_.jsx)("div",{children:(0,_.jsx)(M,{contact:n,deleteFunction:function(){return function(n){e((0,B.GK)(n.id)),e((0,B.K2)()),G.ZP.success("".concat(n.name," removed"))}(n)}})})},n.id)}))]}),r&&(0,_.jsxs)("p",{children:["/",r.status]}),(0,_.jsx)(G.x7,{})]})},q=t(7332),R={tension:1200,friction:40},T={mass:10,tension:200,friction:50},D=function(n,e){return"translate3d(".concat(n,"px,").concat(e,"px,0) translate3d(-50%,-50%,0)")};function O(){var n=(0,K.useTrail)(3,(function(n){return{xy:[0,0],config:0===n?R:T}})),e=(0,I.Z)(n,2),t=e[0],i=e[1],r=(0,q.Z)(),o=(0,I.Z)(r,2),s=o[0],c=o[1],a=c.left,d=c.top;return(0,_.jsxs)("div",{className:"container",children:[(0,_.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:(0,_.jsxs)("filter",{id:"goo",children:[(0,_.jsx)("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"30"}),(0,_.jsx)("feColorMatrix",{in:"blur",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"})]})}),(0,_.jsx)("div",{ref:s,className:"hooksMain",onMouseMove:function(n){i.start({xy:[n.clientX-a,n.clientY-d]})},children:t.map((function(n,e){return(0,_.jsx)(K.q.div,{style:{transform:n.xy.to(D)}},e)}))})]})}var W=function(){var n=(0,l.v9)((function(n){return n.auth.isLoaded})),e=(0,l.v9)((function(n){return n.auth.error}));return(0,_.jsxs)(_.Fragment,{children:[e&&(0,G.ZP)("".concat(e)),n?(0,_.jsx)(Y,{}):(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(O,{})}),(0,_.jsx)(G.x7,{})]})}},5372:function(n,e,t){n.exports=t.p+"static/media/default.ac91a4eac6e383b5e8a1.png"}}]);
//# sourceMappingURL=HomeView.0aa1551b.chunk.js.map