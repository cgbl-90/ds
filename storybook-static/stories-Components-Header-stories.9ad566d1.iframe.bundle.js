"use strict";(self.webpackChunkcgbl_design_system=self.webpackChunkcgbl_design_system||[]).push([[943],{"./src/stories/Components/Header.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Header.jsx"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"COMPONENTS/Header",component:_Header__WEBPACK_IMPORTED_MODULE_0__.Y,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{onLogin:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),onLogout:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),onCreateAccount:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}},LoggedIn={args:{user:{name:"Lovely Gloria"}}},LoggedOut={},__namedExportsOrder=["LoggedIn","LoggedOut"];LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:'{\n  args: {\n    user: {\n      name: "Lovely Gloria"\n    }\n  }\n}',...LoggedIn.parameters?.docs?.source}}},LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}}},"./src/stories/Atoms/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary,backgroundColor,size,label,state,...props}=_ref;const mode=primary?"storybook-button--primary":"storybook-button--secondary",stateClass=state?`storybook-button--${state}`:"";return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button",`storybook-button--${size}`,mode,stateClass].join(" "),style:backgroundColor?{backgroundColor}:{},...props,children:label})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",state:null,onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},state:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"enum",value:[{value:'"hover"',computed:!1},{value:'"pressed"',computed:!1},{value:'"noborder"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}}},"./src/stories/Atoms/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icon=_ref=>{let{size}=_ref;return(0,jsx_runtime.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABKCAYAAADzEqlPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAX2SURBVHgB7ZpdaBRXFMfPlj5pE31Vg+mTaEB9iGAFtVVEtE0aFMEtiSgB1+IHSLEKCikIioqIYITYgAgqzUPelCoqxY+A8SEPKkTrU5RoXjXR53b+F85wdtyZuefOZLMr9wfDzu7Ozs7933POPefMFJpnzfqPPFZ8RR5rvFgKvFgKvFgKvFgKvFgKvFgKvFgKvFgKvqacaGpupu/WrKGmhQvDzyY/fKDR589p+OFD+hLILBYEOnjsmHmNY/z1axp+9IjOnzxp9uuVgmttCEs6e+lSokhRIBQEG7x2japB49y5NPn+PeWFk1gQauDWLfPKGJd7+tRY0PibN8YdjWuuXVvmmgCCnT9xgrICMbZ1dtLG9na6c+MGXb54sex7TOa2rq6yz0afPTPb4PXr6vCgdsNKQuEiIUDcLOKC4aos2sGjR80FY4CuQKCzfX1GMGA78JZly8yGa4KlFzdvtg4N6tUQA5VCHdqzh44fPpxo7nC74qZNRiAGs944Zw65gGv4c2AgFMoVjGNodNRMpA0qsXhGGIhkG3/MLAaCwV0BhOrev5+0QKjo4GBVd27eTPzd6pYW+nHVKipt3/6ZReOcNteiEkteJESKxog0INTl3t7wPeKNBnZnBrEREwBXklYbh3H9QNRSsWjEw++ZqMdUwlosnGhjW1v4HjHKBSkwzpl2gRIMiEH+BkvBguICWzoLBktHaEjCWqyWpUvDfcyQa74E6/p29uxwsz0PrIqFxQDhTlnTAvz3oVIpfI80KCmOWosl8ynX2cwCVj8GMSev5BZjkStpNNWQ2FtWENwZm/iQN3KytLEyDbk4yHFGcSp3ZGCsBnANdg+4sa1V2R4rj0mKodZiaQJx3sh8ShOnkNpgS4PTmTR8i0aBtVhSfdfM25Wom+T9/9EaNw5rsWScqrZY5v+FYC3Ll1OeyJU2qca0F2tsLNxPWjGmC1miyOQ0K9Fke3hoKPZYa7Hk8pqUi9jAmbtm0ZD/jzQi6zUwPadPh/umfRO0meKwFgsnkkUw+lQucKXPm61gSB5l0d5z5kyZ+7gQPUda/qYK8INXr4bvXV1BFs/asglpgKzl0KZBYa2NoaYnd/s2de/bF34GodI6KKpOKVsFo+14Rn+PXpi2xcwDld1X7vEndT+Rq8F9IVC0FY7foHORhrqtHO0n2QoW7bDCQlYvWUIuVBJMAvHYAvmYOHeHRdkkrsCpB//348ef1YrHjxypOKuYUcxm9969ZZm46SdlLIbNeYOmXZxoSeBaMdGapoCTWIgRmNloCoHBo8/EJQn3uyWIfZoOqw1YGbH8Y9FJil+4PqyqSENcOieFLI9JVmrxJgEh0T+azq4FrFf23gBcEpOUtf9VyPpMKWIBRKt0y4uBySP4Vut+4XRRyPMBXLgc3ICDqUkNMKs53uicSQr+aWV7fItGgRdLgRdLQW7PZ1WDsU+faCbxlqWgapbV0NhIi0QtOPLkCdUbzmJh8PMWLDCvr168oKnJyYrHta5cSbuD+g2vkqmpKXpw9y719/bSu/FxqgfUeVbc4CHYuaAwlRaz+8ABKgVbEhNv39KvO3ZYCTbTMUslls3gfw+6C/fv3aO2rVvpj1Onyr5jC5zf1GSskoFgnR0dsdbJ1E2AryQUBg9LgksxPYFAcE15LMTrWLfOCAIr+jnYhxXy7yDcT1u2UK1jJda8wBLaA0thMPj1K1aEg1/f2kr9Fy6Y7yBUcefO0HJwLKztXWA9kr+uXKFzomn4w4YNVOtYuaF0KVgSBKrEL7t20W+iNw+36goEjQol+WdkhBoaGsw+JiDJFevCDb8Xs94vntyLAmuRAf5BYFVJQoH7wYrIyDhWi1iJxTMPEKeSePXyZbj/b8qxYEKIOf9LEAurF5O2YkkxP4rAb8M3QbyrZXy5o8CLpcCLpcCLpcCLpUDddYgW0FEWLV4c7iNvSju+1tMFiVqsPvEkTRppRXe94d1QwbR0Siccm3kfUxLemaaubrL6GxZ1hBdLgRdLgRdLgRdLgRdLgRdLgRdLgRdLgRdLwf9m3M0/hg2sugAAAABJRU5ErkJggg==",alt:"Logo",className:`storybook-icon storybook-icon--${size}`})};Icon.defaultProps={size:"medium"},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1}}}},"./src/stories/Components/Header.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Header});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/stories/Atoms/Button.jsx"),Icon=__webpack_require__("./src/stories/Atoms/Icon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=_ref=>{let{user,onLogin,onLogout,onCreateAccount}=_ref;return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"storybook-header",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Icon.I,{size:"small"})}),(0,jsx_runtime.jsx)("div",{children:user?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,jsx_runtime.jsx)("b",{children:user.name}),"!"]}),(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogout,label:"Log out"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button.$,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};Header.defaultProps={user:null},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{name:{name:"string",required:!0}}},required:!1},onLogin:{description:"",type:{name:"func"},required:!0},onLogout:{description:"",type:{name:"func"},required:!0},onCreateAccount:{description:"",type:{name:"func"},required:!0}}}}}]);