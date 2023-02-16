import{A as N}from"./AdminLayout.4ae66ae8.js";import{d as g,D as V,v as G,r as j,_ as $,f as n,o as i,a as r,e as l,c as e,w as t,F as y,j as a,h as k,t as O,p as P,b as L,u as S,g as W}from"./index.caf9709b.js";import{F as K,a as U}from"./FormOutlined.707bce3a.js";import{E as T,F as R,a as M}from"./FilePdfOutlined.1f617cda.js";const Y=g({components:{FormOutlined:K,DeleteOutlined:V,FilterOutlined:U,DownOutlined:G},setup(){const o=j([{title:"Date",dataIndex:"key",key:"date",width:200,resizable:!0},{title:"Type",dataIndex:"type",key:"type",width:100,resizable:!0},{title:"Memo",dataIndex:"memo",key:"memo",width:250,resizable:!0},{title:"Eff. D(+/-)",dataIndex:"effd",key:"effd",width:150,resizable:!0},{title:"Balance",dataIndex:"balance",key:"balance",width:150,resizable:!0},{title:"SDCM Int.",dataIndex:"sdcmint",key:"sdcmint",width:150,resizable:!0},{title:"Active Rate",dataIndex:"activerate",key:"activerate",width:150,resizable:!0},{title:"Daily Rate",dataIndex:"dailyrate",key:"dailyrate",width:200,resizable:!0},{title:"Int Check Thru",dataIndex:"intcheckthru",key:"intcheckthru",width:150,resizable:!0}]),p=[];for(let I=0;I<100;I++)p.push({key:"01/01/2000",type:"IEP",memo:"Put your memo here",effd:"0.00",balance:"0.00",sdcmint:"0.00",activerate:"5%",dailyrate:"0.122345%",intcheckthru:"0.00"});return{data:p,columns:o,handleResizeColumn:(I,w)=>{w.width=I}}}}),c=o=>(P("data-v-72dee381"),o=o(),L(),o),q={class:"client-filter"},H=c(()=>l("br",null,null,-1)),J=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),Q=c(()=>l("br",null,null,-1)),X=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),Z=c(()=>l("br",null,null,-1)),ee=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),te=c(()=>l("br",null,null,-1)),ne=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),ae=c(()=>l("br",null,null,-1)),oe=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),le=c(()=>l("br",null,null,-1)),se=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),ce=c(()=>l("br",null,null,-1)),ie=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),ue=c(()=>l("br",null,null,-1)),de=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),_e=c(()=>l("br",null,null,-1)),re=c(()=>l("input",{class:"single-input",type:"text"},null,-1)),pe={key:0};function me(o,p,I,w,v,E){const f=n("FilterOutlined"),m=n("a-input"),u=n("a-form-item"),s=n("a-form"),h=n("a-col"),x=n("a-row"),b=n("a-tag"),D=n("a-table");return i(),r(y,null,[l("div",q,[e(x,{gutter:16},{default:t(()=>[e(h,{span:6},{default:t(()=>[e(s,null,{default:t(()=>[e(u,{label:"Filter",name:"clientfilter"},{default:t(()=>[e(m,null,{prefix:t(()=>[e(f,{class:"site-form-item-icon"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e(D,{sticky:"",columns:o.columns,size:"small","data-source":o.data,onResizeColumn:o.handleResizeColumn,scroll:{x:1500},"row-class-name":(d,_)=>_%2===1?"table-striped":null},{headerCell:t(({column:d})=>[d.key==="date"?(i(),r(y,{key:0},[a(" Date"),H,J],64)):k("",!0),d.key==="type"?(i(),r(y,{key:1},[a(" Type"),Q,X],64)):k("",!0),d.key==="memo"?(i(),r(y,{key:2},[a(" Memo"),Z,ee],64)):k("",!0),d.key==="effd"?(i(),r(y,{key:3},[a(" Eff D(+/-)"),te,ne],64)):k("",!0),d.key==="balance"?(i(),r(y,{key:4},[a(" Balance"),ae,oe],64)):k("",!0),d.key==="sdcmint"?(i(),r(y,{key:5},[a(" SDCM Int."),le,se],64)):k("",!0),d.key==="activerate"?(i(),r(y,{key:6},[a(" Active Rate"),ce,ie],64)):k("",!0),d.key==="dailyrate"?(i(),r(y,{key:7},[a(" Daily Rate"),ue,de],64)):k("",!0),d.key==="intcheckthru"?(i(),r(y,{key:8},[a(" Int Check Thru"),_e,re],64)):k("",!0)]),bodyCell:t(({column:d,text:_})=>[d.dataIndex==="type"?(i(),r("span",pe,[e(b,{color:"#FBB125"},{default:t(()=>[a(O(_),1)]),_:2},1024)])):k("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name"])],64)}const ye=$(Y,[["render",me],["__scopeId","data-v-72dee381"]]);const fe=g({components:{ExportOutlined:T,FileExcelOutlined:R,FileOutlined:S,FilePdfOutlined:M},setup(){return{handleMenuClick:p=>{console.log("click",p)}}}}),he={class:"export-dropdown-wrap"};function ke(o,p,I,w,v,E){const f=n("FileExcelOutlined"),m=n("a-menu-item"),u=n("FilePdfOutlined"),s=n("a-menu"),h=n("ExportOutlined"),x=n("a-button"),b=n("a-dropdown");return i(),r("div",he,[e(b,{trigger:["click"]},{overlay:t(()=>[e(s,{onClick:o.handleMenuClick},{default:t(()=>[e(m,{key:"1"},{default:t(()=>[e(f),a(" Excel File ")]),_:1}),e(m,{key:"3"},{default:t(()=>[e(u),a(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:t(()=>[e(x,{size:"large"},{default:t(()=>[a(" Export Statement Only "),e(h)]),_:1})]),_:1})])}const Ie=$(fe,[["render",ke],["__scopeId","data-v-80ac4fa2"]]);const be=g({components:{ExportOutlined:T,FileExcelOutlined:R,FileOutlined:S,FilePdfOutlined:M},setup(){return{handleMenuClick:p=>{console.log("click",p)}}}}),xe={class:"export-dropdown-wrap"};function we(o,p,I,w,v,E){const f=n("FileExcelOutlined"),m=n("a-menu-item"),u=n("FilePdfOutlined"),s=n("a-menu"),h=n("ExportOutlined"),x=n("a-button"),b=n("a-dropdown");return i(),r("div",xe,[e(b,{trigger:["click"]},{overlay:t(()=>[e(s,{onClick:o.handleMenuClick},{default:t(()=>[e(m,{key:"1"},{default:t(()=>[e(f),a(" Excel File ")]),_:1}),e(m,{key:"3"},{default:t(()=>[e(u),a(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:t(()=>[e(x,{size:"large"},{default:t(()=>[a(" Export Entire Report "),e(h)]),_:1})]),_:1})])}const ge=$(be,[["render",we],["__scopeId","data-v-927a8511"]]);const $e=[{title:"Type",dataIndex:"type"},{title:"Account Summary",dataIndex:"accountsummary"},{title:"Statement",dataIndex:"statement"},{title:"To Date",dataIndex:"todate"},{title:"Lifetime",dataIndex:"lifetime"}],ve=[{key:"1",type:"D",accountsummary:"Deposit (new money)",statement:"155003.00",todate:"155003.00",lifetime:"155003.00"},{key:"2",type:"C",accountsummary:"Credit (internal funds)",statement:"0",todate:"0",lifetime:"0"},{key:"3",type:"T",accountsummary:"Transfer (loan to loan)",statement:"0",todate:"0",lifetime:"0"},{key:"4",type:"W",accountsummary:"Withdrawal",statement:"-155003.00",todate:"-155003.00",lifetime:"-155003.00"},{key:"5",type:"IP",accountsummary:"Interest Earned, Periodic",statement:"2106.20",todate:"2106.20",lifetime:"2106.20"},{key:"6",type:"IA",accountsummary:"Interest Adjustments",statement:"16217.40",todate:"16217.40",lifetime:"16217.40"},{key:"7",type:"A",accountsummary:"Adjustments",statement:"0",todate:"0",lifetime:"0"},{key:"8",type:"M",accountsummary:"Memo or Account Annotation",statement:"0",todate:"0",lifetime:"0"}],Ee=[{title:"Interest Calculation Checks",children:[{title:"",dataIndex:"calculation"},{title:"",dataIndex:"description"}]}],De=[{key:"1",calculation:"28/02/2022",description:"Last IP Payment Prior to This Statement End Date"},{key:"2",calculation:"$73,020.00",description:"Final Balance on Last IP Date"},{key:"3",calculation:"2.5%",description:"APR in force at Last IP Date"},{key:"4",calculation:"365",description:"Days in Years of Period (Error if crossing leap year boundary from first day of period)"},{key:"5",calculation:"0.006456%",description:"Daily Rate at Last IP Date"},{key:"6",calculation:"$1,035.05",description:"Interest through 09/21/22 (this statement range) on Balance as of Last IP Date"},{key:"7",calculation:"$ -",description:"Total SDCM Interest on Txs after last IP date (see below details)"},{key:"8",calculation:"$ 1,034.49",description:"Total UNPAID Interest through period end date"}],Ae=g({setup(){return{data:ve,columns:$e,columnstwo:Ee,datatwo:De}}}),B=o=>(P("data-v-0c244cb7"),o=o(),L(),o),Ce={class:"scroll-table-container"},Fe={class:"generate-heading"},ze=B(()=>l("span",null,"First Transaction: 31/03/2006",-1)),Oe=B(()=>l("span",null,"Last Transaction: 28/02/2022",-1));function Pe(o,p,I,w,v,E){const f=n("a-select-option"),m=n("a-select"),u=n("a-form-item"),s=n("a-col"),h=n("a-date-picker"),x=n("a-input"),b=n("a-button"),D=n("a-row"),d=n("a-form"),_=n("a-table-summary-cell"),F=n("a-table-summary-row"),z=n("a-table-summary"),A=n("a-table"),C=n("a-card");return i(),r(y,null,[e(d,{layout:"vertical",class:"filter-generate"},{default:t(()=>[e(D,{gutter:16},{default:t(()=>[e(s,null,{default:t(()=>[e(u,{label:"Account"},{default:t(()=>[e(m,{placeholder:"Open this select menu"},{default:t(()=>[e(f,{value:"Lindsey 01"},{default:t(()=>[a("Lindsey 01")]),_:1}),e(f,{value:"Lindsey 02"},{default:t(()=>[a("Lindsey 02")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(u,{label:"From"},{default:t(()=>[e(h)]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(u,{label:"To"},{default:t(()=>[e(h)]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(u,{label:"Int Check Thru"},{default:t(()=>[e(x)]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(u,null,{default:t(()=>[e(b,{type:"primary","html-type":"submit"},{default:t(()=>[a("Generate")]),_:1})]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(u,null,{default:t(()=>[e(b,{type:"primary","html-type":"submit"},{default:t(()=>[a("Email to Client")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l("div",Ce,[l("div",Fe,[e(D,{gutter:24},{default:t(()=>[e(s,{span:4},{default:t(()=>[a(" Client ID: 005 ")]),_:1}),e(s,{span:4},{default:t(()=>[a(" Name: DASP Workshop ")]),_:1}),e(s,{span:4},{default:t(()=>[a(" Loan Extents ")]),_:1}),e(s,{span:12},{default:t(()=>[ze,Oe]),_:1})]),_:1})]),e(C,{size:"small",style:{width:"700px"}},{default:t(()=>[e(A,{class:"ia-generate-table",columns:o.columns,"data-source":o.data,size:"small",pagination:!1},{summary:t(()=>[e(z,null,{default:t(()=>[e(F,null,{default:t(()=>[e(_,{"col-span":1}),e(_,null,{default:t(()=>[a("Net Effect on Account Balance")]),_:1}),e(_,null,{default:t(()=>[a("73,645.30")]),_:1}),e(_,null,{default:t(()=>[a("73,645.30")]),_:1}),e(_,null,{default:t(()=>[a("73,645.30")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),e(C,{size:"small",style:{width:"700px"}},{default:t(()=>[e(A,{class:"ia-interest-calculation",columns:o.columnstwo,"data-source":o.datatwo,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1}),e(C,{size:"small",style:{width:"700px"}},{default:t(()=>[e(A,{class:"ia-generate-table",columns:o.columns,"data-source":o.data,size:"small",pagination:!1},{summary:t(()=>[e(z,null,{default:t(()=>[e(F,null,{default:t(()=>[e(_,{"col-span":1}),e(_,null,{default:t(()=>[a("Net Effect on Account Balance")]),_:1}),e(_,null,{default:t(()=>[a("73,645.30")]),_:1}),e(_,null,{default:t(()=>[a("73,645.30")]),_:1}),e(_,null,{default:t(()=>[a("73,645.30")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])]),_:1}),e(C,{size:"small",style:{width:"700px"}},{default:t(()=>[e(A,{class:"ia-interest-calculation",columns:o.columnstwo,"data-source":o.datatwo,size:"small",pagination:!1},null,8,["columns","data-source"])]),_:1})])],64)}const Le=$(Ae,[["render",Pe],["__scopeId","data-v-0c244cb7"]]);const Se=g({components:{AdminLayout:N,ListData:ye,IAStatementExport:Ie,IAEntireExport:ge,IAGenerateReport:Le},data(){return{title:"Individual Account Dashboard"}}}),Te={class:"export-container"},Re={class:"view-container"},Me={class:"generate-report-container"};function Be(o,p,I,w,v,E){const f=n("IAStatementExport"),m=n("IAEntireExport"),u=n("IAGenerateReport"),s=n("ListData"),h=n("AdminLayout");return i(),W(h,{defaultKey:"7"},{default:t(()=>[l("h1",null,[l("span",null,O(o.title),1),a(),l("span",Te,[e(f),e(m)])]),l("div",Re,[l("div",Me,[e(u)]),e(s)])]),_:1})}const We=$(Se,[["render",Be],["__scopeId","data-v-9158000c"]]);export{We as default};
