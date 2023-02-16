import{A as L}from"./AdminLayout.823084b3.js";import{e as z,D as E,u as R,r as O,_ as C,f as l,o as i,n as d,g as n,b as t,w as e,F as c,a,G as r,c as T,t as S,p as P,q as A,s as G}from"./index.4cc33ff5.js";import{F as V,a as Y}from"./FormOutlined.a5b55a1e.js";import{E as M,F as N,a as q}from"./FilePdfOutlined.82f6b6c9.js";const K=z({components:{FormOutlined:V,DeleteOutlined:E,FilterOutlined:Y,DownOutlined:R},setup(){const o=O([{title:"Summary ID",dataIndex:"key",key:"summid",width:100,resizable:!0},{title:"Account Description",dataIndex:"acctdes",key:"acctdes",width:150,resizable:!0},{title:"Status",dataIndex:"status",key:"status",width:100,resizable:!0},{title:"Client ID",dataIndex:"clientid",key:"clientid",width:100,resizable:!0},{title:"Type",dataIndex:"type",key:"type",width:100,resizable:!0},{title:"BFlag",dataIndex:"bflag",key:"bflag",width:100,resizable:!0},{title:"CRate",dataIndex:"crate",key:"crate",width:100,resizable:!0},{title:"RChanges",dataIndex:"rchanges",key:"rchanges",width:100,resizable:!0},{title:"LIEP Date",dataIndex:"liepdate",key:"liepdate",width:150,resizable:!0},{title:"LYear",dataIndex:"lyear",key:"lyear",width:100,resizable:!0},{title:"LMonth",dataIndex:"lmonth",key:"lmonth",width:100,resizable:!0},{title:"TYear",dataIndex:"tyear",key:"tyear",width:100,resizable:!0},{title:"To Date",dataIndex:"todate",key:"todate",width:100,resizable:!0},{title:"PBT",dataIndex:"pbt",key:"pbt",width:100,resizable:!0},{title:"BFIC",dataIndex:"bfic",key:"bfic",width:100,resizable:!0}]),h=[];for(let m=0;m<100;m++)h.push({key:m,acctdes:"Lindsey",status:"Active",clientid:m,type:"ORG",bflag:"0",crate:"0.01%",rchanges:"2",liepdate:"01/01/2000",lyear:"0.00",lmonth:"0.00",tyear:"0.00",todate:"0.00",pbt:"0.00",bfic:"0.00"});return{data:h,columns:o,fixedTop:O(!1),handleResizeColumn:(m,I)=>{I.width=m}}}}),s=o=>(P("data-v-2b846d71"),o=o(),A(),o),j={class:"client-filter"},H=s(()=>n("br",null,null,-1)),J=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),Q=s(()=>n("br",null,null,-1)),U=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),W=s(()=>n("br",null,null,-1)),X=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),Z=s(()=>n("br",null,null,-1)),tt=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),et=s(()=>n("br",null,null,-1)),at=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),nt=s(()=>n("br",null,null,-1)),lt=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),st=s(()=>n("br",null,null,-1)),ot=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),it=s(()=>n("br",null,null,-1)),ut=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),dt=s(()=>n("br",null,null,-1)),rt=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),ct=s(()=>n("br",null,null,-1)),_t=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),pt=s(()=>n("br",null,null,-1)),mt=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),yt=s(()=>n("br",null,null,-1)),ft=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),ht=s(()=>n("br",null,null,-1)),bt=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),kt=s(()=>n("br",null,null,-1)),xt=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),wt=s(()=>n("br",null,null,-1)),gt=s(()=>n("input",{class:"single-input",type:"text"},null,-1)),It={key:1};function $t(o,h,m,I,F,v){const k=l("FilterOutlined"),y=l("a-input"),x=l("a-form-item"),w=l("a-form"),p=l("a-col"),b=l("a-row"),f=l("a-tag"),_=l("a-table-summary-cell"),g=l("a-table-summary-row"),D=l("a-table-summary"),B=l("a-table");return i(),d(c,null,[n("div",j,[t(b,{gutter:16},{default:e(()=>[t(p,{span:6},{default:e(()=>[t(w,null,{default:e(()=>[t(x,{label:"Filter",name:"clientfilter"},{default:e(()=>[t(y,null,{prefix:e(()=>[t(k,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(B,{sticky:"",columns:o.columns,size:"small","data-source":o.data,onResizeColumn:o.handleResizeColumn,scroll:{x:1500},"row-class-name":(u,$)=>$%2===1?"table-striped":null},{headerCell:e(({column:u})=>[u.key==="summid"?(i(),d(c,{key:0},[a(" Summary ID"),H,J],64)):r("",!0),u.key==="acctdes"?(i(),d(c,{key:1},[a(" Account Description"),Q,U],64)):r("",!0),u.key==="status"?(i(),d(c,{key:2},[a(" Status"),W,X],64)):r("",!0),u.key==="clientid"?(i(),d(c,{key:3},[a(" Client ID"),Z,tt],64)):r("",!0),u.key==="type"?(i(),d(c,{key:4},[a(" Type"),et,at],64)):r("",!0),u.key==="bflag"?(i(),d(c,{key:5},[a(" BFlag"),nt,lt],64)):r("",!0),u.key==="crate"?(i(),d(c,{key:6},[a(" CRate"),st,ot],64)):r("",!0),u.key==="rchanges"?(i(),d(c,{key:7},[a(" RChanges"),it,ut],64)):r("",!0),u.key==="liepdate"?(i(),d(c,{key:8},[a(" LIEP Date"),dt,rt],64)):r("",!0),u.key==="lyear"?(i(),d(c,{key:9},[a(" LYear"),ct,_t],64)):r("",!0),u.key==="lmonth"?(i(),d(c,{key:10},[a(" LMonth"),pt,mt],64)):r("",!0),u.key==="tyear"?(i(),d(c,{key:11},[a(" TYear"),yt,ft],64)):r("",!0),u.key==="todate"?(i(),d(c,{key:12},[a(" To Date"),ht,bt],64)):r("",!0),u.key==="pbt"?(i(),d(c,{key:13},[a(" PBT"),kt,xt],64)):r("",!0),u.key==="bfic"?(i(),d(c,{key:14},[a(" BFIC"),wt,gt],64)):r("",!0)]),bodyCell:e(({column:u,text:$})=>[u.dataIndex==="status"?(i(),T(f,{key:0,color:"#87d068"},{default:e(()=>[a(S($),1)]),_:2},1024)):r("",!0),u.dataIndex==="type"?(i(),d("span",It,[t(f,{color:"#FBB125"},{default:e(()=>[a(S($),1)]),_:2},1024)])):r("",!0)]),summary:e(()=>[t(D,{fixed:o.fixedTop?"bottom":"top"},{default:e(()=>[t(g,null,{default:e(()=>[t(_,{"col-span":8}),t(_,null,{default:e(()=>[a("Total")]),_:1}),t(_,null,{default:e(()=>[a("800.00")]),_:1}),t(_,null,{default:e(()=>[a("123.00")]),_:1}),t(_,null,{default:e(()=>[a("900.00")]),_:1}),t(_,null,{default:e(()=>[a("900.00")]),_:1}),t(_,null,{default:e(()=>[a("1,000.00")]),_:1}),t(_,null,{default:e(()=>[a("1,300.00")]),_:1})]),_:1})]),_:1},8,["fixed"])]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const zt=C(K,[["render",$t],["__scopeId","data-v-2b846d71"]]);const Ct=[{title:"Type",dataIndex:"type"},{title:"Description",dataIndex:"description"},{title:"Amount",dataIndex:"amount"}],Ft=[{key:"1",type:"0",description:"Owner",amount:"$100"},{key:"2",type:"1",description:"Children",amount:"$100"},{key:"3",type:"2",description:"Organization",amount:"$100"}],vt=[{title:"Type",dataIndex:"typetwo"},{title:"Int Last Year",dataIndex:"intlastyear"},{title:"Current Balance",dataIndex:"curbalance"}],St=[{key:"1",typetwo:"0",intlastyear:"-",curbalance:"29,000"},{key:"2",typetwo:"1",intlastyear:"32,000",curbalance:"-"},{key:"3",typetwo:"2",intlastyear:"-",curbalance:"19,000"}],Ot=z({setup(){return{data:Ft,columns:Ct,columnstwo:vt,datatwo:St}}}),Tt={class:"scroll-table-container"};function Dt(o,h,m,I,F,v){const k=l("a-date-picker"),y=l("a-form-item"),x=l("a-button"),w=l("a-form"),p=l("a-table-summary-cell"),b=l("a-table-summary-row"),f=l("a-table-summary"),_=l("a-table"),g=l("a-card");return i(),d(c,null,[t(w,{layout:"inline",class:"filter-generate"},{default:e(()=>[t(y,{label:"Interest Period"},{default:e(()=>[t(k)]),_:1}),t(y,null,{default:e(()=>[t(x,{type:"primary","html-type":"submit"},{default:e(()=>[a("Generate")]),_:1})]),_:1})]),_:1}),n("div",Tt,[t(g,{size:"small",title:"Balance Summary by Type",style:{width:"500px"}},{default:e(()=>[t(_,{columns:o.columns,"data-source":o.data,size:"small",pagination:!1},{summary:e(()=>[t(f,null,{default:e(()=>[t(b,null,{default:e(()=>[t(p,{"col-span":2}),t(p,null,{default:e(()=>[a("Total: $1,200.00")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),t(g,{size:"small",title:"Interest Last Year and Current Balance",style:{width:"500px"}},{default:e(()=>[t(_,{columns:o.columnstwo,"data-source":o.datatwo,size:"small",pagination:!1},{summary:e(()=>[t(f,null,{default:e(()=>[t(b,null,{default:e(()=>[t(p,{"col-span":1}),t(p,null,{default:e(()=>[a("Total: $180,200.00")]),_:1}),t(p,null,{default:e(()=>[a("80,200.00")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),t(g,{size:"small",title:"Balance Summary by Type",style:{width:"500px"}},{default:e(()=>[t(_,{columns:o.columns,"data-source":o.data,size:"small",pagination:!1},{summary:e(()=>[t(f,null,{default:e(()=>[t(b,null,{default:e(()=>[t(p,{"col-span":2}),t(p,null,{default:e(()=>[a("Total: $1,200.00")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),t(g,{size:"small",title:"Interest Last Year and Current Balance",style:{width:"500px"}},{default:e(()=>[t(_,{columns:o.columnstwo,"data-source":o.datatwo,size:"small",pagination:!1},{summary:e(()=>[t(f,null,{default:e(()=>[t(b,null,{default:e(()=>[t(p,{"col-span":1}),t(p,null,{default:e(()=>[a("Total: $180,200.00")]),_:1}),t(p,null,{default:e(()=>[a("80,200.00")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1})])],64)}const Bt=C(Ot,[["render",Dt],["__scopeId","data-v-9f8b3552"]]);const Lt=z({components:{ExportOutlined:M,FileExcelOutlined:N,FileOutlined:G,FilePdfOutlined:q},setup(){return{handleMenuClick:h=>{console.log("click",h)}}}}),Et={class:"export-dropdown-wrap"};function Rt(o,h,m,I,F,v){const k=l("FileExcelOutlined"),y=l("a-menu-item"),x=l("FileOutlined"),w=l("FilePdfOutlined"),p=l("a-menu"),b=l("ExportOutlined"),f=l("a-button"),_=l("a-dropdown");return i(),d("div",Et,[t(_,{trigger:["click"]},{overlay:e(()=>[t(p,{onClick:o.handleMenuClick},{default:e(()=>[t(y,{key:"1"},{default:e(()=>[t(k),a(" Excel File ")]),_:1}),t(y,{key:"2"},{default:e(()=>[t(x),a(" CSV File ")]),_:1}),t(y,{key:"3"},{default:e(()=>[t(w),a(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:e(()=>[t(f,{size:"large"},{default:e(()=>[a(" Export To "),t(b)]),_:1})]),_:1})])}const Pt=C(Lt,[["render",Rt],["__scopeId","data-v-8cc11224"]]);const At=z({components:{AdminLayout:L,ListData:zt,SummaryExport:Pt,SummaryGenerateReport:Bt},data(){return{title:"Summary Report"}}}),Gt={class:"view-container"},Vt={class:"generate-report-container"};function Yt(o,h,m,I,F,v){const k=l("SummaryExport"),y=l("SummaryGenerateReport"),x=l("ListData"),w=l("AdminLayout");return i(),T(w,{defaultKey:"6"},{default:e(()=>[n("h1",null,[n("span",null,S(o.title),1),a(),t(k)]),n("div",Gt,[n("div",Vt,[t(y)]),t(x)])]),_:1})}const jt=C(At,[["render",Yt],["__scopeId","data-v-8def7ea8"]]);export{jt as default};
