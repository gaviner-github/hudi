"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[73194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),h=a,d=s["".concat(c,".").concat(h)]||s[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6746:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72389);function i(e){let{children:t,url:i}=e;return(0,a.Z)()&&(n.g.window.location.href=i),r.createElement("span",null,t,"or click ",r.createElement("a",{href:i},"here"))}},78197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(6746);const o={},l=void 0,c={permalink:"/blog/2023/03/16/Setting-Uber-Transactional-Data-Lake-in-Motion-with-Incremental-ETL-Using-Apache-Hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-03-16-Setting-Uber-Transactional-Data-Lake-in-Motion-with-Incremental-ETL-Using-Apache-Hudi.mdx",source:"@site/blog/2023-03-16-Setting-Uber-Transactional-Data-Lake-in-Motion-with-Incremental-ETL-Using-Apache-Hudi.mdx",title:"Setting-Uber-Transactional-Data-Lake-in-Motion-with-Incremental-ETL-Using-Apache-Hudi",description:"---",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[],readingTime:.285,truncated:!1,authors:[],prevItem:{title:"Introducing native support for Apache Hudi, Delta Lake, and Apache Iceberg on AWS Glue for Apache Spark, Part 2: AWS Glue Studio Visual Editor",permalink:"/blog/2023/03/20/Introducing-native-support-for-Apache Hudi-Delta-Lake-and-Apache-Iceberg-on-AWS-Glue-for-Apache-Spark-Part-2-AWS-Glue-Studio-Visual-Editor"},nextItem:{title:"Automate schema evolution at scale with Apache Hudi in AWS Glue | Amazon Web Services",permalink:"/blog/2023/02/07/automate-schema-evolution-at-scale-with-apache-hudi-in-aws-glue"}},u={authorsImageUrls:[]},p=[],s={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,'title: "Setting Uber\u2019s Transactional Data Lake in Motion with Incremental ETL Using Apache Hudi"\nauthors: '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: Vinoth Govindarajan"),(0,a.kt)("li",{parentName:"ul"},"name: Saketh Chintapalli"),(0,a.kt)("li",{parentName:"ul"},"name: Yogesh Saswade"),(0,a.kt)("li",{parentName:"ul"},"name: Aayush Bareja\ncategory: blog\nimage: /assets/images/blog/hudi-lakehouse-architecture-uber.png\ntags:"),(0,a.kt)("li",{parentName:"ul"},"incremental pipeline"),(0,a.kt)("li",{parentName:"ul"},"datalake"),(0,a.kt)("li",{parentName:"ul"},"hudi"),(0,a.kt)("li",{parentName:"ul"},"medallion architecture")),(0,a.kt)("hr",null),(0,a.kt)(i.Z,{url:"https://www.uber.com/blog/ubers-lakehouse-architecture/",mdxType:"Redirect"},"Redirecting... please wait!! "))}h.isMDXComponent=!0}}]);