(this["webpackJsonpmysite-ui"]=this["webpackJsonpmysite-ui"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c.n(a),r=c(36),i=c.n(r),j=(c(46),c(47),c(17),c(7));var l=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"/",children:"\u041c\u043e\u0439 \u0441\u0430\u0439\u0442"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})}),Object(s.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(s.jsxs)("ul",{class:"navbar-nav",children:[Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/students/",fromDashboard:!1},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/courses/",fromDashboard:!1},children:"\u041a\u0443\u0440\u0441\u044b"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/report/",fromDashboard:!1},children:"\u041e\u0442\u0447\u0435\u0442"})})]})})]})})})},b=c(6),o=c(5),d=c.n(o);var u=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/students/"}).then((function(e){n(e.data)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b:"}),c.map((function(e){return Object(s.jsxs)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/students/".concat(e.id,"/"),fromDashboard:!1},children:[e.surname," ",e.name," ",e.patronymic," ",e.group]})}))]}),Object(s.jsxs)("div",{class:"d-grid d-md-flex justify-content-md-end",children:[Object(s.jsx)("p",{}),Object(s.jsx)(j.b,{class:"btn btn-primary",role:"button",to:{pathname:"/students-edit/",fromDashboard:!1},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})};var h=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/courses/"}).then((function(e){n(e.data)}))}),[]),Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u041a\u0443\u0440\u0441\u044b:"}),c.map((function(e){return Object(s.jsx)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/courses/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))]})};var O=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],l=Object(a.useState)([]),o=Object(b.a)(l,2),u=o[0],h=o[1],O=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/students/".concat(O,"/")}).then((function(e){i(e.data),h(e.data.labs)}))}),[O]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["\u0421\u0442\u0443\u0434\u0435\u043d\u0442: ",Object(s.jsxs)("strong",{children:[r.surname," ",r.name," ",r.patronymic," "]}),r.group]}),Object(s.jsx)("hr",{}),u.map((function(e){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title",children:e.course_lab.name}),Object(s.jsxs)("h6",{class:"card-subtitle mb-2 text-muted",children:["\u041a\u0443\u0440\u0441: ",e.course_lab.course.name]}),Object(s.jsx)("p",{class:"card-text",children:Object(s.jsxs)("small",{class:"text-muted",children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430: ",e.completed]})}),Object(s.jsx)(j.b,{class:"btn btn-primary",to:{pathname:"/labs/".concat(e.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]})},e.id)}))]})};var x=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],l=Object(a.useState)([]),o=Object(b.a)(l,2),u=o[0],h=o[1],O=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/courses/".concat(O,"/")}).then((function(e){i(e.data),h(e.data.course_labs)}))}),[O]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["\u041a\u0443\u0440\u0441: ",Object(s.jsx)("strong",{children:r.name})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b:"}),u.map((function(e){return Object(s.jsx)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/courses-labs/".concat(e.id),fromDashboard:!1},children:e.name})}))]})]})};var m=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],j=Object(a.useState)([]),l=Object(b.a)(j,2),o=l[0],u=l[1],h=Object(a.useState)([]),O=Object(b.a)(h,2),x=O[0],m=O[1],p=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/labs/".concat(p,"/")}).then((function(e){i(e.data),u(e.data.course_lab),m(e.data.course_lab.course)}))}),[p]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:Object(s.jsx)("strong",{children:o.name})}),Object(s.jsxs)("h6",{children:[Object(s.jsx)("strong",{children:"\u041a\u0443\u0440\u0441:"})," ",x.name]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435:"})," ",o.task]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u0434\u0430\u043d\u0430:"})," ",r.issued]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430:"})," ",r.completed]})]})},p=c(2);var f=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],j=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/courses-labs/".concat(j,"/")}).then((function(e){i(e.data)}))}),[j]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:r.name})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435: "}),r.task]}),Object(s.jsx)("hr",{})]})},v=c(15),g=c(39),y=c.n(g);d.a.defaults.xsrfCookieName="csrftoken",d.a.defaults.xsrfHeaderName="X-CSRFToken";var S=y()("csrftoken");var E=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(s.jsx)(v.c,{initialValues:{surname:"",name:"",patronymic:"",course:1,group:""},validate:function(){},onSubmit:function(e){alert(JSON.stringify(S,null,2)),d()({method:"post",url:"http://127.0.0.1:8000/api/students/",data:e})},children:Object(s.jsxs)(v.b,{children:[Object(s.jsxs)("div",{class:"mb-3",children:[Object(s.jsx)("label",{class:"form-label",for:"surname",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),Object(s.jsx)("br",{}),Object(s.jsx)(v.a,{type:"text",name:"surname"})]}),Object(s.jsxs)("div",{class:"mb-3",children:[Object(s.jsx)("label",{class:"form-label",children:"\u0418\u043c\u044f"}),Object(s.jsx)("br",{}),Object(s.jsx)(v.a,{type:"text",name:"name"})]}),Object(s.jsxs)("div",{class:"mb-3",children:[Object(s.jsx)("label",{class:"form-label",for:"patronymic",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:"}),Object(s.jsx)("br",{}),Object(s.jsx)(v.a,{type:"text",name:"patronymic"})]}),Object(s.jsxs)("div",{class:"mb-3",children:[Object(s.jsx)("label",{class:"form-label",for:"course",children:"\u041a\u0443\u0440\u0441:"}),Object(s.jsx)("br",{}),Object(s.jsx)(v.a,{type:"number",name:"course"})]}),Object(s.jsxs)("div",{class:"mb-3",children:[Object(s.jsx)("label",{class:"form-label",for:"group",children:"\u0413\u0440\u0443\u043f\u043f\u0430:"}),Object(s.jsx)("br",{}),Object(s.jsx)(v.a,{type:"text",name:"group"})]}),Object(s.jsx)("button",{class:"btn btn-primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})]})},k=c(26),T=(c(73),c(40)),D=c.n(T);var N=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/courses-labs/"}).then((function(e){n(e.data)}))}),[]);var r=new Set;c.map((function(e){return r.add({id:e.course.id,name:e.course.name})}));var i=[],j=["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"];return Array.from(r).map((function(e){i.push(e.name),j.push(0),c.filter((function(t){return t.course.id==e.id})).map((function(t){return j[e.id]++}))})),D.a.generate({data:{columns:[j]},axis:{x:{type:"category",categories:i}}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("ul",{class:"list-group",children:Array.from(r).map((function(e){return Object(s.jsxs)("li",{class:"list-group-item",children:[Object(s.jsx)("h4",{children:e.name}),Object(s.jsx)("ul",{class:"list-group",children:c.filter((function(t){return t.course.id==e.id})).map((function(e){var t;return Object(s.jsxs)("li",(t={class:"list-group-item"},Object(k.a)(t,"class","text-left"),Object(k.a)(t,"children",[Object(s.jsx)("h5",{children:e.name}),Object(s.jsx)("ul",{class:"list-group",children:e.labs.map((function(e){return Object(s.jsxs)("li",{class:"list-group-item",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442: "}),e.student.surname," ",e.student.name," ",e.student.patronymic," ",e.student.group]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430: "}),e.completed]})]})}))})]),t))}))})]})}))}),Object(s.jsx)("div",{id:"chart"})]})};var G=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(l,{}),Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{path:"/students/",exact:!0,component:u}),Object(s.jsx)(p.a,{path:"/courses/",exact:!0,component:h}),Object(s.jsx)(p.a,{path:"/students-edit/",exact:!0,component:E}),Object(s.jsx)(p.a,{path:"/report/",exact:!0,component:N}),Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{path:"/labs/:id",exact:!0,component:m}),Object(s.jsx)(p.a,{path:"/students/:id",exact:!0,component:O}),Object(s.jsx)(p.a,{path:"/courses/:id",exact:!0,component:x}),Object(s.jsx)(p.a,{path:"/courses-labs/:id",exact:!0,component:f})]})]})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(G,{})}),document.getElementById("root")),F()}},[[75,1,2]]]);
//# sourceMappingURL=main.adbc6c3a.chunk.js.map