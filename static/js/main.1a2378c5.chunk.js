(this["webpackJsonpfinal-p"]=this["webpackJsonpfinal-p"]||[]).push([[0],{21:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),s=n.n(a),o=(n(21),n(3)),l=n.n(o),i=n(5),u=n(4),d=n(2),b=n(8),x="https://posts-pw2021.herokuapp.com/api/v1",j={};j.loginAdmin=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/auth/signin"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:"".concat(t),password:"".concat(n)})});case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j.createPost=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r,c,a){var s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"admin"!==n){e.next=10;break}return e.next=4,fetch("".concat(x,"/post/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-type":"application/json"},body:JSON.stringify({title:"".concat(r),description:"".concat(c),image:"".concat(a)})});case 4:return s=e.sent,e.next=7,s.json();case 7:return o=e.sent,console.log(o),e.abrupt("return",o);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,r,c,a){return e.apply(this,arguments)}}(),j.verifyToken=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/auth/whoami"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j.Owned=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r,c){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"admin"!==n){e.next=10;break}return e.next=4,fetch("".concat(x,"/post/owned?limit=").concat(r,"&page=").concat(c),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,console.log(s),e.abrupt("return",s);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,r,c){return e.apply(this,arguments)}}(),j.Toggle=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"admin"!==n){e.next=9;break}return e.next=4,fetch("".concat(x,"/post/toggle/").concat(r),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t)}});case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log();case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r){return e.apply(this,arguments)}}(),j.Update=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r){var c,a,s,o,i,u=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=u.length>3&&void 0!==u[3]?u[3]:"",a=u.length>4&&void 0!==u[4]?u[4]:"",s=u.length>5&&void 0!==u[5]?u[5]:"",e.prev=3,"admin"!==n){e.next=13;break}return e.next=7,fetch("".concat(x,"/post/update/").concat(r),{method:"PUT",headers:{Authorization:"Bearer ".concat(t),"Content-type":"application/json"},body:JSON.stringify({title:"".concat(c),description:"".concat(a),image:"".concat(s)})});case 7:return o=e.sent,e.next=10,o.json();case 10:return i=e.sent,console.log(i),e.abrupt("return",i);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,n,r){return e.apply(this,arguments)}}(),j.Commet=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r="")){e.next=5;break}return e.abrupt("return",{});case 5:return e.next=7,fetch("".concat(x,"/post/comment/").concat(n),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t),"Content-type":"application/json"},body:JSON.stringify({description:"".concat(r)})});case 7:return c=e.sent,e.next=10,c.json();case 10:return a=e.sent,console.log(a),e.abrupt("return",a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log();case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r){return e.apply(this,arguments)}}(),j.GetAll=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(x,"/post/all?limit=").concat(n,"&page=").concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,console.log(a),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r){return e.apply(this,arguments)}}(),j.Like=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(x,"/post/like/").concat(n),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t)}});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log();case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();var h=j,p=n(0),f=c.a.createContext(),m="token",g=n(9),O=function(e){var t=Object(r.useState)(void 0),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(void 0),o=Object(u.a)(s,2),d=o[0],x=o[1],j=function(e){localStorage.setItem(m,e),a(e)};Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=w())){e.next=8;break}return e.next=4,h.verifyToken(t);case 4:n=e.sent,r=n.username,c=n.role,r&&c&&(x({username:r,role:c}),j(t));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]);var O=Object(r.useCallback)((function(e,t){var n=function(){var n=Object(i.a)(l.a.mark((function n(){var r,c,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,n.prev=1,n.next=4,h.loginAdmin(e,t);case 4:c=n.sent,(a=c.token)&&(j(a),r=!0,s="Bienvenido",o="login admin",l="success",g.fire({title:s,text:o,icon:l})),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0),console.error("Error in credentials");case 13:return n.prev=13,n.abrupt("return",r);case 16:case"end":return n.stop()}var s,o,l}),n,null,[[1,9,13,16]])})));return function(){return n.apply(this,arguments)}}();return n()}),[]),v=Object(r.useCallback)((function(){x(void 0),j(void 0)}),[]),y=Object(r.useMemo)((function(){return{token:c,user:d,login:O,Exit:v}}),[c,d,O,v]);return Object(p.jsx)(f.Provider,Object(b.a)({value:y},e))},v=function(){var e=c.a.useContext(f);if(!e)throw new Error("useUserContext() must be inside of UserProvider");return e},w=function(){return localStorage.getItem(m)},y={admin:"/admin",user:"/user"};function k(){var e=v(),t=Object(d.g)(),n=v(),c=n.login,a=(n.token,Object(r.useState)(!1)),s=Object(u.a)(a,2),o=s[0],b=s[1],x=Object(r.useState)(""),j=Object(u.a)(x,2),h=j[0],f=j[1],m=Object(r.useState)(""),g=Object(u.a)(m,2),O=g[0],w=g[1],k=function(e,t){t(e.target.value)},N=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c(h,O);case 3:n=e.sent,b(!n),f(""),w("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var n;e.user&&t(null!==(n=y[e.user.role])&&void 0!==n?n:"/")}),[e.user]),Object(p.jsx)("div",{className:"w-full h-screen flex items-center justify-center bg-gray-50",children:Object(p.jsxs)("div",{className:"bg-blue-500 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center",children:[Object(p.jsx)("label",{className:"font-light text-4xl mb-4",children:Object(p.jsx)("span",{className:"font-bold",children:"Login"})}),Object(p.jsxs)("form",{onSubmit:N,children:[o&&Object(p.jsx)("p",{className:"w-full rounded p-3 text-center text-gray-100 font-roboto bg-red-500 select-none",children:"Error, intente ingresar nuevamente"}),Object(p.jsx)("input",{className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",type:"text",value:h,placeholder:"e.g. username",onChange:function(e){return k(e,f)}}),Object(p.jsx)("input",{className:"w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4",type:"password",placeholder:"e.g password",onChange:function(e){return k(e,w)},value:O}),Object(p.jsx)("button",{className:"mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-gray-500 hover:bg-gray-800 py-2 px-4 text-gray-100",children:"Sign In "})]})]})})}var N=function(e){var t=e.role,n=void 0===t?"user":t,r=e.children,c=v(),a=c.token,s=c.user;return a?s&&s.role===n?r:Object(p.jsx)(d.a,{replace:!0,to:"/404"}):Object(p.jsx)(d.a,{replace:!0,to:"/login"})};function C(){var e=Object(d.g)();return Object(p.jsxs)("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-red-100",children:[Object(p.jsx)("h1",{className:"uppercase text-gray-800 font-monserrat font-black text-4xl mb-4 text-center",children:"Welcome to the Homepage"}),Object(p.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ",onClick:function(){e("/Login")},children:"Iniciar Sesion"})]})}var P="https://posts-pw2021.herokuapp.com/api/v1",S={},A=n(9),E=function(e,t,n){A.fire({title:e,text:t,icon:n})};S.showAllPost=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P,"/post/all?limit=10&page=0"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S.createPost=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r,c,a,s){var o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"admin"!==n){e.next=11;break}return e.next=4,fetch("".concat(P,"/post/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-type":"application/json"},body:JSON.stringify({title:"".concat(r),description:"".concat(c),image:"".concat(a),username:"".concat(s)})});case 4:return o=e.sent,e.next=7,o.json();case 7:return i=e.sent,console.log(i),o.ok?E("Post Creado","Post creado","success"):E("Error","Error al crear post","error"),e.abrupt("return",i);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,r,c,a,s){return e.apply(this,arguments)}}(),S.Like=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(P,"/post/like/").concat(n),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t)}});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,r.ok&&E("Like dado","","info"),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),S.Toggle=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"admin"!==n){e.next=10;break}return e.next=4,fetch("".concat(P,"/post/toggle/").concat(r),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t)}});case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,console.log(a),c.ok?E("Post Deshabilitado","Post eliminado","warning"):E("Error","No se logro deshabilitar el Post","error");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,r){return e.apply(this,arguments)}}();var T=S,L=n(10),B={id:null,username:"gp39_admin",title:"",description:"",image:""};function z(e){var t=e.setShowModal,n=e.createPost,c=Object(r.useState)(B),a=Object(u.a)(c,2),s=a[0],o=a[1],l=function(e){o(Object(b.a)(Object(b.a)({},s),{},Object(L.a)({},e.target.name,e.target.value)))},i=function(e){o(B)};return Object(p.jsx)(p.Fragment,{children:t?Object(p.jsx)("div",{class:"flex justify-center h-screen items-center bg-gray-200 antialiased",children:Object(p.jsxs)("div",{class:"flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl",children:[Object(p.jsx)("div",{class:"flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg",children:Object(p.jsx)("p",{class:"font-semibold text-gray-800",children:"Agregar Post"})}),Object(p.jsx)("div",{class:"flex flex-col px-6 py-5 bg-gray-50",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.title&&s.image&&s.description?(n(s),i()):alert("datos incompletos")},className:"flex flex-col px-6 py-5 bg-gray-50",children:[Object(p.jsx)("p",{class:"mb-2 font-semibold text-gray-700",children:"Escirbir mensaje"}),Object(p.jsx)("textarea",{type:"text",name:"description",placeholder:"Escribir mensaje...",class:"p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36",id:"description",onChange:l}),Object(p.jsxs)("div",{class:"flex flex-col sm:flex-row items-center mb-5 sm:space-x-5",children:[Object(p.jsxs)("div",{class:"w-full sm:w-1/2",children:[Object(p.jsx)("p",{class:"mb-2 font-semibold text-gray-700",children:"Titulo"}),Object(p.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"Titulo",class:"p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-12 w-56",onChange:l})]}),Object(p.jsxs)("div",{class:"w-full sm:w-1/2 mt-2 sm:mt-0",children:[Object(p.jsx)("p",{class:"mb-2 font-semibold text-gray-700",children:"Link de la Imagen"}),Object(p.jsx)("input",{type:"text",name:"image",id:"image",placeholder:"Link de la imagen",class:"p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-12 w-80",onChange:l})]})]}),Object(p.jsx)("button",{class:"px-4 py-2 text-white font-semibold bg-blue-500 rounded",children:"Save"})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{class:"flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg",children:Object(p.jsx)("button",{class:"font-semibold text-gray-600",onClick:function(){return t(!1)},children:"Cancelar"})})]})}):null})}var H=n(9);function F(e){var t=e.props,n=e.enterLike,c=t._id,a=t.title,s=t.description,o=t.image,l=t.__v,i=t.user.username,d=Object(r.useState)(0),b=Object(u.a)(d,2),x=b[0],j=b[1];return Object(p.jsx)("div",{className:"my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",children:Object(p.jsxs)("article",{className:"overflow-hidden rounded-lg shadow-lg",children:[Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("img",{alt:"Placeholder",className:"block h-auto w-full",src:o})}),Object(p.jsxs)("header",{className:"flex items-center justify-between leading-tight p-2 md:p-4",children:[Object(p.jsx)("h1",{className:"text-lg",children:Object(p.jsx)("a",{className:"no-underline hover:underline text-black",href:"#",children:a})}),Object(p.jsx)("p",{className:"text-grey-darker text-sm",children:s})]}),Object(p.jsxs)("footer",{className:"flex items-center justify-between leading-none p-2 md:p-4",children:[Object(p.jsx)("ul",{class:"list-none w-full flex text-center",role:"navigation",children:Object(p.jsx)("li",{class:"inline-block w-1/3",children:Object(p.jsxs)("button",{class:"block w-full p-2 hover:bg-blue-200 text-blue-700 hover:text-pink-600 focus:outline-none focus:bg-pink-100 focus:text-pink-600",children:[Object(p.jsx)("span",{class:"lni-heart"}),Object(p.jsxs)("span",{class:"hidden md:inline",onClick:function(){0===x?(n(c),j(x+1)):H.fire({title:"Ya le has dado like",text:"Like dado",icon:"info"})},children:[" ",l," Likes"]})]})})}),Object(p.jsxs)("a",{className:"flex items-center no-underline hover:underline text-black",href:"#",children:[Object(p.jsx)("img",{alt:"Placeholder",className:"block rounded-full",src:"https://images.vexels.com/media/users/3/223162/isolated/lists/5e80533c664d40856e255cc8d5c7e00e-diseno-de-icono-de-personas-planas.png",width:"32"}),Object(p.jsx)("p",{className:"ml-2 text-sm",children:i})]}),Object(p.jsxs)("a",{className:"no-underline text-grey-darker hover:text-red-dark",href:"#",children:[Object(p.jsx)("span",{className:"hidden",children:"Like"}),Object(p.jsx)("i",{className:"fa fa-heart"})]})]})]})})}function _(){var e=Object(d.g)(),t=v().Exit,n=v().token,c=Object(r.useState)([]),a=Object(u.a)(c,2),s=a[0],o=a[1];Object(r.useEffect)((function(){T.showAllPost(n).then((function(e){o(e.data)})).catch((function(e){console.log(e)}))}),[s]);var l=function(e){T.Like(n,e)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"flex justify-center items-center min-h-screen flex-col bg-gradient-to-r from-gray-300 to-red-200",children:[Object(p.jsx)("button",{className:"bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mb-4",onClick:function(){e("/userfavorite")},children:"Principal"}),Object(p.jsx)("button",{className:"bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mb-4",onClick:function(){t(),e("/Login")},children:"Exit"})]}),Object(p.jsx)("div",{class:"container my-12 mx-auto px-4 md:px-12",children:Object(p.jsx)("div",{class:"flex flex-wrap -mx-1 lg:-mx-4",children:s.map((function(e,t){return Object(p.jsx)(F,{props:e,enterLike:l})}))})})]})}n(9);function D(e){var t=e.props,n=e.deleteData,c=(e.enterLike,t._id),a=(t.title,t.description,t.image,t.__v,t.user.username,Object(r.useState)(0)),s=Object(u.a)(a,2);s[0],s[1];return Object(p.jsx)("div",{className:"my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",children:Object(p.jsxs)("article",{className:"overflow-hidden rounded-lg shadow-lg",children:[Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("img",{alt:"Placeholder",className:"block h-auto w-full",src:"https://w7.pngwing.com/pngs/957/974/png-transparent-hospital-logo-clinic-health-care-physician-business.png"})}),Object(p.jsx)("header",{className:"flex items-center justify-between leading-tight p-2 md:p-4"}),Object(p.jsxs)("footer",{className:"flex items-center justify-between leading-none p-2 md:p-4",children:[Object(p.jsxs)("ul",{class:"list-none w-full flex text-center",role:"navigation",children:[Object(p.jsx)("li",{class:"inline-block w-1/3",children:Object(p.jsxs)("button",{class:"block w-full p-2 hover:bg-yellow-200 text-yellow-700 hover:text-yellow-600 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600",children:[Object(p.jsx)("span",{class:"lni-comment-reply"}),Object(p.jsx)("span",{class:"hidden md:inline",children:"Modficar"})]})}),Object(p.jsx)("li",{class:"inline-block w-1/3",children:Object(p.jsxs)("button",{class:"block w-full p-2 hover:bg-red-200 text-red-700 hover:text-red-600 focus:outline-none focus:bg-indigo-100 focus:text-indigo-600",children:[Object(p.jsx)("span",{class:"lni-comment-reply"}),Object(p.jsx)("span",{class:"hidden md:inline",onClick:function(){return n(c)},children:"Deshabilitar"})]})})]}),Object(p.jsxs)("a",{className:"no-underline text-grey-darker hover:text-red-dark",href:"#",children:[Object(p.jsx)("span",{className:"hidden",children:"Like"}),Object(p.jsx)("i",{className:"fa fa-heart"})]})]})]})})}function I(e){var t=e.createPost,n=e.Exit,c=Object(r.useState)(!1),a=Object(u.a)(c,2),s=a[0],o=a[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("nav",{class:"flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700",children:[Object(p.jsxs)("div",{class:"flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0",children:[Object(p.jsx)("div",{class:"flex items-center flex-shrink-0 text-gray-800 mr-16",children:Object(p.jsx)("span",{class:"font-semibold text-xl tracking-tight",children:"Admin Page"})}),Object(p.jsx)("div",{class:"block lg:hidden ",children:Object(p.jsx)("button",{id:"nav",class:"flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700",children:Object(p.jsxs)("svg",{class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("title",{children:"Menu"}),Object(p.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})})]}),Object(p.jsxs)("div",{class:"text-md font-bold text-blue-700 lg:flex-grow",children:[Object(p.jsx)("button",{href:"#responsive-header",class:" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2",onClick:function(){return o(!0)},children:"Agregar"}),Object(p.jsx)("a",{href:"#responsive-header",class:" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2",children:"Buscar"})]}),Object(p.jsxs)("div",{class:"menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8",children:[Object(p.jsxs)("div",{class:"relative mx-auto text-gray-600 lg:block hidden",children:[Object(p.jsx)("input",{class:"border-2 border-gray-300 bg-white h-10 pl-32 pr-32 rounded-lg text-sm focus:outline-none",type:"search",name:"search",placeholder:"Search",autoComplete:"off"}),Object(p.jsx)("button",{type:"submit",class:"absolute right-0 top-0 mt-3 mr-2"})]}),Object(p.jsx)("div",{class:"flex ",children:Object(p.jsx)("button",{href:"#",class:"block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0",onClick:function(){return n()},children:"Cerrar Sesi\xf3n"})})]})]}),s?Object(p.jsx)(z,{setShowModal:o,createPost:t,children:" "}):null]})}function J(){var e=Object(d.g)(),t=v().Exit,n=v(),c=n.token,a=(n.user,Object(r.useState)([])),s=Object(u.a)(a,2),o=s[0],l=s[1];Object(r.useEffect)((function(){T.showAllPost(c).then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[o]);var i=function(e){T.Toggle(c,"admin",e)},b=function(e){T.Like(c,e)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(I,{createPost:function(e){T.createPost(c,"admin",e.title,e.description,e.image,e.username)},Exit:function(){t(),e("/Login")},children:" "}),Object(p.jsx)("div",{class:"container my-12 mx-auto px-4 md:px-12",children:Object(p.jsx)("div",{class:"flex flex-wrap -mx-1 lg:-mx-4",children:o.map((function(e,t){return Object(p.jsx)(D,{props:e,deleteData:i,enterLike:b})}))})})]})}function M(){var e=Object(d.g)();return Object(p.jsx)("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-200",children:Object(p.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-200",children:[Object(p.jsx)("h1",{className:"text-2xl text-gray-700 font-bold",children:"Favorites"}),Object(p.jsx)("h1",{className:"text-2xl text-gray-700 font-bold",children:"No hay favoritos"}),Object(p.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:function(){e("/user")},children:"Go Back"})]})})}var G=n(7);function U(){return Object(p.jsx)("div",{className:"flex items-center justify-center w-screen h-screen",children:Object(p.jsx)("div",{className:"px-4 lg:py-12",children:Object(p.jsxs)("div",{className:"lg:gap-4 lg:flex",children:[Object(p.jsxs)("div",{className:"flex flex-col items-center justify-center md:py-24 lg:py-32",children:[Object(p.jsx)("h1",{className:"font-bold text-blue-600 text-9xl",children:"404"}),Object(p.jsxs)("p",{className:"mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl",children:[Object(p.jsx)("span",{className:"text-red-500",children:"Oops!"})," Page not found"]}),Object(p.jsx)("p",{className:"mb-8 text-center text-gray-500 md:text-lg",children:"The page you\u2019re looking for doesn\u2019t exist."}),Object(p.jsx)(G.b,{to:"/",className:"border border-gray-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",children:"Back to Home"})]}),Object(p.jsx)("div",{className:"mt-4",children:Object(p.jsx)("img",{src:"https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_960_720.png",alt:"img",className:"object-cover w-full h-full"})})]})})})}var V=function(){return Object(p.jsx)(G.a,{children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/",element:Object(p.jsx)(C,{})}),Object(p.jsx)(d.b,{path:"/Login",element:Object(p.jsx)(k,{})}),Object(p.jsx)(d.b,{path:"/*",element:Object(p.jsx)(U,{})}),Object(p.jsx)(d.b,{path:"/admin",element:Object(p.jsxs)(N,{role:"admin",children:[" ",Object(p.jsx)(J,{})]})}),Object(p.jsx)(d.b,{path:"/user",element:Object(p.jsxs)(N,{role:"user",children:[" ",Object(p.jsx)(_,{})]})}),Object(p.jsx)(d.b,{path:"/userfavorite",element:Object(p.jsxs)(N,{role:"user",children:[" ",Object(p.jsx)(M,{})]})})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{children:Object(p.jsx)(V,{})})}),document.getElementById("root")),W()}},[[34,1,2]]]);
//# sourceMappingURL=main.1a2378c5.chunk.js.map