(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(10),s=a.n(n),c=a(25),i=a(26),o=a(12),l=(a(97),a(11)),u=a(16),j=a.n(u),d=a(24),m=a(56),b=a(178),p=a(169),x=a(40),h=a.n(x),O="https://memory-application-by-dziko.herokuapp.com",g=a.p+"static/media/memories.45a5278e.png",f=a(2),v=function(e){var t=e.setuser,a=e.user,r=e.setcurrentUser,n=(e.currentUser,function(){t({Email:"",password:""})}),s=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s=a,h.a.post("".concat(O,"/login"),s);case 4:r(a.Email),n(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Wrong Email or Password"),n();case 12:case"end":return e.stop()}var s}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"Login-container",children:[Object(f.jsxs)("section",{style:{textAlign:"center"},children:[Object(f.jsx)(m.a,{variant:"h3",style:{color:"rgb(236, 93, 117)"},children:"Save Your Memories"}),Object(f.jsx)("img",{className:"memories-pic",alt:"memories pic",src:g,width:"430px",style:{marginTop:"5px"}})]}),Object(f.jsxs)("form",{className:"sign-in",onSubmit:s,children:[Object(f.jsx)(b.a,{fullWidth:!0,style:{display:"block",marginTop:"7px"},variant:"outlined",type:"email",name:"Email",required:!0,value:a.Email,label:"Email",onChange:function(e){return t(Object(l.a)(Object(l.a)({},a),{},{Email:e.target.value}))}}),Object(f.jsx)(b.a,{fullWidth:!0,style:{display:"block",marginTop:"7px"},variant:"outlined",type:"password",name:"password",required:!0,value:a.password,label:"password",onChange:function(e){return t(Object(l.a)(Object(l.a)({},a),{},{password:e.target.value}))}}),Object(f.jsx)(p.a,{style:{borderRadius:"5px",display:"block",marginTop:"7px"},fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Log in"}),Object(f.jsx)(p.a,{style:{borderRadius:"5px",marginTop:"7px"},variant:"contained",fullWidth:!0,color:"secondary",type:"button",children:Object(f.jsx)(i.b,{className:"Link",to:"/registration",children:"Sign up"})})]})]})},y=a(54),N=a(79),k=a.n(N),w=(a(123),function(e){var t=e.post,a=e.setpost,r=(e.memories,e.setMemories),n=e.setBoolean,s=e.boolean,c=function(){a(Object(l.a)(Object(l.a)({},t),{},{message:"",title:"",tags:"",image:""}))},i=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,n=t,h.a.post("".concat(O,"/user/memory"),n);case 4:r((function(e){return[].concat(Object(y.a)(e),[t])})),c(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Something Wrong");case 11:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{className:"Form",onSubmit:i,children:[Object(f.jsx)("h2",{children:"Create your memory"}),Object(f.jsx)(b.a,{className:"text-field",style:{marginTop:"12px"},name:"title",variant:"outlined",label:"title",value:t.title,onChange:function(e){return a(Object(l.a)(Object(l.a)({},t),{},{title:e.target.value}))}}),Object(f.jsx)(b.a,{className:"text-field",style:{marginTop:"12px"},name:"message",variant:"outlined",label:"message",value:t.message,onChange:function(e){return a(Object(l.a)(Object(l.a)({},t),{},{message:e.target.value}))}}),Object(f.jsx)(b.a,{className:"text-field",style:{marginTop:"12px",marginBottom:"5px"},name:"tags",variant:"outlined",value:t.tags,label:"tags",onChange:function(e){return a(Object(l.a)(Object(l.a)({},t),{},{tags:e.target.value}))}}),Object(f.jsx)("div",{style:{margin:"3px 0"},children:Object(f.jsx)(k.a,{type:"image",multiple:!1,onDone:function(e){var r=e.base64;return a(Object(l.a)(Object(l.a)({},t),{},{image:r}))}})}),Object(f.jsx)(p.a,{style:{margin:"3px 0"},className:"form-button",type:"submit",variant:"contained",color:"primary",size:"small",children:" Submit "}),Object(f.jsx)(p.a,{style:{margin:"3px 0"},className:"form-button",variant:"contained",color:"secondary",size:"small",onClick:c,children:" Clear "}),Object(f.jsx)(p.a,{style:{margin:"3px 0"},className:"form-button",variant:"outlined",color:"secondary",size:"small",onClick:function(){n(!s)},children:" Cancel "})]})}),U=a(170),C=a(171),S=a(172),E=a(175),T=a(174),W=a(176),M=a(179),D=a(173),_=a(55),R=a(81),B=a.n(R),I=a(82),L=a.n(I),q=a(80),z=a.n(q),A=Object(U.a)((function(e){return{root:{maxWidth:345,minWidth:300,maxHeight:400,margin:"20px 7px"},media:{height:0,paddingTop:"35.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:_.a[500]}}})),F=function(e){var t=e.currentUser,a=e.memory,r=A();return Object(f.jsxs)(C.a,{className:r.root,children:[Object(f.jsx)(S.a,{avatar:Object(f.jsx)(M.a,{"aria-label":"recipe",className:r.avatar,children:t[0].toUpperCase()}),action:Object(f.jsx)(D.a,{"aria-label":"settings",children:Object(f.jsx)(z.a,{})}),title:a.title}),Object(f.jsx)(T.a,{children:Object(f.jsxs)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:["Date: ",a.date&&a.date.toString().slice(0,10)]})}),Object(f.jsx)(E.a,{className:r.media,image:a.image}),Object(f.jsx)(T.a,{children:Object(f.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:a.message})}),Object(f.jsx)(T.a,{children:Object(f.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:a.tags})}),Object(f.jsxs)(W.a,{disableSpacing:!0,children:[Object(f.jsx)(D.a,{"aria-label":"add to favorites",children:Object(f.jsx)(B.a,{})}),Object(f.jsx)(D.a,{"aria-label":"share",children:Object(f.jsx)(L.a,{})})]})]})},H=a(177),J=function(e){var t=e.memories,a=e.currentUser,r=(e.setMemories,e.boolean);return t.length<1?Object(f.jsxs)("div",{style:{margin:"auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(f.jsx)("h1",{style:{color:"blue",marginBottom:"20px",opacity:"0.8"},children:"No post Found yet"}),Object(f.jsx)(H.a,{variant:"indeterminate",style:{margin:"auto"}})]}):Object(f.jsx)("div",{className:!1===r?"Card":"Card_When_User_Creates_Memory",children:t.map((function(e,t){return Object(f.jsx)(F,{memory:e,currentUser:a},t)}))})},Y=function(e){var t=e.serchedUserInfo,a=e.boolean,r=e.searchedUser;return t.length<1?Object(f.jsxs)("div",{style:{margin:"auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(f.jsx)("h1",{style:{color:"blue",marginBottom:"20px",opacity:"0.8"},children:"No post Found yet"}),Object(f.jsx)(H.a,{variant:"indeterminate",style:{margin:"auto"}})]}):Object(f.jsxs)("div",{className:!1===a?"Card":"Card_When_User_Creates_Memory",children:[Object(f.jsx)("div",{style:{width:"100%",textAlign:"center",margin:"30px 0",color:"#f50057"},children:Object(f.jsxs)("h1",{children:[r,"'s Memories"]})}),t.map((function(e,t){return Object(f.jsx)(F,{memory:e,currentUser:r},t)}))]})},G=(a(125),a(83)),P=a.n(G),K=function(e){var t=e.currentUser,a=Object(r.useState)({creator:t,title:"",message:"",tags:"",image:"",date:new Date}),n=Object(c.a)(a,2),s=n[0],i=n[1],o=Object(r.useState)([]),l=Object(c.a)(o,2),u=l[0],m=l[1],x=Object(r.useState)(""),g=Object(c.a)(x,2),v=g[0],N=g[1],k=Object(r.useState)([]),U=Object(c.a)(k,2),C=U[0],S=U[1],E=Object(r.useState)(!1),T=Object(c.a)(E,2),W=T[0],M=T[1],D=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r=v,h.a.get("".concat(O,"/search/").concat(r));case 3:t=e.sent,a=t.data,console.log(a),S(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Invalid user name");case 12:case"end":return e.stop()}var r}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(Object(d.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=t,h.a.get("".concat(O,"/user/memory/").concat(r));case 2:a=e.sent,a.data.forEach((function(e){m((function(t){return[].concat(Object(y.a)(t),[e])}))}));case 5:case"end":return e.stop()}var r}),e)}))),[]),Object(f.jsxs)("div",{className:"content-container",children:[console.log(v),Object(f.jsxs)("div",{className:"header-container",children:[Object(f.jsxs)("div",{className:"header-searchbar",children:[Object(f.jsx)(b.a,{className:"text-field header-text-field",name:"Search",color:"primary",label:"Username",onChange:function(e){return N(e.target.value)}}),Object(f.jsxs)(p.a,{onClick:D,className:"header-button",variant:"contained",color:"secondary",children:["Search \xa0 ",Object(f.jsx)(P.a,{})]})]}),Object(f.jsx)(p.a,{className:"header-button",variant:"contained",color:"primary",onClick:function(){M(!W)},children:"Create Memory"})]}),""===v?Object(f.jsx)(J,{boolean:W,memories:u,setMemories:m,currentUser:t}):Object(f.jsx)(Y,{serchedUserInfo:C,boolean:W,searchedUser:v}),!0===W&&Object(f.jsx)(w,{post:s,setBoolean:M,boolean:W,setpost:i,memories:u,setMemories:m})]})},Q=(a(126),function(e){var t=e.setuser,a=e.user,r=e.setcurrentUser,n=e.currentUser;return Object(f.jsx)("div",{className:"home-container",children:""===n?Object(f.jsx)(v,{user:a,setuser:t,currentUser:n,setcurrentUser:r}):Object(f.jsx)(K,{currentUser:n})})}),V=(a(127),function(e){var t=e.user,a=e.setuser,r=(e.currentUser,e.setcurrentUser),n=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,n=t,h.a.post("".concat(O,"/register"),n);case 4:r(t.username),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert("Email is already exists");case 10:case"end":return e.stop()}var n}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"signup-registration",children:[Object(f.jsx)(m.a,{variant:"h3",style:{color:"gray"},children:"Sign up"}),Object(f.jsxs)("form",{className:"form-registration",onSubmit:n,children:[Object(f.jsx)(b.a,{fullWidth:!0,style:{display:"block",marginTop:"7px"},variant:"outlined",type:"email",name:"Email",required:!0,value:t.Email,label:"Email",onChange:function(e){return a(Object(l.a)(Object(l.a)({},t),{},{Email:e.target.value}))}}),Object(f.jsx)(b.a,{fullWidth:!0,style:{display:"block",marginTop:"7px"},variant:"outlined",type:"text",name:"username",required:!0,value:t.username,label:"Username",onChange:function(e){return a(Object(l.a)(Object(l.a)({},t),{},{username:e.target.value}))}}),Object(f.jsx)(b.a,{fullWidth:!0,style:{display:"block",marginTop:"7px"},variant:"outlined",type:"password",name:"password",required:!0,value:t.password,label:"password",onChange:function(e){return a(Object(l.a)(Object(l.a)({},t),{},{password:e.target.value}))}}),Object(f.jsx)(p.a,{style:{borderRadius:"5px",display:"block",marginTop:"7px"},fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Register"}),Object(f.jsx)(p.a,{style:{borderRadius:"5px",marginTop:"7px"},variant:"contained",fullWidth:!0,color:"secondary",type:"button",children:Object(f.jsx)(i.b,{className:"Link",to:"/",children:" Home "})})]})]})}),X=function(){return Object(f.jsxs)("div",{className:"sregister",children:[Object(f.jsx)(m.a,{variant:"h3",children:"You are successfully Registered"}),Object(f.jsx)(p.a,{style:{borderRadius:"5px",display:"block",marginTop:"20px"},variant:"contained",color:"primary",children:Object(f.jsx)(i.b,{className:"Link",to:"/",children:"Get started"})})]})},Z=function(){var e=Object(r.useState)({username:"",password:"",Email:""}),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(""),l=Object(c.a)(s,2),u=l[0],j=l[1];return Object(f.jsxs)("div",{className:"App",children:[console.log(u),Object(f.jsx)(i.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(Q,{user:a,setuser:n,currentUser:u,setcurrentUser:j})}),Object(f.jsx)(o.a,{path:"/registration",children:""===u?Object(f.jsx)(V,{user:a,setuser:n,currentUser:u,setcurrentUser:j}):Object(f.jsx)(X,{})})]})})]})};s.a.render(Object(f.jsx)(Z,{}),document.getElementById("root"))},97:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.e54dadc1.chunk.js.map