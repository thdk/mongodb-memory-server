(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var o=t(3),r=t(7),a=(t(0),t(96)),i={id:"integration-examples",title:"Integration Examples"},s={unversionedId:"guides/integration-examples",id:"guides/integration-examples",isDocsHomePage:!1,title:"Integration Examples",description:"This Guide will show how mongodb-memory-server can be used with different frameworks",source:"@site/../docs/guides/integration-examples.md",slug:"/guides/integration-examples",permalink:"/mongodb-memory-server/docs/guides/integration-examples",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/integration-examples.md",version:"current",sidebar:"guides",previous:{title:"Known Issues",permalink:"/mongodb-memory-server/docs/guides/known-issues"},next:{title:"Migrate to version 7.0.0",permalink:"/mongodb-memory-server/docs/guides/migrate7"}},c=[{value:"jest",id:"jest",children:[]},{value:"mocha / chai",id:"mocha--chai",children:[]}],l={toc:c};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This Guide will show how ",Object(a.b)("inlineCode",{parentName:"p"},"mongodb-memory-server")," can be used with different frameworks"),Object(a.b)("h2",{id:"jest"},"jest"),Object(a.b)("p",null,"For useage with ",Object(a.b)("inlineCode",{parentName:"p"},"jest")," it is recommended to use the ",Object(a.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},Object(a.b)("inlineCode",{parentName:"a"},"globalSetup"))," and ",Object(a.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#globalteardown-string"},Object(a.b)("inlineCode",{parentName:"a"},"globalTeardown"))," options"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"jest.config.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'{\n  "preset": "ts-jest",\n  "globalSetup": "<rootDir>/test/globalSetup.ts",\n  "globalTeardown": "<rootDir>/test/globalTeardown.ts",\n  "setupFilesAfterEnv": [\n    "<rootDir>/test/setupFile.ts"\n  ]\n}\n\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"globalSetup.ts"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { MongoMemoryServer } from 'mongodb-memory-server';\nimport * as mongoose from 'mongoose';\nimport { config } from './utils/config';\n\nexport = async function globalSetup() {\n  if (config.Memory) { // Config to decided if an mongodb-memory-server instance should be used\n    // it's needed in global space, because we don't want to create a new instance every test-suite\n    const instance = await MongoMemoryServer.create();\n    const uri = instance.getUri();\n    (global as any).__MONGOINSTANCE = instance;\n    process.env.MONGO_URI = uri.slice(0, uri.lastIndexOf('/'));\n  } else {\n    process.env.MONGO_URI = `mongodb://${config.IP}:${config.Port}`;\n  }\n\n  // The following is to make sure the database is clean before an test starts\n  await mongoose.connect(`${process.env.MONGO_URI}/${config.DataBase}`, { useNewUrlParser: true, useUnifiedTopology: true });\n  await mongoose.connection.db.dropDatabase();\n  await mongoose.disconnect();\n};\n\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"globalTeardown.ts"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { MongoMemoryServer } from 'mongodb-memory-server';\nimport { config } from './utils/config';\n\nexport = async function globalTeardown() {\n  if (config.Memory) { // Config to decided if an mongodb-memory-server instance should be used\n    const instance: MongoMemoryServer = (global as any).__MONGOINSTANCE;\n    await instance.stop();\n  }\n};\n")),Object(a.b)("p",null,"and an ",Object(a.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#setupfilesafterenv-array"},Object(a.b)("inlineCode",{parentName:"a"},"setupFilesAfterEnv"))," can be used to connect something like ",Object(a.b)("inlineCode",{parentName:"p"},"mongoose")," or ",Object(a.b)("inlineCode",{parentName:"p"},"mongodb")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"setupFile.ts"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { connect, disconnect } from './utils/connect';\n\nbeforeAll(async () => {\n  await connect();\n});\n\nafterAll(async () => {\n  await disconnect();\n});\n")),Object(a.b)("h2",{id:"mocha--chai"},"mocha / chai"),Object(a.b)("p",null,"Start Mocha with ",Object(a.b)("inlineCode",{parentName:"p"},"--timeout 60000")," cause first download of MongoDB binaries may take a time."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import mongoose from 'mongoose';\nimport { MongoMemoryServer } from 'mongodb-memory-server';\n\nlet mongoServer;\nconst opts = { useMongoClient: true }; // remove this option if you use mongoose 5 and above\n\nbefore(async () => {\n  mongoServer = new MongoMemoryServer();\n  const mongoUri = await mongoServer.getUri();\n  await mongoose.connect(mongoUri, opts);\n});\n\nafter(async () => {\n  await mongoose.disconnect();\n  await mongoServer.stop();\n});\n\ndescribe('...', () => {\n  it('...', async () => {\n    const User = mongoose.model('User', new mongoose.Schema({ name: String }));\n    const cnt = await User.count();\n    expect(cnt).to.equal(0);\n  });\n});\n")))}m.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),m=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(t),u=o,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||a;return t?r.a.createElement(d,s(s({ref:n},l),{},{components:t})):r.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);