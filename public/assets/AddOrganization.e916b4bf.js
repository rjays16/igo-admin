import{e as z,r as c,j as v,k as O,l as k,m as g,_ as F,f as i,o as C,c as S,w as o,b as n,a as f,J as w}from"./index.75c9c567.js";const y=z({setup(){const e=c(!1),a=c(!1),l=t=>{console.log(t),a.value=!1},r=()=>{a.value=!1},d={labelCol:{span:8},wrapperCol:{span:16}},m=v({organization:null,description:null});return{visible:a,handleOk:l,addOrganizationFormState:m,onFinish:t=>{console.log("Success:",t)},layout:d,loading:e,handleCancel:r}},data(){return{opened_from_clients:!1}},methods:{showModal(e){this.visible=!0,this.opened_from_clients=e},submit(){this.loading=!0,O.post("/organization/store",k(this.addOrganizationFormState)).then(e=>{g.success(e.data.message),this.visible=!1,this.loading=!1,this.addOrganizationFormState.organization=null,this.addOrganizationFormState.description=null,this.opened_from_clients?this.$parent.getOrganizations():setTimeout(()=>{window.location.reload()},1500)}).catch(e=>{g.error(e.response.data.message),this.loading=!1})}}});function A(e,a,l,r,d,m){const u=i("a-input"),t=i("a-form-item"),h=i("a-textarea"),b=i("a-form"),p=i("a-button"),_=i("a-modal");return C(),S(_,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=s=>e.visible=s),"ok-text":"Add",title:"Add New Organization",onOk:e.handleOk},{footer:o(()=>[n(p,{key:"back",onClick:e.handleCancel},{default:o(()=>[f("Cancel")]),_:1},8,["onClick"]),n(p,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:o(()=>[f(" Add ")]),_:1},8,["loading","disabled","onClick"])]),default:o(()=>[n(b,w({model:e.addOrganizationFormState},e.layout,{onFinish:e.onFinish}),{default:o(()=>[n(t,{name:"organization",label:"Name",rules:[{required:!0,message:"Please input the organization name."}]},{default:o(()=>[n(u,{value:e.addOrganizationFormState.organization,"onUpdate:value":a[0]||(a[0]=s=>e.addOrganizationFormState.organization=s)},null,8,["value"])]),_:1},8,["rules"]),n(t,{name:"description",label:"Description",rules:[{required:!0,message:"Please input the description."}]},{default:o(()=>[n(h,{value:e.addOrganizationFormState.description,"onUpdate:value":a[1]||(a[1]=s=>e.addOrganizationFormState.description=s)},null,8,["value"])]),_:1},8,["rules"])]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])}const N=F(y,[["render",A]]);export{N as A};
