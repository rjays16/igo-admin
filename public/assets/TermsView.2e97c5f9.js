import{A as ie}from"./AdminLayout.c989038b.js";import{d as O,r as T,q as j,j as $,m as y,s as G,_ as D,f as n,o as h,a as v,c as o,w as s,k as u,D as H,e as a,t as Y,p as V,b as N,P as re,C as de,g as q,h as w,u as ce,v as ue,x as pe,y as me,z as E,B as k,F as R,G as _e,H as L,I as B}from"./index.50e3038a.js";import{I as fe,M as he}from"./MinusOutlined.803834b2.js";import{E as ge,F as be,a as ve}from"./FilePdfOutlined.1937e84a.js";import{F as ke,a as Ce}from"./FormOutlined.3e6c509c.js";import{S as ye,a as $e,C as Ae,b as we}from"./StepForwardFilled.6da19488.js";const Te=O({setup(){const e=T(!1),t=T(!1),r=j({effective_date:null,rate:null,note:null});return{visible:t,AddEditformState:r,onFinish:c=>{console.log("Success:",c)},onFinishFailed:c=>{console.log("Failed:",c)},handleCancel:()=>{t.value=!1},handleOk:()=>{e.value=!0,setTimeout(()=>{e.value=!1,t.value=!1},1e3)},loading:e}},data(){return{accounts:[],compound_periods:[],term_id:null,account_id:null,acct_description:null,compound_period_id:null,compound_period:null,options_size:parseInt("5000")}},methods:{showModal(e){this.term_id=e,this.visible=!0,this.getAccounts()},getTerm(){$.post(`/term/show/${this.term_id}`,{},{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{let t=e.data.data;this.AddEditformState.effective_date=t.effective_date,this.AddEditformState.rate=t.rate,this.AddEditformState.note=t.note,this.AddEditformState.account_id=this.account_id=t.account_id,this.AddEditformState.acct_description=this.acct_description=t.acct_description,this.AddEditformState.compound_period_id=this.compound_period_id=t.compound_period_id,this.AddEditformState.compound_period=this.compound_period=t.compound_period,this.getCompoundPeriods()}).catch(e=>{console.error(e),y.error(e.response.data.message),this.visible=!1})},getAccounts(){let e={per_page:this.options_size};$.post("/account",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.accounts=t.data.data,this.getTerm()}).catch(t=>{console.error(t),y.error(t.response.data.message),this.visible=!1})},getCompoundPeriods(){let e={per_page:this.options_size};$.post("/compound-period",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.compound_periods=t.data.data}).catch(t=>{console.error(t.response.data.message),this.compound_periods=[]})},submit(){this.loading=!0,$.post(`/term/update/${this.term_id}`,G(this.AddEditformState),{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{y.success(e.data.message),this.visible=!1,this.loading=!1,this.$parent.getTerms()}).catch(e=>{console.error(e),y.error(e.response.data.message),this.loading=!1})},filterOptions(e,t){var r;return((r=t==null?void 0:t.label)!=null?r:"").toLowerCase().includes(e.toLowerCase())},handleAccountChange(e){this.AddEditformState.account_id=e.value,this.AddEditformState.acct_description=e.label},handleCompoundPeriodChange(e){this.AddEditformState.compound_period_id=e.value,this.AddEditformState.compound_period=e.label}}});function Se(e,t,r,f,d,g){const p=n("a-select"),c=n("a-form-item"),m=n("a-col"),C=n("a-date-picker"),b=n("a-row"),S=n("a-input"),A=n("a-textarea"),P=n("a-form"),M=n("a-button"),I=n("a-modal");return h(),v("div",null,[o(I,{visible:e.visible,"onUpdate:visible":t[5]||(t[5]=_=>e.visible=_),title:"Update Term Record","ok-text":"Update",width:"800px",centered:"","cancel-text":"Cancel"},{footer:s(()=>[o(M,{key:"back",onClick:e.handleCancel},{default:s(()=>[u("Cancel")]),_:1},8,["onClick"]),o(M,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:s(()=>[u("Update")]),_:1},8,["loading","disabled","onClick"])]),default:s(()=>[o(P,{model:e.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:s(()=>[o(b,{gutter:24},{default:s(()=>[o(m,{span:12},{default:s(()=>[o(c,{label:"Account",name:"account_id","has-feedback":"",rules:[{required:!0,message:"Please select the account."}]},{default:s(()=>[o(p,{placeholder:"Select account",value:e.account_id,"onUpdate:value":t[0]||(t[0]=_=>e.account_id=_),showSearch:"",optionFilterProp:"children",options:e.accounts,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleAccountChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),o(m,{span:12},{default:s(()=>[o(c,{label:"Effective Date",name:"effective_date",rules:[{required:!0,message:"Please select the effective date."}]},{default:s(()=>[o(C,{value:e.AddEditformState.effective_date,"onUpdate:value":t[1]||(t[1]=_=>e.AddEditformState.effective_date=_),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),o(b,{gutter:24},{default:s(()=>[o(m,{span:12},{default:s(()=>[o(c,{label:"Rate",name:"rate",rules:[{required:!0,message:"Please input the rate."}]},{default:s(()=>[o(S,{value:e.AddEditformState.rate,"onUpdate:value":t[2]||(t[2]=_=>e.AddEditformState.rate=_)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),o(m,{span:12},{default:s(()=>[o(c,{label:"Compound Period",name:"compound_period_id","has-feedback":"",rules:[{required:!0,message:"Please select the compounding period."}]},{default:s(()=>[o(p,{placeholder:"Select compound period",value:e.compound_period_id,"onUpdate:value":t[3]||(t[3]=_=>e.compound_period_id=_),showSearch:"",optionFilterProp:"children",options:e.compound_periods,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleCompoundPeriodChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1})]),_:1}),o(c,{label:"Note",name:"note",rules:[{required:!0,message:"Please input the note."}]},{default:s(()=>[o(A,{value:e.AddEditformState.note,"onUpdate:value":t[4]||(t[4]=_=>e.AddEditformState.note=_),maxlength:255},null,8,["value"])]),_:1},8,["rules"])]),_:1},8,["model","onFinish","onFinishFailed"])]),_:1},8,["visible"])])}const Fe=D(Te,[["render",Se],["__scopeId","data-v-bd9d6f16"]]);const Ee=O({props:["term_id","acct_description"],components:{DeleteOutlined:H},setup(){const e=T(!1),t=T(!0),r=T(!1);return{visible:r,handleCancel:()=>{r.value=!1},handleOk:g=>{e.value=!0,setTimeout(()=>{e.value=!1,r.value=!1},1e3)},loading:e,disabled:t}},data(){return{confirmation_text:"YES DELETE",confirmation_input:null}},methods:{showModal(){this.visible=!0},checkText(){this.disabled=this.confirmation_input!=this.confirmation_text},submit(){this.loading=!0,this.disabled=!0,$.delete(`/term/delete/${this.term_id}`,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{y.success(e.data.message),this.visible=!1,this.loading=!1,this.disabled=!1,setTimeout(()=>{window.location.reload()},1500)}).catch(e=>{console.error(e),y.error(e.response.data.message),this.loading=!1,this.disabled=!1})}}}),K=e=>(V("data-v-5021f8d7"),e=e(),N(),e),Oe=K(()=>a("h3",null,"Are you sure you want to delete this record?",-1)),De={class:"delete-container"},Pe=K(()=>a("br",null,null,-1)),Ie=K(()=>a("p",null,[u("Type "),a("strong",null,'"YES DELETE"'),u(".")],-1));function ze(e,t,r,f,d,g){const p=n("DeleteOutlined"),c=n("a-input"),m=n("a-button"),C=n("a-modal");return h(),v("div",null,[o(p,{onClick:e.showModal,style:{"font-size":"large",color:"red"}},null,8,["onClick"]),o(C,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=b=>e.visible=b),title:"Confirmation","ok-text":"Delete",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{footer:s(()=>[o(m,{key:"back",onClick:e.handleCancel},{default:s(()=>[u("Cancel")]),_:1},8,["onClick"]),o(m,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.disabled,onClick:e.submit},{default:s(()=>[u(" Yes ")]),_:1},8,["loading","disabled","onClick"])]),default:s(()=>[Oe,a("div",De,[a("p",null,[a("strong",null,[u("Term ID: "+Y(e.term_id),1),Pe,u(" Account Description: "+Y(e.acct_description),1)])]),o(c,{value:e.confirmation_input,"onUpdate:value":t[0]||(t[0]=b=>e.confirmation_input=b),onInput:t[1]||(t[1]=b=>e.checkText())},null,8,["value"]),Ie])]),_:1},8,["visible","onOk"])])}const Ue=D(Ee,[["render",ze],["__scopeId","data-v-5021f8d7"]]);const Le=O({setup(){const e=T(!1),t=T(!1),r=()=>{t.value=!0},f=j({effective_date:null,rate:null,note:null});return{visible:t,showModal:r,AddEditformState:f,onFinish:m=>{console.log("Success:",m)},onFinishFailed:m=>{console.log("Failed:",m)},handleCancel:()=>{t.value=!1},handleOk:()=>{e.value=!0,setTimeout(()=>{e.value=!1,t.value=!1},1e3)},loading:e}},data(){return{accounts:[],compound_periods:[],account_id:null,acct_description:null,compound_period_id:null,compound_period:null,options_size:parseInt("5000")}},methods:{getAccounts(){let e={per_page:this.options_size};$.post("/account",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.accounts=t.data.data}).catch(t=>{console.error(t.response.data.message),this.accounts=[]})},getCompoundPeriods(){let e={per_page:this.options_size};$.post("/compound-period",e,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.compound_periods=t.data.data}).catch(t=>{console.error(t.response.data.message),this.compound_periods=[]})},submit(){this.loading=!0,$.post("/term/store",G(this.AddEditformState),{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{y.success(e.data.message),this.visible=!1,this.loading=!1}).catch(e=>{y.error(e.response.data.message),this.loading=!1})},filterOptions(e,t){var r;return((r=t==null?void 0:t.label)!=null?r:"").toLowerCase().includes(e.toLowerCase())},handleAccountChange(e){this.AddEditformState.account_id=e.value,this.AddEditformState.acct_description=e.label},handleCompoundPeriodChange(e){this.AddEditformState.compound_period_id=e.value,this.AddEditformState.compound_period=e.label}},mounted(){this.getAccounts(),this.getCompoundPeriods()}});function Be(e,t,r,f,d,g){const p=n("a-button"),c=n("a-select"),m=n("a-form-item"),C=n("a-col"),b=n("a-date-picker"),S=n("a-row"),A=n("a-input"),P=n("a-textarea"),M=n("a-form"),I=n("a-modal");return h(),v("div",null,[o(p,{size:"large",type:"primary",onClick:e.showModal},{default:s(()=>[u("Add Term")]),_:1},8,["onClick"]),o(I,{visible:e.visible,"onUpdate:visible":t[5]||(t[5]=_=>e.visible=_),title:"Add Term Record","ok-text":"Save",width:"800px",centered:"","cancel-text":"Cancel"},{footer:s(()=>[o(p,{key:"back",onClick:e.handleCancel},{default:s(()=>[u("Cancel")]),_:1},8,["onClick"]),o(p,{key:"submit",type:"primary","html-type":"submit",loading:e.loading,disabled:e.loading,onClick:e.submit},{default:s(()=>[u("Add")]),_:1},8,["loading","disabled","onClick"])]),default:s(()=>[o(M,{model:e.AddEditformState,name:"basic",layout:"vertical",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:s(()=>[o(S,{gutter:24},{default:s(()=>[o(C,{span:12},{default:s(()=>[o(m,{label:"Account",name:"account_id","has-feedback":"",rules:[{required:!0,message:"Please select the account."}]},{default:s(()=>[o(c,{placeholder:"Select account",value:e.account_id,"onUpdate:value":t[0]||(t[0]=_=>e.account_id=_),showSearch:"",optionFilterProp:"children",options:e.accounts,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleAccountChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1}),o(C,{span:12},{default:s(()=>[o(m,{label:"Effective Date",name:"effective_date",rules:[{required:!0,message:"Please select the effective date."}]},{default:s(()=>[o(b,{value:e.AddEditformState.effective_date,"onUpdate:value":t[1]||(t[1]=_=>e.AddEditformState.effective_date=_),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1}),o(S,{gutter:24},{default:s(()=>[o(C,{span:12},{default:s(()=>[o(m,{label:"Rate",name:"rate",rules:[{required:!0,message:"Please input the rate."}]},{default:s(()=>[o(A,{value:e.AddEditformState.rate,"onUpdate:value":t[2]||(t[2]=_=>e.AddEditformState.rate=_)},null,8,["value"])]),_:1},8,["rules"])]),_:1}),o(C,{span:12},{default:s(()=>[o(m,{label:"Compound Period",name:"compound_period_id","has-feedback":"",rules:[{required:!0,message:"Please select the compounding period."}]},{default:s(()=>[o(c,{placeholder:"Select compound period",value:e.compound_period_id,"onUpdate:value":t[3]||(t[3]=_=>e.compound_period_id=_),showSearch:"",optionFilterProp:"children",options:e.compound_periods,filterOption:e.filterOptions,"label-in-value":"",onChange:e.handleCompoundPeriodChange},null,8,["value","options","filterOption","onChange"])]),_:1},8,["rules"])]),_:1})]),_:1}),o(m,{label:"Note",name:"note",rules:[{required:!0,message:"Please input the note."}]},{default:s(()=>[o(P,{value:e.AddEditformState.note,"onUpdate:value":t[4]||(t[4]=_=>e.AddEditformState.note=_),maxlength:255},null,8,["value"])]),_:1},8,["rules"])]),_:1},8,["model","onFinish","onFinishFailed"])]),_:1},8,["visible"])])}const Me=D(Le,[["render",Be],["__scopeId","data-v-fd4366b4"]]),Ye=O({components:{InboxOutlined:fe},setup(){const e=T(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:d=>{console.log(d),e.value=!1},handleChange:d=>{const g=d.file.status;g!=="uploading"&&console.log(d.file,d.fileList),g==="done"?y.success(`${d.file.name} file uploaded successfully.`):g==="error"&&y.error(`${d.file.name} file upload failed.`)},fileList:T([]),handleDrop:d=>{console.log(d)}}}}),Re={class:"ant-upload-drag-icon"},Ve=a("p",{class:"ant-upload-text"},"Click or drag file to this area to upload",-1),Ne=a("p",{class:"ant-upload-hint"}," Support for a single upload. Strictly prohibit from uploading company data or other band files ",-1);function qe(e,t,r,f,d,g){const p=n("a-button"),c=n("inbox-outlined"),m=n("a-upload-dragger"),C=n("a-modal");return h(),v("div",null,[o(p,{size:"large",type:"primary",onClick:e.showModal},{default:s(()=>[u("Import Data")]),_:1},8,["onClick"]),o(C,{visible:e.visible,"onUpdate:visible":t[1]||(t[1]=b=>e.visible=b),title:"Import Term","ok-text":"Upload",centered:"","cancel-text":"Cancel",onOk:e.handleOk},{default:s(()=>[o(m,{fileList:e.fileList,"onUpdate:fileList":t[0]||(t[0]=b=>e.fileList=b),name:"file",multiple:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:e.handleChange,onDrop:e.handleDrop},{default:s(()=>[a("p",Re,[o(c)]),Ve,Ne]),_:1},8,["fileList","onChange","onDrop"])]),_:1},8,["visible","onOk"])])}const Ke=D(Ye,[["render",qe]]);const je=[{title:"Applied to Account",dataIndex:"appliedacct"},{title:"Effective Date",dataIndex:"effdate"},{title:"Rate",dataIndex:"rate"},{title:"Compound Period",dataIndex:"compoundperiod"},{title:"Note",dataIndex:"note"},{title:"Created At",dataIndex:"createdat"},{title:"Action",dataIndex:"action",fixed:"right",width:60}],Ge=[{key:"1",appliedacct:"Lindsey, Alan (loan 1)",effdate:"10-11-2021",rate:"63.0%",compoundperiod:"Daily",note:"Your note here",createdat:"10-11-2021"},{key:"2",appliedacct:"Lindsey, Alan (loan 1)",effdate:"10-11-2021",rate:"63.0%",compoundperiod:"Daily",note:"Your note here",createdat:"10-11-2021"},{key:"3",appliedacct:"Lindsey, Alan (loan 1)",effdate:"10-11-2021",rate:"63.0%",compoundperiod:"Daily",note:"Your note here",createdat:"10-11-2021"},{key:"4",appliedacct:"Lindsey, Alan (loan 1)",effdate:"10-11-2021",rate:"63.0%",compoundperiod:"Daily",note:"Your note here",createdat:"10-11-2021"}],He=O({components:{PlusOutlined:re,MinusOutlined:he,CloseOutlined:de},setup(){const e={onChange:(d,g)=>{console.log(`selectedRowKeys: ${d}`,"selectedRows: ",g)},getCheckboxProps:d=>({disabled:d.name==="Disabled User",name:d.name})},t=T(!1);return{visible:t,showModal:()=>{t.value=!0},handleOk:d=>{console.log(d),t.value=!1},columns:je,data:Ge,rowSelection:e}}}),Je=e=>(V("data-v-1841ab5a"),e=e(),N(),e),Qe=Je(()=>a("p",{class:"note"},"You may copy and paste your data from excel or any spreadsheet files here and it will automatically show in the table below. To edit the content of each cell just click on it and enter new values. To add new row just click (+) button. To remove a row just click on its (x) button at the right. To remove multiple rows just check those rows and click (-) button.",-1)),We={class:"addbulk-container"},Xe={class:"addbulk-action"};function Ze(e,t,r,f,d,g){const p=n("a-button"),c=n("plus-outlined"),m=n("minus-outlined"),C=n("CloseOutlined"),b=n("a-table"),S=n("a-modal");return h(),v("div",null,[o(p,{size:"large",type:"primary",onClick:e.showModal},{default:s(()=>[u("Add Bulk")]),_:1},8,["onClick"]),o(S,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=A=>e.visible=A),title:"Add Bulk Terms","ok-text":"Add",centered:"","cancel-text":"Cancel",width:"1200px",class:"addbulkmodal",bodyStyle:"padding: 0;",onOk:e.handleOk},{default:s(()=>[Qe,a("div",We,[a("div",Xe,[o(p,{type:"primary"},{default:s(()=>[u("Paste")]),_:1}),o(p,{type:"primary"},{icon:s(()=>[o(c)]),_:1}),o(p,{type:"danger"},{icon:s(()=>[o(m)]),_:1})]),o(b,{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.data,scroll:{y:400},size:"small",pagination:!1},{bodyCell:s(({column:A})=>[A.dataIndex==="action"?(h(),q(C,{key:0,style:{color:"red","margin-left":"10px"}})):w("",!0)]),_:1},8,["row-selection","columns","data-source"])])]),_:1},8,["visible","onOk"])])}const xe=D(He,[["render",Ze],["__scopeId","data-v-1841ab5a"]]);const et=O({components:{ExportOutlined:ge,FileExcelOutlined:be,FileOutlined:ce,FilePdfOutlined:ve},methods:{exportTo(e){let t=this.$parent.form;t.export_to=e.key,$.post("/term",t,{responseType:"blob",headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(r=>{y.success("Successfully exported data.");const f=URL.createObjectURL(new Blob([r.data])),d=document.createElement("a");d.href=f,d.setAttribute("download","terms."+e.key),document.body.appendChild(d),d.click(),document.body.removeChild(d)}).catch(r=>{console.error(r),y.error(r.response.data.message)})}}}),tt={class:"export-dropdown-wrap"};function ot(e,t,r,f,d,g){const p=n("FileExcelOutlined"),c=n("a-menu-item"),m=n("FileOutlined"),C=n("FilePdfOutlined"),b=n("a-menu"),S=n("ExportOutlined"),A=n("a-button"),P=n("a-dropdown");return h(),v("div",tt,[o(P,{trigger:["click"]},{overlay:s(()=>[o(b,{onClick:e.exportTo},{default:s(()=>[o(c,{key:"xlsx"},{default:s(()=>[o(p),u(" Excel File ")]),_:1}),o(c,{key:"csv"},{default:s(()=>[o(m),u(" CSV File ")]),_:1}),o(c,{key:"pdf"},{default:s(()=>[o(C),u(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:s(()=>[o(A,{size:"large"},{default:s(()=>[u(" Export To "),o(S)]),_:1})]),_:1})])}const at=D(et,[["render",ot],["__scopeId","data-v-50334e44"]]);const nt=O({components:{FormOutlined:ke,DeleteOutlined:H,FilterOutlined:Ce,DownOutlined:ue,CaretUpOutlined:pe,CaretDownOutlined:me,EditData:Fe,DeleteData:Ue,StepBackwardFilled:ye,StepForwardFilled:$e,CaretLeftFilled:Ae,CaretRightFilled:we,AddEdit:Me,AddBulk:xe,ImportData:Ke,TermExport:at},setup(){const e=T([{title:"Term ID",dataIndex:"id",key:"id",width:100,resizable:!0},{title:"Account Description",dataIndex:"acct_description",key:"acct_description",width:200,resizable:!0,ellipsis:!0},{title:"Effective Date",dataIndex:"effective_date",key:"effective_date",width:200,resizable:!0},{title:"Rate",dataIndex:"rate",key:"rate",width:200,resizable:!0},{title:"Compound Period",dataIndex:"compound_period",key:"compound_period",width:200,resizable:!0},{title:"Note",dataIndex:"note",key:"note",width:600,resizable:!0,ellipsis:!0},{title:"Created at",dataIndex:"created_at",key:"created_at",width:200,resizable:!0},{title:"Action",dataIndex:"action",key:"action",fixed:"right",width:80}]);return{data:[],columns:e,handleResizeColumn:(r,f)=>{f.width=r}}},data(){return{active_records:0,data:[],term_list:[],term_pagination:{meta:{to:1},links:{next:null}},loading:!1,current:1,pageSize:parseInt("10"),page_sizes:JSON.parse('["10", "100", "500", "1000", "3000", "5000", "10000", "20000", "50000"]'),form:{page:1,per_page:parseInt("10"),filter_allcolumn:null,filter_activatewildcard:!1,filter_id:null,filter_client_id:null,filter_status:null,filter_creditor_id:null,filter_acct_description:null,filter_acct_number:null,filter_debtor_id:null,filter_rate:null,filter_note:null,filter_origin_date:null,filter_tag:null,filter_created_at:null,sort_id:0,sort_client_id:0,sort_status:0,sort_creditor_id:0,sort_acct_description:0,sort_acct_number:0,sort_debtor_id:0,sort_rate:0,sort_note:0,sort_origin_date:0,sort_tag:0,sort_created_at:0,export_to:""},current_route:this.$router.currentRoute.value,user_data:this.$cookies.get("user-data"),searched_columns:""}},methods:{getTerms(){this.form.per_page=this.pageSize,this.getTermsByParams()},getTermsByParams(){this.loading=!0,this.form.export_to="",$.post("/term",this.form,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{let t=e.data;this.term_list=t.data,this.term_pagination=t,this.loading=!1,y.success(t.message),this.getTermsStats()}).catch(e=>{console.error(e),this.term_list=[],this.term_pagination={meta:{total:0},links:{next:null}},this.loading=!1,y.error(e.response.data.message)})},searchTerms(e){this.current=1,this.form.per_page=this.pageSize,this.form.page=1,this.getTermsByParams(),e&&this.createAuditTrail("search")},onPageChange(){this.form.per_page=this.pageSize,this.form.page=this.current,this.getTermsByParams(),this.scrollToTop()},toFirstPage(){this.searchTerms(),this.scrollToTop(),this.createAuditTrail("click",'Clicked on the "go to first page" button in the pagination for terms.')},toPreviousPage(){this.current=this.current-1,this.form.page=this.current,this.getTermsByParams(),this.scrollToTop(),this.createAuditTrail("click","Clicked on the previous button in the pagination for terms.")},toNextPage(){this.current=this.current+1,this.form.page=this.current,this.getTermsByParams(),this.scrollToTop(),this.createAuditTrail("click","Clicked on the next button in the pagination for terms.")},toLastPage(){this.current=this.term_pagination.meta.to,this.form.page=this.current,this.getTermsByParams(),this.scrollToTop(),this.createAuditTrail("click",'Clicked on the "go to last page" button in the pagination for terms.')},changeColumnSort(e,t){this.form[t]=this.form[t]+1,this.form[t]==3&&(this.form[t]=0),this.searchTerms(!1),e&&this.createAuditTrail("search")},getTermsStats(){$.get("/term/stats",{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{this.active_records=e.data.data.active_records}).catch(e=>{console.error(e.response.data.message),this.active_records=0})},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},showEditDataModal(e){this.$refs.editDataModal.showModal(e),this.createAuditTrail("click","Clicked on the edit term button.")},createAuditTrail(e,t=null){let r={user_id:this.user_data.id,pages:this.current_route.fullPath};if(e=="click")r.activity=t;else if(e=="search"){let f="Searched terms by ";this.searched_columns=Object.entries(this.form).toString().replaceAll(",",", ").replaceAll(" ,"," null,").replaceAll("filter_","").replaceAll(/\export_to.*?\b/g,"").replaceAll("_"," ");let g=f.concat("",this.searched_columns).split(/sort(.*)/s),p=g[1].replaceAll(" 0,"," default,").replaceAll(", 0",", default").replaceAll(" 1,"," ascending,").replaceAll(", 1",", ascending").replaceAll(" 2,"," descending,").replaceAll(", 2",", descending"),c=g[0].concat("sort",p).replace(/(^[,\s]+)|([,\s]+$)/g,"");r.activity=c}$.post("/audit-trail/store",r,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(f=>{console.log(f.data.message)}).catch(f=>{console.error(f.response.data.message)})}},mounted(){this.getTerms()}}),F=e=>(V("data-v-b25f5be6"),e=e(),N(),e),st={class:"action-container"},lt={class:"client-filter"},it={class:"fw-bold"},rt={class:"pagination mt-3 text-right"},dt={class:"d-inline-block"},ct={class:"pagination-list lst-none p-0 d-inline-flex w-100"},ut=["disabled"],pt=["disabled"],mt={class:"d-inline-block mr-2"},_t=F(()=>a("p",{class:"d-inline-block mr-2"},"page",-1)),ft=["disabled"],ht={title:"Last Page",class:"ant-pagination-next mr-2 ant-pagination-disabled"},gt={key:0,class:"ant-table-column-sorters"},bt={class:"ant-table-column-title"},vt=F(()=>a("br",null,null,-1)),kt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Ct={key:1,class:"ant-table-column-sorters"},yt={class:"ant-table-column-title"},$t=F(()=>a("br",null,null,-1)),At={class:"ant-table-column-sorter ant-table-column-sorter-full"},wt={key:2,class:"ant-table-column-sorters"},Tt={class:"ant-table-column-title"},St=F(()=>a("br",null,null,-1)),Ft={class:"ant-table-column-sorter ant-table-column-sorter-full"},Et={key:3,class:"ant-table-column-sorters"},Ot={class:"ant-table-column-title"},Dt=F(()=>a("br",null,null,-1)),Pt={class:"ant-table-column-sorter ant-table-column-sorter-full"},It={key:4,class:"ant-table-column-sorters"},zt={class:"ant-table-column-title"},Ut=F(()=>a("br",null,null,-1)),Lt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Bt={key:5,class:"ant-table-column-sorters"},Mt={class:"ant-table-column-title"},Yt=F(()=>a("br",null,null,-1)),Rt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Vt={key:6,class:"ant-table-column-sorters"},Nt={class:"ant-table-column-title"},qt=F(()=>a("br",null,null,-1)),Kt={class:"ant-table-column-sorter ant-table-column-sorter-full"},jt=F(()=>a("br",null,null,-1)),Gt=F(()=>a("br",null,null,-1)),Ht={key:0},Jt={key:1,class:"d-flex"};function Qt(e,t,r,f,d,g){const p=n("AddEdit"),c=n("AddBulk"),m=n("ImportData"),C=n("TermExport"),b=n("FilterOutlined"),S=n("a-input"),A=n("a-checkbox"),P=n("a-form-item"),M=n("a-form"),I=n("a-col"),_=n("StepBackwardFilled"),J=n("CaretLeftFilled"),Q=n("a-input-number"),W=n("CaretRightFilled"),X=n("StepForwardFilled"),Z=n("a-select-option"),x=n("a-select"),ee=n("a-row"),z=n("CaretUpOutlined"),U=n("CaretDownOutlined"),te=n("FormOutlined"),oe=n("DeleteData"),ae=n("a-table"),ne=n("EditData");return h(),v(R,null,[a("div",st,[o(p,{onClick:t[0]||(t[0]=l=>e.createAuditTrail("click","Clicked on the add term button."))}),o(c,{onClick:t[1]||(t[1]=l=>e.createAuditTrail("click","Clicked on the add bulk terms button."))}),o(m,{onClick:t[2]||(t[2]=l=>e.createAuditTrail("click","Clicked on the import terms button."))}),o(C,{onClick:t[3]||(t[3]=l=>e.createAuditTrail("click","Clicked on the export terms button."))})]),a("div",lt,[o(ee,{gutter:16},{default:s(()=>[o(I,{span:6},{default:s(()=>[o(M,null,{default:s(()=>[o(P,{label:"Filter",name:"termfilter"},{default:s(()=>[o(S,{value:e.form.filter_allcolumn,"onUpdate:value":t[4]||(t[4]=l=>e.form.filter_allcolumn=l),onKeypress:t[5]||(t[5]=E(l=>e.searchTerms(!0),["enter"]))},{prefix:s(()=>[o(b,{class:"site-form-item-icon"})]),_:1},8,["value"]),o(A,{checked:e.form.filter_activatewildcard,"onUpdate:checked":t[6]||(t[6]=l=>e.form.filter_activatewildcard=l)},{default:s(()=>[u("perform subfilter wildcard search")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1}),o(I,{span:6}),o(I,{span:12,class:"text-right"},{default:s(()=>[a("h3",it," Overall Total Term Records: "+Y(e.active_records.toLocaleString()),1),a("div",rt,[a("div",dt,[a("ul",ct,[a("li",{title:"First Page",class:k(["ant-pagination-prev",e.form.page==1?"ant-pagination-disabled":""])},[a("button",{class:"ant-pagination-item-link",type:"button",onClick:t[7]||(t[7]=(...l)=>e.toFirstPage&&e.toFirstPage(...l)),disabled:e.form.page==1},[o(_)],8,ut)],2),a("li",{class:k(["ant-pagination-prev",e.form.page==1?"ant-pagination-disabled":""])},[a("button",{class:"ant-pagination-item-link",type:"button",onClick:t[8]||(t[8]=(...l)=>e.toPreviousPage&&e.toPreviousPage(...l)),disabled:e.form.page==1},[o(J)],8,pt)],2),a("li",mt,[_t,o(Q,{class:"d-inline-block text-center page-number",value:e.current,"onUpdate:value":t[9]||(t[9]=l=>e.current=l),min:1,onChange:e.onPageChange,onPressEnter:e.onPageChange},null,8,["value","onChange","onPressEnter"])]),a("li",{class:k(["ant-pagination-next mr-2",e.term_pagination.links.next?"":"ant-pagination-disabled"])},[a("button",{class:"ant-pagination-item-link",type:"button",onClick:t[10]||(t[10]=(...l)=>e.toNextPage&&e.toNextPage(...l)),disabled:!e.term_pagination.links.next},[o(W)],8,ft)],2),a("li",ht,[a("button",{class:"ant-pagination-item-link",type:"button",onClick:t[11]||(t[11]=(...l)=>e.toLastPage&&e.toLastPage(...l)),disabled:""},[o(X)])]),o(x,{value:e.pageSize,"onUpdate:value":t[12]||(t[12]=l=>e.pageSize=l),onChange:e.onPageChange},{default:s(()=>[(h(!0),v(R,null,_e(e.page_sizes,(l,i)=>(h(),q(Z,{value:l,key:i},{default:s(()=>[u(Y(l+" / page"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange"])])])])]),_:1})]),_:1})]),o(ae,{sticky:"",columns:e.columns,"data-source":e.term_list,onResizeColumn:e.handleResizeColumn,scroll:{x:2e3},"row-class-name":(l,i)=>i%2===1?"table-striped":null,pagination:!1,loading:e.loading,size:"small"},{headerCell:s(({column:l})=>[l.key==="id"?(h(),v("div",gt,[a("span",bt,[u("Term ID"),vt,L(a("input",{class:"single-input",type:"text","onUpdate:modelValue":t[13]||(t[13]=i=>e.form.filter_id=i),onKeypress:t[14]||(t[14]=E(i=>e.searchTerms(!0),["enter"]))},null,544),[[B,e.form.filter_id]])]),a("span",kt,[a("span",{class:"ant-table-column-sorter-inner",onClick:t[15]||(t[15]=i=>e.changeColumnSort(!0,"sort_id"))},[o(z,{class:k(["ant-table-column-sorter-up",e.form.sort_id==1?"active":""])},null,8,["class"]),o(U,{class:k(["ant-table-column-sorter-down",e.form.sort_id!=2?"":"active"])},null,8,["class"])])])])):w("",!0),l.key==="acct_description"?(h(),v("div",Ct,[a("span",yt,[u("Account Description"),$t,L(a("input",{class:"single-input",type:"text","onUpdate:modelValue":t[16]||(t[16]=i=>e.form.filter_acct_description=i),onKeypress:t[17]||(t[17]=E(i=>e.searchTerms(!0),["enter"]))},null,544),[[B,e.form.filter_acct_description]])]),a("span",At,[a("span",{class:"ant-table-column-sorter-inner",onClick:t[18]||(t[18]=i=>e.changeColumnSort(!0,"sort_acct_description"))},[o(z,{class:k(["ant-table-column-sorter-up",e.form.sort_acct_description==1?"active":""])},null,8,["class"]),o(U,{class:k(["ant-table-column-sorter-down",e.form.sort_acct_description!=2?"":"active"])},null,8,["class"])])])])):w("",!0),l.key==="effective_date"?(h(),v("div",wt,[a("span",Tt,[u("Effective Date"),St,L(a("input",{class:"single-input",type:"text","onUpdate:modelValue":t[19]||(t[19]=i=>e.form.filter_effective_date=i),onKeypress:t[20]||(t[20]=E(i=>e.searchTerms(!0),["enter"]))},null,544),[[B,e.form.filter_effective_date]])]),a("span",Ft,[a("span",{class:"ant-table-column-sorter-inner",onClick:t[21]||(t[21]=i=>e.changeColumnSort(!0,"sort_effective_date"))},[o(z,{class:k(["ant-table-column-sorter-up",e.form.sort_effective_date==1?"active":""])},null,8,["class"]),o(U,{class:k(["ant-table-column-sorter-down",e.form.sort_effective_date!=2?"":"active"])},null,8,["class"])])])])):w("",!0),l.key==="rate"?(h(),v("div",Et,[a("span",Ot,[u("Rate"),Dt,L(a("input",{class:"single-input",type:"text","onUpdate:modelValue":t[22]||(t[22]=i=>e.form.filter_rate=i),onKeypress:t[23]||(t[23]=E(i=>e.searchTerms(!0),["enter"]))},null,544),[[B,e.form.filter_rate]])]),a("span",Pt,[a("span",{class:"ant-table-column-sorter-inner",onClick:t[24]||(t[24]=i=>e.changeColumnSort(!0,"sort_rate"))},[o(z,{class:k(["ant-table-column-sorter-up",e.form.sort_rate==1?"active":""])},null,8,["class"]),o(U,{class:k(["ant-table-column-sorter-down",e.form.sort_rate!=2?"":"active"])},null,8,["class"])])])])):w("",!0),l.key==="compound_period"?(h(),v("div",It,[a("span",zt,[u("Compound Period"),Ut,L(a("input",{class:"single-input",type:"text","onUpdate:modelValue":t[25]||(t[25]=i=>e.form.filter_compoundperiod=i),onKeypress:t[26]||(t[26]=E(i=>e.searchTerms(!0),["enter"]))},null,544),[[B,e.form.filter_compoundperiod]])]),a("span",Lt,[a("span",{class:"ant-table-column-sorter-inner",onClick:t[27]||(t[27]=i=>e.changeColumnSort(!0,"sort_compound_period"))},[o(z,{class:k(["ant-table-column-sorter-up",e.form.sort_compound_period==1?"active":""])},null,8,["class"]),o(U,{class:k(["ant-table-column-sorter-down",e.form.sort_compound_period!=2?"":"active"])},null,8,["class"])])])])):w("",!0),l.key==="note"?(h(),v("div",Bt,[a("span",Mt,[u("Note"),Yt,L(a("input",{class:"single-input",type:"text","onUpdate:modelValue":t[28]||(t[28]=i=>e.form.filter_note=i),onKeypress:t[29]||(t[29]=E(i=>e.searchTerms(!0),["enter"]))},null,544),[[B,e.form.filter_note]])]),a("span",Rt,[a("span",{class:"ant-table-column-sorter-inner",onClick:t[30]||(t[30]=i=>e.changeColumnSort(!0,"sort_note"))},[o(z,{class:k(["ant-table-column-sorter-up",e.form.sort_note==1?"active":""])},null,8,["class"]),o(U,{class:k(["ant-table-column-sorter-down",e.form.sort_note!=2?"":"active"])},null,8,["class"])])])])):w("",!0),l.key==="created_at"?(h(),v("div",Vt,[a("span",Nt,[u("Created At"),qt,L(a("input",{class:"single-input",type:"text","onUpdate:modelValue":t[31]||(t[31]=i=>e.form.filter_created_at=i),onKeypress:t[32]||(t[32]=E(i=>e.searchTerms(!0),["enter"]))},null,544),[[B,e.form.filter_created_at]])]),a("span",Kt,[a("span",{class:"ant-table-column-sorter-inner",onClick:t[33]||(t[33]=i=>e.changeColumnSort(!0,"sort_created_at"))},[o(z,{class:k(["ant-table-column-sorter-up",e.form.sort_created_at==1?"active":""])},null,8,["class"]),o(U,{class:k(["ant-table-column-sorter-down",e.form.sort_created_at!=2?"":"active"])},null,8,["class"])])])])):w("",!0),l.key==="action"?(h(),v(R,{key:7},[u(" Action"),jt,Gt],64)):w("",!0)]),bodyCell:s(({column:l,record:i,text:se})=>[l.dataIndex==="name"?(h(),v("a",Ht,Y(se),1)):w("",!0),l.dataIndex==="action"?(h(),v("div",Jt,[o(te,{onClick:le=>e.showEditDataModal(i.id),class:"icon-edit"},null,8,["onClick"]),o(oe,{onClick:t[34]||(t[34]=le=>e.createAuditTrail("click","Clicked on the delete term button.")),term_id:i.id,acct_description:i.acct_description},null,8,["term_id","acct_description"])])):w("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name","loading"]),o(ne,{ref:"editDataModal"},null,512)],64)}const Wt=D(nt,[["render",Qt],["__scopeId","data-v-b25f5be6"]]);const Xt=O({components:{AdminLayout:ie,ListData:Wt},data(){return{title:"List of All Terms"}}}),Zt={class:"view-container"};function xt(e,t,r,f,d,g){const p=n("ListData"),c=n("AdminLayout");return h(),q(c,{defaultKey:"4"},{default:s(()=>[a("h1",null,Y(e.title),1),a("div",Zt,[o(p)])]),_:1})}const lo=D(Xt,[["render",xt],["__scopeId","data-v-06de8fe9"]]);export{lo as default};
