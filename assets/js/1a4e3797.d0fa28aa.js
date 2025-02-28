"use strict";(self.webpackChunkjova_js_org=self.webpackChunkjova_js_org||[]).push([["5230"],{4371:function(e,t,r){r.r(t),r.d(t,{default:()=>A});var s=r("5893"),a=r("7294"),l=r("7262"),n=r("2371"),c=r("1199"),o=r("3367"),u=r("7670");let h=["zero","one","two","few","many","other"];function i(e){return h.filter(t=>e.includes(t))}let m={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};var d=r("7026"),p=r("6550"),g=r("6735"),f=r("4855");let x=function(){let e=(0,g.Z)(),t=(0,p.k6)(),r=(0,p.TH)(),{siteConfig:{baseUrl:s}}=(0,l.Z)(),a=e?new URLSearchParams(r.search):null,n=a?.get("q")||"",c=a?.get("ctx")||"",o=a?.get("version")||"",u=e=>{let t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:n,searchContext:c&&Array.isArray(f.Kc)&&f.Kc.some(e=>"string"==typeof e?e===c:e.path===c)?c:"",searchVersion:o,updateSearchPath:e=>{let r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{let s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{let t=u(e);return`${s}search?${t.toString()}`}}};var y=r("8489"),j=r("885"),C=r("9755"),S=r("7499"),I=r("9220"),v=r("5873"),w=r("1596");let P={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var R=r("5294");function _(){let{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,l.Z)(),{selectMessage:r}=function(){let e=function(){let{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),m}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let a=r.select(t);return s[Math.min(r.pluralForms.indexOf(a),s.length-1)]})(r,t,e)}}(),{searchValue:n,searchContext:o,searchVersion:h,updateSearchPath:p,updateSearchContext:g}=x(),[j,C]=(0,a.useState)(n),[S,I]=(0,a.useState)(),w=`${e}${h}`,_=(0,a.useMemo)(()=>j?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:j}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"}),[j]);(0,a.useEffect)(()=>{p(j),j?(async()=>{I(await (0,y.a)(w,o,j,100))})():I(void 0)},[j,w,o]);let A=(0,a.useCallback)(e=>{C(e.target.value)},[]);(0,a.useEffect)(()=>{n&&n!==j&&C(n)},[n]);let[b,$]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async function(){(!Array.isArray(f.Kc)||o||f.pQ)&&await (0,y.r)(w,o),$(!0)})()},[o,w]),(0,s.jsxs)(a.Fragment,{children:[(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,s.jsx)("title",{children:_})]}),(0,s.jsxs)("div",{className:"container margin-vert--lg",children:[(0,s.jsx)("h1",{children:_}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:(0,d.Z)("col",{[P.searchQueryColumn]:Array.isArray(f.Kc),"col--9":Array.isArray(f.Kc),"col--12":!Array.isArray(f.Kc)}),children:(0,s.jsx)("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:A,value:j,autoComplete:"off",autoFocus:!0})}),Array.isArray(f.Kc)?(0,s.jsx)("div",{className:(0,d.Z)("col","col--3","padding-left--none",P.searchContextColumn),children:(0,s.jsxs)("select",{name:"search-context",className:P.searchContextInput,id:"context-selector",value:o,onChange:e=>g(e.target.value),children:[f.pQ&&(0,s.jsx)("option",{value:"",children:(0,u.I)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),f.Kc.map(e=>{let{label:r,path:a}=(0,R._)(e,t);return(0,s.jsx)("option",{value:a,children:r},a)})]})}):null]}),!b&&j&&(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{})}),S&&(S.length>0?(0,s.jsx)("p",{children:r(S.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))}):(0,s.jsx)("p",{children:(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,s.jsx)("section",{children:S&&S.map(e=>(0,s.jsx)(F,{searchResult:e},e.document.i))})]})]})}function F(e){let{searchResult:{document:t,type:r,page:a,tokens:l,metadata:n}}=e,c=r===j.P.Title,u=r===j.P.Keywords,h=r===j.P.Description,i=h||u,m=c||i,d=r===j.P.Content,p=(c?t.b:a.b).slice(),g=d||i?t.s:t.t;m||p.push(a.t);let x="";if(f.vc&&l.length>0){let e=new URLSearchParams;for(let t of l)e.append("_highlight",t);x=`?${e.toString()}`}return(0,s.jsxs)("article",{className:P.searchResultItem,children:[(0,s.jsx)("h2",{children:(0,s.jsx)(o.Z,{to:t.u+x+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,C.C)(g,l):(0,S.o)(g,(0,I.m)(n,"t"),l,100)}})}),p.length>0&&(0,s.jsx)("p",{className:P.searchResultItemPath,children:(0,w.e)(p)}),(d||h)&&(0,s.jsx)("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,I.m)(n,"t"),l,100)}})]})}let A=function(){return(0,s.jsx)(n.Z,{children:(0,s.jsx)(_,{})})}}}]);