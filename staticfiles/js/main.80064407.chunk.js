(this["webpackJsonpmysite-ui"]=this["webpackJsonpmysite-ui"]||[]).push([[0],{33:function(t,e,a){},34:function(t,e,a){},61:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(0),s=a.n(n),r=a(26),i=a.n(r),l=(a(33),a(34),a(15),a(8));var j=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(c.jsxs)("div",{class:"container-fluid",children:[Object(c.jsx)("a",{class:"navbar-brand",href:"/#",children:"\u041c\u043e\u0439 \u0441\u0430\u0439\u0442"}),Object(c.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{class:"navbar-toggler-icon"})}),Object(c.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(c.jsxs)("ul",{class:"navbar-nav",children:[Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(l.b,{class:"nav-link",to:{pathname:"/students/",fromDashboard:!1},children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)("a",{class:"nav-link",href:"/#",children:"???"})})]})})]})})})},b=a(9),d=a(11),o=a.n(d);var h=function(){var t=Object(n.useState)([]),e=Object(b.a)(t,2),a=e[0],s=e[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/students/"}).then((function(t){s(t.data)}))}),[]),Object(c.jsx)("div",{class:"list-group",children:a.map((function(t){return Object(c.jsxs)(l.b,{class:"list-group-item list-group-item-action",to:{pathname:"/students/".concat(t.id,"/"),fromDashboard:!1},children:[t.surname," ",t.name," ",t.patronymic," ",t.group]})}))})};var u=function(t){var e=t.match,a=Object(n.useState)({}),s=Object(b.a)(a,2),r=s[0],i=s[1],j=Object(n.useState)([]),d=Object(b.a)(j,2),h=d[0],u=d[1],O=e.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/students/".concat(O,"/")}).then((function(t){i(t.data),u(t.data.labs)}))}),[O]),Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("p",{children:["\u0421\u0442\u0443\u0434\u0435\u043d\u0442: ",Object(c.jsxs)("strong",{children:[r.surname," ",r.name," ",r.patronymic," "]}),r.group]}),Object(c.jsx)("hr",{}),h.map((function(t){return Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:t.course_lab.name}),Object(c.jsxs)("h6",{class:"card-subtitle mb-2 text-muted",children:["\u041a\u0443\u0440\u0441: ",t.course_lab.course.name]}),Object(c.jsx)("p",{class:"card-text",children:Object(c.jsx)("small",{class:"text-muted",children:t.issued})}),Object(c.jsx)(l.b,{class:"btn btn-primary",to:{pathname:"/lab/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]})},t.id)}))]})};var O=function(t){var e=t.match,a=Object(n.useState)({}),s=Object(b.a)(a,2),r=s[0],i=s[1],l=e.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/lab/".concat(l,"/")}).then((function(t){i(t.data)}))}),[l]),Object(c.jsxs)("div",{children:["Lab with id ",r.id,Object(c.jsxs)("p",{children:["Lab: ",Object(c.jsx)("strong",{children:r.issued})]})]})},x=a(2);var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(j,{}),Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/students/",exact:!0,component:h}),Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/labs/:id",exact:!0,component:O}),Object(c.jsx)(x.a,{path:"/students/:id",exact:!0,component:u})]})]})]})})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),s(t),r(t)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),m()}},[[61,1,2]]]);
//# sourceMappingURL=main.80064407.chunk.js.map