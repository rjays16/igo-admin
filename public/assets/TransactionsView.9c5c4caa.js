import{A as _e}from"./AdminLayout.5de7fc7b.js";import{b as n,A as me,e as O,r as T,_ as E,f as s,o as c,n as f,w as a,F as b,a as r,G as y,t as F,c as L,p as B,q as R,g as o,j as W,k as D,m as A,l as X,D as Z,s as fe,u as he,C as ge,v as ye,x as N,y as H,z as J,B as M,H as ve}from"./index.138561c5.js";import{I as be}from"./InboxOutlined.578148ab.js";import{E as ke,F as Ce,a as we}from"./FilePdfOutlined.538f8f0d.js";import{F as $e,a as Te}from"./FormOutlined.575697df.js";import{S as Se,a as Ae,C as De,b as Oe}from"./StepForwardFilled.35f40f7d.js";var Ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"};const Fe=Ee;function Q(e){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?Object(arguments[t]):{},_=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(_=_.concat(Object.getOwnPropertySymbols(l).filter(function(p){return Object.getOwnPropertyDescriptor(l,p).enumerable}))),_.forEach(function(p){Pe(e,p,l[p])})}return e}function Pe(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var q=function(t,l){var _=Q({},t,l.attrs);return n(me,Q({},_,{icon:Fe}),null)};q.displayName="StopOutlined";q.inheritAttrs=!1;const Ie=q;const ze=O({setup(){const e=T([{title:"Term ID",dataIndex:"transid",key:"transid",width:100,resizable:!0},{title:"Account ID",dataIndex:"acctid",key:"acctid",width:120,resizable:!0},{title:"Effective Date",dataIndex:"effectivedate",key:"effectivedate",width:120,resizable:!0},{title:"TxType",dataIndex:"txtype",key:"txtype",width:100,resizable:!0},{title:"Memo",dataIndex:"memo",key:"memo",width:200,resizable:!0},{title:"Amount",dataIndex:"amount",key:"amount",width:150,resizable:!0},{title:"Entry Date",dataIndex:"entrydate",key:"entrydate",width:120,resizable:!0}]),t=[];for(let l=0;l<100;l++)t.push({transid:l,acctid:`00${l}`,effectivedate:"01/01/2000",txtype:"CRD",memo:"Put memo here",amount:"$100,000",entrydate:"01/01/2000"});return{data:t,columns:e,handleResizeColumn:(l,_)=>{_.width=l}}}}),$=e=>(B("data-v-eaa2dafd"),e=e(),R(),e),Me=$(()=>o("div",{class:"prev-trans-heading"},[o("h3",null,"Previous Transaction Made"),o("h3",{class:"yellow"},"Balance Per Vault: 2,011.50")],-1)),Ye=$(()=>o("br",null,null,-1)),Ue=$(()=>o("input",{class:"single-input",type:"text"},null,-1)),Le=$(()=>o("br",null,null,-1)),Be=$(()=>o("input",{class:"single-input",type:"text"},null,-1)),Re=$(()=>o("br",null,null,-1)),Ne=$(()=>o("input",{class:"single-input",type:"text"},null,-1)),qe=$(()=>o("br",null,null,-1)),Ve=$(()=>o("input",{class:"single-input",type:"text"},null,-1)),je=$(()=>o("br",null,null,-1)),Ke=$(()=>o("input",{class:"single-input",type:"text"},null,-1)),Ge=$(()=>o("br",null,null,-1)),He=$(()=>o("input",{class:"single-input",type:"text"},null,-1)),Je=$(()=>o("br",null,null,-1)),Qe=$(()=>o("input",{class:"single-input",type:"text"},null,-1)),We={key:0};function Xe(e,t,l,_,p,C){const g=s("a-tag"),u=s("a-table");return c(),f(b,null,[Me,n(u,{sticky:"",columns:e.columns,"data-source":e.data,size:"small",onResizeColumn:e.handleResizeColumn,scroll:{x:800,y:200},"row-class-name":(i,h)=>h%2===1?"table-striped":null},{headerCell:a(({column:i})=>[i.key==="transid"?(c(),f(b,{key:0},[r(" Trans. ID"),Ye,Ue],64)):y("",!0),i.key==="acctid"?(c(),f(b,{key:1},[r(" Account ID"),Le,Be],64)):y("",!0),i.key==="effectivedate"?(c(),f(b,{key:2},[r(" Effective Date"),Re,Ne],64)):y("",!0),i.key==="txtype"?(c(),f(b,{key:3},[r(" TxType"),qe,Ve],64)):y("",!0),i.key==="memo"?(c(),f(b,{key:4},[r(" Memo"),je,Ke],64)):y("",!0),i.key==="amount"?(c(),f(b,{key:5},[r(" Amount"),Ge,He],64)):y("",!0),i.key==="entrydate"?(c(),f(b,{key:6},[r(" Entry Date"),Je,Qe],64)):y("",!0)]),bodyCell:a(({column:i,text:h})=>[i.dataIndex==="name"?(c(),f("a",We,F(h),1)):y("",!0),i.dataIndex==="txtype"?(c(),L(g,{key:1,color:"#3197FC"},{default:a(()=>[r(F(h),1)]),_:2},1024)):y("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const x=E(ze,[["render",Xe],["__scopeId","data-v-eaa2dafd"]]);const Ze=O({components:{PrevTransactions:x},setup(){const e=T(!1),t=T(!1),l=W({effective_date:null,amount:null,memo:null,entry_date:null});return{visible:t,AddEditformState:l,onFinish:u=>{console.log("Success:",u)},onFinishFailed:u=>{console.log("Failed:",u)},handleCancel:()=>{t.value=!1},handleOk:()=>{t.value=!1},loading:e}},data(){return{accounts:[],transaction_types:[],account_id:null,acct_description:null,trans_type_id:null,trans_type:null,options_size:parseInt("5000")}},methods:{showModal(e){this.transaction_id=e,this.visible=!0,this.getAccounts()},getTransaction(){D.post(`/transaction/show/${this.transaction_id}`).then(e=>{let t=e.data.data;this.AddEditformState.effective_date=t.effective_date,this.AddEditformState.amount=t.amount,this.AddEditformState.memo=t.memo,this.AddEditformState.entry_date=t.entry_date,this.AddEditformState.account_id=this.account_id=t.account_id,this.AddEditformState.acct_description=this.acct_description=t.acct_description,this.AddEditformState.trans_type_id=this.trans_type_id=t.trans_type_id,this.AddEditformState.trans_type=this.trans_type=t.trans_type}).catch(e=>{console.error(e),A.error(e.response.data.message),this.visible=!1})},getAccounts(){let e={per_page:this.options_size};D.post("/account",e).then(t=>{this.accounts=t.data.data,this.getTransaction(),this.getTransactionTypes()}).catch(t=>{console.error(t.response.data.message),this.accounts=[]})},getTransactionTypes(){let e={per_page:this.options_size};D.post("/transaction-type",e).then(t=>{this.transaction_types=t.data.data}).catch(t=>{console.error(t.response.data.message),this.transaction_types=[]})},submit(){this.loading=!0,D.post(`/transaction/update/${this.transaction_id}`,X(this.AddEditformState)).then(e=>{A.success(e.data.message),this.visible=!1,this.loading=!1,this.$parent.getTransactions()}).catch(e=>{A.error(e.response.data.message),this.loading=!1})},filterOptions(e,t){var l;return((l=t==null?void 0:t.label)!=null?l:"").toLowerCase().includes(e.toLowerCase())},handleAccountChange(e){this.AddEditformState.account_id=e.value,this.AddEditformState.acct_description=e.label},handleTransactionTypeChange(e){this.AddEditformState.trans_type_id=e.value,this.AddEditformState.trans_type=e.label}}});function xe(e,t,l,_,p,C){const g=s("a-select"),u=s("a-form-item"),i=s("a-col"),h=s("a-date-picker"),v=s("a-row"),S=s("a-input"),I=s("a-textarea"),P=s("a-button"),Y=s("a-form"),z=s("PrevTransactions"),U=s("a-modal");return c(),f("div",null,[n(U,{visible:e.visible,"onUpdate:visible":t[6]||(t[6]=m=>e.visible=m),title:"Update Transaction Record","ok-text":"Update",width:"1000px",centered:"",footer:null,"cancel-text":"Cancel"},{default:a(()=>[n(Y,{model:e.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:a(()=>[n(v,{gutter:24},{default:a(()=>[n(i,{span:12},{default:a(()=>[n(u,{label:"Account",name:"account_id","has-feedback":"",rules:[{required:!0,message:"Please select the account."}]},{default:a(()=>[n(g,{placeholder:"Select Account",value:e.account_id,"onUpdate:value":t[0]||(t[0]=m=>e.account_id=m),showSearch:"",optionFilterProp:"children",options:e.accounts,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleAccountChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),n(i,{span:12},{default:a(()=>[n(u,{label:"Effective Date",name:"effective_date",rules:[{required:!0,message:"Please select the effective date."}]},{default:a(()=>[n(h,{value:e.AddEditformState.effective_date,"onUpdate:value":t[1]||(t[1]=m=>e.AddEditformState.effective_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(v,{gutter:24},{default:a(()=>[n(i,{span:12},{default:a(()=>[n(u,{label:"Transaction Type",name:"trans_type","has-feedback":"",rules:[{required:!0,message:"Please select the Transaction Type."}]},{default:a(()=>[n(g,{placeholder:"Select Transaction Type",value:e.trans_type,"onUpdate:value":t[2]||(t[2]=m=>e.trans_type=m),showSearch:"",optionFilterProp:"children",options:e.transaction_types,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleTransactionTypeChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),n(i,{span:12},{default:a(()=>[n(u,{label:"Amount",name:"amount",rules:[{required:!0,message:"Please input the amount."}]},{default:a(()=>[n(S,{value:e.AddEditformState.amount,"onUpdate:value":t[3]||(t[3]=m=>e.AddEditformState.amount=m)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(v,{gutter:24},{default:a(()=>[n(i,{span:12},{default:a(()=>[n(u,{label:"Entry Date",name:"entry_date",rules:[{required:!0,message:"Please select the entry date."}]},{default:a(()=>[n(h,{value:e.AddEditformState.entry_date,"onUpdate:value":t[4]||(t[4]=m=>e.AddEditformState.entry_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(v,{gutter:24},{default:a(()=>[n(i,{span:24},{default:a(()=>[n(u,{label:"Memo",name:"memo",rules:[{required:!0,message:"Please input the memo."}]},{default:a(()=>[n(I,{value:e.AddEditformState.memo,"onUpdate:value":t[5]||(t[5]=m=>e.AddEditformState.memo=m)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(v,{gutter:24},{default:a(()=>[n(i,{span:8,class:"justify-end"},{default:a(()=>[n(u,null,{default:a(()=>[n(P,{type:"warning","html-type":"submit",onClick:e.handleCancel},{default:a(()=>[r("Cancel")]),_:1},8,["onClick"]),n(P,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:a(()=>[r("Update")]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"]),n(z)]),_:1},8,["visible"])])}const et=E(Ze,[["render",xe],["__scopeId","data-v-e520f900"]]);const tt=O({props:["transaction_id","acct_description"],components:{DeleteOutlined:Z},setup(){const e=T(!1),t=T(!0),l=T(!1);return{visible:l,handleCancel:()=>{l.value=!1},handleOk:C=>{e.value=!0,setTimeout(()=>{e.value=!1,l.value=!1},1e3)},loading:e,disabled:t}},data(){return{confirmation_text:"YES DELETE",confirmation_input:null}},methods:{showModal(){this.visible=!0},checkText(){this.disabled=this.confirmation_input!=this.confirmation_text},submit(){this.loading=!0,this.disabled=!0,D.delete(`/transaction/delete/${this.transaction_id}`).then(e=>{A.success(e.data.message),this.visible=!1,this.loading=!1,this.disabled=!1,setTimeout(()=>{window.location.reload()},1500)}).catch(e=>{console.error(e),A.error(e.response.data.message),this.loading=!1,this.disabled=!1})}}}),V=e=>(B("data-v-0101b044"),e=e(),R(),e),nt=V(()=>o("h3",null,"Are you sure you want to delete this record?",-1)),at={class:"delete-container"},ot=V(()=>o("br",null,null,-1)),st=V(()=>o("p",null,[r("Type "),o("strong",null,'"YES DELETE"'),r(".")],-1));function lt(e,t,l,_,p,C){const g=s("DeleteOutlined"),u=s("a-input"),i=s("a-button"),h=s("a-modal");return c(),f("div",null,[n(g,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),n(h,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=v=>e.visible=v),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{footer:a(()=>[n(i,{key:"back",onClick:e.handleCancel},{default:a(()=>[r("Cancel")]),_:1},8,["onClick"]),n(i,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.disabled,onClick:e.submit},{default:a(()=>[r(" Yes ")]),_:1},8,["loading","disabled","onClick"])]),default:a(()=>[nt,o("div",at,[o("p",null,[o("strong",null,[r("Transaction ID: "+F(e.transaction_id),1),ot,r(" Account Description: "+F(e.acct_description),1)])]),n(u,{value:e.confirmation_input,"onUpdate:value":t[0]||(t[0]=v=>e.confirmation_input=v),onInput:t[1]||(t[1]=v=>e.checkText())},null,8,["value"]),st])]),_:1},8,["visible","onOk"])])}const it=E(tt,[["render",lt],["__scopeId","data-v-0101b044"]]);const rt=O({components:{StopOutlined:Ie},setup(){const e=T(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:_=>{console.log(_),e.value=!1}}}}),j=e=>(B("data-v-bc897915"),e=e(),R(),e),dt=j(()=>o("h3",null,"Are you sure you want to Null this record?",-1)),ct={class:"delete-container"},ut=j(()=>o("p",null,[o("strong",null,[r("Trans. ID: 1101"),o("br"),r(" Account Description: Althea Marie Avila")])],-1)),pt=j(()=>o("p",null,[r("Type "),o("strong",null,'"NULL"'),r(".")],-1));function _t(e,t,l,_,p,C){const g=s("StopOutlined"),u=s("a-input"),i=s("a-modal");return c(),f(b,null,[n(g,{onClick:e.showModal,style:{"font-size":"large",color:"grey","padding-right":"10px"}},null,8,["onClick"]),n(i,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=h=>e.visible=h),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:a(()=>[dt,o("div",ct,[ut,n(u),pt])]),_:1},8,["visible","onOk"])],64)}const mt=E(rt,[["render",_t],["__scopeId","data-v-bc897915"]]);const ft=O({components:{PrevTransactions:x},setup(){const e=T(!1),t=T(!1),l=()=>{t.value=!0},_=W({effective_date:null,amount:null,memo:null,entry_date:null});return{visible:t,showModal:l,AddEditformState:_,onFinish:i=>{console.log("Success:",i)},onFinishFailed:i=>{console.log("Failed:",i)},handleCancel:()=>{t.value=!1},handleOk:()=>{t.value=!1},loading:e}},data(){return{accounts:[],transaction_types:[],account_id:null,acct_description:null,trans_type_id:null,trans_type:null,options_size:parseInt("5000")}},methods:{getAccounts(){let e={per_page:this.options_size};D.post("/account",e).then(t=>{this.accounts=t.data.data}).catch(t=>{console.error(t.response.data.message),this.accounts=[]})},getTransactionTypes(){let e={per_page:this.options_size};D.post("/transaction-type",e).then(t=>{this.transaction_types=t.data.data}).catch(t=>{console.error(t.response.data.message),this.transaction_types=[]})},submit(){this.loading=!0,D.post("/transaction/store",X(this.AddEditformState)).then(e=>{A.success(e.data.message),this.visible=!1,this.loading=!1}).catch(e=>{A.error(e.response.data.message),this.loading=!1})},filterOptions(e,t){var l;return((l=t==null?void 0:t.label)!=null?l:"").toLowerCase().includes(e.toLowerCase())},handleAccountChange(e){this.AddEditformState.account_id=e.value,this.AddEditformState.acct_description=e.label},handleTransactionTypeChange(e){this.AddEditformState.trans_type_id=e.value,this.AddEditformState.trans_type=e.label}},mounted(){this.getAccounts(),this.getTransactionTypes()}});function ht(e,t,l,_,p,C){const g=s("a-button"),u=s("a-select"),i=s("a-form-item"),h=s("a-col"),v=s("a-date-picker"),S=s("a-row"),I=s("a-input"),P=s("a-textarea"),Y=s("a-form"),z=s("PrevTransactions"),U=s("a-modal");return c(),f("div",null,[n(g,{size:"large",type:"primary",onClick:e.showModal},{default:a(()=>[r("Add Transaction")]),_:1},8,["onClick"]),n(U,{visible:e.visible,"onUpdate:visible":t[6]||(t[6]=m=>e.visible=m),title:"Add Transaction","ok-text":"Save",width:"1000px",centered:"",footer:null,"cancel-text":"Cancel"},{default:a(()=>[n(Y,{model:e.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:a(()=>[n(S,{gutter:24},{default:a(()=>[n(h,{span:12},{default:a(()=>[n(i,{label:"Account",name:"account_id","has-feedback":"",rules:[{required:!0,message:"Please select the account."}]},{default:a(()=>[n(u,{placeholder:"Select Account",value:e.account_id,"onUpdate:value":t[0]||(t[0]=m=>e.account_id=m),showSearch:"",optionFilterProp:"children",options:e.accounts,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleAccountChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),n(h,{span:12},{default:a(()=>[n(i,{label:"Effective Date",name:"effective_date",rules:[{required:!0,message:"Please select the effective date."}]},{default:a(()=>[n(v,{value:e.AddEditformState.effective_date,"onUpdate:value":t[1]||(t[1]=m=>e.AddEditformState.effective_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(S,{gutter:24},{default:a(()=>[n(h,{span:12},{default:a(()=>[n(i,{label:"Transaction Type",name:"trans_type","has-feedback":"",rules:[{required:!0,message:"Please select the Transaction Type."}]},{default:a(()=>[n(u,{placeholder:"Select Transaction Type",value:e.trans_type,"onUpdate:value":t[2]||(t[2]=m=>e.trans_type=m),showSearch:"",optionFilterProp:"children",options:e.transaction_types,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleTransactionTypeChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),n(h,{span:12},{default:a(()=>[n(i,{label:"Amount",name:"amount",rules:[{required:!0,message:"Please input the amount."}]},{default:a(()=>[n(I,{value:e.AddEditformState.amount,"onUpdate:value":t[3]||(t[3]=m=>e.AddEditformState.amount=m)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(S,{gutter:24},{default:a(()=>[n(h,{span:12},{default:a(()=>[n(i,{label:"Entry Date",name:"entry_date",rules:[{required:!0,message:"Please select the entry date."}]},{default:a(()=>[n(v,{value:e.AddEditformState.entry_date,"onUpdate:value":t[4]||(t[4]=m=>e.AddEditformState.entry_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(S,{gutter:24},{default:a(()=>[n(h,{span:24},{default:a(()=>[n(i,{label:"Memo",name:"memo",rules:[{required:!0,message:"Please input the memo."}]},{default:a(()=>[n(P,{value:e.AddEditformState.memo,"onUpdate:value":t[5]||(t[5]=m=>e.AddEditformState.memo=m)},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),n(S,{gutter:24},{default:a(()=>[n(h,{span:8,class:"justify-end"},{default:a(()=>[n(i,null,{default:a(()=>[n(g,{type:"warning","html-type":"submit",onClick:e.handleCancel},{default:a(()=>[r("Cancel")]),_:1},8,["onClick"]),n(g,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:a(()=>[r("Add")]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"]),n(z)]),_:1},8,["visible"])])}const gt=E(ft,[["render",ht],["__scopeId","data-v-71585df8"]]),yt=O({components:{InboxOutlined:be},setup(){const e=T(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:p=>{console.log(p),e.value=!1},handleChange:p=>{const C=p.file.status;C!=="uploading"&&console.log(p.file,p.fileList),C==="done"?A.success(`${p.file.name} file uploaded successfully.`):C==="error"&&A.error(`${p.file.name} file upload failed.`)},fileList:T([]),handleDrop:p=>{console.log(p)}}}}),vt={class:"ant-upload-drag-icon"},bt=o("p",{class:"ant-upload-text"},"Click or drag file to this area to upload",-1),kt=o("p",{class:"ant-upload-hint"}," Support for a single upload. Strictly prohibit from uploading company data or other band files ",-1);function Ct(e,t,l,_,p,C){const g=s("a-button"),u=s("inbox-outlined"),i=s("a-upload-dragger"),h=s("a-modal");return c(),f("div",null,[n(g,{size:"large",type:"primary",onClick:e.showModal},{default:a(()=>[r("Import Data")]),_:1},8,["onClick"]),n(h,{visible:e.visible,"onUpdate:visible":t[1]||(t[1]=v=>e.visible=v),title:"Import Transaction","ok-text":"Upload",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:a(()=>[n(i,{fileList:e.fileList,"onUpdate:fileList":t[0]||(t[0]=v=>e.fileList=v),name:"file",multiple:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:e.handleChange,onDrop:e.handleDrop},{default:a(()=>[o("p",vt,[n(u)]),bt,kt]),_:1},8,["fileList","onChange","onDrop"])]),_:1},8,["visible","onOk"])])}const wt=E(yt,[["render",Ct]]),$t=O({setup(){const e=T(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:_=>{console.log(_),e.value=!1}}}}),Tt=o("p",null,"Some contents...",-1),St=o("p",null,"Some contents...",-1),At=o("p",null,"Some contents...",-1);function Dt(e,t,l,_,p,C){const g=s("a-button"),u=s("a-modal");return c(),f("div",null,[n(g,{size:"large",type:"primary",onClick:e.showModal},{default:a(()=>[r("Add Bulk")]),_:1},8,["onClick"]),n(u,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=i=>e.visible=i),title:"Add Bulk Transactions","ok-text":"Add",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:a(()=>[Tt,St,At]),_:1},8,["visible","onOk"])])}const Ot=E($t,[["render",Dt]]);const Et=O({components:{ExportOutlined:ke,FileExcelOutlined:Ce,FileOutlined:fe,FilePdfOutlined:we},setup(){return{handleMenuClick:t=>{console.log("click",t)}}}}),Ft={class:"export-dropdown-wrap"};function Pt(e,t,l,_,p,C){const g=s("FileExcelOutlined"),u=s("a-menu-item"),i=s("FileOutlined"),h=s("FilePdfOutlined"),v=s("a-menu"),S=s("ExportOutlined"),I=s("a-button"),P=s("a-dropdown");return c(),f("div",Ft,[n(P,{trigger:["click"]},{overlay:a(()=>[n(v,{onClick:e.handleMenuClick},{default:a(()=>[n(u,{key:"1"},{default:a(()=>[n(g),r(" Excel File ")]),_:1}),n(u,{key:"2"},{default:a(()=>[n(i),r(" CSV File ")]),_:1}),n(u,{key:"3"},{default:a(()=>[n(h),r(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[n(I,{size:"large"},{default:a(()=>[r(" Export To "),n(S)]),_:1})]),_:1})])}const It=E(Et,[["render",Pt],["__scopeId","data-v-a40fd953"]]);const zt=O({components:{FormOutlined:$e,DeleteOutlined:Z,FilterOutlined:Te,DownOutlined:he,CaretUpOutlined:ge,CaretDownOutlined:ye,EditData:et,DeleteData:it,NullData:mt,StepBackwardFilled:Se,StepForwardFilled:Ae,CaretLeftFilled:De,CaretRightFilled:Oe,AddEdit:gt,AddBulk:Ot,ImportData:wt,TransactionExport:It},setup(){const e={onChange:(_,p)=>{console.log(`selectedRowKeys: ${_}`,"selectedRows: ",p)}},t=T([{title:"ID",dataIndex:"id",key:"id",width:150,resizable:!0},{title:"Account ID",dataIndex:"account_id",key:"account_id",width:150,resizable:!0},{title:"Account Description",dataIndex:"acct_description",key:"acct_description",width:300,resizable:!0},{title:"Effective Date",dataIndex:"effective_date",key:"effective_date",width:150,resizable:!0},{title:"Transaction Type",dataIndex:"trans_type",key:"trans_type",width:100,resizable:!0},{title:"Memo",dataIndex:"memo",key:"memo",width:250,resizable:!0},{title:"Amount",dataIndex:"amount",key:"amount",width:200,resizable:!0},{title:"Entry Date",dataIndex:"entry_date",key:"entry_date",width:150,resizable:!0},{title:"Created At",dataIndex:"created_at",key:"created_at",width:150,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:100}]);return{data:[],columns:t,rowSelection:e,handleResizeColumn:(_,p)=>{p.width=_}}},data(){return{active_records:0,data:[],transaction_list:[],transaction_pagination:{meta:{to:1},links:{next:null}},loading:!0,current:1,pageSize:parseInt("10"),page_sizes:JSON.parse('["10", "100", "500", "1000", "3000", "5000", "10000", "20000", "50000"]'),form:{page:1,per_page:parseInt("10"),filter_allcolumn:null,filter_activatewildcard:!1,filter_id:null,filter_account_id:null,filter_acct_description:null,filter_effective_date:null,filter_trans_type:null,filter_memo:null,filter_amount:null,filter_entry_date:null,filter_created_at:null,sort_id:0,sort_account_id:0,sort_acct_description:0,sort_effective_date:0,sort_trans_type:0,sort_memo:0,sort_amount:0,sort_entry_date:0,sort_created_at:0,export_to:""}}},methods:{getTransactions(){this.form.per_page=this.pageSize,this.getTransactionsByParams()},getTransactionsByParams(){this.loading=!0,this.form.export_to="",D.post("/transaction",this.form).then(e=>{let t=e.data;this.transaction_list=t.data,this.transaction_pagination=t,this.loading=!1,A.success(t.message),this.getTransactionsStats()}).catch(e=>{console.error(e),this.transaction_list=[],this.transaction_pagination={meta:{total:0},links:{next:null}},this.loading=!1,A.error(e.response.data.message)})},searchTransactions(){this.current=1,this.form.per_page=this.pageSize,this.form.page=1,this.getTransactionsByParams()},onPageChange(){this.form.per_page=this.pageSize,this.form.page=this.current,this.getTransactionsByParams(),this.scrollToTop()},toFirstPage(){this.searchTransactions(),this.scrollToTop()},toPreviousPage(){this.current=this.current-1,this.form.page=this.current,this.getTransactionsByParams(),this.scrollToTop()},toNextPage(){this.current=this.current+1,this.form.page=this.current,this.getTransactionsByParams(),this.scrollToTop()},toLastPage(){this.current=this.transaction_pagination.meta.to,this.form.page=this.current,this.getTransactionsByParams(),this.scrollToTop()},changeColumnSort(e){this.form[e]=this.form[e]+1,this.form[e]==3&&(this.form[e]=0),this.searchTransactions()},getTransactionsStats(){D.get("/transaction/stats").then(e=>{this.active_records=e.data.data.active_records}).catch(e=>{console.error(e.response.data.message),this.active_records=0})},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},showEditDataModal(e){this.$refs.editDataModal.showModal(e)}},mounted(){this.getTransactions()}}),k=e=>(B("data-v-16f756f4"),e=e(),R(),e),Mt={class:"action-container"},Yt={class:"transaction-filter"},Ut={class:"fw-bold"},Lt={key:0,class:"ant-table-column-sorters"},Bt={class:"ant-table-column-title"},Rt=k(()=>o("br",null,null,-1)),Nt={class:"ant-table-column-sorter ant-table-column-sorter-full"},qt={key:1,class:"ant-table-column-sorters"},Vt={class:"ant-table-column-title"},jt=k(()=>o("br",null,null,-1)),Kt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Gt=k(()=>o("br",null,null,-1)),Ht=k(()=>o("input",{class:"single-input",type:"text"},null,-1)),Jt=k(()=>o("br",null,null,-1)),Qt=k(()=>o("input",{class:"single-input",type:"text"},null,-1)),Wt=k(()=>o("br",null,null,-1)),Xt=k(()=>o("input",{class:"single-input",type:"text"},null,-1)),Zt=k(()=>o("br",null,null,-1)),xt=k(()=>o("input",{class:"single-input",type:"text"},null,-1)),en=k(()=>o("br",null,null,-1)),tn=k(()=>o("input",{class:"single-input",type:"text"},null,-1)),nn=k(()=>o("br",null,null,-1)),an=k(()=>o("input",{class:"single-input",type:"text"},null,-1)),on=k(()=>o("br",null,null,-1)),sn=k(()=>o("input",{class:"single-input",type:"text"},null,-1)),ln=k(()=>o("br",null,null,-1)),rn=k(()=>o("br",null,null,-1)),dn={key:0},cn={key:2,class:"action-container"},un={class:"pagination mt-3"},pn={class:"pagination-list lst-none p-0 d-inline-flex w-100"},_n=["disabled"],mn=["disabled"],fn={class:"d-inline-block mr-2"},hn=k(()=>o("p",{class:"d-inline-block mr-2"},"page",-1)),gn=["disabled"],yn={title:"Last Page",class:"ant-pagination-next mr-2 ant-pagination-disabled"};function vn(e,t,l,_,p,C){const g=s("AddEdit"),u=s("AddBulk"),i=s("ImportData"),h=s("TransactionExport"),v=s("FilterOutlined"),S=s("a-input"),I=s("a-checkbox"),P=s("a-form-item"),Y=s("a-form"),z=s("a-col"),U=s("a-row"),m=s("CaretUpOutlined"),K=s("CaretDownOutlined"),ee=s("a-tag"),te=s("FormOutlined"),ne=s("NullData"),ae=s("DeleteData"),oe=s("a-table"),se=s("StepBackwardFilled"),le=s("CaretLeftFilled"),ie=s("a-input-number"),re=s("CaretRightFilled"),de=s("StepForwardFilled"),ce=s("a-select-option"),ue=s("a-select"),pe=s("EditData");return c(),f(b,null,[o("div",Mt,[n(g),n(u),n(i),n(h)]),o("div",Yt,[n(U,{gutter:24},{default:a(()=>[n(z,{span:6},{default:a(()=>[n(Y,null,{default:a(()=>[n(P,{label:"Filter",name:"transactionfilter"},{default:a(()=>[n(S,{value:e.form.filter_allcolumn,"onUpdate:value":t[0]||(t[0]=d=>e.form.filter_allcolumn=d),onKeypress:t[1]||(t[1]=N(d=>e.searhTransactions(),["enter"]))},{prefix:a(()=>[n(v,{class:"site-form-item-icon"})]),_:1},8,["value"]),n(I,{checked:e.form.filter_activatewildcard,"onUpdate:checked":t[2]||(t[2]=d=>e.form.filter_activatewildcard=d)},{default:a(()=>[r("perform subfilter wildcard search")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1}),n(z,{span:6}),n(z,{span:12,class:"text-right"},{default:a(()=>[o("h3",Ut," Overall Total Transaction Records: "+F(e.active_records.toLocaleString()),1)]),_:1})]),_:1})]),n(oe,{sticky:"","row-selection":e.rowSelection,columns:e.columns,"data-source":e.transaction_list,onResizeColumn:e.handleResizeColumn,scroll:{x:1500},"row-class-name":(d,w)=>w%2===1?"table-striped":null,pagination:!1,loading:e.loading},{headerCell:a(({column:d})=>[d.key==="id"?(c(),f("div",Lt,[o("span",Bt,[r("Transaction ID"),Rt,H(o("input",{class:"single-input",type:"text","onUpdate:modelValue":t[3]||(t[3]=w=>e.form.filter_id=w),onKeypress:t[4]||(t[4]=N(w=>e.searhTransactions(),["enter"]))},null,544),[[J,e.form.filter_id]])]),o("span",Nt,[o("span",{class:"ant-table-column-sorter-inner",onClick:t[5]||(t[5]=w=>e.changeColumnSort("sort_id"))},[n(m,{class:M(["ant-table-column-sorter-up",e.form.sort_id==1?"active":""])},null,8,["class"]),n(K,{class:M(["ant-table-column-sorter-down",e.form.sort_id!=2?"":"active"])},null,8,["class"])])])])):y("",!0),d.key==="account_id"?(c(),f("div",qt,[o("span",Vt,[r("Account ID"),jt,H(o("input",{class:"single-input",type:"text","onUpdate:modelValue":t[6]||(t[6]=w=>e.form.filter_account_id=w),onKeypress:t[7]||(t[7]=N(w=>e.searhTransactions(),["enter"]))},null,544),[[J,e.form.filter_account_id]])]),o("span",Kt,[o("span",{class:"ant-table-column-sorter-inner",onClick:t[8]||(t[8]=w=>e.changeColumnSort("sort_account_id"))},[n(m,{class:M(["ant-table-column-sorter-up",e.form.sort_account_id==1?"active":""])},null,8,["class"]),n(K,{class:M(["ant-table-column-sorter-down",e.form.sort_account_id!=2?"":"active"])},null,8,["class"])])])])):y("",!0),d.key==="acct_description"?(c(),f(b,{key:2},[r(" Account Description"),Gt,Ht],64)):y("",!0),d.key==="effective_date"?(c(),f(b,{key:3},[r(" Effective Date"),Jt,Qt],64)):y("",!0),d.key==="trans_type"?(c(),f(b,{key:4},[r(" TxType"),Wt,Xt],64)):y("",!0),d.key==="memo"?(c(),f(b,{key:5},[r(" Memo"),Zt,xt],64)):y("",!0),d.key==="amount"?(c(),f(b,{key:6},[r(" Amount"),en,tn],64)):y("",!0),d.key==="entry_date"?(c(),f(b,{key:7},[r(" Entry Date"),nn,an],64)):y("",!0),d.key==="created_at"?(c(),f(b,{key:8},[r(" Created At"),on,sn],64)):y("",!0),d.key==="action"?(c(),f(b,{key:9},[r(" Action"),ln,rn],64)):y("",!0)]),bodyCell:a(({column:d,record:w,text:G})=>[d.dataIndex==="name"?(c(),f("a",dn,F(G),1)):y("",!0),d.dataIndex==="txtype"?(c(),L(ee,{key:1,color:"#3197FC"},{default:a(()=>[r(F(G),1)]),_:2},1024)):y("",!0),d.dataIndex==="action"?(c(),f("div",cn,[n(te,{onClick:$n=>e.showEditDataModal(w.id),class:"icon-edit"},null,8,["onClick"]),n(ne),n(ae,{transaction_id:w.id,acct_description:w.acct_description},null,8,["transaction_id","acct_description"])])):y("",!0)]),_:1},8,["row-selection","columns","data-source","onResizeColumn","row-class-name","loading"]),o("div",un,[o("ul",pn,[o("li",{title:"First Page",class:M(["ant-pagination-prev",e.form.page==1?"ant-pagination-disabled":""])},[o("button",{class:"ant-pagination-item-link",type:"button",onClick:t[9]||(t[9]=(...d)=>e.toFirstPage&&e.toFirstPage(...d)),disabled:e.form.page==1},[n(se)],8,_n)],2),o("li",{class:M(["ant-pagination-prev",e.form.page==1?"ant-pagination-disabled":""])},[o("button",{class:"ant-pagination-item-link",type:"button",onClick:t[10]||(t[10]=(...d)=>e.toPreviousPage&&e.toPreviousPage(...d)),disabled:e.form.page==1},[n(le)],8,mn)],2),o("li",fn,[hn,n(ie,{class:"d-inline-block text-center page-number",value:e.current,"onUpdate:value":t[11]||(t[11]=d=>e.current=d),min:1,onChange:e.onPageChange,onPressEnter:e.onPageChange},null,8,["value","onChange","onPressEnter"])]),o("li",{class:M(["ant-pagination-next mr-2",e.transaction_pagination.links.next?"":"ant-pagination-disabled"])},[o("button",{class:"ant-pagination-item-link",type:"button",onClick:t[12]||(t[12]=(...d)=>e.toNextPage&&e.toNextPage(...d)),disabled:!e.transaction_pagination.links.next},[n(re)],8,gn)],2),o("li",yn,[o("button",{class:"ant-pagination-item-link",type:"button",onClick:t[13]||(t[13]=(...d)=>e.toLastPage&&e.toLastPage(...d)),disabled:""},[n(de)])]),n(ue,{value:e.pageSize,"onUpdate:value":t[14]||(t[14]=d=>e.pageSize=d),onChange:e.onPageChange},{default:a(()=>[(c(!0),f(b,null,ve(e.page_sizes,(d,w)=>(c(),L(ce,{value:d,key:w},{default:a(()=>[r(F(d+" / page"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange"])])]),n(pe,{ref:"editDataModal"},null,512)],64)}const bn=E(zt,[["render",vn],["__scopeId","data-v-16f756f4"]]);const kn=O({components:{AdminLayout:_e,ListData:bn},data(){return{title:"Transaction Vault"}}}),Cn={class:"view-container"};function wn(e,t,l,_,p,C){const g=s("ListData"),u=s("AdminLayout");return c(),L(u,{defaultKey:"5"},{default:a(()=>[o("h1",null,F(e.title),1),o("div",Cn,[n(g)])]),_:1})}const Fn=E(kn,[["render",wn],["__scopeId","data-v-6adfb0f0"]]);export{Fn as default};
