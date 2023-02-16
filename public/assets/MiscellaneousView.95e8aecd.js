import{A as Z}from"./AdminLayout.823084b3.js";import{e as D,E as P,r as w,j as q,_ as O,f as n,o as d,n as _,b as t,w as s,I as K,F as m,D as T,g as o,p as I,q as A,a as r,u as N,G as h,c as B,t as Y}from"./index.4cc33ff5.js";import{F as E,a as V}from"./FormOutlined.a5b55a1e.js";import{A as ee,a as te,b as ne}from"./AddCity.4f1de23e.js";import{A as oe}from"./AddOrganization.a9560db8.js";const ae=D({components:{EllipsisOutlined:P,FormOutlined:E},setup(){const e=w(!1),a=()=>{e.value=!0},l=i=>{console.log(i),e.value=!1},c={labelCol:{span:8},wrapperCol:{span:16}},v=q({transactiontype:"",transactiondes:""});return{visible:e,showModal:a,handleOk:l,addTransactionTypeFormState:v,onFinish:i=>{console.log("Success:",i)},layout:c}}});function se(e,a,l,c,v,C){const i=n("FormOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-textarea"),k=n("a-form"),g=n("a-modal");return d(),_(m,null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"#1890ff","padding-right":"10px"}},null,8,["onClick"]),t(g,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=u=>e.visible=u),"ok-text":"Update",title:"Update Transaction Type",onOk:e.handleOk},{default:s(()=>[t(k,K({model:e.addTransactionTypeFormState},e.layout,{onFinish:e.onFinish}),{default:s(()=>[t(p,{name:"transactiontype",label:"Transaction Type",rules:[{required:!0,message:"Please input transaction type"}]},{default:s(()=>[t(y,{value:e.addTransactionTypeFormState.transactiontype,"onUpdate:value":a[0]||(a[0]=u=>e.addTransactionTypeFormState.transactiontype=u)},null,8,["value"])]),_:1}),t(p,{name:"transactiondes",label:"Description"},{default:s(()=>[t(f,{value:e.addTransactionTypeFormState.transactiondes,"onUpdate:value":a[1]||(a[1]=u=>e.addTransactionTypeFormState.transactiondes=u)},null,8,["value"])]),_:1})]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])],64)}const le=O(ae,[["render",se]]);const ie=D({components:{DeleteOutlined:T},setup(){const e=w(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:c=>{console.log(c),e.value=!1}}}}),H=e=>(I("data-v-7c601d91"),e=e(),A(),e),de=H(()=>o("h3",null,"Are you sure you want to delete this record?",-1)),re={class:"delete-container"},ce=H(()=>o("p",null,[o("strong",null,[r("ID: 1101"),o("br"),r(" Description: Put description here")])],-1)),ue=H(()=>o("p",null,[r("Type "),o("strong",null,'"YES DELETE"'),r(".")],-1));function _e(e,a,l,c,v,C){const i=n("DeleteOutlined"),y=n("a-input"),p=n("a-modal");return d(),_("div",null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),t(p,{visible:e.visible,"onUpdate:visible":a[0]||(a[0]=f=>e.visible=f),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:s(()=>[de,o("div",re,[ce,t(y),ue])]),_:1},8,["visible","onOk"])])}const pe=O(ie,[["render",_e],["__scopeId","data-v-7c601d91"]]);const me=D({components:{FormOutlined:E,DeleteOutlined:T,FilterOutlined:V,DownOutlined:N,EditData:le,DeleteData:pe},setup(){const e=w([{title:"ID",dataIndex:"transid",key:"transid",width:100,resizable:!0},{title:"Transaction Type",dataIndex:"transtype",key:"transtype",width:100,resizable:!0},{title:"Description",dataIndex:"description",key:"description",width:400,resizable:!0},{title:"Created At",dataIndex:"createdat",key:"createdat",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]),a=[];for(let l=0;l<100;l++)a.push({transid:l,transtype:"DEP",description:"Description here",createdat:"01/01/2022"});return{data:a,columns:e,handleResizeColumn:(l,c)=>{c.width=l}}}}),U=e=>(I("data-v-fe57bad8"),e=e(),A(),e),ye={class:"client-filter"},fe=U(()=>o("br",null,null,-1)),be=U(()=>o("input",{class:"single-input",type:"text"},null,-1)),he=U(()=>o("br",null,null,-1)),ve=U(()=>o("input",{class:"single-input",type:"text"},null,-1)),$e=U(()=>o("br",null,null,-1)),ke=U(()=>o("input",{class:"single-input",type:"text"},null,-1)),ge=U(()=>o("br",null,null,-1)),Ce=U(()=>o("input",{class:"single-input",type:"text"},null,-1)),De=U(()=>o("br",null,null,-1)),we=U(()=>o("br",null,null,-1)),Oe={key:1,class:"action-container"};function Fe(e,a,l,c,v,C){const i=n("FilterOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-form"),k=n("a-col"),g=n("a-row"),u=n("a-tag"),z=n("EditData"),S=n("DeleteData"),b=n("a-table");return d(),_(m,null,[o("div",ye,[t(g,{gutter:16},{default:s(()=>[t(k,{span:6},{default:s(()=>[t(f,null,{default:s(()=>[t(p,{label:"Filter",name:"clientfilter"},{default:s(()=>[t(y,null,{prefix:s(()=>[t(i,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(b,{sticky:"",columns:e.columns,"data-source":e.data,onResizeColumn:e.handleResizeColumn,scroll:{x:1500},"row-class-name":($,R)=>R%2===1?"table-striped":null},{headerCell:s(({column:$})=>[$.key==="transid"?(d(),_(m,{key:0},[r(" ID"),fe,be],64)):h("",!0),$.key==="transtype"?(d(),_(m,{key:1},[r(" Transaction Type"),he,ve],64)):h("",!0),$.key==="description"?(d(),_(m,{key:2},[r(" Description"),$e,ke],64)):h("",!0),$.key==="createdat"?(d(),_(m,{key:3},[r(" Created At"),ge,Ce],64)):h("",!0),$.key==="action"?(d(),_(m,{key:4},[r(" Action"),De,we],64)):h("",!0)]),bodyCell:s(({column:$,text:R})=>[$.dataIndex==="transtype"?(d(),B(u,{key:0,color:"#07DA63"},{default:s(()=>[r(Y(R),1)]),_:2},1024)):h("",!0),$.dataIndex==="action"?(d(),_("div",Oe,[t(z),t(S)])):h("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const ze=O(me,[["render",Fe],["__scopeId","data-v-fe57bad8"]]),Se=D({components:{EllipsisOutlined:P,FormOutlined:E},setup(){const e=w(!1),a=()=>{e.value=!0},l=i=>{console.log(i),e.value=!1},c={labelCol:{span:8},wrapperCol:{span:16}},v=q({clienttype:"",clientdes:""});return{visible:e,showModal:a,handleOk:l,addClientTypeFormState:v,onFinish:i=>{console.log("Success:",i)},layout:c}}});function Te(e,a,l,c,v,C){const i=n("FormOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-textarea"),k=n("a-form"),g=n("a-modal");return d(),_(m,null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"#1890ff","padding-right":"10px"}},null,8,["onClick"]),t(g,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=u=>e.visible=u),"ok-text":"Update",title:"Update Client Type",onOk:e.handleOk},{default:s(()=>[t(k,K({model:e.addClientTypeFormState},e.layout,{onFinish:e.onFinish}),{default:s(()=>[t(p,{name:"clienttype",label:"Client Type",rules:[{required:!0,message:"Please input client type"}]},{default:s(()=>[t(y,{value:e.addClientTypeFormState.clienttype,"onUpdate:value":a[0]||(a[0]=u=>e.addClientTypeFormState.clienttype=u)},null,8,["value"])]),_:1}),t(p,{name:"clientdes",label:"Description"},{default:s(()=>[t(f,{value:e.addClientTypeFormState.clientdes,"onUpdate:value":a[1]||(a[1]=u=>e.addClientTypeFormState.clientdes=u)},null,8,["value"])]),_:1})]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])],64)}const Ie=O(Se,[["render",Te]]);const Ae=D({components:{DeleteOutlined:T},setup(){const e=w(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:c=>{console.log(c),e.value=!1}}}}),j=e=>(I("data-v-0ee284b3"),e=e(),A(),e),Ee=j(()=>o("h3",null,"Are you sure you want to delete this record?",-1)),Ue={class:"delete-container"},xe=j(()=>o("p",null,[o("strong",null,[r("ID: 1101"),o("br"),r(" Description: Put description here")])],-1)),Le=j(()=>o("p",null,[r("Type "),o("strong",null,'"YES DELETE"'),r(".")],-1));function Me(e,a,l,c,v,C){const i=n("DeleteOutlined"),y=n("a-input"),p=n("a-modal");return d(),_("div",null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),t(p,{visible:e.visible,"onUpdate:visible":a[0]||(a[0]=f=>e.visible=f),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:s(()=>[Ee,o("div",Ue,[xe,t(y),Le])]),_:1},8,["visible","onOk"])])}const Re=O(Ae,[["render",Me],["__scopeId","data-v-0ee284b3"]]);const Pe=D({components:{FormOutlined:E,DeleteOutlined:T,FilterOutlined:V,DownOutlined:N,EditData:Ie,DeleteData:Re},setup(){const e=w([{title:"ID",dataIndex:"clientid",key:"clientid",width:100,resizable:!0},{title:"Client Type",dataIndex:"clienttype",key:"clienttype",width:100,resizable:!0},{title:"Description",dataIndex:"description",key:"description",width:400,resizable:!0},{title:"Created At",dataIndex:"createdat",key:"createdat",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]),a=[];for(let l=0;l<100;l++)a.push({clientid:l,clienttype:"Owner",description:"Description here",createdat:"01/01/2022"});return{data:a,columns:e,handleResizeColumn:(l,c)=>{c.width=l}}}}),x=e=>(I("data-v-0b563ae5"),e=e(),A(),e),qe={class:"client-filter"},Ke=x(()=>o("br",null,null,-1)),Ne=x(()=>o("input",{class:"single-input",type:"text"},null,-1)),Ve=x(()=>o("br",null,null,-1)),Be=x(()=>o("input",{class:"single-input",type:"text"},null,-1)),Ye=x(()=>o("br",null,null,-1)),He=x(()=>o("input",{class:"single-input",type:"text"},null,-1)),je=x(()=>o("br",null,null,-1)),Ge=x(()=>o("input",{class:"single-input",type:"text"},null,-1)),Je=x(()=>o("br",null,null,-1)),Qe=x(()=>o("br",null,null,-1)),We={key:1,class:"action-container"};function Xe(e,a,l,c,v,C){const i=n("FilterOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-form"),k=n("a-col"),g=n("a-row"),u=n("a-tag"),z=n("EditData"),S=n("DeleteData"),b=n("a-table");return d(),_(m,null,[o("div",qe,[t(g,{gutter:16},{default:s(()=>[t(k,{span:6},{default:s(()=>[t(f,null,{default:s(()=>[t(p,{label:"Filter",name:"clientfilter"},{default:s(()=>[t(y,null,{prefix:s(()=>[t(i,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(b,{sticky:"",columns:e.columns,"data-source":e.data,onResizeColumn:e.handleResizeColumn,scroll:{x:1500},"row-class-name":($,R)=>R%2===1?"table-striped":null},{headerCell:s(({column:$})=>[$.key==="clientid"?(d(),_(m,{key:0},[r(" ID"),Ke,Ne],64)):h("",!0),$.key==="clienttype"?(d(),_(m,{key:1},[r(" Client Type"),Ve,Be],64)):h("",!0),$.key==="description"?(d(),_(m,{key:2},[r(" Description"),Ye,He],64)):h("",!0),$.key==="createdat"?(d(),_(m,{key:3},[r(" Created At"),je,Ge],64)):h("",!0),$.key==="action"?(d(),_(m,{key:4},[r(" Action"),Je,Qe],64)):h("",!0)]),bodyCell:s(({column:$,text:R})=>[$.dataIndex==="clienttype"?(d(),B(u,{key:0,color:"#07DA63"},{default:s(()=>[r(Y(R),1)]),_:2},1024)):h("",!0),$.dataIndex==="action"?(d(),_("div",We,[t(z),t(S)])):h("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const Ze=O(Pe,[["render",Xe],["__scopeId","data-v-0b563ae5"]]),et=D({components:{EllipsisOutlined:P,FormOutlined:E},setup(){const e=w(!1),a=()=>{e.value=!0},l=i=>{console.log(i),e.value=!1},c={labelCol:{span:8},wrapperCol:{span:16}},v=q({organization:"",organizationdes:""});return{visible:e,showModal:a,handleOk:l,addOrganizationFormState:v,onFinish:i=>{console.log("Success:",i)},layout:c}}});function tt(e,a,l,c,v,C){const i=n("FormOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-textarea"),k=n("a-form"),g=n("a-modal");return d(),_(m,null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"#1890ff","padding-right":"10px"}},null,8,["onClick"]),t(g,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=u=>e.visible=u),"ok-text":"Update",title:"Update Organization",onOk:e.handleOk},{default:s(()=>[t(k,K({model:e.addOrganizationFormState},e.layout,{onFinish:e.onFinish}),{default:s(()=>[t(p,{name:"organization",label:"Organization",rules:[{required:!0,message:"Please input organization"}]},{default:s(()=>[t(y,{value:e.addOrganizationFormState.organization,"onUpdate:value":a[0]||(a[0]=u=>e.addOrganizationFormState.organization=u)},null,8,["value"])]),_:1}),t(p,{name:"organizationdes",label:"Description"},{default:s(()=>[t(f,{value:e.addOrganizationFormState.organizationdes,"onUpdate:value":a[1]||(a[1]=u=>e.addOrganizationFormState.organizationdes=u)},null,8,["value"])]),_:1})]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])],64)}const nt=O(et,[["render",tt]]);const ot=D({components:{DeleteOutlined:T},setup(){const e=w(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:c=>{console.log(c),e.value=!1}}}}),G=e=>(I("data-v-46604ea2"),e=e(),A(),e),at=G(()=>o("h3",null,"Are you sure you want to delete this record?",-1)),st={class:"delete-container"},lt=G(()=>o("p",null,[o("strong",null,[r("ID: 1101"),o("br"),r(" Description: Put description here")])],-1)),it=G(()=>o("p",null,[r("Type "),o("strong",null,'"YES DELETE"'),r(".")],-1));function dt(e,a,l,c,v,C){const i=n("DeleteOutlined"),y=n("a-input"),p=n("a-modal");return d(),_("div",null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),t(p,{visible:e.visible,"onUpdate:visible":a[0]||(a[0]=f=>e.visible=f),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:s(()=>[at,o("div",st,[lt,t(y),it])]),_:1},8,["visible","onOk"])])}const rt=O(ot,[["render",dt],["__scopeId","data-v-46604ea2"]]);const ct=D({components:{FormOutlined:E,DeleteOutlined:T,FilterOutlined:V,DownOutlined:N,EditData:nt,DeleteData:rt},setup(){const e=w([{title:"ID",dataIndex:"orgid",key:"orgid",width:100,resizable:!0},{title:"Organization",dataIndex:"organization",key:"organization",width:100,resizable:!0},{title:"Description",dataIndex:"description",key:"description",width:400,resizable:!0},{title:"Created At",dataIndex:"createdat",key:"createdat",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]),a=[];for(let l=0;l<100;l++)a.push({orgid:l,organization:"ABC Org",description:"Description here",createdat:"01/01/2022"});return{data:a,columns:e,handleResizeColumn:(l,c)=>{c.width=l}}}}),L=e=>(I("data-v-63854c6f"),e=e(),A(),e),ut={class:"client-filter"},_t=L(()=>o("br",null,null,-1)),pt=L(()=>o("input",{class:"single-input",type:"text"},null,-1)),mt=L(()=>o("br",null,null,-1)),yt=L(()=>o("input",{class:"single-input",type:"text"},null,-1)),ft=L(()=>o("br",null,null,-1)),bt=L(()=>o("input",{class:"single-input",type:"text"},null,-1)),ht=L(()=>o("br",null,null,-1)),vt=L(()=>o("input",{class:"single-input",type:"text"},null,-1)),$t=L(()=>o("br",null,null,-1)),kt=L(()=>o("br",null,null,-1)),gt={key:0,class:"action-container"};function Ct(e,a,l,c,v,C){const i=n("FilterOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-form"),k=n("a-col"),g=n("a-row"),u=n("EditData"),z=n("DeleteData"),S=n("a-table");return d(),_(m,null,[o("div",ut,[t(g,{gutter:16},{default:s(()=>[t(k,{span:6},{default:s(()=>[t(f,null,{default:s(()=>[t(p,{label:"Filter",name:"clientfilter"},{default:s(()=>[t(y,null,{prefix:s(()=>[t(i,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(S,{sticky:"",columns:e.columns,"data-source":e.data,onResizeColumn:e.handleResizeColumn,scroll:{x:1500},"row-class-name":(b,$)=>$%2===1?"table-striped":null},{headerCell:s(({column:b})=>[b.key==="orgid"?(d(),_(m,{key:0},[r(" ID"),_t,pt],64)):h("",!0),b.key==="organization"?(d(),_(m,{key:1},[r(" Organization"),mt,yt],64)):h("",!0),b.key==="description"?(d(),_(m,{key:2},[r(" Description"),ft,bt],64)):h("",!0),b.key==="createdat"?(d(),_(m,{key:3},[r(" Created At"),ht,vt],64)):h("",!0),b.key==="action"?(d(),_(m,{key:4},[r(" Action"),$t,kt],64)):h("",!0)]),bodyCell:s(({column:b})=>[b.dataIndex==="action"?(d(),_("div",gt,[t(u),t(z)])):h("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const Dt=O(ct,[["render",Ct],["__scopeId","data-v-63854c6f"]]),wt=D({components:{EllipsisOutlined:P,FormOutlined:E},setup(){const e=w(!1),a=()=>{e.value=!0},l=i=>{console.log(i),e.value=!1},c={labelCol:{span:8},wrapperCol:{span:16}},v=q({stateabbr:"",statefull:""});return{visible:e,showModal:a,handleOk:l,addStateFormState:v,onFinish:i=>{console.log("Success:",i)},layout:c}}});function Ot(e,a,l,c,v,C){const i=n("FormOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-textarea"),k=n("a-form"),g=n("a-modal");return d(),_(m,null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"#1890ff","padding-right":"10px"}},null,8,["onClick"]),t(g,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=u=>e.visible=u),"ok-text":"Update",title:"Update State",onOk:e.handleOk},{default:s(()=>[t(k,K({model:e.addStateFormState},e.layout,{onFinish:e.onFinish}),{default:s(()=>[t(p,{name:"stateabbr",label:"Abbreviation",rules:[{required:!0,message:"Please input state abbreviation!"}]},{default:s(()=>[t(y,{value:e.addStateFormState.stateabbr,"onUpdate:value":a[0]||(a[0]=u=>e.addStateFormState.stateabbr=u)},null,8,["value"])]),_:1}),t(p,{name:"statefull",label:"Full Name",rules:[{required:!0,message:"Please input state full name!"}]},{default:s(()=>[t(f,{value:e.addStateFormState.statefull,"onUpdate:value":a[1]||(a[1]=u=>e.addStateFormState.statefull=u)},null,8,["value"])]),_:1})]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])],64)}const Ft=O(wt,[["render",Ot]]);const zt=D({components:{DeleteOutlined:T},setup(){const e=w(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:c=>{console.log(c),e.value=!1}}}}),J=e=>(I("data-v-1c2668f5"),e=e(),A(),e),St=J(()=>o("h3",null,"Are you sure you want to delete this record?",-1)),Tt={class:"delete-container"},It=J(()=>o("p",null,[o("strong",null,[r("Abbrev: AL"),o("br"),r(" State: Alabama")])],-1)),At=J(()=>o("p",null,[r("Type "),o("strong",null,'"YES DELETE"'),r(".")],-1));function Et(e,a,l,c,v,C){const i=n("DeleteOutlined"),y=n("a-input"),p=n("a-modal");return d(),_("div",null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),t(p,{visible:e.visible,"onUpdate:visible":a[0]||(a[0]=f=>e.visible=f),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:s(()=>[St,o("div",Tt,[It,t(y),At])]),_:1},8,["visible","onOk"])])}const Ut=O(zt,[["render",Et],["__scopeId","data-v-1c2668f5"]]);const xt=D({components:{FormOutlined:E,DeleteOutlined:T,FilterOutlined:V,DownOutlined:N,EditData:Ft,DeleteData:Ut},setup(){const e=w([{title:"Abbrev",dataIndex:"abbrev",key:"abbrev",width:100,resizable:!0},{title:"States",dataIndex:"states",key:"states",width:100,resizable:!0},{title:"Description",dataIndex:"description",key:"description",width:400,resizable:!0},{title:"Created At",dataIndex:"createdat",key:"createdat",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]),a=[];for(let l=0;l<100;l++)a.push({abbrev:"AL",states:"Alabama",description:"Description here",createdat:"01/01/2022"});return{data:a,columns:e,handleResizeColumn:(l,c)=>{c.width=l}}}}),M=e=>(I("data-v-6654faee"),e=e(),A(),e),Lt={class:"client-filter"},Mt=M(()=>o("br",null,null,-1)),Rt=M(()=>o("input",{class:"single-input",type:"text"},null,-1)),Pt=M(()=>o("br",null,null,-1)),qt=M(()=>o("input",{class:"single-input",type:"text"},null,-1)),Kt=M(()=>o("br",null,null,-1)),Nt=M(()=>o("input",{class:"single-input",type:"text"},null,-1)),Vt=M(()=>o("br",null,null,-1)),Bt=M(()=>o("input",{class:"single-input",type:"text"},null,-1)),Yt=M(()=>o("br",null,null,-1)),Ht=M(()=>o("br",null,null,-1)),jt={key:0,class:"action-container"};function Gt(e,a,l,c,v,C){const i=n("FilterOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-form"),k=n("a-col"),g=n("a-row"),u=n("EditData"),z=n("DeleteData"),S=n("a-table");return d(),_(m,null,[o("div",Lt,[t(g,{gutter:16},{default:s(()=>[t(k,{span:6},{default:s(()=>[t(f,null,{default:s(()=>[t(p,{label:"Filter",name:"clientfilter"},{default:s(()=>[t(y,null,{prefix:s(()=>[t(i,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(S,{sticky:"",columns:e.columns,"data-source":e.data,onResizeColumn:e.handleResizeColumn,scroll:{x:1500},"row-class-name":(b,$)=>$%2===1?"table-striped":null},{headerCell:s(({column:b})=>[b.key==="abbrev"?(d(),_(m,{key:0},[r(" Abbrev"),Mt,Rt],64)):h("",!0),b.key==="states"?(d(),_(m,{key:1},[r(" States"),Pt,qt],64)):h("",!0),b.key==="description"?(d(),_(m,{key:2},[r(" Description"),Kt,Nt],64)):h("",!0),b.key==="createdat"?(d(),_(m,{key:3},[r(" Created At"),Vt,Bt],64)):h("",!0),b.key==="action"?(d(),_(m,{key:4},[r(" Action"),Yt,Ht],64)):h("",!0)]),bodyCell:s(({column:b})=>[b.dataIndex==="action"?(d(),_("div",jt,[t(u),t(z)])):h("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const Jt=O(xt,[["render",Gt],["__scopeId","data-v-6654faee"]]),Qt=D({components:{EllipsisOutlined:P,FormOutlined:E},setup(){const e=w(!1),a=()=>{e.value=!0},l=i=>{console.log(i),e.value=!1},c={labelCol:{span:8},wrapperCol:{span:16}},v=q({citystate:"",cityname:""});return{visible:e,showModal:a,handleOk:l,addCityFormState:v,onFinish:i=>{console.log("Success:",i)},layout:c}}});function Wt(e,a,l,c,v,C){const i=n("FormOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-textarea"),k=n("a-form"),g=n("a-modal");return d(),_(m,null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"#1890ff","padding-right":"10px"}},null,8,["onClick"]),t(g,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=u=>e.visible=u),"ok-text":"Update",title:"Update City",onOk:e.handleOk},{default:s(()=>[t(k,K({model:e.addCityFormState},e.layout,{onFinish:e.onFinish}),{default:s(()=>[t(p,{name:"citystate",label:"State",rules:[{required:!0,message:"Please input state!"}]},{default:s(()=>[t(y,{value:e.addCityFormState.citystate,"onUpdate:value":a[0]||(a[0]=u=>e.addCityFormState.citystate=u)},null,8,["value"])]),_:1}),t(p,{name:"cityname",label:"City Name",rules:[{required:!0,message:"Please input city name!"}]},{default:s(()=>[t(f,{value:e.addCityFormState.cityname,"onUpdate:value":a[1]||(a[1]=u=>e.addCityFormState.cityname=u)},null,8,["value"])]),_:1})]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])],64)}const Xt=O(Qt,[["render",Wt]]);const Zt=D({components:{DeleteOutlined:T},setup(){const e=w(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:c=>{console.log(c),e.value=!1}}}}),Q=e=>(I("data-v-4601db9e"),e=e(),A(),e),en=Q(()=>o("h3",null,"Are you sure you want to delete this record?",-1)),tn={class:"delete-container"},nn=Q(()=>o("p",null,[o("strong",null,[r("State: Alabama"),o("br"),r(" City: Huntsville")])],-1)),on=Q(()=>o("p",null,[r("Type "),o("strong",null,'"YES DELETE"'),r(".")],-1));function an(e,a,l,c,v,C){const i=n("DeleteOutlined"),y=n("a-input"),p=n("a-modal");return d(),_("div",null,[t(i,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),t(p,{visible:e.visible,"onUpdate:visible":a[0]||(a[0]=f=>e.visible=f),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:s(()=>[en,o("div",tn,[nn,t(y),on])]),_:1},8,["visible","onOk"])])}const sn=O(Zt,[["render",an],["__scopeId","data-v-4601db9e"]]);const ln=D({components:{FormOutlined:E,DeleteOutlined:T,FilterOutlined:V,DownOutlined:N,EditData:Xt,DeleteData:sn},setup(){const e=w([{title:"ID",dataIndex:"cityid",key:"cityid",width:100,resizable:!0},{title:"State",dataIndex:"state",key:"state",width:100,resizable:!0},{title:"City",dataIndex:"city",key:"city",width:100,resizable:!0},{title:"Description",dataIndex:"description",key:"description",width:400,resizable:!0},{title:"Created At",dataIndex:"createdat",key:"createdat",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]),a=[];for(let l=0;l<100;l++)a.push({cityid:l,state:"Alabama",city:"Huntsville",description:"Description here",createdat:"01/01/2022"});return{data:a,columns:e,handleResizeColumn:(l,c)=>{c.width=l}}}}),F=e=>(I("data-v-99b01b5a"),e=e(),A(),e),dn={class:"client-filter"},rn=F(()=>o("br",null,null,-1)),cn=F(()=>o("input",{class:"single-input",type:"text"},null,-1)),un=F(()=>o("br",null,null,-1)),_n=F(()=>o("input",{class:"single-input",type:"text"},null,-1)),pn=F(()=>o("br",null,null,-1)),mn=F(()=>o("input",{class:"single-input",type:"text"},null,-1)),yn=F(()=>o("br",null,null,-1)),fn=F(()=>o("input",{class:"single-input",type:"text"},null,-1)),bn=F(()=>o("br",null,null,-1)),hn=F(()=>o("input",{class:"single-input",type:"text"},null,-1)),vn=F(()=>o("br",null,null,-1)),$n=F(()=>o("br",null,null,-1)),kn={key:0,class:"action-container"};function gn(e,a,l,c,v,C){const i=n("FilterOutlined"),y=n("a-input"),p=n("a-form-item"),f=n("a-form"),k=n("a-col"),g=n("a-row"),u=n("EditData"),z=n("DeleteData"),S=n("a-table");return d(),_(m,null,[o("div",dn,[t(g,{gutter:16},{default:s(()=>[t(k,{span:6},{default:s(()=>[t(f,null,{default:s(()=>[t(p,{label:"Filter",name:"clientfilter"},{default:s(()=>[t(y,null,{prefix:s(()=>[t(i,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(S,{sticky:"",columns:e.columns,"data-source":e.data,onResizeColumn:e.handleResizeColumn,scroll:{x:1500},"row-class-name":(b,$)=>$%2===1?"table-striped":null},{headerCell:s(({column:b})=>[b.key==="cityid"?(d(),_(m,{key:0},[r(" ID"),rn,cn],64)):h("",!0),b.key==="state"?(d(),_(m,{key:1},[r(" State"),un,_n],64)):h("",!0),b.key==="city"?(d(),_(m,{key:2},[r(" City"),pn,mn],64)):h("",!0),b.key==="description"?(d(),_(m,{key:3},[r(" Description"),yn,fn],64)):h("",!0),b.key==="createdat"?(d(),_(m,{key:4},[r(" Created At"),bn,hn],64)):h("",!0),b.key==="action"?(d(),_(m,{key:5},[r(" Action"),vn,$n],64)):h("",!0)]),bodyCell:s(({column:b})=>[b.dataIndex==="action"?(d(),_("div",kn,[t(u),t(z)])):h("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const Cn=O(ln,[["render",gn],["__scopeId","data-v-99b01b5a"]]);const Dn=D({components:{EllipsisOutlined:P},setup(){const e=w(!1),a=()=>{e.value=!0},l=i=>{console.log(i),e.value=!1},c={labelCol:{span:8},wrapperCol:{span:16}},v=q({transactiontype:"",transactiondes:""});return{visible:e,showModal:a,handleOk:l,addTransactionTypeFormState:v,onFinish:i=>{console.log("Success:",i)},layout:c}}});function wn(e,a,l,c,v,C){const i=n("a-button"),y=n("a-input"),p=n("a-form-item"),f=n("a-textarea"),k=n("a-form"),g=n("a-modal");return d(),_(m,null,[t(i,{size:"large",type:"primary",onClick:e.showModal,class:"custom-add"},{default:s(()=>[r(" Add Transaction Type ")]),_:1},8,["onClick"]),t(g,{centered:"",visible:e.visible,"onUpdate:visible":a[2]||(a[2]=u=>e.visible=u),"ok-text":"Add",title:"Add Transaction Type",onOk:e.handleOk},{default:s(()=>[t(k,K({model:e.addTransactionTypeFormState},e.layout,{onFinish:e.onFinish}),{default:s(()=>[t(p,{name:"transactiontype",label:"Transaction Type",rules:[{required:!0,message:"Please input transaction type"}]},{default:s(()=>[t(y,{value:e.addTransactionTypeFormState.transactiontype,"onUpdate:value":a[0]||(a[0]=u=>e.addTransactionTypeFormState.transactiontype=u)},null,8,["value"])]),_:1}),t(p,{name:"transactiondes",label:"Description"},{default:s(()=>[t(f,{value:e.addTransactionTypeFormState.transactiondes,"onUpdate:value":a[1]||(a[1]=u=>e.addTransactionTypeFormState.transactiondes=u)},null,8,["value"])]),_:1})]),_:1},16,["model","onFinish"])]),_:1},8,["visible","onOk"])],64)}const On=O(Dn,[["render",wn],["__scopeId","data-v-b828e6b9"]]);const Fn=D({components:{AdminLayout:Z,TransactionList:ze,AddTransactionType:On,AddClientType:ee,ClientTypeList:Ze,OrganizationList:Dt,AddOrganization:oe,StateList:Jt,AddState:te,CityList:Cn,AddCity:ne},data(){return{title:"Settings",activeKey:w("1")}}}),zn={class:"view-container"},Sn={class:"action-container"},Tn={class:"action-container"},In={class:"action-container"},An={class:"action-container"},En={class:"action-container"};function Un(e,a,l,c,v,C){const i=n("AddTransactionType"),y=n("TransactionList"),p=n("a-tab-pane"),f=n("AddClientType"),k=n("ClientTypeList"),g=n("AddOrganization"),u=n("OrganizationList"),z=n("AddState"),S=n("StateList"),b=n("AddCity"),$=n("CityList"),R=n("a-tabs"),W=n("AdminLayout");return d(),B(W,{defaultKey:"11-3",preOpenKey:"11"},{default:s(()=>[o("h1",null,Y(e.title),1),o("div",zn,[t(R,{activeKey:e.activeKey,"onUpdate:activeKey":a[0]||(a[0]=X=>e.activeKey=X),size:"large",type:"card"},{default:s(()=>[t(p,{key:"1",tab:"Transaction Type"},{default:s(()=>[o("div",Sn,[t(i)]),t(y)]),_:1}),t(p,{key:"2",tab:"Client Type"},{default:s(()=>[o("div",Tn,[t(f)]),t(k)]),_:1}),t(p,{key:"3",tab:"Organizations"},{default:s(()=>[o("div",In,[t(g)]),t(u)]),_:1}),t(p,{key:"4",tab:"States"},{default:s(()=>[o("div",An,[t(z)]),t(S)]),_:1}),t(p,{key:"5",tab:"Cities"},{default:s(()=>[o("div",En,[t(b)]),t($)]),_:1})]),_:1},8,["activeKey"])])]),_:1})}const qn=O(Fn,[["render",Un],["__scopeId","data-v-329c420b"]]);export{qn as default};
