import{A as C}from"./AdminLayout.a1f64d17.js";import{e as w,L as N,P as K,r as g,_ as $,m as h,f as o,o as i,c as y,w as t,n as v,g as b,b as e,a as U,t as B}from"./index.75c9c567.js";function I(l,_){const u=new FileReader;u.addEventListener("load",()=>_(u.result)),u.readAsDataURL(l)}const V=w({components:{LoadingOutlined:N,PlusOutlined:K},setup(){const l=g([]),_=g(!1),u=g("");return{fileList:l,loading:_,imageUrl:u,handleChange:d=>{if(d.file.status==="uploading"){_.value=!0;return}d.file.status==="done"&&I(d.file.originFileObj,n=>{u.value=n,_.value=!1}),d.file.status==="error"&&(_.value=!1,h.error("upload error"))},beforeUpload:d=>{const n=d.type==="image/jpeg"||d.type==="image/png";n||h.error("You can only upload JPG file!");const a=d.size/1024/1024<2;return a||h.error("Image must smaller than 2MB!"),n&&a}}}}),O=["src"],x={key:1},E=b("div",{class:"ant-upload-text"},"Upload",-1);function F(l,_,u,f,m,d){const n=o("loading-outlined"),a=o("plus-outlined"),s=o("a-upload");return i(),y(s,{"file-list":l.fileList,"onUpdate:file-list":_[0]||(_[0]=r=>l.fileList=r),name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":l.beforeUpload,onChange:l.handleChange},{default:t(()=>[l.imageUrl?(i(),v("img",{key:0,src:l.imageUrl,alt:"avatar"},null,8,O)):(i(),v("div",x,[l.loading?(i(),y(n,{key:0})):(i(),y(a,{key:1})),E]))]),_:1},8,["file-list","before-upload","onChange"])}const M=$(V,[["render",F]]),R=w({});function j(l,_,u,f,m,d){const n=o("a-input"),a=o("a-form-item"),s=o("a-col"),r=o("a-row"),p=o("a-button"),c=o("a-form");return i(),v("div",null,[e(c,{layout:"vertical"},{default:t(()=>[e(r,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(a,{label:"First Name"},{default:t(()=>[e(n)]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(a,{label:"Last Name"},{default:t(()=>[e(n)]),_:1})]),_:1})]),_:1}),e(r,{gutter:24},{default:t(()=>[e(s,{span:24},{default:t(()=>[e(a,{label:"Email Address"},{default:t(()=>[e(n)]),_:1})]),_:1})]),_:1}),e(r,{gutter:24},{default:t(()=>[e(s,{span:8},{default:t(()=>[e(a,{label:"City"},{default:t(()=>[e(n)]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(a,{label:"State"},{default:t(()=>[e(n)]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(a,{label:"Zip"},{default:t(()=>[e(n)]),_:1})]),_:1})]),_:1}),e(r,{gutter:24},{default:t(()=>[e(s,{span:24},{default:t(()=>[e(a,{label:"Address1"},{default:t(()=>[e(n)]),_:1})]),_:1})]),_:1}),e(r,{gutter:24},{default:t(()=>[e(s,{span:24},{default:t(()=>[e(a,{label:"Address2"},{default:t(()=>[e(n)]),_:1})]),_:1})]),_:1}),e(r,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(a,{label:"Phone Number"},{default:t(()=>[e(n)]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(a,{label:"Type"},{default:t(()=>[e(n)]),_:1})]),_:1})]),_:1}),e(r,{gutter:24},{default:t(()=>[e(s,{span:24},{default:t(()=>[e(a,null,{default:t(()=>[e(p,{type:"primary","html-type":"submit"},{default:t(()=>[U("Update")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const z=$(R,[["render",j]]),D=w({});function J(l,_,u,f,m,d){const n=o("a-input"),a=o("a-form-item"),s=o("a-col"),r=o("a-row"),p=o("a-button"),c=o("a-form");return i(),v("div",null,[e(c,{layout:"vertical"},{default:t(()=>[e(r,{gutter:24},{default:t(()=>[e(s,{span:24},{default:t(()=>[e(a,{label:"Current Password"},{default:t(()=>[e(n)]),_:1}),e(a,{label:"New Password"},{default:t(()=>[e(n)]),_:1}),e(a,{label:"Re-type New Password"},{default:t(()=>[e(n)]),_:1})]),_:1})]),_:1}),e(r,{gutter:24},{default:t(()=>[e(s,{span:24},{default:t(()=>[e(a,null,{default:t(()=>[e(p,{type:"primary","html-type":"submit"},{default:t(()=>[U("Update New Password")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const S=$(D,[["render",J]]);const T=w({components:{AdminLayout:C,UserAvatar:M,UserInformation:z,UserPassword:S},data(){return{title:"My Profile",activeKey:g("1")}}}),G={class:"view-container"};function Y(l,_,u,f,m,d){const n=o("UserAvatar"),a=o("a-col"),s=o("UserInformation"),r=o("a-card"),p=o("a-row"),c=o("a-tab-pane"),P=o("UserPassword"),A=o("a-tabs"),L=o("AdminLayout");return i(),y(L,{defaultKey:"0"},{default:t(()=>[b("h1",null,[b("span",null,B(l.title),1)]),b("div",G,[e(A,{activeKey:l.activeKey,"onUpdate:activeKey":_[0]||(_[0]=k=>l.activeKey=k),size:"large"},{default:t(()=>[e(c,{key:"1",tab:"Profile"},{default:t(()=>[e(p,{gutter:48},{default:t(()=>[e(a,{span:8},{default:t(()=>[e(n)]),_:1}),e(a,{span:16},{default:t(()=>[e(r,{title:"Personal Information",style:{width:"800px"}},{default:t(()=>[e(s)]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{key:"2",tab:"Password"},{default:t(()=>[e(r,{title:"Password",style:{width:"600px"}},{default:t(()=>[e(P)]),_:1})]),_:1})]),_:1},8,["activeKey"])])]),_:1})}const H=$(T,[["render",Y],["__scopeId","data-v-b0f81407"]]);export{H as default};
