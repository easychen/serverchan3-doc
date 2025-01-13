(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4526],{19293:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zh/serverchan3/compatibility/sct-forward",function(){return n(9181)}])},9181:function(e,r,n){"use strict";n.r(r),n.d(r,{useTOC:function(){return c}});var t=n(85893),s=n(37812),l=n(38204),i=n(38925),a=n(98757),o=n(95956);function c(e){return[{value:"转发服务",id:"转发服务",depth:2},{value:"最佳实践",id:"最佳实践",depth:2}]}r.default=(0,s.c)(function(e){let{toc:r=c(e)}=e,n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:r[0].id,children:r[0].value}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://sc3.ft07.com/",children:"Server酱\xb3"})," 和 ",(0,t.jsxs)(n.a,{href:"https://sct.ftqq.com/",children:["Server酱",(0,t.jsx)("sup",{children:"Turbo"})]})," 采用不同的用户系统和SendKey，因此无法在系统内部进行兼容。"]}),"\n",(0,t.jsxs)(n.p,{children:["一个现实问题是，目前市面上的应用主要整合的是Server酱",(0,t.jsx)("sup",{children:"Turbo"}),"，虽然我们在努力推送对Server酱\xb3的整合，但这依然需要很长的时间。"]}),"\n",(0,t.jsxs)(n.p,{children:["因此，我们架设了一个",(0,t.jsx)(n.strong,{children:"临时"}),"转发系统，当它发现SendKey来自Server酱\xb3时，会自动将其转发。"]}),"\n",(0,t.jsx)(a.G,{chart:"sequenceDiagram\\n    participant User as 用户\\n    participant SctAPI as Server酱 Turbo API\\n    participant Sc3API as Server酱\xb3 API\\n    participant Phone as 用户手机\\n    \\n    User ->> SctAPI: 发起推送请求 (带有Server酱\xb3的SendKey)\\n    SctAPI ->> Sc3API: 检测到SendKey来自Server酱\xb3，转发请求\\n    Sc3API ->> Phone: 向用户手机推送消息 (包含广告)\\n"}),"\n",(0,t.jsxs)(o.U,{children:[(0,t.jsx)(n.p,{children:"请务必注意："}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"这个转发系统是临时的，当Server酱\xb3的生态成熟后，会停止使用（最长三年）"}),"\n",(0,t.jsxs)(n.li,{children:["为了让用户和软件作者优先使用Server酱\xb3的官方入口，",(0,t.jsx)(n.strong,{children:"本系统转发的内容会添加广告"})]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:r[1].id,children:r[1].value}),"\n",(0,t.jsx)(n.p,{children:"为了提升您的使用体验，请："}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["对您自己开发的程序，请使用",(0,t.jsx)(n.a,{href:"/serverchan3/server/api",children:"Server酱\xb3官方API入口"})]}),"\n",(0,t.jsxs)(n.li,{children:["对您在使用的软件和服务，请",(0,t.jsx)(n.strong,{children:"向开发方建议"}),"兼容",(0,t.jsx)(n.a,{href:"/serverchan3/server/api",children:"Server酱\xb3官方API入口"}),"。"]}),"\n"]}),"\n",(0,t.jsx)(o.U,{type:"info",children:(0,t.jsxs)(n.p,{children:["我们提供了",(0,t.jsx)(n.a,{href:"/serverchan3/server/sdk",children:"SDK"}),"，",(0,t.jsxs)(n.strong,{children:["可以同时兼容Server酱",(0,t.jsx)("sup",{children:"Turbo"}),"和Server酱\xb3"]}),"，替换起来成本很低。"]})})]})},"/zh/serverchan3/compatibility/sct-forward",{filePath:"pages/zh/serverchan3/compatibility/sct-forward.mdx",timestamp:1736671213e3,pageMap:l.v,frontMatter:{},title:"Sct Forward"},"undefined"==typeof RemoteContent?c:RemoteContent.useTOC)},95956:function(e,r,n){"use strict";n.d(r,{U:function(){return o}});var t=n(85893),s=n(90512),l=n(45192);let i={default:"\uD83D\uDCA1",error:"\uD83D\uDEAB",info:(0,t.jsx)(l.AV,{className:"_mt-1"}),warning:"⚠️"},a={default:(0,s.Z)("_border-orange-100 _bg-orange-50 _text-orange-800 dark:_border-orange-400/30 dark:_bg-orange-400/20 dark:_text-orange-300"),error:(0,s.Z)("_border-red-200 _bg-red-100 _text-red-900 dark:_border-red-200/30 dark:_bg-red-900/30 dark:_text-red-200"),info:(0,s.Z)("_border-blue-200 _bg-blue-100 _text-blue-900 dark:_border-blue-200/30 dark:_bg-blue-900/30 dark:_text-blue-200"),warning:(0,s.Z)("_border-yellow-100 _bg-yellow-50 _text-yellow-900 dark:_border-yellow-200/30 dark:_bg-yellow-700/30 dark:_text-yellow-200")};function o({children:e,type:r="default",emoji:n=i[r]}){return(0,t.jsxs)("div",{className:(0,s.Z)("nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4","contrast-more:_border-current contrast-more:dark:_border-current",a[r]),children:[(0,t.jsx)("div",{className:"_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:n}),(0,t.jsx)("div",{className:"_w-full _min-w-0 _leading-7",children:e})]})}},98757:function(e,r,n){"use strict";n.d(r,{G:function(){return l}});var t=n(85893),s=n(67294);function l({chart:e}){let r=(0,s.useId)(),[l,i]=(0,s.useState)(""),a=(0,s.useRef)(null),o=function(e){let[r,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(r.disconnect(),n(!0))});return r.observe(e.current),()=>{r.disconnect()}},[e]),r}(a);return(0,s.useEffect)(()=>{if(!o)return;let t=document.documentElement,s=new MutationObserver(l);return s.observe(t,{attributes:!0}),l(),()=>{s.disconnect()};async function l(){let s=t.classList.contains("dark")||t.attributes.getNamedItem("data-theme")?.value==="dark",{default:l}=await Promise.all([n.e(3221),n.e(4420)]).then(n.bind(n,42858));try{l.initialize({startOnLoad:!1,securityLevel:"loose",fontFamily:"inherit",themeCSS:"margin: 1.5rem auto 0;",theme:s?"dark":"default"});let{svg:n}=await l.render(r.replaceAll(":",""),e.replaceAll("\\n","\n"),a.current);i(n)}catch(e){console.error("Error while rendering mermaid",e)}}},[e,o]),(0,t.jsx)("div",{ref:a,dangerouslySetInnerHTML:{__html:l}})}}},function(e){e.O(0,[7812,8204,2888,9774,179],function(){return e(e.s=19293)}),_N_E=e.O()}]);