(this["webpackJsonptodo-list-v1"]=this["webpackJsonptodo-list-v1"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(2),i=n.n(c),r=n(8),a=n.n(r),d=(n(16),n(3));var s=function(t){var e=Object(c.useState)(""),n=Object(d.a)(e,2),i=n[0],r=n[1],a=Object(c.useRef)(null);return Object(c.useEffect)((function(){a.current.focus()})),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Date.now(),text:i}),r("")},children:[Object(o.jsx)("input",{type:"text",placeholder:"add a todo",value:i,name:"text",className:"todo-input",onChange:function(t){r(t.target.value)},ref:a}),Object(o.jsx)("button",{className:"todo-button",children:"Add todo"})]})})},u=n(7),j=n(9),l=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,i=t.removeTodo,r=t.updateTodo,a=Object(c.useState)({id:null,value:""}),u=Object(d.a)(a,2),b=u[0],f=u[1];return b.id?Object(o.jsx)(s,{edit:b,onSubmit:function(t){r(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(o.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(o.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(j.a,{onClick:function(){return i(t.id)},className:"delete-icon"}),Object(o.jsx)(l.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" What are we doing today?"}),Object(o.jsx)(s,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(u.a)(n));i(e)}}}),Object(o.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){var e=Object(u.a)(n).filter((function(e){return e.id!==t}));i(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(o.jsx)("div",{className:"todo-app",children:Object(o.jsx)(f,{})})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1fd99499.chunk.js.map