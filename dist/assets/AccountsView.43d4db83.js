import{A as q}from"./AdminLayout.68397104.js";import{e as $,D as V,j as R,C as K,k as j,r as C,_ as O,f as o,o as c,m as r,g as l,b as e,w as n,a as s,q as k,F as g,c as P,t as U,s as G,u as H,x as J,z as M,B as Q}from"./index.a2dd1bc9.js";import{F as W,a as X,E as Y,b as Z,c as ee}from"./FormOutlined.ed6cf6a9.js";import{I as te}from"./InboxOutlined.3d5d09d6.js";const ne=$({components:{FormOutlined:W,DeleteOutlined:V,FilterOutlined:X,DownOutlined:R,CaretUpOutlined:K,CaretDownOutlined:j},setup(){const t={onChange:(d,u)=>{console.log(`selectedRowKeys: ${d}`,"selectedRows: ",u)}},a=C([{title:"Account ID",dataIndex:"key",key:"acctid",width:120,resizable:!0},{title:"Status",dataIndex:"status",key:"status",width:120,resizable:!0},{title:"Creditor",dataIndex:"creditor",key:"creditor",width:150,resizable:!0},{title:"Account Description",dataIndex:"acctdes",key:"acctdes",width:200,resizable:!0},{title:"Account Number",dataIndex:"acctnum",key:"acctnum",width:150,resizable:!0},{title:"Debtor",dataIndex:"debtor",key:"debtor",width:150,resizable:!0},{title:"Init. Term",dataIndex:"initterm",key:"initterm",width:150,resizable:!0},{title:"Note",dataIndex:"note",key:"note",width:200,resizable:!0},{title:"Origin Date",dataIndex:"origindate",key:"origindate",width:150,resizable:!0},{title:"Created at",dataIndex:"createdat",key:"createdat",width:150,resizable:!0},{title:"Tags",dataIndex:"tags",key:"tags",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]),v=[];for(let d=0;d<100;d++)v.push({key:`000${d}`,status:"Active",creditor:"001",acctdes:`Edrward ${d}`,acctnum:`000${d}`,debtor:`00${d}`,initterm:"50%",note:"Put note here",origindate:"01/01/2000",createdat:"01/01/2000",tags:"nice"});return{data:v,columns:a,rowSelection:t,handleResizeColumn:(d,u)=>{u.width=d}}}}),i=t=>(G("data-v-5fc9c3f4"),t=t(),H(),t),oe={class:"client-filter"},ae={key:0,class:"ant-table-column-sorters"},le=i(()=>l("span",{class:"ant-table-column-title"},[s("Account ID"),l("br"),l("input",{class:"single-input",type:"text"})],-1)),se={class:"ant-table-column-sorter ant-table-column-sorter-full"},ie={class:"ant-table-column-sorter-inner"},de=i(()=>l("br",null,null,-1)),ce=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),ue=i(()=>l("br",null,null,-1)),re=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),_e=i(()=>l("br",null,null,-1)),pe=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),me=i(()=>l("br",null,null,-1)),fe=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),be=i(()=>l("br",null,null,-1)),he=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),ye=i(()=>l("br",null,null,-1)),ke=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),ge=i(()=>l("br",null,null,-1)),ve=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),Ae=i(()=>l("br",null,null,-1)),we=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),Ce=i(()=>l("br",null,null,-1)),$e=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),Oe=i(()=>l("br",null,null,-1)),Ee=i(()=>l("input",{class:"single-input",type:"text"},null,-1)),Fe=i(()=>l("br",null,null,-1)),Se=i(()=>l("br",null,null,-1)),De={key:1};function Ie(t,a,v,d,u,A){const y=o("FilterOutlined"),p=o("a-input"),b=o("a-form-item"),h=o("a-form"),m=o("a-col"),w=o("a-menu-item"),E=o("a-menu"),F=o("DownOutlined"),S=o("a-button"),D=o("a-dropdown"),x=o("a-row"),z=o("CaretUpOutlined"),L=o("CaretDownOutlined"),_=o("a-tag"),B=o("FormOutlined"),N=o("DeleteOutlined"),T=o("a-table");return c(),r(g,null,[l("div",oe,[e(x,{gutter:16},{default:n(()=>[e(m,{span:6},{default:n(()=>[e(h,null,{default:n(()=>[e(b,{label:"Filter",name:"clientfilter"},{default:n(()=>[e(p,null,{prefix:n(()=>[e(y,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{span:6},{default:n(()=>[e(D,{class:"client-action",trigger:["click"]},{overlay:n(()=>[e(E,null,{default:n(()=>[e(w,null,{default:n(()=>[s(" Show Statement of Selected Accounts ")]),_:1})]),_:1})]),default:n(()=>[e(S,null,{default:n(()=>[s(" Action "),e(F)]),_:1})]),_:1})]),_:1})]),_:1})]),e(T,{sticky:"","row-selection":t.rowSelection,columns:t.columns,"data-source":t.data,onResizeColumn:t.handleResizeColumn,scroll:{x:2e3},"row-class-name":(f,I)=>I%2===1?"table-striped":null},{headerCell:n(({column:f})=>[f.key==="acctid"?(c(),r("div",ae,[le,l("span",se,[l("span",ie,[e(z,{class:"ant-table-column-sorter-up active"}),e(L,{class:"ant-table-column-sorter-down"})])])])):k("",!0),f.key==="status"?(c(),r(g,{key:1},[s(" Status"),de,ce],64)):k("",!0),f.key==="creditor"?(c(),r(g,{key:2},[s(" Creditor"),ue,re],64)):k("",!0),f.key==="acctdes"?(c(),r(g,{key:3},[s(" Account Description"),_e,pe],64)):k("",!0),f.key==="acctnum"?(c(),r(g,{key:4},[s(" Account Number"),me,fe],64)):k("",!0),f.key==="debtor"?(c(),r(g,{key:5},[s(" Debtor"),be,he],64)):k("",!0),f.key==="initterm"?(c(),r(g,{key:6},[s(" Init. Term"),ye,ke],64)):k("",!0),f.key==="note"?(c(),r(g,{key:7},[s(" Note"),ge,ve],64)):k("",!0),f.key==="origindate"?(c(),r(g,{key:8},[s(" Origin Date"),Ae,we],64)):k("",!0),f.key==="createdat"?(c(),r(g,{key:9},[s(" Created at"),Ce,$e],64)):k("",!0),f.key==="tags"?(c(),r(g,{key:10},[s(" Tags"),Oe,Ee],64)):k("",!0),f.key==="action"?(c(),r(g,{key:11},[s(" Action"),Fe,Se],64)):k("",!0)]),bodyCell:n(({column:f,text:I})=>[f.dataIndex==="status"?(c(),P(_,{key:0,color:"#87d068"},{default:n(()=>[s(U(I),1)]),_:2},1024)):k("",!0),f.dataIndex==="tags"?(c(),r("span",De,[e(_,{color:"blue"},{default:n(()=>[s(U(I),1)]),_:2},1024)])):k("",!0),f.dataIndex==="action"?(c(),r(g,{key:2},[e(B,{style:{"font-size":"large",color:"#1890ff","padding-right":"10px"}}),e(N,{style:{"font-size":"large",color:"red"}})],64)):k("",!0)]),_:1},8,["row-selection","columns","data-source","onResizeColumn","row-class-name"])],64)}const xe=O(ne,[["render",Ie],["__scopeId","data-v-5fc9c3f4"]]);const ze=$({setup(){const t=C(!1),a=C(!1),v=()=>{a.value=!0},d=J({creditor:"",debtor:"",initterm:"",orgdate:"",acctdes:"",status:"",acctnote:""});return{visible:a,showModal:v,AddEditformState:d,onFinish:b=>{console.log("Success:",b)},onFinishFailed:b=>{console.log("Failed:",b)},handleCancel:()=>{a.value=!1},handleOk:()=>{t.value=!0,setTimeout(()=>{t.value=!1,a.value=!1},1e3)},loading:t}}});function Le(t,a,v,d,u,A){const y=o("a-button"),p=o("a-select-option"),b=o("a-select"),h=o("a-form-item"),m=o("a-col"),w=o("a-row"),E=o("a-input"),F=o("a-date-picker"),S=o("a-textarea"),D=o("a-radio"),x=o("a-radio-group"),z=o("a-form"),L=o("a-modal");return c(),r("div",null,[e(y,{size:"large",type:"primary",onClick:t.showModal},{default:n(()=>[s("Add Account")]),_:1},8,["onClick"]),e(L,{visible:t.visible,"onUpdate:visible":a[7]||(a[7]=_=>t.visible=_),title:"Add Account","ok-text":"Save",width:"800px",centered:"","cancel-text":"Cancel"},{footer:n(()=>[e(y,{key:"back",onClick:t.handleCancel},{default:n(()=>[s("Cancel")]),_:1},8,["onClick"]),e(y,{key:"submit",type:"primary","html-type":"submit",loading:t.loading,onClick:t.handleOk},{default:n(()=>[s("Add")]),_:1},8,["loading","onClick"])]),default:n(()=>[e(z,{model:t.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:t.onFinish,onFinishFailed:t.onFinishFailed},{default:n(()=>[e(w,{gutter:24},{default:n(()=>[e(m,{span:12},{default:n(()=>[e(h,{label:"Creditor",name:"creditor","has-feedback":"",rules:[{required:!0,message:"Please select creditor"}]},{default:n(()=>[e(b,{placeholder:"Open this select menu",value:t.AddEditformState.creditor,"onUpdate:value":a[0]||(a[0]=_=>t.AddEditformState.creditor=_)},{default:n(()=>[e(p,{value:"001 - Lindsey, Elisabeth"},{default:n(()=>[s("001 - Lindsey, Elisabeth")]),_:1}),e(p,{value:"002 - Lindsey, Elisabeth"},{default:n(()=>[s("002 - Lindsey, Elisabeth")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(m,{span:12},{default:n(()=>[e(h,{label:"Debtor",name:"debtor","has-feedback":"",rules:[{required:!0,message:"Please select debtor"}]},{default:n(()=>[e(b,{placeholder:"Open this select menu",value:t.AddEditformState.debtor,"onUpdate:value":a[1]||(a[1]=_=>t.AddEditformState.debtor=_)},{default:n(()=>[e(p,{value:"001 - Lindsey, Elisabeth"},{default:n(()=>[s("001 - Lindsey, Elisabeth")]),_:1}),e(p,{value:"002 - Lindsey, Elisabeth"},{default:n(()=>[s("002 - Lindsey, Elisabeth")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(w,{gutter:24},{default:n(()=>[e(m,{span:12},{default:n(()=>[e(h,{label:"Initial Term",name:"initterm",rules:[{required:!0,message:"Please input initial term!"}]},{default:n(()=>[e(E,{value:t.AddEditformState.initterm,"onUpdate:value":a[2]||(a[2]=_=>t.AddEditformState.initterm=_)},null,8,["value"])]),_:1})]),_:1}),e(m,{span:12},{default:n(()=>[e(h,{label:"Organization Date",name:"orgdate",rules:[{required:!0,message:"Please selecte date!"}]},{default:n(()=>[e(F,{value:t.AddEditformState.orgdate,"onUpdate:value":a[3]||(a[3]=_=>t.AddEditformState.orgdate=_)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(w,{gutter:24},{default:n(()=>[e(m,{span:12},{default:n(()=>[e(h,{label:"Account Description",name:"acctdes",rules:[{required:!0,message:"Please input Account Description!"}]},{default:n(()=>[e(S,{value:t.AddEditformState.acctdes,"onUpdate:value":a[4]||(a[4]=_=>t.AddEditformState.acctdes=_)},null,8,["value"])]),_:1})]),_:1}),e(m,{span:12},{default:n(()=>[e(h,{label:"Status",name:"status",rules:[{required:!0,message:"Please selecte status!"}]},{default:n(()=>[e(x,{value:t.AddEditformState.status,"onUpdate:value":a[5]||(a[5]=_=>t.AddEditformState.status=_)},{default:n(()=>[e(D,{value:"Active"},{default:n(()=>[s("Active")]),_:1}),e(D,{value:"Inactive"},{default:n(()=>[s("Inactive")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(h,{label:"Notes",name:"acctnote"},{default:n(()=>[e(S,{value:t.AddEditformState.acctnote,"onUpdate:value":a[6]||(a[6]=_=>t.AddEditformState.acctnote=_)},null,8,["value"])]),_:1}),e(h,{"wrapper-col":{offset:8,span:16}},{default:n(()=>[e(y,{type:"primary","html-type":"submit"},{default:n(()=>[s("Submit")]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])]),_:1},8,["visible"])])}const Ue=O(ze,[["render",Le],["__scopeId","data-v-9fcdba38"]]),Me=$({components:{InboxOutlined:te},setup(){const t=C(!1);return{visible:t,showModal:()=>{t.value=!0},handleOk:u=>{console.log(u),t.value=!1},handleChange:u=>{const A=u.file.status;A!=="uploading"&&console.log(u.file,u.fileList),A==="done"?M.success(`${u.file.name} file uploaded successfully.`):A==="error"&&M.error(`${u.file.name} file upload failed.`)},fileList:C([]),handleDrop:u=>{console.log(u)}}}}),Pe={class:"ant-upload-drag-icon"},Be=l("p",{class:"ant-upload-text"},"Click or drag file to this area to upload",-1),Ne=l("p",{class:"ant-upload-hint"}," Support for a single upload. Strictly prohibit from uploading company data or other band files ",-1);function Te(t,a,v,d,u,A){const y=o("a-button"),p=o("inbox-outlined"),b=o("a-upload-dragger"),h=o("a-modal");return c(),r("div",null,[e(y,{size:"large",type:"primary",onClick:t.showModal},{default:n(()=>[s("Import Data")]),_:1},8,["onClick"]),e(h,{visible:t.visible,"onUpdate:visible":a[1]||(a[1]=m=>t.visible=m),title:"Import Account","ok-text":"Upload",centered:"","cancel-text":"Cancel",onOk:t.handleOk},{default:n(()=>[e(b,{fileList:t.fileList,"onUpdate:fileList":a[0]||(a[0]=m=>t.fileList=m),name:"file",multiple:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:t.handleChange,onDrop:t.handleDrop},{default:n(()=>[l("p",Pe,[e(p)]),Be,Ne]),_:1},8,["fileList","onChange","onDrop"])]),_:1},8,["visible","onOk"])])}const qe=O(Me,[["render",Te]]),Ve=$({setup(){const t=C(!1);return{visible:t,showModal:()=>{t.value=!0},handleOk:d=>{console.log(d),t.value=!1}}}}),Re=l("p",null,"Some contents...",-1),Ke=l("p",null,"Some contents...",-1),je=l("p",null,"Some contents...",-1);function Ge(t,a,v,d,u,A){const y=o("a-button"),p=o("a-modal");return c(),r("div",null,[e(y,{size:"large",type:"primary",onClick:t.showModal},{default:n(()=>[s("Add Bulk")]),_:1},8,["onClick"]),e(p,{visible:t.visible,"onUpdate:visible":a[0]||(a[0]=b=>t.visible=b),title:"Add Bulk Accounts","ok-text":"Add",centered:"","cancel-text":"Cancel",onOk:t.handleOk},{default:n(()=>[Re,Ke,je]),_:1},8,["visible","onOk"])])}const He=O(Ve,[["render",Ge]]);const Je=$({components:{ExportOutlined:Y,FileExcelOutlined:Z,FileOutlined:Q,FilePdfOutlined:ee},setup(){return{handleMenuClick:a=>{console.log("click",a)}}}}),Qe={class:"export-dropdown-wrap"};function We(t,a,v,d,u,A){const y=o("FileExcelOutlined"),p=o("a-menu-item"),b=o("FileOutlined"),h=o("FilePdfOutlined"),m=o("a-menu"),w=o("ExportOutlined"),E=o("a-button"),F=o("a-dropdown");return c(),r("div",Qe,[e(F,{trigger:["click"]},{overlay:n(()=>[e(m,{onClick:t.handleMenuClick},{default:n(()=>[e(p,{key:"1"},{default:n(()=>[e(y),s(" Excel File ")]),_:1}),e(p,{key:"2"},{default:n(()=>[e(b),s(" CSV File ")]),_:1}),e(p,{key:"3"},{default:n(()=>[e(h),s(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:n(()=>[e(E,{size:"large"},{default:n(()=>[s(" Export To "),e(w)]),_:1})]),_:1})])}const Xe=O(Je,[["render",We],["__scopeId","data-v-116b1462"]]);const Ye=$({components:{AdminLayout:q,ListData:xe,AddEdit:Ue,ImportData:qe,AddBulk:He,AccountExport:Xe},data(){return{title:"List of All Accounts"}}}),Ze={class:"view-container"},et={class:"action-container"};function tt(t,a,v,d,u,A){const y=o("AddEdit"),p=o("AddBulk"),b=o("ImportData"),h=o("AccountExport"),m=o("ListData"),w=o("AdminLayout");return c(),P(w,{defaultKey:"3"},{default:n(()=>[l("h1",null,U(t.title),1),l("div",Ze,[l("div",et,[e(y),e(p),e(b),e(h)]),e(m)])]),_:1})}const st=O(Ye,[["render",tt],["__scopeId","data-v-0173b888"]]);export{st as default};