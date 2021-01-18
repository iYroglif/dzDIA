(this["webpackJsonpmysite-ui"]=this["webpackJsonpmysite-ui"]||[]).push([[0],{33:function(t,e,c){},34:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var s=c(0),a=c(1),n=c.n(a),r=c(26),i=c.n(r),j=(c(33),c(34),c(13),c(5));var l=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"/#",children:"\u041c\u043e\u0439 \u0441\u0430\u0439\u0442"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})}),Object(s.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(s.jsxs)("ul",{class:"navbar-nav",children:[Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/students/",fromDashboard:!1},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(j.b,{class:"nav-link",to:{pathname:"/courses/",fromDashboard:!1},children:"\u041a\u0443\u0440\u0441\u044b"})})]})})]})})})},b=c(4),o=c(6),d=c.n(o);var u=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/students/"}).then((function(t){n(t.data)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b:"}),c.map((function(t){return Object(s.jsxs)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/students/".concat(t.id,"/"),fromDashboard:!1},children:[t.surname," ",t.name," ",t.patronymic," ",t.group]})}))]}),Object(s.jsx)("div",{class:"d-grid d-md-flex justify-content-md-end",children:Object(s.jsx)(j.b,{class:"btn btn-primary",role:"button",to:{pathname:"/students-edit/",fromDashboard:!1},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})};var h=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/courses/"}).then((function(t){n(t.data)}))}),[]),Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u041a\u0443\u0440\u0441\u044b:"}),c.map((function(t){return Object(s.jsx)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/courses/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))]})};var O=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],l=Object(a.useState)([]),o=Object(b.a)(l,2),u=o[0],h=o[1],O=e.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/students/".concat(O,"/")}).then((function(t){i(t.data),h(t.data.labs)}))}),[O]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["\u0421\u0442\u0443\u0434\u0435\u043d\u0442: ",Object(s.jsxs)("strong",{children:[r.surname," ",r.name," ",r.patronymic," "]}),r.group]}),Object(s.jsx)("hr",{}),u.map((function(t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title",children:t.course_lab.name}),Object(s.jsxs)("h6",{class:"card-subtitle mb-2 text-muted",children:["\u041a\u0443\u0440\u0441: ",t.course_lab.course.name]}),Object(s.jsx)("p",{class:"card-text",children:Object(s.jsxs)("small",{class:"text-muted",children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430: ",t.completed]})}),Object(s.jsx)(j.b,{class:"btn btn-primary",to:{pathname:"/labs/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]})},t.id)}))]})};var p=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],l=Object(a.useState)([]),o=Object(b.a)(l,2),u=o[0],h=o[1],O=e.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/courses/".concat(O,"/")}).then((function(t){i(t.data),h(t.data.course_labs)}))}),[O]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["\u041a\u0443\u0440\u0441: ",Object(s.jsx)("strong",{children:r.name})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b:"}),u.map((function(t){return Object(s.jsx)(j.b,{class:"list-group-item list-group-item-action",to:{pathname:"/courses-labs/".concat(t.id),fromDashboard:!1},children:t.name})}))]})]})};var x=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],j=Object(a.useState)([]),l=Object(b.a)(j,2),o=l[0],u=l[1],h=Object(a.useState)([]),O=Object(b.a)(h,2),p=O[0],x=O[1],m=e.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/labs/".concat(m,"/")}).then((function(t){i(t.data),u(t.data.course_lab),x(t.data.course_lab.course)}))}),[m]),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:o.name})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u041a\u0443\u0440\u0441:"})," ",p.name]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435:"})," ",o.task]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u0434\u0430\u043d\u0430:"})," ",r.issued]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430:"})," ",r.completed]})]})},m=c(2);var f=function(t){var e=t.match,c=Object(a.useState)({}),n=Object(b.a)(c,2),r=n[0],i=n[1],j=e.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/courses-labs/".concat(j,"/")}).then((function(t){i(t.data)}))}),[j]),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:r.name})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435: "}),r.task]}),Object(s.jsx)("hr",{})]})};var v=function(){return Object(a.useEffect)((function(){d()({method:"POST",url:"http://127.0.0.1:8000/api/students/",data:{surname:"fromVSC",name:"000",patronymic:"000",course:"100",group:"000"}}).then((function(){}))}),[]),Object(s.jsxs)("form",{method:"POST",children:[Object(s.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"xfvzdA2pWL6VG0hunymVO1lw7GeqnOjNBHIAXTQb3xOdIJcjcQ5KbRBxLiheqARX"}),Object(s.jsx)("input",{type:"text",name:"surname",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(s.jsx)("input",{type:"text",name:"name",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(s.jsx)("input",{type:"text",name:"patronymic",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(s.jsx)("input",{type:"number",name:"course",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(s.jsx)("input",{type:"text",name:"group",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(s.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})};var g=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("p",{children:"\u041c\u043e\u0439 \u0441\u0430\u0439\u0442"}),Object(s.jsxs)(j.a,{children:[Object(s.jsx)(l,{}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{path:"/students/",exact:!0,component:u}),Object(s.jsx)(m.a,{path:"/courses/",exact:!0,component:h}),Object(s.jsx)(m.a,{path:"/students-edit/",exact:!0,component:v}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{path:"/labs/:id",exact:!0,component:x}),Object(s.jsx)(m.a,{path:"/students/:id",exact:!0,component:O}),Object(s.jsx)(m.a,{path:"/courses/:id",exact:!0,component:p}),Object(s.jsx)(m.a,{path:"/courses-labs/:id",exact:!0,component:f})]})]})]})]})},y=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(e){var c=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,r=e.getTTFB;c(t),s(t),a(t),n(t),r(t)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),y()}},[[61,1,2]]]);
//# sourceMappingURL=main.8123d5e4.chunk.js.map