"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[248],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},235:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"mongo-binary",title:"MongoBinary"},c=void 0,l={unversionedId:"api/classes/mongo-binary",id:"api/classes/mongo-binary",title:"MongoBinary",description:"API Documentation of MongoBinary-Class",source:"@site/../docs/api/classes/mongo-binary.md",sourceDirName:"api/classes",slug:"/api/classes/mongo-binary",permalink:"/mongodb-memory-server/docs/api/classes/mongo-binary",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/classes/mongo-binary.md",tags:[],version:"current",frontMatter:{id:"mongo-binary",title:"MongoBinary"},sidebar:"api",previous:{title:"MongoInstance",permalink:"/mongodb-memory-server/docs/api/classes/mongo-instance"},next:{title:"DryMongoBinary",permalink:"/mongodb-memory-server/docs/api/classes/dry-mongo-binary"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"download",id:"download",level:3},{value:"getPath",id:"getpath",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"API Documentation of ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoBinary"),"-Class"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This class is not actually meant to be constructed, it only consists of static functions & values"))),(0,a.kt)("h3",{id:"download"},"download"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"static async download(options: Required<MongoBinaryOpts>): Promise<string>")),(0,a.kt)("p",null,"Try to find the binary and if not found download the binary."),(0,a.kt)("h3",{id:"getpath"},"getPath"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"static async getPath(opts: MongoBinaryOpts = {}): Promise<string>")),(0,a.kt)("p",null,"Get a working binary and returns the path to it.",(0,a.kt)("br",{parentName:"p"}),"\n","(Calls ",(0,a.kt)("a",{parentName:"p",href:"#download"},(0,a.kt)("inlineCode",{parentName:"a"},"download"))," if ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/config-options#runtime_download"},(0,a.kt)("inlineCode",{parentName:"a"},"RUNTIME_DOWNLOAD"))," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),")"))}u.isMDXComponent=!0}}]);