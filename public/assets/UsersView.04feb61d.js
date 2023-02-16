import{A as de}from"./AdminLayout.7f6366f2.js";import{d as M,E as Z,r as D,q as j,j as A,m as O,s as Y,_ as B,f as n,o as h,a as g,c as s,w as a,k as m,F as V,D as G,e as l,t as I,p as H,b as J,u as ue,v as pe,x as me,y as ce,z as S,B as c,G as fe,H as E,I as U,h as y,g as N}from"./index.5ad2f7fa.js";import{a as Q,b as W,A as he}from"./AddCity.dca362d7.js";import{E as _e,F as ge,a as be}from"./FilePdfOutlined.e1916c24.js";import{F as ve,a as ye}from"./FormOutlined.8ca21103.js";import{S as ke,a as Ce,C as Ae,b as Se}from"./StepForwardFilled.b83e321c.js";const $e=M({components:{EllipsisOutlined:Z,AddState:Q,AddCity:W},setup(){const e=D(!1),t=D(!1),d=j({client_id:0,first_name:null,last_name:null,email:null,address1:null,address2:null,zip:null,state:null,phone:null});return{visible:t,AddEditformState:d,onFinish:u=>{console.log("Success:",u)},onFinishFailed:u=>{console.log("Failed:",u)},handleCancel:()=>{t.value=!1},handleOk:()=>{e.value=!0,setTimeout(()=>{e.value=!1,t.value=!1},1e3)},loading:e}},data(){return{roles:[],states:[],cities:[],role_id:null,role:null,state:null,city_id:null,city:null,city_request_data:{filter_state:null},options_size:parseInt("5000")}},methods:{showModal(e){this.user_id=e,this.visible=!0,this.getUser()},getUser(){A.post(`/user/show/${this.user_id}`,{},{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{let t=e.data.data;this.AddEditformState.first_name=t.first_name,this.AddEditformState.last_name=t.last_name,this.AddEditformState.email=t.email,this.AddEditformState.phone=t.phone,this.AddEditformState.address1=t.address1,this.AddEditformState.address2=t.address2,this.AddEditformState.zip=t.zip,this.AddEditformState.state=t.state,this.AddEditformState.role_id=this.role_id=t.role_id,this.AddEditformState.role=this.role=t.role,this.AddEditformState.city_id=this.city_id=t.city_id,this.AddEditformState.city=this.city=t.city,this.state=t.state,this.getRoles(),this.getStates(),this.getCities(!1)}).catch(e=>{console.error(e),O.error(e.response.data.message),this.visible=!1})},getRoles(){let e={per_page:this.options_size};A.post("/role",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.roles=t.data.data}).catch(t=>{console.error(t.response.data.message),this.roles=[]})},getStates(){let e={per_page:this.options_size};A.post("/state",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.states=t.data.data}).catch(t=>{console.error(t.response.data.message)})},getCities(e){let t={per_page:this.options_size};e&&(t.filter_state=this.city_request_data.filter_state),A.post("/city",t,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(d=>{this.cities=d.data.data}).catch(d=>{console.error(d.response.data.message)})},submit(){this.loading=!0,A.post(`/user/update/${this.user_id}`,Y(this.AddEditformState),{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{O.success(e.data.message),this.visible=!1,this.loading=!1,this.$parent.getUsers()}).catch(e=>{console.error(e),O.error(e.response.data.message),this.loading=!1})},filterOptions(e,t){var d;return((d=t==null?void 0:t.label)!=null?d:null).toLowerCase().includes(e.toLowerCase())},handleRoleChange(e){this.AddEditformState.role_id=e.value,this.AddEditformState.role=e.label},handleStateChange(e){this.AddEditformState.state=e.value,this.city_id=null,this.city_request_data.filter_state=e.value,this.getCities(!0)},handleCityChange(e){this.AddEditformState.city_id=e.value,this.AddEditformState.city=e.label},showAddStateModal(){this.$refs.addStateModal.showModal(!0)},showAddCityModal(){this.$refs.addCityModal.showModal(!0)}}});function we(e,t,d,b,k,F){const f=n("a-input"),u=n("a-form-item"),p=n("a-col"),_=n("a-row"),v=n("a-select"),P=n("EllipsisOutlined"),z=n("a-button"),T=n("a-form"),L=n("a-modal"),q=n("AddState"),R=n("AddCity");return h(),g(V,null,[s(L,{visible:e.visible,"onUpdate:visible":t[10]||(t[10]=i=>e.visible=i),title:"Edit User","ok-text":"Update",width:"800px",centered:"","cancel-text":"Cancel"},{footer:a(()=>[s(z,{key:"back",onClick:e.handleCancel},{default:a(()=>[m("Cancel")]),_:1},8,["onClick"]),s(z,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:a(()=>[m("Update")]),_:1},8,["loading","disabled","onClick"])]),default:a(()=>[s(T,{model:e.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:a(()=>[s(_,{gutter:24},{default:a(()=>[s(p,{span:12},{default:a(()=>[s(u,{label:"First Name",name:"first_name",rules:[{required:!0,message:"Please input the first name."}]},{default:a(()=>[s(f,{value:e.AddEditformState.first_name,"onUpdate:value":t[0]||(t[0]=i=>e.AddEditformState.first_name=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),s(p,{span:12},{default:a(()=>[s(u,{label:"Last Name",name:"last_name",rules:[{required:!0,message:"Please input the last name."}]},{default:a(()=>[s(f,{value:e.AddEditformState.last_name,"onUpdate:value":t[1]||(t[1]=i=>e.AddEditformState.last_name=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(_,{gutter:24},{default:a(()=>[s(p,{span:12},{default:a(()=>[s(u,{label:"Email",name:"email",rules:[{required:!0,message:"Please input the email."}]},{default:a(()=>[s(f,{value:e.AddEditformState.email,"onUpdate:value":t[2]||(t[2]=i=>e.AddEditformState.email=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),s(p,{span:12},{default:a(()=>[s(u,{label:"Role",name:"role","has-feedback":"",rules:[{required:!0,message:"Please select the role."}]},{default:a(()=>[s(v,{placeholder:"Select Role",value:e.role_id,"onUpdate:value":t[3]||(t[3]=i=>e.role_id=i),showSearch:"",optionFilterProp:"children",options:e.roles,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleRoleChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(_,{gutter:24},{default:a(()=>[s(p,{span:24},{default:a(()=>[s(u,{label:"Address1",name:"address1",rules:[{required:!0,message:"Please input the address1."}]},{default:a(()=>[s(f,{value:e.AddEditformState.address1,"onUpdate:value":t[4]||(t[4]=i=>e.AddEditformState.address1=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(_,{gutter:24},{default:a(()=>[s(p,{span:24},{default:a(()=>[s(u,{label:"Address2",name:"address2",rules:[{required:!0,message:"Please input the address2."}]},{default:a(()=>[s(f,{value:e.AddEditformState.address2,"onUpdate:value":t[5]||(t[5]=i=>e.AddEditformState.address2=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(_,{gutter:24},{default:a(()=>[s(p,{span:12},{default:a(()=>[s(u,{label:"Zip",name:"zip",rules:[{required:!0,message:"Please input the zip."}]},{default:a(()=>[s(f,{value:e.AddEditformState.zip,"onUpdate:value":t[6]||(t[6]=i=>e.AddEditformState.zip=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),s(p,{span:12},{default:a(()=>[s(u,{label:"State",name:"state","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the state."}]},{default:a(()=>[s(v,{placeholder:"Select Type",value:e.state,"onUpdate:value":t[7]||(t[7]=i=>e.state=i),showSearch:"",optionFilterProp:"children",options:e.states,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleStateChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"]),s(z,{type:"primary",onClick:e.showAddStateModal,class:"custom-add"},{icon:a(()=>[s(P)]),_:1},8,["onClick"])]),_:1})]),_:1}),s(_,{gutter:24},{default:a(()=>[s(p,{span:12},{default:a(()=>[s(u,{label:"City",name:"city_id","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the city."}]},{default:a(()=>[s(v,{placeholder:"Select Type",value:e.city_id,"onUpdate:value":t[8]||(t[8]=i=>e.city_id=i),showSearch:"",optionFilterProp:"children",options:e.cities,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleCityChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"]),s(z,{type:"primary",onClick:e.showAddCityModal,class:"custom-add"},{icon:a(()=>[s(P)]),_:1},8,["onClick"])]),_:1}),s(p,{span:12},{default:a(()=>[s(u,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input the phone."}]},{default:a(()=>[s(f,{value:e.AddEditformState.phone,"onUpdate:value":t[9]||(t[9]=i=>e.AddEditformState.phone=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])]),_:1},8,["visible"]),s(q,{ref:"addStateModal"},null,512),s(R,{ref:"addCityModal"},null,512)],64)}const Ee=B($e,[["render",we],["__scopeId","data-v-bb77e821"]]);const Ue=M({props:["user_id","full_name"],components:{DeleteOutlined:G},setup(){const e=D(!1),t=D(!0),d=D(!1);return{visible:d,handleCancel:()=>{d.value=!1},handleOk:F=>{e.value=!0,setTimeout(()=>{e.value=!1,d.value=!1},1e3)},loading:e,disabled:t}},data(){return{confirmation_text:"YES DELETE",confirmation_input:null}},methods:{showModal(){this.visible=!0},checkText(){this.disabled=this.confirmation_input!=this.confirmation_text},submit(){this.loading=!0,this.disabled=!0,A.delete(`/user/delete/${this.user_id}`,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{O.success(e.data.message),this.visible=!1,this.loading=!1,this.disabled=!1,setTimeout(()=>{window.location.reload()},1500)}).catch(e=>{console.error(e),O.error(e.response.data.message),this.loading=!1,this.disabled=!1})}}}),K=e=>(H("data-v-1a1dca84"),e=e(),J(),e),Fe=K(()=>l("h3",null,"Are you sure you want to delete this record?",-1)),ze={class:"delete-container"},Oe=K(()=>l("br",null,null,-1)),Pe=K(()=>l("p",null,[m("Type "),l("strong",null,'"YES DELETE"'),m(".")],-1));function Te(e,t,d,b,k,F){const f=n("DeleteOutlined"),u=n("a-input"),p=n("a-button"),_=n("a-modal");return h(),g("div",null,[s(f,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),s(_,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=v=>e.visible=v),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{footer:a(()=>[s(p,{key:"back",onClick:e.handleCancel},{default:a(()=>[m("Cancel")]),_:1},8,["onClick"]),s(p,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.disabled,onClick:e.submit},{default:a(()=>[m(" Yes ")]),_:1},8,["loading","disabled","onClick"])]),default:a(()=>[Fe,l("div",ze,[l("p",null,[l("strong",null,[m("ID: "+I(e.user_id),1),Oe,m(" Name: "+I(e.full_name),1)])]),s(u,{value:e.confirmation_input,"onUpdate:value":t[0]||(t[0]=v=>e.confirmation_input=v),onInput:t[1]||(t[1]=v=>e.checkText())},null,8,["value"]),Pe])]),_:1},8,["visible","onOk"])])}const De=B(Ue,[["render",Te],["__scopeId","data-v-1a1dca84"]]);const Ie=M({components:{EllipsisOutlined:Z,AddClientType:he,AddState:Q,AddCity:W},setup(){const e=D(!1),t=D(!1),d=()=>{t.value=!0},b=j({client_id:0,first_name:null,last_name:null,email:null,address1:null,address2:null,zip:null,state:null,phone:null});return{visible:t,showModal:d,AddEditformState:b,onFinish:p=>{console.log("Success:",p)},onFinishFailed:p=>{console.log("Failed:",p)},handleCancel:()=>{t.value=!1},handleOk:()=>{e.value=!0,setTimeout(()=>{e.value=!1,t.value=!1},1e3)},loading:e}},data(){return{roles:[],states:[],cities:[],role_id:null,role:null,state:null,city_id:null,city:null,city_request_data:{filter_state:null},options_size:parseInt("5000")}},methods:{getRoles(){let e={per_page:this.options_size};A.post("/role",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.roles=t.data.data}).catch(t=>{console.error(t.response.data.message),this.roles=[]})},getStates(){let e={per_page:this.options_size};A.post("/state",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.states=t.data.data}).catch(t=>{console.error(t.response.data.message)})},getCities(e){let t={per_page:this.options_size};e&&(t.filter_state=this.city_request_data.filter_state),A.post("/city",t,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(d=>{this.cities=d.data.data}).catch(d=>{console.error(d.response.data.message)})},submit(){this.loading=!0,A.post("/user/store",Y(this.AddEditformState),{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{O.success(e.data.message),this.visible=!1,this.loading=!1,this.$parent.getUsers()}).catch(e=>{console.error(e),O.error(e.response.data.message),this.loading=!1})},filterOptions(e,t){var d;return((d=t==null?void 0:t.label)!=null?d:null).toLowerCase().includes(e.toLowerCase())},handleRoleChange(e){this.AddEditformState.role_id=e.value,this.AddEditformState.role=e.label},handleStateChange(e){this.AddEditformState.state=e.value,this.city_id=null,this.city_request_data.filter_state=e.value,this.getCities(!0)},handleCityChange(e){this.AddEditformState.city_id=e.value,this.AddEditformState.city=e.label},showAddStateModal(){this.$refs.addStateModal.showModal(!0)},showAddCityModal(){this.$refs.addCityModal.showModal(!0)}},mounted(){this.getRoles(),this.getStates(),this.getCities()}});function Me(e,t,d,b,k,F){const f=n("a-button"),u=n("a-input"),p=n("a-form-item"),_=n("a-col"),v=n("a-row"),P=n("a-select"),z=n("EllipsisOutlined"),T=n("a-form"),L=n("a-modal"),q=n("AddState"),R=n("AddCity");return h(),g("div",null,[s(f,{size:"large",type:"primary",onClick:e.showModal},{default:a(()=>[m("Add User")]),_:1},8,["onClick"]),s(L,{visible:e.visible,"onUpdate:visible":t[10]||(t[10]=i=>e.visible=i),title:"Add New User","ok-text":"Add",width:"800px",centered:"","cancel-text":"Cancel"},{footer:a(()=>[s(f,{key:"back",onClick:e.handleCancel},{default:a(()=>[m("Cancel")]),_:1},8,["onClick"]),s(f,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:a(()=>[m("Add")]),_:1},8,["loading","disabled","onClick"])]),default:a(()=>[s(T,{model:e.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:a(()=>[s(v,{gutter:24},{default:a(()=>[s(_,{span:12},{default:a(()=>[s(p,{label:"First Name",name:"first_name",rules:[{required:!0,message:"Please input the first name."}]},{default:a(()=>[s(u,{value:e.AddEditformState.first_name,"onUpdate:value":t[0]||(t[0]=i=>e.AddEditformState.first_name=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),s(_,{span:12},{default:a(()=>[s(p,{label:"Last Name",name:"last_name",rules:[{required:!0,message:"Please input the last name."}]},{default:a(()=>[s(u,{value:e.AddEditformState.last_name,"onUpdate:value":t[1]||(t[1]=i=>e.AddEditformState.last_name=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(v,{gutter:24},{default:a(()=>[s(_,{span:12},{default:a(()=>[s(p,{label:"Email",name:"email",rules:[{required:!0,message:"Please input the email."}]},{default:a(()=>[s(u,{value:e.AddEditformState.email,"onUpdate:value":t[2]||(t[2]=i=>e.AddEditformState.email=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),s(_,{span:12},{default:a(()=>[s(p,{label:"Role",name:"role","has-feedback":"",rules:[{required:!0,message:"Please select the role."}]},{default:a(()=>[s(P,{placeholder:"Select Role",value:e.role_id,"onUpdate:value":t[3]||(t[3]=i=>e.role_id=i),showSearch:"",optionFilterProp:"children",options:e.roles,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleRoleChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(v,{gutter:24},{default:a(()=>[s(_,{span:24},{default:a(()=>[s(p,{label:"Address1",name:"address1",rules:[{required:!0,message:"Please input the Address1."}]},{default:a(()=>[s(u,{value:e.AddEditformState.address1,"onUpdate:value":t[4]||(t[4]=i=>e.AddEditformState.address1=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(v,{gutter:24},{default:a(()=>[s(_,{span:24},{default:a(()=>[s(p,{label:"Address2",name:"address2",rules:[{required:!0,message:"Please input the address2."}]},{default:a(()=>[s(u,{value:e.AddEditformState.address2,"onUpdate:value":t[5]||(t[5]=i=>e.AddEditformState.address2=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),s(v,{gutter:24},{default:a(()=>[s(_,{span:12},{default:a(()=>[s(p,{label:"Zip",name:"zip",rules:[{required:!0,message:"Please input the zip."}]},{default:a(()=>[s(u,{value:e.AddEditformState.zip,"onUpdate:value":t[6]||(t[6]=i=>e.AddEditformState.zip=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),s(_,{span:12},{default:a(()=>[s(p,{label:"State",name:"state","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the state."}]},{default:a(()=>[s(P,{placeholder:"Select Type",value:e.state,"onUpdate:value":t[7]||(t[7]=i=>e.state=i),showSearch:"",optionFilterProp:"children",options:e.states,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleStateChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"]),s(f,{type:"primary",onClick:e.showAddStateModal,class:"custom-add"},{icon:a(()=>[s(z)]),_:1},8,["onClick"])]),_:1})]),_:1}),s(v,{gutter:24},{default:a(()=>[s(_,{span:12},{default:a(()=>[s(p,{label:"City",name:"city_id","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the city."}]},{default:a(()=>[s(P,{placeholder:"Select Type",value:e.city_id,"onUpdate:value":t[8]||(t[8]=i=>e.city_id=i),showSearch:"",optionFilterProp:"children",options:e.cities,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleCityChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"]),s(f,{type:"primary",onClick:e.showAddCityModal,class:"custom-add"},{icon:a(()=>[s(z)]),_:1},8,["onClick"])]),_:1}),s(_,{span:12},{default:a(()=>[s(p,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input the phone."}]},{default:a(()=>[s(u,{value:e.AddEditformState.phone,"onUpdate:value":t[9]||(t[9]=i=>e.AddEditformState.phone=i)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])]),_:1},8,["visible"]),s(q,{ref:"addStateModal"},null,512),s(R,{ref:"addCityModal"},null,512)])}const Be=B(Ie,[["render",Me],["__scopeId","data-v-0d4d4e88"]]);const Le=M({components:{ExportOutlined:_e,FileExcelOutlined:ge,FileOutlined:ue,FilePdfOutlined:be},methods:{exportTo(e){let t=this.$parent.form;t.export_to=e.key,A.post("/user",t,{responseType:"blob",headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(d=>{O.success("Successfully exported data.");const b=URL.createObjectURL(new Blob([d.data])),k=document.createElement("a");k.href=b,k.setAttribute("download","users."+e.key),document.body.appendChild(k),k.click(),document.body.removeChild(k)}).catch(d=>{console.error(d),O.error(d.response.data.message)})}}}),qe={class:"export-dropdown-wrap"};function Re(e,t,d,b,k,F){const f=n("FileExcelOutlined"),u=n("a-menu-item"),p=n("FileOutlined"),_=n("FilePdfOutlined"),v=n("a-menu"),P=n("ExportOutlined"),z=n("a-button"),T=n("a-dropdown");return h(),g("div",qe,[s(T,{trigger:["click"]},{overlay:a(()=>[s(v,{onClick:e.exportTo},{default:a(()=>[s(u,{key:"xlsx"},{default:a(()=>[s(f),m(" Excel File ")]),_:1}),s(u,{key:"csv"},{default:a(()=>[s(p),m(" CSV File ")]),_:1}),s(u,{key:"pdf"},{default:a(()=>[s(_),m(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[s(z,{size:"large"},{default:a(()=>[m(" Export To "),s(P)]),_:1})]),_:1})])}const Ve=B(Le,[["render",Re],["__scopeId","data-v-7e71f227"]]);const Ne=M({components:{FormOutlined:ve,DeleteOutlined:G,FilterOutlined:ye,DownOutlined:pe,CaretUpOutlined:me,CaretDownOutlined:ce,EditData:Ee,DeleteData:De,StepBackwardFilled:ke,StepForwardFilled:Ce,CaretLeftFilled:Ae,CaretRightFilled:Se,AddEdit:Be,UserExport:Ve},setup(){const e=D([{title:"User ID",dataIndex:"id",key:"id",width:100,resizable:!0},{title:"First Name",dataIndex:"first_name",key:"first_name",width:200,resizable:!0,ellipsis:!0},{title:"Last Name",dataIndex:"last_name",key:"last_name",width:200,resizable:!0,ellipsis:!0},{title:"Email",dataIndex:"email",key:"email",width:200,resizable:!0,ellipsis:!0},{title:"Phone",dataIndex:"phone",key:"phone",width:150,resizable:!0},{title:"Address1",dataIndex:"address1",key:"address1",width:200,resizable:!0,ellipsis:!0},{title:"Address2",dataIndex:"address2",key:"address2",width:200,resizable:!0,ellipsis:!0},{title:"City",dataIndex:"city",key:"city",width:150,resizable:!0,ellipsis:!0},{title:"State",dataIndex:"state",key:"state",width:100,resizable:!0},{title:"Zip",dataIndex:"zip",key:"zip",width:100,resizable:!0},{title:"Role",dataIndex:"role",key:"role",width:150,resizable:!0},{title:"Created At",dataIndex:"created_at",key:"created_at",width:180,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]);return{data:[],columns:e,handleResizeColumn:(d,b)=>{b.width=d}}},data(){return{active_records:0,data:[],user_list:[],user_pagination:{meta:{to:1},links:{next:null}},loading:!0,current:1,pageSize:parseInt("10"),page_sizes:JSON.parse('["10", "100", "500", "1000", "3000", "5000", "10000", "20000", "50000"]'),form:{page:1,per_page:parseInt("10"),filter_allcolumn:null,filter_activatewildcard:!1,filter_id:null,filter_first_name:null,filter_last_name:null,filter_email:null,filter_phone:null,filter_address1:null,filter_address2:null,filter_city:null,filter_state:null,filter_zip:null,filter_role:null,filter_created_at:null,sort_id:0,sort_first_name:0,sort_last_name:0,sort_email:0,sort_phone:0,sort_address1:0,sort_address2:0,sort_city:0,sort_state:0,sort_zip:0,sort_role:0,sort_created_at:0,export_to:""},current_route:this.$router.currentRoute.value,user_data:this.$cookies.get("user-data"),searched_columns:""}},methods:{getUsers(){this.form.per_page=this.pageSize,this.getUsersByParams()},getUsersByParams(){this.loading=!0,this.form.export_to="",A.post("/user",this.form,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{let t=e.data;this.user_list=t.data,this.user_pagination=t,this.loading=!1,O.success(t.message),this.getUsersStats()}).catch(e=>{console.error(e),this.user_list=[],this.user_pagination={meta:{total:0},links:{next:null}},this.loading=!1,O.error(e.response.data.message)})},searchUsers(e){this.current=1,this.form.per_page=this.pageSize,this.form.page=1,this.getUsersByParams(),e&&this.createAuditTrail("search")},onPageChange(){this.form.per_page=this.pageSize,this.form.page=this.current,this.getUsersByParams(),this.scrollToTop()},toFirstPage(){this.searchUsers(),this.scrollToTop(),this.createAuditTrail("click",'Clicked on the "go to first page" button in the pagination for users.')},toPreviousPage(){this.current=this.current-1,this.form.page=this.current,this.getUsersByParams(),this.scrollToTop(),this.createAuditTrail("click","Clicked on the previous button in the pagination for users.")},toNextPage(){this.current=this.current+1,this.form.page=this.current,this.getUsersByParams(),this.scrollToTop(),this.createAuditTrail("click","Clicked on the next button in the pagination for users.")},toLastPage(){this.current=this.user_pagination.meta.to,this.form.page=this.current,this.getUsersByParams(),this.scrollToTop(),this.createAuditTrail("click",'Clicked on the "go to last page" button in the pagination for users.')},changeColumnSort(e,t){this.form[t]=this.form[t]+1,this.form[t]==3&&(this.form[t]=0),this.searchUsers(),e&&this.createAuditTrail("search")},getUsersStats(){A.get("/user/stats",{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{this.active_records=e.data.data.active_records}).catch(e=>{console.error(e.response.data.message),this.active_records=0})},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},showEditDataModal(e){this.$refs.editDataModal.showModal(e),this.createAuditTrail("click","Clicked on the edit user button.")},createAuditTrail(e,t=null){let d={user_id:this.user_data.id,pages:this.current_route.fullPath};if(e=="click")d.activity=t;else if(e=="search"){let b="Searched users by ";this.searched_columns=Object.entries(this.form).toString().replaceAll(",",", ").replaceAll(" ,"," null,").replaceAll("filter_","").replaceAll(/\export_to.*?\b/g,"").replaceAll("_"," ");let F=b.concat("",this.searched_columns).split(/sort(.*)/s),f=F[1].replaceAll(" 0,"," default,").replaceAll(", 0",", default").replaceAll(" 1,"," ascending,").replaceAll(", 1",", ascending").replaceAll(" 2,"," descending,").replaceAll(", 2",", descending"),u=F[0].concat("sort",f).replace(/(^[,\s]+)|([,\s]+$)/g,"");d.activity=u}A.post("/audit-trail/store",d,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(b=>{console.log(b.data.message)}).catch(b=>{console.error(b.response.data.message)})}},mounted(){this.getUsers()}}),C=e=>(H("data-v-d0d143d3"),e=e(),J(),e),Ke={class:"action-container"},Ze={class:"user-filter"},je={class:"fw-bold"},Ye={class:"pagination mt-3 text-right"},Ge={class:"d-inline-block"},He={class:"pagination-list lst-none p-0 d-inline-flex w-100"},Je=["disabled"],Qe=["disabled"],We={class:"d-inline-block mr-2"},Xe=C(()=>l("p",{class:"d-inline-block mr-2"},"page",-1)),xe=["disabled"],et={title:"Last Page",class:"ant-pagination-next mr-2 ant-pagination-disabled"},tt={key:0,class:"ant-table-column-sorters"},st={class:"ant-table-column-title"},at=C(()=>l("br",null,null,-1)),lt={class:"ant-table-column-sorter ant-table-column-sorter-full"},nt={key:1,class:"ant-table-column-sorters"},ot={class:"ant-table-column-title"},it=C(()=>l("br",null,null,-1)),rt={class:"ant-table-column-sorter ant-table-column-sorter-full"},dt={key:2,class:"ant-table-column-sorters"},ut={class:"ant-table-column-title"},pt=C(()=>l("br",null,null,-1)),mt={class:"ant-table-column-sorter ant-table-column-sorter-full"},ct={key:3,class:"ant-table-column-sorters"},ft={class:"ant-table-column-title"},ht=C(()=>l("br",null,null,-1)),_t={class:"ant-table-column-sorter ant-table-column-sorter-full"},gt={key:4,class:"ant-table-column-sorters"},bt={class:"ant-table-column-title"},vt=C(()=>l("br",null,null,-1)),yt={class:"ant-table-column-sorter ant-table-column-sorter-full"},kt={key:5,class:"ant-table-column-sorters"},Ct={class:"ant-table-column-title"},At=C(()=>l("br",null,null,-1)),St={class:"ant-table-column-sorter ant-table-column-sorter-full"},$t={key:6,class:"ant-table-column-sorters"},wt={class:"ant-table-column-title"},Et=C(()=>l("br",null,null,-1)),Ut={class:"ant-table-column-sorter ant-table-column-sorter-full"},Ft={key:7,class:"ant-table-column-sorters"},zt={class:"ant-table-column-title"},Ot=C(()=>l("br",null,null,-1)),Pt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Tt={key:8,class:"ant-table-column-sorters"},Dt={class:"ant-table-column-title"},It=C(()=>l("br",null,null,-1)),Mt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Bt={key:9,class:"ant-table-column-sorters"},Lt={class:"ant-table-column-title"},qt=C(()=>l("br",null,null,-1)),Rt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Vt={key:10,class:"ant-table-column-sorters"},Nt={class:"ant-table-column-title"},Kt=C(()=>l("br",null,null,-1)),Zt={class:"ant-table-column-sorter ant-table-column-sorter-full"},jt={key:11,class:"ant-table-column-sorters"},Yt={class:"ant-table-column-title"},Gt=C(()=>l("br",null,null,-1)),Ht={class:"ant-table-column-sorter ant-table-column-sorter-full"},Jt=C(()=>l("br",null,null,-1)),Qt=C(()=>l("br",null,null,-1)),Wt={key:1,class:"d-flex"};function Xt(e,t,d,b,k,F){const f=n("AddEdit"),u=n("UserExport"),p=n("FilterOutlined"),_=n("a-input"),v=n("a-checkbox"),P=n("a-form-item"),z=n("a-form"),T=n("a-col"),L=n("StepBackwardFilled"),q=n("CaretLeftFilled"),R=n("a-input-number"),i=n("CaretRightFilled"),X=n("StepForwardFilled"),x=n("a-select-option"),ee=n("a-select"),te=n("a-row"),$=n("CaretUpOutlined"),w=n("CaretDownOutlined"),se=n("a-tag"),ae=n("FormOutlined"),le=n("DeleteData"),ne=n("a-table"),oe=n("EditData");return h(),g(V,null,[l("div",Ke,[s(f,{onClick:t[0]||(t[0]=r=>e.createAuditTrail("click","Clicked on the add user button."))}),s(u,{onClick:t[1]||(t[1]=r=>e.createAuditTrail("click","Clicked on the export users button."))})]),l("div",Ze,[s(te,{gutter:24},{default:a(()=>[s(T,{span:6},{default:a(()=>[s(z,null,{default:a(()=>[s(P,{label:"Filter",name:"userfilter"},{default:a(()=>[s(_,{value:e.form.filter_allcolumn,"onUpdate:value":t[2]||(t[2]=r=>e.form.filter_allcolumn=r),onKeypress:t[3]||(t[3]=S(r=>e.searchUsers(!0),["enter"]))},{prefix:a(()=>[s(p,{class:"site-form-item-icon"})]),_:1},8,["value"]),s(v,{checked:e.form.filter_activatewildcard,"onUpdate:checked":t[4]||(t[4]=r=>e.form.filter_activatewildcard=r)},{default:a(()=>[m("perform subfilter wildcard search")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1}),s(T,{span:6}),s(T,{span:12,class:"text-right"},{default:a(()=>[l("h3",je," Overall Total User Records: "+I(e.active_records.toLocaleString()),1),l("div",Ye,[l("div",Ge,[l("ul",He,[l("li",{title:"First Page",class:c(["ant-pagination-prev",e.form.page==1?"ant-pagination-disabled":""])},[l("button",{class:"ant-pagination-item-link",type:"button",onClick:t[5]||(t[5]=(...r)=>e.toFirstPage&&e.toFirstPage(...r)),disabled:e.form.page==1},[s(L)],8,Je)],2),l("li",{class:c(["ant-pagination-prev",e.form.page==1?"ant-pagination-disabled":""])},[l("button",{class:"ant-pagination-item-link",type:"button",onClick:t[6]||(t[6]=(...r)=>e.toPreviousPage&&e.toPreviousPage(...r)),disabled:e.form.page==1},[s(q)],8,Qe)],2),l("li",We,[Xe,s(R,{class:"d-inline-block text-center page-number",value:e.current,"onUpdate:value":t[7]||(t[7]=r=>e.current=r),min:1,onChange:e.onPageChange,onPressEnter:e.onPageChange},null,8,["value","onChange","onPressEnter"])]),l("li",{class:c(["ant-pagination-next mr-2",e.user_pagination.links.next?"":"ant-pagination-disabled"])},[l("button",{class:"ant-pagination-item-link",type:"button",onClick:t[8]||(t[8]=(...r)=>e.toNextPage&&e.toNextPage(...r)),disabled:!e.user_pagination.links.next},[s(i)],8,xe)],2),l("li",et,[l("button",{class:"ant-pagination-item-link",type:"button",onClick:t[9]||(t[9]=(...r)=>e.toLastPage&&e.toLastPage(...r)),disabled:""},[s(X)])]),s(ee,{value:e.pageSize,"onUpdate:value":t[10]||(t[10]=r=>e.pageSize=r),onChange:e.onPageChange},{default:a(()=>[(h(!0),g(V,null,fe(e.page_sizes,(r,o)=>(h(),N(x,{value:r,key:o},{default:a(()=>[m(I(r+" / page"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange"])])])])]),_:1})]),_:1})]),s(ne,{sticky:"",columns:e.columns,"data-source":e.user_list,onResizeColumn:e.handleResizeColumn,scroll:{x:1500},"row-class-name":(r,o)=>o%2===1?"table-striped":null,pagination:!1,loading:e.loading,size:"small"},{headerCell:a(({column:r})=>[r.key==="id"?(h(),g("div",tt,[l("span",st,[m("ID"),at,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[11]||(t[11]=o=>e.form.filter_id=o),onKeypress:t[12]||(t[12]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_id]])]),l("span",lt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[13]||(t[13]=o=>e.changeColumnSort(!0,"sort_id"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_id==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_id!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="first_name"?(h(),g("div",nt,[l("span",ot,[m("First Name"),it,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[14]||(t[14]=o=>e.form.filter_first_name=o),onKeypress:t[15]||(t[15]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_first_name]])]),l("span",rt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[16]||(t[16]=o=>e.changeColumnSort(!0,"sort_first_name"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_first_name==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_first_name!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="last_name"?(h(),g("div",dt,[l("span",ut,[m("Last Name"),pt,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[17]||(t[17]=o=>e.form.filter_last_name=o),onKeypress:t[18]||(t[18]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_last_name]])]),l("span",mt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[19]||(t[19]=o=>e.changeColumnSort(!0,"sort_last_name"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_last_name==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_last_name!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="email"?(h(),g("div",ct,[l("span",ft,[m("Email"),ht,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[20]||(t[20]=o=>e.form.filter_email=o),onKeypress:t[21]||(t[21]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_email]])]),l("span",_t,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[22]||(t[22]=o=>e.changeColumnSort(!0,"sort_email"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_email==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_email!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="phone"?(h(),g("div",gt,[l("span",bt,[m("Phone"),vt,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[23]||(t[23]=o=>e.form.filter_phone=o),onKeypress:t[24]||(t[24]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_phone]])]),l("span",yt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[25]||(t[25]=o=>e.changeColumnSort(!0,"sort_phone"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_phone==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_phone!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="address1"?(h(),g("div",kt,[l("span",Ct,[m("Address1"),At,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[26]||(t[26]=o=>e.form.filter_address1=o),onKeypress:t[27]||(t[27]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_address1]])]),l("span",St,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[28]||(t[28]=o=>e.changeColumnSort(!0,"sort_address1"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_address1==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_address1!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="address2"?(h(),g("div",$t,[l("span",wt,[m("Address2"),Et,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[29]||(t[29]=o=>e.form.filter_address2=o),onKeypress:t[30]||(t[30]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_address2]])]),l("span",Ut,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[31]||(t[31]=o=>e.changeColumnSort(!0,"sort_address2"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_address2==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_address2!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="city"?(h(),g("div",Ft,[l("span",zt,[m("City"),Ot,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[32]||(t[32]=o=>e.form.filter_city=o),onKeypress:t[33]||(t[33]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_city]])]),l("span",Pt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[34]||(t[34]=o=>e.changeColumnSort(!0,"sort_city"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_city==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_city!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="state"?(h(),g("div",Tt,[l("span",Dt,[m("State"),It,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[35]||(t[35]=o=>e.form.filter_state=o),onKeypress:t[36]||(t[36]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_state]])]),l("span",Mt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[37]||(t[37]=o=>e.changeColumnSort(!0,"sort_state"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_state==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_state!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="zip"?(h(),g("div",Bt,[l("span",Lt,[m("Zip"),qt,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[38]||(t[38]=o=>e.form.filter_zip=o),onKeypress:t[39]||(t[39]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_zip]])]),l("span",Rt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[40]||(t[40]=o=>e.changeColumnSort(!0,"sort_zip"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_zip==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_zip!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="role"?(h(),g("div",Vt,[l("span",Nt,[m("Role"),Kt,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[41]||(t[41]=o=>e.form.filter_role=o),onKeypress:t[42]||(t[42]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_role]])]),l("span",Zt,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[43]||(t[43]=o=>e.changeColumnSort(!0,"sort_role"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_role==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_role!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="created_at"?(h(),g("div",jt,[l("span",Yt,[m("Created At"),Gt,E(l("input",{class:"single-input",type:"text","onUpdate:modelValue":t[44]||(t[44]=o=>e.form.filter_created_at=o),onKeypress:t[45]||(t[45]=S(o=>e.searchUsers(!0),["enter"]))},null,544),[[U,e.form.filter_created_at]])]),l("span",Ht,[l("span",{class:"ant-table-column-sorter-inner",onClick:t[46]||(t[46]=o=>e.changeColumnSort(!0,"sort_created_at"))},[s($,{class:c(["ant-table-column-sorter-up",e.form.sort_created_at==1?"active":""])},null,8,["class"]),s(w,{class:c(["ant-table-column-sorter-down",e.form.sort_created_at!=2?"":"active"])},null,8,["class"])])])])):y("",!0),r.key==="action"?(h(),g(V,{key:12},[m(" Action"),Jt,Qt],64)):y("",!0)]),bodyCell:a(({column:r,record:o,text:ie})=>[r.dataIndex==="role"?(h(),g(V,{key:0},[o.role?(h(),N(se,{key:0,color:"green"},{default:a(()=>[m(I(ie),1)]),_:2},1024)):y("",!0)],64)):y("",!0),r.dataIndex==="action"?(h(),g("div",Wt,[s(ae,{onClick:re=>e.showEditDataModal(o.id),class:"icon-edit"},null,8,["onClick"]),s(le,{onClick:t[47]||(t[47]=re=>e.createAuditTrail("click","Clicked on the delete user button.")),user_id:o.id,full_name:o.first_name+" "+o.last_name},null,8,["user_id","full_name"])])):y("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name","loading"]),s(oe,{ref:"editDataModal"},null,512)],64)}const xt=B(Ne,[["render",Xt],["__scopeId","data-v-d0d143d3"]]);const es=M({components:{AdminLayout:de,ListData:xt},data(){return{title:"User Management"}}}),ts={class:"view-container"};function ss(e,t,d,b,k,F){const f=n("ListData"),u=n("AdminLayout");return h(),N(u,{defaultKey:"11-1",preOpenKey:"11"},{default:a(()=>[l("h1",null,I(e.title),1),l("div",ts,[s(f)])]),_:1})}const ds=B(es,[["render",ss],["__scopeId","data-v-2ec71a2c"]]);export{ds as default};
