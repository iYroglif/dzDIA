(this["webpackJsonpmysite-ui"]=this["webpackJsonpmysite-ui"]||[]).push([[0],{45:function(t,e,c){},46:function(t,e,c){},74:function(t,e,c){"use strict";c.r(e);var s=c(1),a=c(0),n=c.n(a),r=c(35),i=c.n(r),j=(c(45),c(46),c(17),c(7));var l=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"/",children:"\u041c\u043e\u0439 \u0441\u0430\u0439\u0442"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})}),Object(s.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(s.jsxs)("ul",{class:"navbar-nav",children:[Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/students/",fromDashboard:!1},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/courses/",fromDashboard:!1},children:"\u041a\u0443\u0440\u0441\u044b"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/report/",fromDashboard:!1},children:"\u041e\u0442\u0447\u0435\u0442"})})]})})]})})})},o=c(6),d=c(5),b=c.n(d);var u=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/students/"}).then((function(t){n(t.data)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b:"}),c.map((function(t){return Object(s.jsxs)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/students/".concat(t.id,"/"),fromDashboard:!1},children:[t.surname," ",t.name," ",t.patronymic," ",t.group]})}))]}),Object(s.jsx)("div",{class:"d-grid d-md-flex justify-content-md-end",children:Object(s.jsx)(j.b,{class:"btn btn-primary",role:"button",to:{pathname:"/students-edit/",fromDashboard:!1},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})};var h=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/courses/"}).then((function(t){n(t.data)}))}),[]),Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u041a\u0443\u0440\u0441\u044b:"}),c.map((function(t){return Object(s.jsx)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/courses/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))]})};var O=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(o.a)(c,2),r=n[0],i=n[1],l=Object(a.useState)([]),d=Object(o.a)(l,2),u=d[0],h=d[1],O=e.params.id;return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/students/".concat(O,"/")}).then((function(t){i(t.data),h(t.data.labs)}))}),[O]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["\u0421\u0442\u0443\u0434\u0435\u043d\u0442: ",Object(s.jsxs)("strong",{children:[r.surname," ",r.name," ",r.patronymic," "]}),r.group]}),Object(s.jsx)("hr",{}),u.map((function(t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title",children:t.course_lab.name}),Object(s.jsxs)("h6",{class:"card-subtitle mb-2 text-muted",children:["\u041a\u0443\u0440\u0441: ",t.course_lab.course.name]}),Object(s.jsx)("p",{class:"card-text",children:Object(s.jsxs)("small",{class:"text-muted",children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430: ",t.completed]})}),Object(s.jsx)(j.b,{class:"btn btn-primary",to:{pathname:"/labs/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]})},t.id)}))]})};var p=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(o.a)(c,2),r=n[0],i=n[1],l=Object(a.useState)([]),d=Object(o.a)(l,2),u=d[0],h=d[1],O=e.params.id;return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/courses/".concat(O,"/")}).then((function(t){i(t.data),h(t.data.course_labs)}))}),[O]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["\u041a\u0443\u0440\u0441: ",Object(s.jsx)("strong",{children:r.name})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b:"}),u.map((function(t){return Object(s.jsx)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/courses-labs/".concat(t.id),fromDashboard:!1},children:t.name})}))]})]})};var m=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(o.a)(c,2),r=n[0],i=n[1],j=Object(a.useState)([]),l=Object(o.a)(j,2),d=l[0],u=l[1],h=Object(a.useState)([]),O=Object(o.a)(h,2),p=O[0],m=O[1],x=e.params.id;return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/labs/".concat(x,"/")}).then((function(t){i(t.data),u(t.data.course_lab),m(t.data.course_lab.course)}))}),[x]),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:d.name})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u041a\u0443\u0440\u0441:"})," ",p.name]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435:"})," ",d.task]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u0434\u0430\u043d\u0430:"})," ",r.issued]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430:"})," ",r.completed]})]})},x=c(2);var f=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(o.a)(c,2),r=n[0],i=n[1],j=e.params.id;return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/courses-labs/".concat(j,"/")}).then((function(t){i(t.data)}))}),[j]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:r.name})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435: "}),r.task]}),Object(s.jsx)("hr",{})]})},v=c(15),g=c(38),y=c.n(g);b.a.defaults.xsrfCookieName="csrftoken",b.a.defaults.xsrfHeaderName="X-CSRFToken";var S=y()("csrftoken");var E=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(v.c,{initialValues:{surname:"",name:"",patronymic:"",course:1,group:""},validate:function(){},onSubmit:function(t){alert(JSON.stringify(S,null,2)),b()({method:"post",url:"http://127.0.0.1:8000/api/students/",data:t})},children:Object(s.jsxs)(v.b,{children:[Object(s.jsx)(v.a,{type:"text",name:"surname"}),Object(s.jsx)(v.a,{type:"text",name:"name"}),Object(s.jsx)(v.a,{type:"text",name:"patronymic"}),Object(s.jsx)(v.a,{type:"number",name:"course"}),Object(s.jsx)(v.a,{type:"text",name:"group"}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})})})},k=(c(72),c(39)),T=c.n(k);var D=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1];Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/courses-labs/"}).then((function(t){n(t.data)}))}),[]);var r=new Set;c.map((function(t){return r.add(t.course)}));var i=[],j=["data"];return Array.from(r).map((function(t){i.push(t.name),j.push(0),c.filter((function(e){return e.course.id==t.id})).map((function(e){return j[t.id]++}))})),T.a.generate({data:{columns:[j]},axis:{x:{type:"category",categories:i}}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("ul",{class:"list-group",children:Array.from(r).map((function(t){return Object(s.jsxs)("li",{class:"list-group-item",children:[Object(s.jsx)("h4",{children:t.name}),Object(s.jsx)("ul",{class:"list-group",children:c.filter((function(e){return e.course.id==t.id})).map((function(t){return Object(s.jsxs)("li",{class:"list-group-item",children:[Object(s.jsx)("h5",{children:t.name}),Object(s.jsx)("ul",{class:"list-group",children:t.labs.map((function(t){return Object(s.jsxs)("li",{class:"list-group-item",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442: "}),t.student.surname," ",t.student.name," ",t.student.patronymic," ",t.student.group]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430: "}),t.completed]})]})}))})]})}))})]})}))}),Object(s.jsx)("div",{id:"chart"})]})};var N=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(l,{}),Object(s.jsxs)(x.c,{children:[Object(s.jsx)(x.a,{path:"/students/",exact:!0,component:u}),Object(s.jsx)(x.a,{path:"/courses/",exact:!0,component:h}),Object(s.jsx)(x.a,{path:"/students-edit/",exact:!0,component:E}),Object(s.jsx)(x.a,{path:"/report/",exact:!0,component:D}),Object(s.jsxs)(x.c,{children:[Object(s.jsx)(x.a,{path:"/labs/:id",exact:!0,component:m}),Object(s.jsx)(x.a,{path:"/students/:id",exact:!0,component:O}),Object(s.jsx)(x.a,{path:"/courses/:id",exact:!0,component:p}),Object(s.jsx)(x.a,{path:"/courses-labs/:id",exact:!0,component:f})]})]})]})})},G=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(e){var c=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,r=e.getTTFB;c(t),s(t),a(t),n(t),r(t)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),G()}},[[74,1,2]]]);
//# sourceMappingURL=main.cca87c5d.chunk.js.map