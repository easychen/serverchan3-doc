(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7707],{80104:function(s,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/serverchan3/server/sdk",function(){return n(73066)}])},73066:function(s,i,n){"use strict";n.r(i),n.d(i,{useTOC:function(){return r}});var e=n(85893),h=n(37812),l=n(38204),a=n(38925),d=n(45192);function r(s){return[{value:"General Knowledge",id:"general-knowledge",depth:2},{value:"JS SDK",id:"js-sdk",depth:2},{value:"SDK Location",id:"sdk-location",depth:3},{value:"Installation",id:"installation",depth:3},{value:"Usage Example",id:"usage-example",depth:3},{value:"PHP SDK",id:"php-sdk",depth:2},{value:"SDK Location",id:"sdk-location-1",depth:3},{value:"Installation",id:"installation-1",depth:3},{value:"Usage Example",id:"usage-example-1",depth:3},{value:"Python SDK",id:"python-sdk",depth:2},{value:"SDK Location",id:"sdk-location-2",depth:3},{value:"Installation",id:"installation-2",depth:3},{value:"Usage Example",id:"usage-example-2",depth:3},{value:"GoLang SDK",id:"golang-sdk",depth:2},{value:"SDK Location",id:"sdk-location-3",depth:3},{value:"Installation",id:"installation-3",depth:3},{value:"Usage Example",id:"usage-example-3",depth:3},{value:"Dart SDK",id:"dart-sdk",depth:2},{value:"SDK Location",id:"sdk-location-4",depth:3},{value:"Installation",id:"installation-4",depth:3},{value:"Usage Example",id:"usage-example-4",depth:3},{value:"Unsupported Languages",id:"unsupported-languages",depth:2}]}i.default=(0,h.c)(function(s){let{toc:i=r(s)}=s,n={a:"a",blockquote:"blockquote",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",summary:"summary",ul:"ul",...(0,a.a)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{children:"SDK"}),"\n",(0,e.jsx)(n.h2,{id:i[0].id,children:i[0].value}),"\n",(0,e.jsx)(n.p,{children:"Like the API, the SDK also adopts a minimalist style with just one function. This SDK is a compatible version that supports both sct.ftqq.com and sc3.ft07.com, meaning you don’t need to worry about which version the user is using - it will automatically adapt based on the key.\nThe parameters for all languages are:"}),"\n",(0,e.jsxs)(n.ol,{children:["\n",(0,e.jsx)(n.li,{children:"sendkey"}),"\n",(0,e.jsx)(n.li,{children:"title"}),"\n",(0,e.jsx)(n.li,{children:"desp - Message content, supports markdown, can include external image links (please use https)."}),"\n",(0,e.jsx)(n.li,{children:"options - Additional options"}),"\n"]}),"\n",(0,e.jsx)(n.p,{children:"Additional options include:"}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"jsonc","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    tags?"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"string;"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" // SC3 only: List of tags, multiple tags separated by vertical bars "})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    short?:"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" string;"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" // SC3 and SCT: Content of the message card, especially useful when desp is markdown"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    noip?:"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:";"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" // SCT only: Whether to hide the calling IP, 1 for hide"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    channel?:"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" string;"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" // SCT only: Message channels used for pushing, multiple channels separated by vertical bars"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    openid?:"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" string;"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" // SCT only: openid for message CC, only for WeCom application messages and test account channels, multiple openids separated by commas or vertical bars"})]}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsx)(n.p,{children:"Response format definition:"}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"jsonc","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    code"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"number;"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" // Status code, 0 for success "})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    message:"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" string;"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // Response message, corresponds to the status code"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"    data?:"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" any;"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // Optional return data, format differs between SCT and SC3"})]}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsx)(n.p,{children:"Below are the SDKs for various languages and their usage, click to view details"}),"\n",(0,e.jsxs)(n.details,{children:["\n",(0,e.jsx)(n.summary,{children:"JavaScript SDK ( Both web & nodejs )"}),"\n",(0,e.jsx)(n.h2,{id:i[1].id,children:i[1].value}),"\n",(0,e.jsx)(n.h3,{id:i[2].id,children:i[2].value}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["npm : ",(0,e.jsx)(n.a,{href:"https://www.npmjs.com/package/serverchan-sdk",children:"https://www.npmjs.com/package/serverchan-sdk"})]}),"\n"]}),"\n",(0,e.jsx)(n.h3,{id:i[3].id,children:i[3].value}),"\n",(0,e.jsx)(n.pre,{icon:d.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,e.jsx)(n.code,{children:(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"npm"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" serverchan-sdk"})]})})}),"\n",(0,e.jsx)(n.h3,{id:i[4].id,children:i[4].value}),"\n",(0,e.jsx)(n.pre,{icon:d.Dr,tabIndex:"0","data-language":"js","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {scSend} "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'serverchan-sdk'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"; "})]}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" sendkey"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '...'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"; "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// Replace with your actual Server Chan sendkey"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" title"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'Test Notification'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" desp"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'This is a test message'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" response"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" await"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" scSend"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sendkey, title, desp, { tags: "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'server-alert|report'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" });"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'Response:'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", response);"})]})]})}),"\n"]}),"\n",(0,e.jsxs)(n.details,{children:["\n",(0,e.jsx)(n.summary,{children:"PHP SDK"}),"\n",(0,e.jsx)(n.h2,{id:i[5].id,children:i[5].value}),"\n",(0,e.jsx)(n.h3,{id:i[6].id,children:i[6].value}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["compose package : ",(0,e.jsx)(n.a,{href:"https://packagist.org/packages/easychen/serverchan-sdk",children:"https://packagist.org/packages/easychen/serverchan-sdk"})]}),"\n"]}),"\n",(0,e.jsx)(n.h3,{id:i[7].id,children:i[7].value}),"\n",(0,e.jsx)(n.pre,{icon:d.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,e.jsx)(n.code,{children:(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"composer"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" require"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" easychen/serverchan-sdk"})]})})}),"\n",(0,e.jsx)(n.h3,{id:i[8].id,children:i[8].value}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"php","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ret "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" scSend"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'sendkey'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'title'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'desp'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", ["}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'tags'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'server-alert|image'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]);"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"print_r"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"($ret);"})]})]})}),"\n"]}),"\n",(0,e.jsxs)(n.details,{children:["\n",(0,e.jsx)(n.summary,{children:"Python SDK"}),"\n",(0,e.jsx)(n.h2,{id:i[9].id,children:i[9].value}),"\n",(0,e.jsx)(n.h3,{id:i[10].id,children:i[10].value}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["pip package : ",(0,e.jsx)(n.a,{href:"https://pypi.org/project/serverchan-sdk/",children:"https://pypi.org/project/serverchan-sdk/"})]}),"\n"]}),"\n",(0,e.jsx)(n.h3,{id:i[11].id,children:i[11].value}),"\n",(0,e.jsx)(n.pre,{icon:d.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,e.jsx)(n.code,{children:(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"pip"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" serverchan-sdk"})]})})}),"\n",(0,e.jsx)(n.h3,{id:i[12].id,children:i[12].value}),"\n",(0,e.jsx)(n.pre,{icon:d.gx,tabIndex:"0","data-language":"python","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" serverchan_sdk "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sc_send"})]}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Send message"})}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"sendkey "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "..."'})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"title "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Test Title"'})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"desp "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "This is the message content"'})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"options "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tags"'}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"server-alert|image"'}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}  "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Optional parameters"})]}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"response "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sc_send(sendkey, title, desp, options)"})]})]})}),"\n"]}),"\n",(0,e.jsxs)(n.details,{children:["\n",(0,e.jsx)(n.summary,{children:"Golang SDK"}),"\n",(0,e.jsx)(n.h2,{id:i[13].id,children:i[13].value}),"\n",(0,e.jsx)(n.h3,{id:i[14].id,children:i[14].value}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"https://github.com/easychen/serverchan-sdk-golang",children:"https://github.com/easychen/serverchan-sdk-golang"})}),"\n"]}),"\n",(0,e.jsx)(n.h3,{id:i[15].id,children:i[15].value}),"\n",(0,e.jsx)(n.pre,{icon:d.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,e.jsx)(n.code,{children:(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"go"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" get"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" github.com/easychen/serverchan-sdk-golang"})]})})}),"\n",(0,e.jsx)(n.h3,{id:i[16].id,children:i[16].value}),"\n",(0,e.jsx)(n.pre,{icon:d.CT,tabIndex:"0","data-language":"go","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"package"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"})]}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "'}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"fmt"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "'}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"github.com/easychen/serverchan-sdk-golang"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'})]}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"func"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() {"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    sendkey "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "your-sendkey"'})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    title "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Test Message"'})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    desp "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "This is a test message"'})]}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    "})}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    resp, err "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" serverchan_sdk."}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"ScSend"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sendkey, title, desp, "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"nil"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" err "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"!="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" nil"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        fmt."}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Println"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Error:"'}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", err)"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    } "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"else"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        fmt."}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Println"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Response:"'}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", resp)"})]}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n"]}),"\n",(0,e.jsxs)(n.details,{children:["\n",(0,e.jsx)(n.summary,{children:"Dart/Flutter SDK"}),"\n",(0,e.jsx)(n.h2,{id:i[17].id,children:i[17].value}),"\n",(0,e.jsx)(n.h3,{id:i[18].id,children:i[18].value}),"\n",(0,e.jsxs)(n.p,{children:["Pub Package - ",(0,e.jsx)(n.a,{href:"https://pub.dev/packages/serverchan_sdk",children:"https://pub.dev/packages/serverchan_sdk"})]}),"\n",(0,e.jsxs)(n.blockquote,{children:["\n",(0,e.jsx)(n.p,{children:"This package depends on the http package"}),"\n"]}),"\n",(0,e.jsx)(n.h3,{id:i[19].id,children:i[19].value}),"\n",(0,e.jsxs)(n.p,{children:["Add dependency in ",(0,e.jsx)(n.code,{children:"pubspec.yaml"})]}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"dependencies:"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    serverchan_sdk:"})})]})}),"\n",(0,e.jsx)(n.p,{children:"Then run"}),"\n",(0,e.jsx)(n.pre,{icon:d.Fx,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"dart"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" pub"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" get"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# or"})}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"flutter"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" pub"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" get"})]})]})}),"\n",(0,e.jsx)(n.h3,{id:i[20].id,children:i[20].value}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"dart","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'package:serverchan_sdk/serverchan_sdk.dart'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"void"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"async"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  const"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sendkey "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'your-sendkey'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  const"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" title "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'Test Title'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  const"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" desp "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'This is the detailed message content'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(n.span,{children:" "}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  try"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    ScSendResponse"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" response "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" await"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" scSend"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sendkey, title, desp"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" desp);"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    print"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'Response Code: "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"${"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"response"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"."}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"code"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    print"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'Response Message: "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"${"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"response"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"."}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"message"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  } "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"catch"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (e) {"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    print"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'Error: "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"$"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"e"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:i[21].id,children:i[21].value}),"\n",(0,e.jsx)(n.p,{children:"If your programming language is not covered, you can paste the following prompt to ChatGPT/Claude/DeepSeek/Kimi, and let AI help you write one immediately."}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"Please refer to the following TypeScript code and write the corresponding implementation in <xxx language>:"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"```typescript"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"import fetch from 'cross-fetch';"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"// ScSendOptions defines optional parameters for the push function"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"export interface ScSendOptions {"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** sctp only: List of tags, multiple tags separated by vertical bars */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    tags?: string;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** sctp and non-sctp: Brief description for the message card */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    short?: string;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** non-sctp: Whether to hide calling IP, 1 for hide */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    noip?: 1;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** non-sctp: Message channels used for pushing, multiple channels separated by vertical bars */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    channel?: string;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** non-sctp: openid for message CC, multiple openids separated by commas or vertical bars */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    openid?: string;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"}"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"// ScSendResponse defines the response result of the push function"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"export interface ScSendResponse {"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** Status code */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    code: number;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** Response message */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    message: string;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    /** Optional return data */"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    data?: any;"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"}"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"// Function to call Server Chan's push service"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"export async function scSend("})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    sendkey: string,"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    title: string,"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    desp: string = '',"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    options: ScSendOptions = {}"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"): Promise<ScSendResponse> {"})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    "})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"    const url = sendkey.startsWith('sctp') "})}),"\n",(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"        ? `https://${sendkey}.push.ft07.com/send`"})})]})})]})},"/en/serverchan3/server/sdk",{filePath:"pages/en/serverchan3/server/sdk.md",timestamp:1736671213e3,pageMap:l.v,frontMatter:{},title:"SDK"},"undefined"==typeof RemoteContent?r:RemoteContent.useTOC)}},function(s){s.O(0,[7812,8204,2888,9774,179],function(){return s(s.s=80104)}),_N_E=s.O()}]);