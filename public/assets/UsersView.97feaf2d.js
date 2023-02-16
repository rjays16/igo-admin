import{A as Z}from"./AdminLayout.2b5bc6e8.js";import{A as I,a as N,b as q}from"./AddCity.1043dba2.js";import{e as O,r as $,j as M,_ as U,f as n,o as c,n as y,b as e,w as t,a as o,D as T,g as d,p as L,q as Y,s as K,E as g,B as A,c as R,t as V,F as j}from"./index.0056091f.js";import{F as B,a as G}from"./FormOutlined.740f465c.js";import{E as H,F as J,a as Q}from"./FilePdfOutlined.fc60c459.js";const W=O({components:{AddClientType:I,AddState:N,AddCity:q,FormOutlined:B},setup(){const a=$(!1),l=$(!1),h=()=>{l.value=!0},k=M({firstname:"",lastname:"",email:"",role:"",address1:"",address2:"",zip:"",state:"",city:"",phone:""});return{visible:l,showModal:h,AddEditformState:k,onFinish:s=>{console.log("Success:",s)},onFinishFailed:s=>{console.log("Failed:",s)},handleCancel:()=>{l.value=!1},handleOk:()=>{a.value=!0,setTimeout(()=>{a.value=!1,l.value=!1},1e3)},loading:a}}});function X(a,l,h,k,C,F){const b=n("FormOutlined"),u=n("a-input"),s=n("a-form-item"),i=n("a-col"),f=n("a-row"),v=n("a-select-option"),E=n("a-select"),w=n("AddClientType"),D=n("AddState"),z=n("AddCity"),m=n("a-form"),S=n("a-button"),r=n("a-modal");return c(),y("div",null,[e(b,{onClick:a.showModal,style:{"font-size":"large",color:"#1890ff","padding-right":"10px"}},null,8,["onClick"]),e(r,{visible:a.visible,"onUpdate:visible":l[10]||(l[10]=_=>a.visible=_),title:"Edit User","ok-text":"Update",width:"800px",centered:"","cancel-text":"Cancel"},{footer:t(()=>[e(S,{key:"back",onClick:a.handleCancel},{default:t(()=>[o("Cancel")]),_:1},8,["onClick"]),e(S,{key:"submit",type:"primary","html-type":"submit",loading:a.loading,onClick:a.handleOk},{default:t(()=>[o("Update")]),_:1},8,["loading","onClick"])]),default:t(()=>[e(m,{model:a.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:a.onFinish,onFinishFailed:a.onFinishFailed},{default:t(()=>[e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"Firt Name",name:"firstname",rules:[{required:!0,message:"Please input first name!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.firstname,"onUpdate:value":l[0]||(l[0]=_=>a.AddEditformState.firstname=_)},null,8,["value"])]),_:1})]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"Last Name",name:"lastname",rules:[{required:!0,message:"Please input last name!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.lastname,"onUpdate:value":l[1]||(l[1]=_=>a.AddEditformState.lastname=_)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"Email",name:"email",rules:[{required:!0,message:"Please input email!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.email,"onUpdate:value":l[2]||(l[2]=_=>a.AddEditformState.email=_)},null,8,["value"])]),_:1})]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"Role",name:"role","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select role"}]},{default:t(()=>[e(E,{placeholder:"Open this select menu",value:a.AddEditformState.role,"onUpdate:value":l[3]||(l[3]=_=>a.AddEditformState.role=_)},{default:t(()=>[e(v,{value:"Admin"},{default:t(()=>[o("Admin")]),_:1}),e(v,{value:"Client"},{default:t(()=>[o("Client")]),_:1}),e(v,{value:"Debtor"},{default:t(()=>[o("Debtor")]),_:1})]),_:1},8,["value"])]),_:1}),e(w)]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:24},{default:t(()=>[e(s,{label:"Address1",name:"address1",rules:[{required:!0,message:"Please input Address1!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.address1,"onUpdate:value":l[4]||(l[4]=_=>a.AddEditformState.address1=_)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:24},{default:t(()=>[e(s,{label:"Address2",name:"address2",rules:[{required:!0,message:"Please input address2!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.address2,"onUpdate:value":l[5]||(l[5]=_=>a.AddEditformState.address2=_)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"Zip",name:"zip",rules:[{required:!0,message:"Please input the zip."}]},{default:t(()=>[e(u,{value:a.AddEditformState.zip,"onUpdate:value":l[6]||(l[6]=_=>a.AddEditformState.zip=_)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"State",name:"state","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the state."}]},{default:t(()=>[e(E,{placeholder:"Select State",value:a.AddEditformState.state,"onUpdate:value":l[7]||(l[7]=_=>a.AddEditformState.state=_)},{default:t(()=>[e(v,{value:"NY"},{default:t(()=>[o("NY")]),_:1}),e(v,{value:"CA"},{default:t(()=>[o("CA")]),_:1})]),_:1},8,["value"])]),_:1},8,["rules"]),e(D)]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"City",name:"city_id","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the city."}]},{default:t(()=>[e(E,{placeholder:"Select Type",value:a.AddEditformState.city,"onUpdate:value":l[8]||(l[8]=_=>a.AddEditformState.city=_)},{default:t(()=>[e(v,{value:"New York"},{default:t(()=>[o("New York")]),_:1})]),_:1},8,["value"])]),_:1},8,["rules"]),e(z)]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input the phone."}]},{default:t(()=>[e(u,{value:a.AddEditformState.phone,"onUpdate:value":l[9]||(l[9]=_=>a.AddEditformState.phone=_)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])]),_:1},8,["visible"])])}const x=U(W,[["render",X],["__scopeId","data-v-40013eed"]]);const ee=O({components:{DeleteOutlined:T},setup(){const a=$(!1);return{visible:a,showModal:()=>{a.value=!0},handleOk:k=>{console.log(k),a.value=!1}}}}),P=a=>(L("data-v-854ddf30"),a=a(),Y(),a),te=P(()=>d("h3",null,"Are you sure you want to delete this record?",-1)),ae={class:"delete-container"},le=P(()=>d("p",null,[d("strong",null,[o("ID: 1101"),d("br"),o(" Name: Althea Marie Avila")])],-1)),ne=P(()=>d("p",null,[o("Type "),d("strong",null,'"YES DELETE"'),o(".")],-1));function se(a,l,h,k,C,F){const b=n("DeleteOutlined"),u=n("a-input"),s=n("a-modal");return c(),y("div",null,[e(b,{onClick:a.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),e(s,{visible:a.visible,"onUpdate:visible":l[0]||(l[0]=i=>a.visible=i),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:a.handleOk},{default:t(()=>[te,d("div",ae,[le,e(u),ne])]),_:1},8,["visible","onOk"])])}const oe=U(ee,[["render",se],["__scopeId","data-v-854ddf30"]]);const de=O({components:{FormOutlined:B,DeleteOutlined:T,FilterOutlined:G,DownOutlined:K,EditData:x,DeleteData:oe},setup(){const a=$([{title:"User ID",dataIndex:"userid",key:"userid",width:100,resizable:!0},{title:"First Name",dataIndex:"firstname",key:"firstname",width:200,resizable:!0},{title:"Last Name",dataIndex:"lastname",key:"lastname",width:200,resizable:!0},{title:"Email",dataIndex:"email",key:"email",width:200,resizable:!0},{title:"Address1",dataIndex:"address1",key:"address1",width:200,resizable:!0},{title:"City",dataIndex:"city",key:"city",width:150,resizable:!0},{title:"State",dataIndex:"state",key:"state",width:100,resizable:!0},{title:"Zip",dataIndex:"zip",key:"zip",width:100,resizable:!0},{title:"Phone",dataIndex:"phone",key:"phone",width:150,resizable:!0},{title:"Role",dataIndex:"role",key:"role",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]),l=[];for(let h=0;h<100;h++)l.push({userid:h,firstname:"Edward",lastname:"Doe",email:"test@email.com",address1:"123 St",city:"New York",state:"NY",zip:"12345",phone:"000-000-0000",role:"Manager"});return{data:l,columns:a,handleResizeColumn:(h,k)=>{k.width=h}}}}),p=a=>(L("data-v-f6d286ea"),a=a(),Y(),a),ie={class:"client-filter"},ue=p(()=>d("br",null,null,-1)),re=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),pe=p(()=>d("br",null,null,-1)),_e=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),me=p(()=>d("br",null,null,-1)),ce=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),fe=p(()=>d("br",null,null,-1)),ve=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),ye=p(()=>d("br",null,null,-1)),he=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),be=p(()=>d("br",null,null,-1)),ke=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),Ae=p(()=>d("br",null,null,-1)),ge=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),Ee=p(()=>d("br",null,null,-1)),Se=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),Ce=p(()=>d("br",null,null,-1)),Fe=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),we=p(()=>d("br",null,null,-1)),$e=p(()=>d("input",{class:"single-input",type:"text"},null,-1)),Oe=p(()=>d("br",null,null,-1)),Ue=p(()=>d("br",null,null,-1)),De={key:1,class:"action-container"};function ze(a,l,h,k,C,F){const b=n("FilterOutlined"),u=n("a-input"),s=n("a-form-item"),i=n("a-form"),f=n("a-col"),v=n("a-row"),E=n("a-tag"),w=n("EditData"),D=n("DeleteData"),z=n("a-table");return c(),y(g,null,[d("div",ie,[e(v,{gutter:16},{default:t(()=>[e(f,{span:6},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{label:"Filter",name:"clientfilter"},{default:t(()=>[e(u,null,{prefix:t(()=>[e(b,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e(z,{sticky:"",columns:a.columns,"data-source":a.data,onResizeColumn:a.handleResizeColumn,scroll:{x:1500},"row-class-name":(m,S)=>S%2===1?"table-striped":null},{headerCell:t(({column:m})=>[m.key==="userid"?(c(),y(g,{key:0},[o(" ID"),ue,re],64)):A("",!0),m.key==="firstname"?(c(),y(g,{key:1},[o(" First Name"),pe,_e],64)):A("",!0),m.key==="lastname"?(c(),y(g,{key:2},[o(" Last Name"),me,ce],64)):A("",!0),m.key==="email"?(c(),y(g,{key:3},[o(" Email"),fe,ve],64)):A("",!0),m.key==="address1"?(c(),y(g,{key:4},[o(" Address1"),ye,he],64)):A("",!0),m.key==="city"?(c(),y(g,{key:5},[o(" City"),be,ke],64)):A("",!0),m.key==="state"?(c(),y(g,{key:6},[o(" State"),Ae,ge],64)):A("",!0),m.key==="zip"?(c(),y(g,{key:7},[o(" Zip"),Ee,Se],64)):A("",!0),m.key==="phone"?(c(),y(g,{key:8},[o(" Phone"),Ce,Fe],64)):A("",!0),m.key==="role"?(c(),y(g,{key:9},[o(" Role"),we,$e],64)):A("",!0),m.key==="action"?(c(),y(g,{key:10},[o(" Action"),Oe,Ue],64)):A("",!0)]),bodyCell:t(({column:m,text:S})=>[m.dataIndex==="role"?(c(),R(E,{key:0,color:"green"},{default:t(()=>[o(V(S),1)]),_:2},1024)):A("",!0),m.dataIndex==="action"?(c(),y("div",De,[e(w),e(D)])):A("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const Pe=U(de,[["render",ze],["__scopeId","data-v-f6d286ea"]]);const Ie=O({components:{AddClientType:I,AddState:N,AddCity:q},setup(){const a=$(!1),l=$(!1),h=()=>{l.value=!0},k=M({firstname:"",lastname:"",email:"",role:"",address1:"",address2:"",zip:"",state:"",city:"",phone:""});return{visible:l,showModal:h,AddEditformState:k,onFinish:s=>{console.log("Success:",s)},onFinishFailed:s=>{console.log("Failed:",s)},handleCancel:()=>{l.value=!1},handleOk:()=>{a.value=!0,setTimeout(()=>{a.value=!1,l.value=!1},1e3)},loading:a}}});function Ne(a,l,h,k,C,F){const b=n("a-button"),u=n("a-input"),s=n("a-form-item"),i=n("a-col"),f=n("a-row"),v=n("a-select-option"),E=n("a-select"),w=n("AddClientType"),D=n("AddState"),z=n("AddCity"),m=n("a-form"),S=n("a-modal");return c(),y("div",null,[e(b,{size:"large",type:"primary",onClick:a.showModal},{default:t(()=>[o("Add User")]),_:1},8,["onClick"]),e(S,{visible:a.visible,"onUpdate:visible":l[10]||(l[10]=r=>a.visible=r),title:"Add New User","ok-text":"Add",width:"800px",centered:"","cancel-text":"Cancel"},{footer:t(()=>[e(b,{key:"back",onClick:a.handleCancel},{default:t(()=>[o("Cancel")]),_:1},8,["onClick"]),e(b,{key:"submit",type:"primary","html-type":"submit",loading:a.loading,onClick:a.handleOk},{default:t(()=>[o("Add")]),_:1},8,["loading","onClick"])]),default:t(()=>[e(m,{model:a.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:a.onFinish,onFinishFailed:a.onFinishFailed},{default:t(()=>[e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"Firt Name",name:"firstname",rules:[{required:!0,message:"Please input first name!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.firstname,"onUpdate:value":l[0]||(l[0]=r=>a.AddEditformState.firstname=r)},null,8,["value"])]),_:1})]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"Last Name",name:"lastname",rules:[{required:!0,message:"Please input last name!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.lastname,"onUpdate:value":l[1]||(l[1]=r=>a.AddEditformState.lastname=r)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"Email",name:"email",rules:[{required:!0,message:"Please input email!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.email,"onUpdate:value":l[2]||(l[2]=r=>a.AddEditformState.email=r)},null,8,["value"])]),_:1})]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"Role",name:"role","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select role"}]},{default:t(()=>[e(E,{placeholder:"Open this select menu",value:a.AddEditformState.role,"onUpdate:value":l[3]||(l[3]=r=>a.AddEditformState.role=r)},{default:t(()=>[e(v,{value:"Admin"},{default:t(()=>[o("Admin")]),_:1}),e(v,{value:"Client"},{default:t(()=>[o("Client")]),_:1}),e(v,{value:"Debtor"},{default:t(()=>[o("Debtor")]),_:1})]),_:1},8,["value"])]),_:1}),e(w)]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:24},{default:t(()=>[e(s,{label:"Address1",name:"address1",rules:[{required:!0,message:"Please input Address1!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.address1,"onUpdate:value":l[4]||(l[4]=r=>a.AddEditformState.address1=r)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:24},{default:t(()=>[e(s,{label:"Address2",name:"address2",rules:[{required:!0,message:"Please input address2!"}]},{default:t(()=>[e(u,{value:a.AddEditformState.address2,"onUpdate:value":l[5]||(l[5]=r=>a.AddEditformState.address2=r)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"Zip",name:"zip",rules:[{required:!0,message:"Please input the zip."}]},{default:t(()=>[e(u,{value:a.AddEditformState.zip,"onUpdate:value":l[6]||(l[6]=r=>a.AddEditformState.zip=r)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"State",name:"state","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the state."}]},{default:t(()=>[e(E,{placeholder:"Select State",value:a.AddEditformState.state,"onUpdate:value":l[7]||(l[7]=r=>a.AddEditformState.state=r)},{default:t(()=>[e(v,{value:"NY"},{default:t(()=>[o("NY")]),_:1}),e(v,{value:"CA"},{default:t(()=>[o("CA")]),_:1})]),_:1},8,["value"])]),_:1},8,["rules"]),e(D)]),_:1})]),_:1}),e(f,{gutter:24},{default:t(()=>[e(i,{span:12},{default:t(()=>[e(s,{label:"City",name:"city_id","wrapper-col":{offset:2,pull:2},"has-feedback":"",rules:[{required:!0,message:"Please select the city."}]},{default:t(()=>[e(E,{placeholder:"Select Type",value:a.AddEditformState.city,"onUpdate:value":l[8]||(l[8]=r=>a.AddEditformState.city=r)},{default:t(()=>[e(v,{value:"New York"},{default:t(()=>[o("New York")]),_:1})]),_:1},8,["value"])]),_:1},8,["rules"]),e(z)]),_:1}),e(i,{span:12},{default:t(()=>[e(s,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input the phone."}]},{default:t(()=>[e(u,{value:a.AddEditformState.phone,"onUpdate:value":l[9]||(l[9]=r=>a.AddEditformState.phone=r)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])]),_:1},8,["visible"])])}const qe=U(Ie,[["render",Ne],["__scopeId","data-v-b697318e"]]);const Me=O({components:{ExportOutlined:H,FileExcelOutlined:J,FileOutlined:j,FilePdfOutlined:Q},setup(){return{handleMenuClick:l=>{console.log("click",l)}}}}),Te={class:"export-dropdown-wrap"};function Le(a,l,h,k,C,F){const b=n("FileExcelOutlined"),u=n("a-menu-item"),s=n("FileOutlined"),i=n("FilePdfOutlined"),f=n("a-menu"),v=n("ExportOutlined"),E=n("a-button"),w=n("a-dropdown");return c(),y("div",Te,[e(w,{trigger:["click"]},{overlay:t(()=>[e(f,{onClick:a.handleMenuClick},{default:t(()=>[e(u,{key:"1"},{default:t(()=>[e(b),o(" Excel File ")]),_:1}),e(u,{key:"2"},{default:t(()=>[e(s),o(" CSV File ")]),_:1}),e(u,{key:"3"},{default:t(()=>[e(i),o(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:t(()=>[e(E,{size:"large"},{default:t(()=>[o(" Export To "),e(v)]),_:1})]),_:1})])}const Ye=U(Me,[["render",Le],["__scopeId","data-v-6e038bc9"]]);const Re=O({components:{AdminLayout:Z,ListData:Pe,AddEdit:qe,UserExport:Ye},data(){return{title:"User Management"}}}),Ve={class:"view-container"},Be={class:"action-container"};function Ze(a,l,h,k,C,F){const b=n("AddEdit"),u=n("UserExport"),s=n("ListData"),i=n("AdminLayout");return c(),R(i,{defaultKey:"11-1",preOpenKey:"11"},{default:t(()=>[d("h1",null,V(a.title),1),d("div",Ve,[d("div",Be,[e(b),e(u)]),e(s)])]),_:1})}const Qe=U(Re,[["render",Ze],["__scopeId","data-v-70c68b4a"]]);export{Qe as default};
