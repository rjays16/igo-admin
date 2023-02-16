import{A as O}from"./AdminLayout.37c8354b.js";import{e as $,D as R,u as A,r as E,_ as v,f as n,o as u,n as p,g as o,b as e,w as t,F as y,a as s,G as b,t as F,p as L,q as P,s as T,c as B}from"./index.1592ad76.js";import{F as S,a as V}from"./FormOutlined.ef332107.js";import{E as G,F as N,a as M}from"./FilePdfOutlined.e1629fdb.js";const K=$({components:{FormOutlined:S,DeleteOutlined:R,FilterOutlined:V,DownOutlined:A},setup(){const a={onChange:(m,x)=>{console.log(`selectedRowKeys: ${m}`,"selectedRows: ",x)}},k=E([{title:"Owner",dataIndex:"owner",key:"owner",width:150,resizable:!0},{title:"Account Id",dataIndex:"key",key:"acctid",width:100,resizable:!0},{title:"Account Description",dataIndex:"acctdes",key:"acctdes",width:200,resizable:!0},{title:"Eff. Date",dataIndex:"effdate",key:"effdate",width:100,resizable:!0},{title:"TxType",dataIndex:"txtype",key:"txtype",width:100,resizable:!0},{title:"Interest Description",dataIndex:"intdes",key:"intdes",width:200,resizable:!0},{title:"Amount",dataIndex:"amount",key:"amount",width:100,resizable:!0},{title:"Entry Date",dataIndex:"entrydate",key:"entrydate",width:100,resizable:!0}]),I=[];for(let m=0;m<100;m++)I.push({owner:"DASP Workshop",key:m,acctdes:"Avila, Althea",effdate:"01/01/2000",txtype:"DEP",intdes:"Int. Accrued 01/01/22 - 01/01/22",amount:"200.00",entrydate:"01/01/2000"});return{data:I,columns:k,rowSelection:a,handleResizeColumn:(m,x)=>{x.width=m},labelCol:{span:8},wrapperCol:{span:16}}}}),d=a=>(L("data-v-736da300"),a=a(),P(),a),q={class:"client-filter"},W=d(()=>o("br",null,null,-1)),Y=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),j=d(()=>o("br",null,null,-1)),H=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),J=d(()=>o("br",null,null,-1)),Q=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),U=d(()=>o("br",null,null,-1)),X=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),Z=d(()=>o("br",null,null,-1)),ee=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),te=d(()=>o("br",null,null,-1)),ae=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),ne=d(()=>o("br",null,null,-1)),le=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),oe=d(()=>o("br",null,null,-1)),se=d(()=>o("input",{class:"single-input",type:"text"},null,-1)),ie={key:0},de={class:"expanded-content"};function ce(a,k,I,m,x,z){const h=n("FilterOutlined"),l=n("a-input"),i=n("a-form-item"),w=n("a-form"),c=n("a-col"),_=n("a-row"),r=n("a-tag"),g=n("a-button"),D=n("a-table");return u(),p(y,null,[o("div",q,[e(_,{gutter:16},{default:t(()=>[e(c,{span:6},{default:t(()=>[e(w,null,{default:t(()=>[e(i,{label:"Filter",name:"clientfilter"},{default:t(()=>[e(l,null,{prefix:t(()=>[e(h,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e(D,{sticky:"",columns:a.columns,"data-source":a.data,"row-selection":a.rowSelection,onResizeColumn:a.handleResizeColumn,scroll:{x:1500},"row-class-name":(f,C)=>C%2===1?"table-striped":null},{headerCell:t(({column:f})=>[f.key==="owner"?(u(),p(y,{key:0},[s(" Owner"),W,Y],64)):b("",!0),f.key==="acctid"?(u(),p(y,{key:1},[s(" Account ID"),j,H],64)):b("",!0),f.key==="acctdes"?(u(),p(y,{key:2},[s(" Account Description"),J,Q],64)):b("",!0),f.key==="effdate"?(u(),p(y,{key:3},[s(" Eff. Date"),U,X],64)):b("",!0),f.key==="txtype"?(u(),p(y,{key:4},[s(" TxType"),Z,ee],64)):b("",!0),f.key==="intdes"?(u(),p(y,{key:5},[s(" Interest Description"),te,ae],64)):b("",!0),f.key==="amount"?(u(),p(y,{key:6},[s(" Amount"),ne,le],64)):b("",!0),f.key==="entrydate"?(u(),p(y,{key:7},[s(" Entry Date"),oe,se],64)):b("",!0)]),bodyCell:t(({column:f,text:C})=>[f.dataIndex==="txtype"?(u(),p("span",ie,[e(r,{color:"#FBB125"},{default:t(()=>[s(F(C),1)]),_:2},1024)])):b("",!0)]),expandedRowRender:t(()=>[o("div",de,[e(w,{"label-col":a.labelCol,"wrapper-col":a.wrapperCol},{default:t(()=>[e(_,{gutter:24},{default:t(()=>[e(c,{span:12},{default:t(()=>[e(i,{label:"Rate this Period"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Last IP Pmt Date"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Balance on Last IP Date"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Days in Year for Period"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Account Debtor ID"},{default:t(()=>[e(l)]),_:1})]),_:1}),e(c,{span:12},{default:t(()=>[e(i,{label:"Rate Changes"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Loan Rate Changes"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Last Rate in force of Period"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"If Txs prior to period end"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Date of most recent IP or 1st Tx"},{default:t(()=>[e(l)]),_:1})]),_:1})]),_:1}),e(_,{gutter:24},{default:t(()=>[e(c,{span:12},{default:t(()=>[e(i,{label:"Recent Acct Balance"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Last Transaction Date"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"Previous Balance this Table"},{default:t(()=>[e(l)]),_:1}),e(i,{label:"New Balance"},{default:t(()=>[e(l)]),_:1})]),_:1}),e(c,{span:12,class:"approve-btn"},{default:t(()=>[e(i,null,{default:t(()=>[e(g,{type:"primary","html-type":"submit"},{default:t(()=>[s("Approve")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["label-col","wrapper-col"])])]),_:1},8,["columns","data-source","row-selection","onResizeColumn","row-class-name"])],64)}const re=v(K,[["render",ce],["__scopeId","data-v-736da300"]]);const ue=[{title:"",dataIndex:"description"},{title:"Total",dataIndex:"total"}],_e=[{key:"1",description:"Interest This Period",total:"$380.00"},{key:"2",description:"Recent Balances",total:"$380.00"},{key:"3",description:"Current Balances",total:"$380.00"}],pe=[{title:"Debtor Organization",dataIndex:"debtororg"},{title:"ID",dataIndex:"id"},{title:"Int This Method",dataIndex:"intthismethod"},{title:"Record Balance",dataIndex:"recbalance"},{title:"Current Balance",dataIndex:"curbalance"}],me=[{key:"1",debtororg:"Lindsey, Alan",id:"C004",intthismethod:"380.00",recbalance:"380.00",curbalance:"380.00"},{key:"2",debtororg:"Lindsey, Alan",id:"C004",intthismethod:"380.00",recbalance:"380.00",curbalance:"380.00"},{key:"3",debtororg:"Lindsey, Alan",id:"C004",intthismethod:"380.00",recbalance:"380.00",curbalance:"380.00"}],fe=$({setup(){return{data:_e,columns:ue,columnstwo:pe,datatwo:me}}}),ye={class:"scroll-table-container"};function be(a,k,I,m,x,z){const h=n("a-date-picker"),l=n("a-form-item"),i=n("a-button"),w=n("a-form"),c=n("a-table"),_=n("a-card"),r=n("a-table-summary-cell"),g=n("a-table-summary-row"),D=n("a-table-summary");return u(),p(y,null,[e(w,{layout:"inline",class:"filter-generate"},{default:t(()=>[e(l,{label:"Interest Period"},{default:t(()=>[e(h)]),_:1}),e(l,{label:"Effective Date"},{default:t(()=>[e(h)]),_:1}),e(l,null,{default:t(()=>[e(i,{type:"primary","html-type":"submit"},{default:t(()=>[s("Generate")]),_:1})]),_:1})]),_:1}),o("div",ye,[o("div",null,[e(_,{size:"small",title:"Summary",style:{width:"400px"}},{default:t(()=>[e(c,{columns:a.columns,"data-source":a.data,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1}),e(_,{size:"small",title:"Summary",style:{width:"400px"}},{default:t(()=>[e(c,{columns:a.columns,"data-source":a.data,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1})]),e(_,{size:"small",title:"Liabilities by Debtor Organization",style:{width:"1000px"}},{default:t(()=>[e(c,{columns:a.columnstwo,"data-source":a.datatwo,size:"small",pagination:!1},{summary:t(()=>[e(D,null,{default:t(()=>[e(g,null,{default:t(()=>[e(r,{"col-span":1}),e(r,null,{default:t(()=>[s("Total")]),_:1}),e(r,null,{default:t(()=>[s("1,200.00")]),_:1}),e(r,null,{default:t(()=>[s("1,200.00")]),_:1}),e(r,null,{default:t(()=>[s("1,200.00")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),o("div",null,[e(_,{size:"small",title:"Summary",style:{width:"400px"}},{default:t(()=>[e(c,{columns:a.columns,"data-source":a.data,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1}),e(_,{size:"small",title:"Summary",style:{width:"400px"}},{default:t(()=>[e(c,{columns:a.columns,"data-source":a.data,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1})]),e(_,{size:"small",title:"Liabilities by Debtor Organization",style:{width:"1000px"}},{default:t(()=>[e(c,{columns:a.columnstwo,"data-source":a.datatwo,size:"small",pagination:!1},{summary:t(()=>[e(D,null,{default:t(()=>[e(g,null,{default:t(()=>[e(r,{"col-span":1}),e(r,null,{default:t(()=>[s("Total")]),_:1}),e(r,null,{default:t(()=>[s("1,200.00")]),_:1}),e(r,null,{default:t(()=>[s("1,200.00")]),_:1}),e(r,null,{default:t(()=>[s("1,200.00")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1})])],64)}const he=v(fe,[["render",be],["__scopeId","data-v-b0d3ac68"]]);const we=$({components:{ExportOutlined:G,FileExcelOutlined:N,FileOutlined:T,FilePdfOutlined:M},setup(){return{handleMenuClick:k=>{console.log("click",k)}}}}),ke={class:"export-dropdown-wrap"};function xe(a,k,I,m,x,z){const h=n("FileExcelOutlined"),l=n("a-menu-item"),i=n("FileOutlined"),w=n("FilePdfOutlined"),c=n("a-menu"),_=n("ExportOutlined"),r=n("a-button"),g=n("a-dropdown");return u(),p("div",ke,[e(g,{trigger:["click"]},{overlay:t(()=>[e(c,{onClick:a.handleMenuClick},{default:t(()=>[e(l,{key:"1"},{default:t(()=>[e(h),s(" Excel File ")]),_:1}),e(l,{key:"2"},{default:t(()=>[e(i),s(" CSV File ")]),_:1}),e(l,{key:"3"},{default:t(()=>[e(w),s(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:t(()=>[e(r,{size:"large"},{default:t(()=>[s(" Export To "),e(_)]),_:1})]),_:1})])}const Ie=v(we,[["render",xe],["__scopeId","data-v-7c940aa6"]]);const ge=$({components:{AdminLayout:O,ListData:re,InterestExport:Ie,InterestGenerateReport:he},data(){return{title:"Interest Report"}}}),De={class:"view-container"},$e={class:"generate-report-container"};function ve(a,k,I,m,x,z){const h=n("InterestExport"),l=n("InterestGenerateReport"),i=n("ListData"),w=n("AdminLayout");return u(),B(w,{defaultKey:"9"},{default:t(()=>[o("h1",null,[o("span",null,F(a.title),1),s(),e(h)]),o("div",De,[o("div",$e,[e(l)]),e(i)])]),_:1})}const Re=v(ge,[["render",ve],["__scopeId","data-v-9afefa8e"]]);export{Re as default};
