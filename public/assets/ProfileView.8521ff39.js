import{A as q}from"./AdminLayout.c989038b.js";import{d as P,L,P as B,r as _,_ as $,m as g,f as r,o as S,a as b,c as t,w as s,h as I,e as y,F as M,q as U,j as w,s as C,k,g as O,t as N}from"./index.50e3038a.js";function T(e){return new Promise((a,u)=>{const m=new FileReader;m.readAsDataURL(e),m.onload=()=>a(m.result),m.onerror=h=>u(h)})}const V=P({components:{LoadingOutlined:L,PlusOutlined:B},setup(){const e=_([]),a=_(!1),u=_(""),m=_(!1),h=_(""),v=_("");return{fileList:e,loading:a,imageUrl:u,handleCancel:()=>{m.value=!1,v.value=""},handlePreview:async o=>{!o.url&&!o.preview&&(o.preview=await T(o.originFileObj)),console.log(o.url),h.value=o.url||o.preview,m.value=!0,v.value=o.name||o.url.substring(o.url.lastIndexOf("/")+1)},beforeUpload:o=>{const f=o.type==="image/jpeg"||o.type==="image/png";f||g.error("You can only upload JPG file!");const c=o.size/1024/1024<2;return c||g.error("Image must smaller than 2MB!"),f&&c},previewVisible:m,previewImage:h,previewTitle:v}},data(){return{base_url:"http://beta-api-igo.talentbuilders.org/api/v1/"}}}),F={key:0},K=y("div",{style:{"margin-top":"8px"}},"Upload",-1),R=["src"];function j(e,a,u,m,h,v){const d=r("plus-outlined"),n=r("a-upload"),l=r("a-modal");return S(),b(M,null,[t(n,{"file-list":e.fileList,"onUpdate:file-list":a[0]||(a[0]=o=>e.fileList=o),"list-type":"picture-card",onPreview:e.handlePreview},{default:s(()=>[e.fileList.length<1?(S(),b("div",F,[t(d),K])):I("",!0)]),_:1},8,["file-list","onPreview"]),t(l,{visible:e.previewVisible,title:e.previewTitle,footer:null,onCancel:e.handleCancel},{default:s(()=>[y("img",{alt:"example",style:{width:"100%"},src:e.previewImage},null,8,R)]),_:1},8,["visible","title","onCancel"])],64)}const D=$(V,[["render",j]]),E=P({setup(){const e=_(!1);return{formState:U({client_id:0,first_name:null,last_name:null,email:null,city:null,state:null,zip:null,address1:null,address2:null,phone:null}),loading:e}},data(){return{states:[],cities:[],state:null,city_id:null,city:null,city_request_data:{filter_state:null},options_size:parseInt("5000"),current_route:this.$router.currentRoute.value,user_data:this.$cookies.get("user-data")}},methods:{getUser(){w.post(`/user/show/${this.user_data.id}`,{},{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{let a=e.data.data;this.formState.first_name=a.first_name,this.formState.last_name=a.last_name,this.formState.email=a.email,this.formState.phone=a.phone,this.formState.address1=a.address1,this.formState.address2=a.address2,this.formState.zip=a.zip,this.formState.state=a.state,this.formState.city_id=this.city_id=a.city_id,this.formState.city=this.city=a.city,this.state=a.state,this.getStates(),this.getCities(!1)}).catch(e=>{console.error(e),g.error(e.response.data.message)})},getStates(){let e={per_page:this.options_size};w.post("/state",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(a=>{this.states=a.data.data}).catch(a=>{console.error(a.response.data.message)})},getCities(e){let a={per_page:this.options_size};e&&(a.filter_state=this.city_request_data.filter_state),w.post("/city",a,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(u=>{this.cities=u.data.data}).catch(u=>{console.error(u.response.data.message)})},submit(){this.loading=!0,this.createAuditTrail("Clicked on the update profile button."),w.post("/update-user-profile",C(this.formState),{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{g.success(e.data.message),this.loading=!1}).catch(e=>{console.error(e),g.error(e.response.data.message),this.loading=!1})},filterOptions(e,a){var u;return((u=a==null?void 0:a.label)!=null?u:null).toLowerCase().includes(e.toLowerCase())},handleStateChange(e){this.formState.state=e.value,this.city_id=null,this.city_request_data.filter_state=e.value,this.getCities(!0)},handleCityChange(e){this.formState.city_id=e.value,this.formState.city=e.label},createAuditTrail(e){let a={user_id:this.user_data.id,pages:this.current_route.fullPath,activity:e};w.post("/audit-trail/store",a,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(u=>{console.log(u.data.message)}).catch(u=>{console.error(u.response.data.message)})}},mounted(){this.getUser()}});function J(e,a,u,m,h,v){const d=r("a-input"),n=r("a-form-item"),l=r("a-col"),o=r("a-row"),f=r("a-select"),c=r("a-button"),p=r("a-form");return S(),b("div",null,[t(p,{layout:"vertical",model:e.formState},{default:s(()=>[t(o,{gutter:24},{default:s(()=>[t(l,{span:12},{default:s(()=>[t(n,{label:"First Name",name:"first_name",rules:[{required:!0,message:"Please input your first name."},{max:100,message:"Maximum of 100 characters."}]},{default:s(()=>[t(d,{value:e.formState.first_name,"onUpdate:value":a[0]||(a[0]=i=>e.formState.first_name=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),t(l,{span:12},{default:s(()=>[t(n,{label:"Last Name",name:"last_name",rules:[{required:!0,message:"Please input your last name."},{max:100,message:"Maximum of 100 characters."}]},{default:s(()=>[t(d,{value:e.formState.last_name,"onUpdate:value":a[1]||(a[1]=i=>e.formState.last_name=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),t(o,{gutter:24},{default:s(()=>[t(l,{span:12},{default:s(()=>[t(n,{label:"Email Address",name:"email",rules:[{required:!0,message:"Please input your email."},{max:100,message:"Maximum of 100 characters."}]},{default:s(()=>[t(d,{value:e.formState.email,"onUpdate:value":a[2]||(a[2]=i=>e.formState.email=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),t(l,{span:12},{default:s(()=>[t(n,{label:"Phone Number",name:"phone",rules:[{required:!0,message:"Please input your phone."}]},{default:s(()=>[t(d,{value:e.formState.phone,"onUpdate:value":a[3]||(a[3]=i=>e.formState.phone=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),t(o,{gutter:24},{default:s(()=>[t(l,{span:8},{default:s(()=>[t(n,{label:"State",name:"state","has-feedback":"",rules:[{required:!0,message:"Please select your state."}]},{default:s(()=>[t(f,{placeholder:"Select Type",value:e.state,"onUpdate:value":a[4]||(a[4]=i=>e.state=i),showSearch:"",optionFilterProp:"children",options:e.states,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleStateChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),t(l,{span:8},{default:s(()=>[t(n,{label:"City",name:"city_id","has-feedback":"",rules:[{required:!0,message:"Please select your city."}]},{default:s(()=>[t(f,{placeholder:"Select Type",value:e.city_id,"onUpdate:value":a[5]||(a[5]=i=>e.city_id=i),showSearch:"",optionFilterProp:"children",options:e.cities,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleCityChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),t(l,{span:8},{default:s(()=>[t(n,{label:"Zip",name:"zip",rules:[{required:!0,message:"Please input your zip."}]},{default:s(()=>[t(d,{value:e.formState.zip,"onUpdate:value":a[6]||(a[6]=i=>e.formState.zip=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),t(o,{gutter:24},{default:s(()=>[t(l,{span:24},{default:s(()=>[t(n,{label:"Address1",name:"address1",rules:[{required:!0,message:"Please input your address 1."}]},{default:s(()=>[t(d,{value:e.formState.address1,"onUpdate:value":a[7]||(a[7]=i=>e.formState.address1=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),t(o,{gutter:24},{default:s(()=>[t(l,{span:24},{default:s(()=>[t(n,{label:"Address2",ame:"address2",rules:[{required:!0,message:"Please input your address 2."}]},{default:s(()=>[t(d,{value:e.formState.address2,"onUpdate:value":a[8]||(a[8]=i=>e.formState.address2=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),t(o,{gutter:24},{default:s(()=>[t(l,{span:24},{default:s(()=>[t(n,null,{default:s(()=>[t(c,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:s(()=>[k("Update")]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])}const G=$(E,[["render",J]]),Y=P({setup(){const e=_(!1);return{formState:U({current_password:null,new_password:null,new_password_confirmation:null}),loading:e}},methods:{recheckInputs(){this.formState.new_password!==this.formState.new_password_confirmation?g.error("The new password and confirmation password should match."):this.submit()},submit(){this.loading=!0,w.post("/auth/change-password",C(this.formState),{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{g.success(e.data.message),this.loading=!1}).catch(e=>{g.error(e.response.data.message),this.loading=!1})}}});function Z(e,a,u,m,h,v){const d=r("a-input-password"),n=r("a-form-item"),l=r("a-col"),o=r("a-row"),f=r("a-button"),c=r("a-form");return S(),b("div",null,[t(c,{layout:"vertical",model:e.formState},{default:s(()=>[t(o,{gutter:24},{default:s(()=>[t(l,{span:24},{default:s(()=>[t(n,{label:"Current Password",name:"current_password",rules:[{required:!0,message:"Please input your current password."},{min:8,message:"Minimum of 8 characters."},{max:255,message:"Maximum of 255 characters."}]},{default:s(()=>[t(d,{value:e.formState.current_password,"onUpdate:value":a[0]||(a[0]=p=>e.formState.current_password=p)},null,8,["value"])]),_:1},8,["rules"]),t(n,{label:"New Password",name:"new_password",rules:[{required:!0,message:"Please input your new password."},{min:8,message:"Minimum of 8 characters."},{max:255,message:"Maximum of 255 characters."}]},{default:s(()=>[t(d,{value:e.formState.new_password,"onUpdate:value":a[1]||(a[1]=p=>e.formState.new_password=p)},null,8,["value"])]),_:1},8,["rules"]),t(n,{label:"Re-type New Password",name:"new_password_confirmation",dependencies:["new_password"],rules:[{required:!0,message:"Please input your password confirmation."},{min:8,message:"Minimum of 8 characters."},{max:255,message:"Maximum of 255 characters."}]},{default:s(()=>[t(d,{value:e.formState.new_password_confirmation,"onUpdate:value":a[2]||(a[2]=p=>e.formState.new_password_confirmation=p)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),t(o,{gutter:24},{default:s(()=>[t(l,{span:24},{default:s(()=>[t(n,null,{default:s(()=>[t(f,{type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:a[3]||(a[3]=p=>e.recheckInputs())},{default:s(()=>[k("Update New Password")]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])}const H=$(Y,[["render",Z]]);const Q=P({components:{AdminLayout:q,UserAvatar:D,UserInformation:G,UserPassword:H},data(){return{title:"My Profile",activeKey:_("1")}}}),W={class:"view-container"};function X(e,a,u,m,h,v){const d=r("UserAvatar"),n=r("a-card"),l=r("a-col"),o=r("UserInformation"),f=r("a-row"),c=r("a-tab-pane"),p=r("UserPassword"),i=r("a-tabs"),A=r("AdminLayout");return S(),O(A,{defaultKey:"0"},{default:s(()=>[y("h1",null,[y("span",null,N(e.title),1)]),y("div",W,[t(i,{activeKey:e.activeKey,"onUpdate:activeKey":a[0]||(a[0]=z=>e.activeKey=z),size:"large"},{default:s(()=>[t(c,{key:"1",tab:"Profile"},{default:s(()=>[t(f,{gutter:48},{default:s(()=>[t(l,{span:8},{default:s(()=>[t(n,{title:"Profile Picture"},{default:s(()=>[t(d)]),_:1})]),_:1}),t(l,{span:16},{default:s(()=>[t(n,{title:"Personal Information",style:{width:"800px"}},{default:s(()=>[t(o)]),_:1})]),_:1})]),_:1})]),_:1}),t(c,{key:"2",tab:"Password"},{default:s(()=>[t(n,{title:"Password",style:{width:"600px"}},{default:s(()=>[t(p)]),_:1})]),_:1})]),_:1},8,["activeKey"])])]),_:1})}const te=$(Q,[["render",X],["__scopeId","data-v-4c25ee1d"]]);export{te as default};