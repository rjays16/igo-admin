import{A as N}from"./AdminLayout.955fccc6.js";import{d as g,D as V,v as G,r as j,_ as $,f as n,o as i,a as r,e as l,c as t,w as e,F as f,j as a,h as k,t as O,p as P,b as L,u as S,g as W}from"./index.91f5da82.js";import{F as K,a as U}from"./FormOutlined.bc1529dc.js";import{E as T,F as R,a as M}from"./FilePdfOutlined.9adf5fea.js";const Y=g({components:{FormOutlined:K,DeleteOutlined:V,FilterOutlined:U,DownOutlined:G},setup(){const o=j([{title:"Date",dataIndex:"key",key:"date",width:200,resizable:!0},{title:"Type",dataIndex:"type",key:"type",width:100,resizable:!0},{title:"Memo",dataIndex:"memo",key:"memo",width:250,resizable:!0,ellipsis:!0},{title:"Eff. D(+/-)",dataIndex:"effd",key:"effd",width:150,resizable:!0},{title:"Balance",dataIndex:"balance",key:"balance",width:150,resizable:!0},{title:"SDCM Int.",dataIndex:"sdcmint",key:"sdcmint",width:150,resizable:!0},{title:"Active Rate",dataIndex:"activerate",key:"activerate",width:150,resizable:!0},{title:"Daily Rate",dataIndex:"dailyrate",key:"dailyrate",width:200,resizable:!0},{title:"Int Check Thru",dataIndex:"intcheckthru",key:"intcheckthru",width:150,resizable:!0}]),p=[];for(let I=0;I<100;I++)p.push({key:"01/01/2000",type:"IEP",memo:"Put your memo here",effd:"0.00",balance:"0.00",sdcmint:"0.00",activerate:"5%",dailyrate:"0.122345%",intcheckthru:"0.00"});return{data:p,columns:o,handleResizeColumn:(I,w)=>{w.width=I}}}}),c=o=>(P("data-v-ab786fe4"),o=o(),L(),o),q={class:"client-filter"},H=c(()=>l("br",null,null,-1)),J=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),Q=c(()=>l("br",null,null,-1)),X=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),Z=c(()=>l("br",null,null,-1)),tt=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),et=c(()=>l("br",null,null,-1)),nt=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),at=c(()=>l("br",null,null,-1)),ot=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),lt=c(()=>l("br",null,null,-1)),st=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),ct=c(()=>l("br",null,null,-1)),it=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),ut=c(()=>l("br",null,null,-1)),dt=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),_t=c(()=>l("br",null,null,-1)),rt=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),pt={key:0};function mt(o,p,I,w,v,E){const y=n("FilterOutlined"),m=n("a-input"),u=n("a-form-item"),s=n("a-form"),h=n("a-col"),x=n("a-row"),b=n("a-tag"),D=n("a-table");return i(),r(f,null,[l("div",q,[t(x,{gutter:16},{default:e(()=>[t(h,{span:6},{default:e(()=>[t(s,null,{default:e(()=>[t(u,{label:"Filter",name:"clientfilter"},{default:e(()=>[t(m,null,{prefix:e(()=>[t(y,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(D,{sticky:"",columns:o.columns,size:"small","data-source":o.data,onResizeColumn:o.handleResizeColumn,scroll:{x:1500},"row-class-name":(d,_)=>_%2===1?"table-striped":null},{headerCell:e(({column:d})=>[d.key==="date"?(i(),r(f,{key:0},[a(" Date"),H,J],64)):k("",!0),d.key==="type"?(i(),r(f,{key:1},[a(" Type"),Q,X],64)):k("",!0),d.key==="memo"?(i(),r(f,{key:2},[a(" Memo"),Z,tt],64)):k("",!0),d.key==="effd"?(i(),r(f,{key:3},[a(" Eff D(+/-)"),et,nt],64)):k("",!0),d.key==="balance"?(i(),r(f,{key:4},[a(" Balance"),at,ot],64)):k("",!0),d.key==="sdcmint"?(i(),r(f,{key:5},[a(" SDCM Int."),lt,st],64)):k("",!0),d.key==="activerate"?(i(),r(f,{key:6},[a(" Active Rate"),ct,it],64)):k("",!0),d.key==="dailyrate"?(i(),r(f,{key:7},[a(" Daily Rate"),ut,dt],64)):k("",!0),d.key==="intcheckthru"?(i(),r(f,{key:8},[a(" Int Check Thru"),_t,rt],64)):k("",!0)]),bodyCell:e(({column:d,text:_})=>[d.dataIndex==="type"?(i(),r("span",pt,[t(b,{color:"#FBB125"},{default:e(()=>[a(O(_),1)]),_:2},1024)])):k("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const ft=$(Y,[["render",mt],["__scopeId","data-v-ab786fe4"]]);const yt=g({components:{ExportOutlined:T,FileExcelOutlined:R,FileOutlined:S,FilePdfOutlined:M},setup(){return{handleMenuClick:p=>{console.log("click",p)}}}}),ht={class:"export-dropdown-wrap"};function kt(o,p,I,w,v,E){const y=n("FileExcelOutlined"),m=n("a-menu-item"),u=n("FilePdfOutlined"),s=n("a-menu"),h=n("ExportOutlined"),x=n("a-button"),b=n("a-dropdown");return i(),r("div",ht,[t(b,{trigger:["click"]},{overlay:e(()=>[t(s,{onClick:o.handleMenuClick},{default:e(()=>[t(m,{key:"1"},{default:e(()=>[t(y),a(" Excel File ")]),_:1}),t(m,{key:"3"},{default:e(()=>[t(u),a(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:e(()=>[t(x,{size:"large"},{default:e(()=>[a(" Export Statement Only "),t(h)]),_:1})]),_:1})])}const It=$(yt,[["render",kt],["__scopeId","data-v-80ac4fa2"]]);const bt=g({components:{ExportOutlined:T,FileExcelOutlined:R,FileOutlined:S,FilePdfOutlined:M},setup(){return{handleMenuClick:p=>{console.log("click",p)}}}}),xt={class:"export-dropdown-wrap"};function wt(o,p,I,w,v,E){const y=n("FileExcelOutlined"),m=n("a-menu-item"),u=n("FilePdfOutlined"),s=n("a-menu"),h=n("ExportOutlined"),x=n("a-button"),b=n("a-dropdown");return i(),r("div",xt,[t(b,{trigger:["click"]},{overlay:e(()=>[t(s,{onClick:o.handleMenuClick},{default:e(()=>[t(m,{key:"1"},{default:e(()=>[t(y),a(" Excel File ")]),_:1}),t(m,{key:"3"},{default:e(()=>[t(u),a(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:e(()=>[t(x,{size:"large"},{default:e(()=>[a(" Export Entire Report "),t(h)]),_:1})]),_:1})])}const gt=$(bt,[["render",wt],["__scopeId","data-v-927a8511"]]);const $t=[{title:"Type",dataIndex:"type"},{title:"Account Summary",dataIndex:"accountsummary"},{title:"Statement",dataIndex:"statement"},{title:"To Date",dataIndex:"todate"},{title:"Lifetime",dataIndex:"lifetime"}],vt=[{key:"1",type:"D",accountsummary:"Deposit (new money)",statement:"155003.00",todate:"155003.00",lifetime:"155003.00"},{key:"2",type:"C",accountsummary:"Credit (internal funds)",statement:"0",todate:"0",lifetime:"0"},{key:"3",type:"T",accountsummary:"Transfer (loan to loan)",statement:"0",todate:"0",lifetime:"0"},{key:"4",type:"W",accountsummary:"Withdrawal",statement:"-155003.00",todate:"-155003.00",lifetime:"-155003.00"},{key:"5",type:"IP",accountsummary:"Interest Earned, Periodic",statement:"2106.20",todate:"2106.20",lifetime:"2106.20"},{key:"6",type:"IA",accountsummary:"Interest Adjustments",statement:"16217.40",todate:"16217.40",lifetime:"16217.40"},{key:"7",type:"A",accountsummary:"Adjustments",statement:"0",todate:"0",lifetime:"0"},{key:"8",type:"M",accountsummary:"Memo or Account Annotation",statement:"0",todate:"0",lifetime:"0"}],Et=[{title:"Interest Calculation Checks",children:[{title:"",dataIndex:"calculation"},{title:"",dataIndex:"description"}]}],Dt=[{key:"1",calculation:"28/02/2022",description:"Last IP Payment Prior to This Statement End Date"},{key:"2",calculation:"$73,020.00",description:"Final Balance on Last IP Date"},{key:"3",calculation:"2.5%",description:"APR in force at Last IP Date"},{key:"4",calculation:"365",description:"Days in Years of Period (Error if crossing leap year boundary from first day of period)"},{key:"5",calculation:"0.006456%",description:"Daily Rate at Last IP Date"},{key:"6",calculation:"$1,035.05",description:"Interest through 09/21/22 (this statement range) on Balance as of Last IP Date"},{key:"7",calculation:"$ -",description:"Total SDCM Interest on Txs after last IP date (see below details)"},{key:"8",calculation:"$ 1,034.49",description:"Total UNPAID Interest through period end date"}],At=g({setup(){return{data:vt,columns:$t,columnstwo:Et,datatwo:Dt}}}),B=o=>(P("data-v-0c244cb7"),o=o(),L(),o),Ct={class:"scroll-table-container"},Ft={class:"generate-heading"},zt=B(()=>l("span",null,"First Transaction: 31/03/2006",-1)),Ot=B(()=>l("span",null,"Last Transaction: 28/02/2022",-1));function Pt(o,p,I,w,v,E){const y=n("a-select-option"),m=n("a-select"),u=n("a-form-item"),s=n("a-col"),h=n("a-date-picker"),x=n("a-input"),b=n("a-button"),D=n("a-row"),d=n("a-form"),_=n("a-table-summary-cell"),F=n("a-table-summary-row"),z=n("a-table-summary"),A=n("a-table"),C=n("a-card");return i(),r(f,null,[t(d,{layout:"vertical",class:"filter-generate"},{default:e(()=>[t(D,{gutter:16},{default:e(()=>[t(s,null,{default:e(()=>[t(u,{label:"Account"},{default:e(()=>[t(m,{placeholder:"Open this select menu"},{default:e(()=>[t(y,{value:"Lindsey 01"},{default:e(()=>[a("Lindsey 01")]),_:1}),t(y,{value:"Lindsey 02"},{default:e(()=>[a("Lindsey 02")]),_:1})]),_:1})]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(u,{label:"From"},{default:e(()=>[t(h)]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(u,{label:"To"},{default:e(()=>[t(h)]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(u,{label:"Int Check Thru"},{default:e(()=>[t(x)]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(u,null,{default:e(()=>[t(b,{type:"primary","html-type":"submit"},{default:e(()=>[a("Generate")]),_:1})]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(u,null,{default:e(()=>[t(b,{type:"primary","html-type":"submit"},{default:e(()=>[a("Email to Client")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l("div",Ct,[l("div",Ft,[t(D,{gutter:24},{default:e(()=>[t(s,{span:4},{default:e(()=>[a(" Client ID: 005 ")]),_:1}),t(s,{span:4},{default:e(()=>[a(" Name: DASP Workshop ")]),_:1}),t(s,{span:4},{default:e(()=>[a(" Loan Extents ")]),_:1}),t(s,{span:12},{default:e(()=>[zt,Ot]),_:1})]),_:1})]),t(C,{size:"small",style:{width:"700px"}},{default:e(()=>[t(A,{class:"ia-generate-table",columns:o.columns,"data-source":o.data,size:"small",pagination:!1},{summary:e(()=>[t(z,null,{default:e(()=>[t(F,null,{default:e(()=>[t(_,{"col-span":1}),t(_,null,{default:e(()=>[a("Net Effect on Account Balance")]),_:1}),t(_,null,{default:e(()=>[a("73,645.30")]),_:1}),t(_,null,{default:e(()=>[a("73,645.30")]),_:1}),t(_,null,{default:e(()=>[a("73,645.30")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),t(C,{size:"small",style:{width:"700px"}},{default:e(()=>[t(A,{class:"ia-interest-calculation",columns:o.columnstwo,"data-source":o.datatwo,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1}),t(C,{size:"small",style:{width:"700px"}},{default:e(()=>[t(A,{class:"ia-generate-table",columns:o.columns,"data-source":o.data,size:"small",pagination:!1},{summary:e(()=>[t(z,null,{default:e(()=>[t(F,null,{default:e(()=>[t(_,{"col-span":1}),t(_,null,{default:e(()=>[a("Net Effect on Account Balance")]),_:1}),t(_,null,{default:e(()=>[a("73,645.30")]),_:1}),t(_,null,{default:e(()=>[a("73,645.30")]),_:1}),t(_,null,{default:e(()=>[a("73,645.30")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),t(C,{size:"small",style:{width:"700px"}},{default:e(()=>[t(A,{class:"ia-interest-calculation",columns:o.columnstwo,"data-source":o.datatwo,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1})])],64)}const Lt=$(At,[["render",Pt],["__scopeId","data-v-0c244cb7"]]);const St=g({components:{AdminLayout:N,ListData:ft,IAStatementExport:It,IAEntireExport:gt,IAGenerateReport:Lt},data(){return{title:"Individual Account Dashboard"}}}),Tt={class:"export-container"},Rt={class:"view-container"},Mt={class:"generate-report-container"};function Bt(o,p,I,w,v,E){const y=n("IAStatementExport"),m=n("IAEntireExport"),u=n("IAGenerateReport"),s=n("ListData"),h=n("AdminLayout");return i(),W(h,{defaultKey:"7"},{default:e(()=>[l("h1",null,[l("span",null,O(o.title),1),a(),l("span",Tt,[t(y),t(m)])]),l("div",Rt,[l("div",Mt,[t(u)]),t(s)])]),_:1})}const Wt=$(St,[["render",Bt],["__scopeId","data-v-9158000c"]]);export{Wt as default};
