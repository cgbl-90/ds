"use strict";(self.webpackChunkcgbl_design_system=self.webpackChunkcgbl_design_system||[]).push([[966],{"./src/stories/Components/Card.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardWithCustomButton:()=>CardWithCustomButton,CardWithDifferentAvatarSize:()=>CardWithDifferentAvatarSize,CardWithLongDescription:()=>CardWithLongDescription,CardWithoutDescription:()=>CardWithoutDescription,DefaultCard:()=>DefaultCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var Avatar=__webpack_require__("./src/stories/Atoms/Avatar.js"),Button=__webpack_require__("./src/stories/Atoms/Button.jsx"),Typography=__webpack_require__("./src/stories/Atoms/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=_ref=>{let{avatarSrc,title,description,buttonLabel,onButtonClick}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"storybook-card",children:[(0,jsx_runtime.jsx)(Avatar.e,{src:avatarSrc,alt:"User Avatar",size:"large"}),(0,jsx_runtime.jsx)(Typography.o,{type:"title",label:title,styleType:"bold"}),(0,jsx_runtime.jsx)(Typography.o,{type:"text",label:description}),(0,jsx_runtime.jsx)(Button.$,{label:buttonLabel,onClick:onButtonClick,primary:!0})]})};Card.defaultProps={description:"",buttonLabel:"Learn More",onButtonClick:()=>{}},Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{description:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},buttonLabel:{defaultValue:{value:'"Learn More"',computed:!1},description:"",type:{name:"string"},required:!1},onButtonClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},avatarSrc:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!0}}};var avatar=__webpack_require__("./src/stories/avatar.png");const Card_stories={title:"COMPONENTS/Card",component:Card,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onButtonClick:{action:"clicked"}}},DefaultCard={args:{avatarSrc:avatar,title:"Default Card Title",description:"This is a default card description. It provides more context.",buttonLabel:"Learn More"}},CardWithLongDescription={args:{avatarSrc:avatar,title:"Long Description Card",description:"This card has a longer description to showcase how it handles more text. This is great for detailed information.",buttonLabel:"Learn More"}},CardWithoutDescription={args:{avatarSrc:avatar,title:"Card Without Description",description:"",buttonLabel:"Learn More"}},CardWithCustomButton={args:{avatarSrc:avatar,title:"Custom Button Card",description:"This card showcases a custom button action.",buttonLabel:"Custom Action"}},CardWithDifferentAvatarSize={args:{avatarSrc:avatar,title:"Small Avatar Card",description:"This card uses a smaller avatar size.",buttonLabel:"Learn More"}},__namedExportsOrder=["DefaultCard","CardWithLongDescription","CardWithoutDescription","CardWithCustomButton","CardWithDifferentAvatarSize"];DefaultCard.parameters={...DefaultCard.parameters,docs:{...DefaultCard.parameters?.docs,source:{originalSource:'{\n  args: {\n    avatarSrc: avatarImage,\n    title: "Default Card Title",\n    description: "This is a default card description. It provides more context.",\n    buttonLabel: "Learn More"\n  }\n}',...DefaultCard.parameters?.docs?.source}}},CardWithLongDescription.parameters={...CardWithLongDescription.parameters,docs:{...CardWithLongDescription.parameters?.docs,source:{originalSource:'{\n  args: {\n    avatarSrc: avatarImage,\n    title: "Long Description Card",\n    description: "This card has a longer description to showcase how it handles more text. This is great for detailed information.",\n    buttonLabel: "Learn More"\n  }\n}',...CardWithLongDescription.parameters?.docs?.source}}},CardWithoutDescription.parameters={...CardWithoutDescription.parameters,docs:{...CardWithoutDescription.parameters?.docs,source:{originalSource:'{\n  args: {\n    avatarSrc: avatarImage,\n    title: "Card Without Description",\n    description: "",\n    buttonLabel: "Learn More"\n  }\n}',...CardWithoutDescription.parameters?.docs?.source}}},CardWithCustomButton.parameters={...CardWithCustomButton.parameters,docs:{...CardWithCustomButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    avatarSrc: avatarImage,\n    title: "Custom Button Card",\n    description: "This card showcases a custom button action.",\n    buttonLabel: "Custom Action"\n  }\n}',...CardWithCustomButton.parameters?.docs?.source}}},CardWithDifferentAvatarSize.parameters={...CardWithDifferentAvatarSize.parameters,docs:{...CardWithDifferentAvatarSize.parameters?.docs,source:{originalSource:'{\n  args: {\n    avatarSrc: avatarImage,\n    // Use the imported avatar image\n    title: "Small Avatar Card",\n    description: "This card uses a smaller avatar size.",\n    buttonLabel: "Learn More"\n  }\n}',...CardWithDifferentAvatarSize.parameters?.docs?.source}}}},"./src/stories/Atoms/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=_ref=>{let{src,size,alt}=_ref;return(0,jsx_runtime.jsx)("div",{className:"storybook-avatar",children:(0,jsx_runtime.jsx)("img",{src,alt,"data-testid":"avatar",className:`storybook-avatar-img storybook-avatar--${size}`})})};Avatar.defaultProps={size:"medium",alt:"Avatar"},Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},alt:{defaultValue:{value:'"Avatar"',computed:!1},description:"",type:{name:"string"},required:!1},src:{description:"",type:{name:"string"},required:!0}}}},"./src/stories/Atoms/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary,backgroundColor,size,label,state,...props}=_ref;const mode=primary?"storybook-button--primary":"storybook-button--secondary",stateClass=state?`storybook-button--${state}`:"";return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button",`storybook-button--${size}`,mode,stateClass].join(" "),style:backgroundColor?{backgroundColor}:{},...props,children:label})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",state:null,onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},state:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"enum",value:[{value:'"hover"',computed:!1},{value:'"pressed"',computed:!1},{value:'"noborder"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}}},"./src/stories/Atoms/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Typography=_ref=>{let{type,styleType,label,...props}=_ref;const typeClass=`typography--${type}`,styleClass=styleType?`typography--${styleType}`:"";return(0,jsx_runtime.jsx)("div",{className:`typography ${typeClass} ${styleClass}`,...props,children:label})};Typography.defaultProps={styleType:null},Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{styleType:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"enum",value:[{value:'"italic"',computed:!1},{value:'"bold"',computed:!1},{value:'"underline"',computed:!1}]},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"title"',computed:!1},{value:'"subtitle"',computed:!1},{value:'"text"',computed:!1},{value:'"code"',computed:!1}]},required:!0},label:{description:"",type:{name:"node"},required:!0}}}},"./src/stories/avatar.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"6f0263d4d5d96e23f440.png"}}]);