import{e as k,r as c,j as z,k as _,l as O,m as g,_ as C,f as i,o as F,c as w,w as o,b as n,a as f,I as S}from"./index.681ad39b.js";const y=k({setup(){const e=c(!1),a=c(!1),l=t=>{console.log(t),a.value=!1},r=()=>{a.value=!1},d={labelCol:{span:8},wrapperCol:{span:16}},m=z({organization:null,description:null});return{visible:a,handleOk:l,addOrganizationFormState:m,onFinish:t=>{console.log("Success:",t)},layout:d,loading:e,handleCancel:r}},methods:{showModal(){this.visible=!0},submit(){_.post("/organization/store",O(this.addOrganizationFormState)).then(e=>{g.success(e.data.message),this.visible=!1,this.loading=!1,setTimeout(()=>{window.location.reload()},1500)}).catch(e=>{g.error(e.response.data.message),this.loading=!1})}}});function A(e,a,l,r,d,m){const u=i("a-input"),t=i("a-form-item"),b=i("a-textarea"),v=i("a-form"),p=i("a-button"),h=i("a-modal");return F(),w(h,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=s=>e.visible=s),"ok-text":"Add",title:"Add New Organization",onOk:e.handleOk},{footer:o(()=>[n(p,{key:"back",onClick:e.handleCancel},{default:o(()=>[f("Cancel")]),_:1},8,["onClick"]),n(p,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:o(()=>[f(" Add ")]),_:1},8,["loading","disabled","onClick"])]),default:o(()=>[n(v,S({model:e.addOrganizationFormState},e.layout,{onFinish:e.onFinish}),{default:o(()=>[n(t,{name:"organization",label:"Name",rules:[{required:!0,message:"Please input the organization name."}]},{default:o(()=>[n(u,{value:e.addOrganizationFormState.organization,"onUpdate:value":a[0]||(a[0]=s=>e.addOrganizationFormState.organization=s)},null,8,["value"])]),_:1},8,["rules"]),n(t,{name:"description",label:"Description",rules:[{required:!0,message:"Please input the description."}]},{default:o(()=>[n(b,{value:e.addOrganizationFormState.description,"onUpdate:value":a[1]||(a[1]=s=>e.addOrganizationFormState.description=s)},null,8,["value"])]),_:1},8,["rules"])]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])}const $=C(y,[["render",A]]);export{$ as A};