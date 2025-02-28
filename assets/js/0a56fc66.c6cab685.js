"use strict";(self.webpackChunkjova_js_org=self.webpackChunkjova_js_org||[]).push([["4201"],{4278:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"Guide/Server","title":"Server","description":"Initiating a new Jova Server.","source":"@site/docs/Guide/Server.md","sourceDirName":"Guide","slug":"/Guide/Server","permalink":"/docs/Guide/Server","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Routes","permalink":"/docs/Guide/Routes"},"next":{"title":"Structure","permalink":"/docs/Guide/Structure"}}'),a=r("5893"),i=r("65");let o={},s="Server",c={},d=[];function l(e){let n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"server",children:"Server"})}),"\n",(0,a.jsx)(n.p,{children:"Initiating a new Jova Server."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// ESM\nimport { JovaServer } from '@bracketed/jova.js';\n\nconst Jova = new JovaServer();\n\nawait Jova.listen(3000);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// CJS\nconst { JovaServer } = require('@bracketed/jova.js');\n\nconst Jova = new JovaServer(); // All options for JovaServer are documented in the instance as jsDocs\n\nawait Jova.listen(3000);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can find an application example in the Jova.js repository ",(0,a.jsx)(n.a,{href:"https://github.com/bracketed/jova.js",children:"here"})," or the direct folder ",(0,a.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/tree/master/src/example",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The default Express API can be utilised from the default Jova instance after being initiated e.g: get(), post(), etc."}),"\n",(0,a.jsxs)(n.p,{children:["Since version ",(0,a.jsx)(n.code,{children:"v1.5.0"}),", the ",(0,a.jsx)(n.code,{children:"application"}),", ",(0,a.jsx)(n.code,{children:"container"}),", ",(0,a.jsx)(n.code,{children:"logger"})," and ",(0,a.jsx)(n.code,{children:"utilities"})," instances are now accessible via ",(0,a.jsx)(n.code,{children:"this"})," inside of your handler.\nThe examples in the ",(0,a.jsx)(n.code,{children:"src/example"})," folder have been updated accordingly to use this new structure."]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},65:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return o}});var t=r(7294);let a={},i=t.createContext(a);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);