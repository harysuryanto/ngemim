(this.webpackJsonpngemim=this.webpackJsonpngemim||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),i=c(2);c(9);var o=c(0);function l(e){var t=e.data;return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image m-0",children:Object(o.jsx)("img",{src:"https://cataas.com"+t.url,alt:"name"})})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("p",{children:["#",t.tags.join(" #")]})})})]})})})}function j(){return Object(o.jsx)("footer",{className:"footer mt-6",children:Object(o.jsxs)("div",{className:"content has-text-centered",children:[Object(o.jsxs)("p",{children:["Made with \ud83d\udc9b by ",Object(o.jsx)("a",{href:"https://instagram.com/harysuryanto_",target:"_blank",children:"Hary Suryanto"})]}),Object(o.jsxs)("p",{children:["Contribute to ",Object(o.jsx)("a",{href:"https://github.com/harysuryanto/ngemim",target:"_blank",children:"this project"})]})]})})}function d(){var e=function(e){var t=Object(s.useState)(null),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!0),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(s.useState)(null),b=Object(i.a)(d,2),h=b[0],u=b[1];return Object(s.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){a(e),j(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(j(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),console.log("ISI DATA",n),{data:n,isPending:l,error:h}}("https://cataas.com/cat/gif?json=true"),t=e.data,c=e.isPending,n=e.error,a=Object(s.useState)("button is-align-self-center"),r=Object(i.a)(a,2),d=r[0],b=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"section pt-6 pb-5",children:Object(o.jsx)("div",{className:"columns is-centered",children:Object(o.jsxs)("div",{className:"column is-full-tablet is-half-desktop",children:[Object(o.jsx)("h1",{className:"title",children:"Ngemim"}),Object(o.jsx)("p",{className:"subtitle",children:"powers up your mood \ud83d\udd25"})]})})}),Object(o.jsx)("section",{className:"section py-0",children:Object(o.jsx)("div",{className:"columns is-centered",children:Object(o.jsxs)("div",{className:"column is-full-tablet is-half-desktop",children:[n&&Object(o.jsx)("div",{children:n}),c&&Object(o.jsx)("div",{children:"Loading..."}),t&&Object(o.jsx)(l,{data:t}),Object(o.jsx)("p",{className:"mt-5 has-text-centered",children:Object(o.jsx)("button",{className:d,onClick:function(){b(d+" is-loading"),window.location.reload()},children:"Show more"})})]})})}),Object(o.jsx)(j,{})]})}var b=function(){return Object(o.jsx)(d,{})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.584dd578.chunk.js.map