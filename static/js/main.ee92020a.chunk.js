(this.webpackJsonpngemim=this.webpackJsonpngemim||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),i=(c(9),c(2));var l=c(0);function o(e){var t=e.data;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image m-0",children:Object(l.jsx)("img",{src:"https://cataas.com"+t.url,alt:"name"})})}),Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("p",{children:["Tags: ",t.tags]})})})]})})})}function j(){return Object(l.jsx)("footer",{className:"footer mt-6",children:Object(l.jsx)("div",{className:"content has-text-centered",children:Object(l.jsxs)("p",{children:["Made with \ud83d\udc9b by ",Object(l.jsx)("a",{href:"https://instagram.com/harysuryanto_",target:"_blank",children:"Hary Suryanto"})]})})})}function d(){var e=function(e){var t=Object(s.useState)(null),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!0),l=Object(i.a)(r,2),o=l[0],j=l[1],d=Object(s.useState)(null),b=Object(i.a)(d,2),h=b[0],u=b[1];return Object(s.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){a(e),j(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(j(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),console.log("ISI DATA",n),{data:n,isPending:o,error:h}}("https://cataas.com/cat/gif?json=true"),t=e.data,c=e.isPending,n=e.error;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"section pt-6 pb-5",children:Object(l.jsx)("div",{className:"columns is-centered",children:Object(l.jsxs)("div",{className:"column is-full-tablet is-half-desktop",children:[Object(l.jsxs)("h1",{className:"title",children:["Welcome to ",Object(l.jsx)("strong",{children:"Ngemim"}),"!"]}),Object(l.jsx)("p",{className:"subtitle",children:"Memes power up your mood."})]})})}),Object(l.jsx)("section",{className:"section py-0",children:Object(l.jsx)("div",{className:"columns is-centered",children:Object(l.jsxs)("div",{className:"column is-full-tablet is-half-desktop",children:[n&&Object(l.jsx)("div",{children:n}),c&&Object(l.jsx)("div",{children:"Loading..."}),t&&Object(l.jsx)(o,{data:t}),Object(l.jsx)("p",{className:"mt-5 has-text-centered",children:Object(l.jsx)("button",{className:"button is-align-self-center",onClick:function(){return window.location.reload()},children:"Show another ..."})})]})})}),Object(l.jsx)(j,{})]})}var b=function(){return Object(l.jsx)(d,{})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ee92020a.chunk.js.map