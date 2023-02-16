import{A as E}from"./AdminLayout.2b5bc6e8.js";import{_ as $,f as n,o as w,c as v,w as e,b as t,a as c,e as x,s as A,n as F,g as a,p as C,q as G,B,t as P}from"./index.0056091f.js";const R={};function V(o,f){const d=n("a-date-picker"),m=n("a-form-item"),i=n("a-col"),b=n("a-button"),l=n("a-row"),_=n("a-form");return w(),v(_,{layout:"vertical",class:"filter-generate"},{default:e(()=>[t(l,{gutter:16},{default:e(()=>[t(i,null,{default:e(()=>[t(m,{label:"From"},{default:e(()=>[t(d)]),_:1})]),_:1}),t(i,null,{default:e(()=>[t(m,{label:"To"},{default:e(()=>[t(d)]),_:1})]),_:1}),t(i,null,{default:e(()=>[t(m,null,{default:e(()=>[t(b,{type:"primary","html-type":"submit"},{default:e(()=>[c("Generate")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const N=$(R,[["render",V],["__scopeId","data-v-0a90bda6"]]);const O=[{title:"Date",dataIndex:"date",width:120},{title:"Type",dataIndex:"type",width:80},{title:"Memo",dataIndex:"memo",width:250},{title:"(+/-)",dataIndex:"int",width:150},{title:"Balance",dataIndex:"balance"}],W=[{key:"1",date:"01/01/2021",type:"IP",memo:"Interest Accrued 01/01/21 - 01/01/22",int:"281.45",balance:"33,555.00"},{key:"2",date:"01/01/2021",type:"IP",memo:"Interest Accrued 01/01/21 - 01/01/22",int:"281.45",balance:"33,555.00"},{key:"3",date:"01/01/2021",type:"IP",memo:"Interest Accrued 01/01/21 - 01/01/22",int:"281.45",balance:"33,555.00"},{key:"4",date:"01/01/2021",type:"IP",memo:"Interest Accrued 01/01/21 - 01/01/22",int:"281.45",balance:"33,555.00"},{key:"5",date:"01/01/2021",type:"IP",memo:"Interest Accrued 01/01/21 - 01/01/22",int:"281.45",balance:"33,555.00"},{key:"6",date:"01/01/2021",type:"IP",memo:"Interest Accrued 01/01/21 - 01/01/22",int:"281.45",balance:"33,555.00"}],M=[{title:"Type",dataIndex:"type"},{title:"Account Summary",dataIndex:"accountsummary"},{title:"Statement",dataIndex:"statement"},{title:"To Date",dataIndex:"todate"},{title:"Lifetime",dataIndex:"lifetime"}],z=[{key:"1",type:"D",accountsummary:"Deposit (new money)",statement:"155003.00",todate:"155003.00",lifetime:"155003.00"},{key:"2",type:"C",accountsummary:"Credit (internal funds)",statement:"0",todate:"0",lifetime:"0"},{key:"3",type:"T",accountsummary:"Transfer (loan to loan)",statement:"0",todate:"0",lifetime:"0"},{key:"4",type:"W",accountsummary:"Withdrawal",statement:"-155003.00",todate:"-155003.00",lifetime:"-155003.00"},{key:"5",type:"IP",accountsummary:"Interest Earned, Periodic",statement:"2106.20",todate:"2106.20",lifetime:"2106.20"},{key:"6",type:"IA",accountsummary:"Interest Adjustments",statement:"16217.40",todate:"16217.40",lifetime:"16217.40"},{key:"7",type:"A",accountsummary:"Adjustments",statement:"0",todate:"0",lifetime:"0"},{key:"8",type:"M",accountsummary:"Memo or Account Annotation",statement:"0",todate:"0",lifetime:"0"}],J=x({components:{DownOutlined:A},setup(){return{data:W,columns:O,datatwo:z,columnstwo:M}}}),s=o=>(C("data-v-37d6c9dc"),o=o(),G(),o),K={class:"report-container"},j={class:"sticky-report-header"},X=s(()=>a("h3",null,"Loan Extents",-1)),q=s(()=>a("p",null,"First TX 01/01/2021",-1)),Y=s(()=>a("p",null,"Last TX 01/01/2021",-1)),H=s(()=>a("p",null,null,-1)),Q={class:"report-header"},U=s(()=>a("h2",null,"Talent Builders",-1)),Z=s(()=>a("p",null,"913 Christine Rd, Columbia, KY 42728",-1)),tt=s(()=>a("p",null,"(330) 277-5000",-1)),et=s(()=>a("span",null,[c("Samaritan Ministries "),a("br"),c("0")],-1)),nt=s(()=>a("h2",null,"Statement of Account",-1)),at=s(()=>a("p",null,"Statement Date: 01/01/2022",-1)),ot=s(()=>a("div",{class:"report-header"},[a("h2",null,"Ending Balance")],-1));function ct(o,f,d,m,i,b){const l=n("a-col"),_=n("a-button"),u=n("a-menu-item"),p=n("a-menu"),I=n("DownOutlined"),k=n("a-dropdown"),y=n("a-row"),h=n("a-table"),r=n("a-table-summary-cell"),S=n("a-table-summary-row"),g=n("a-table-summary");return w(),F("div",K,[a("div",j,[t(y,{gutter:24},{default:e(()=>[t(l,{span:12},{default:e(()=>[X,q,Y,H]),_:1}),t(l,{span:12},{default:e(()=>[t(_,{type:"primary"},{default:e(()=>[c("Email to Client")]),_:1}),t(k,{class:"client-action",trigger:["click"]},{overlay:e(()=>[t(p,null,{default:e(()=>[t(u,null,{default:e(()=>[c(" Excel FIle ")]),_:1}),t(u,null,{default:e(()=>[c(" CSV File ")]),_:1}),t(u,null,{default:e(()=>[c(" PDF File ")]),_:1})]),_:1})]),default:e(()=>[t(_,null,{default:e(()=>[c(" Export To "),t(I)]),_:1})]),_:1})]),_:1})]),_:1})]),t(h,{class:"report-table",columns:o.columns,"data-source":o.data,size:"small",pagination:!1,scroll:{x:800,y:400}},{title:e(()=>[a("div",Q,[t(y,{gutter:16},{default:e(()=>[t(l,{span:24},{default:e(()=>[U,Z,tt]),_:1})]),_:1}),t(y,{gutter:16},{default:e(()=>[t(l,{span:12},{default:e(()=>[et]),_:1}),t(l,{span:12},{default:e(()=>[nt,at]),_:1})]),_:1})])]),_:1},8,["columns","data-source"]),t(h,{class:"report-table",columns:o.columnstwo,"data-source":o.datatwo,size:"small",pagination:!1,scroll:{x:800,y:400}},{title:e(()=>[ot]),summary:e(()=>[t(g,null,{default:e(()=>[t(S,null,{default:e(()=>[t(r,{"col-span":1}),t(r,null,{default:e(()=>[c("Net Effect on Account Balance")]),_:1}),t(r,null,{default:e(()=>[c("73,645.30")]),_:1}),t(r,null,{default:e(()=>[c("73,645.30")]),_:1}),t(r,null,{default:e(()=>[c("73,645.30")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","data-source"])])}const lt=$(J,[["render",ct],["__scopeId","data-v-37d6c9dc"]]);const st=[{title:"",dataIndex:"account"},{title:"",dataIndex:"action",width:100}],_t=[{key:"1",account:"Winters, Jamison (Loan 1)"},{key:"2",account:"Winters, Jamison (Loan 1)",accountsummary:"Credit (internal funds)"},{key:"3",account:"Winters, Jamison (Loan 1)"}],dt=x({components:{DownOutlined:A,StatementGenerateReport:lt},setup(){return{data:_t,columns:st,rowSelection:{onChange:(f,d)=>{console.log(`selectedRowKeys: ${f}`,"selectedRows: ",d)}}}}}),ut={class:"statement-report-container"};function rt(o,f,d,m,i,b){const l=n("a-input"),_=n("a-form-item"),u=n("a-form"),p=n("a-col"),I=n("a-menu-item"),k=n("a-menu"),y=n("DownOutlined"),h=n("a-button"),r=n("a-dropdown"),S=n("a-row"),g=n("a-table"),D=n("StatementGenerateReport");return w(),v(S,{gutter:24},{default:e(()=>[t(p,{span:10},{default:e(()=>[t(S,{class:"search-row",gutter:16},{default:e(()=>[t(p,null,{default:e(()=>[t(u,{layout:"vertical"},{default:e(()=>[t(_,{label:"Search"},{default:e(()=>[t(l)]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(r,{class:"client-action",trigger:["click"]},{overlay:e(()=>[t(k,null,{default:e(()=>[t(I,null,{default:e(()=>[c(" Email all their Respective Statements ")]),_:1}),t(I,null,{default:e(()=>[c(" Email Statement to Selected Accounts ")]),_:1})]),_:1})]),default:e(()=>[t(h,null,{default:e(()=>[c(" Action "),t(y)]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{"row-selection":o.rowSelection,columns:o.columns,"data-source":o.data,size:"small",pagination:!1,scroll:{y:400}},{bodyCell:e(({column:T})=>[T.dataIndex==="action"?(w(),v(h,{key:0},{default:e(()=>[c("Show")]),_:1})):B("",!0)]),_:1},8,["row-selection","columns","data-source"])]),_:1}),t(p,{span:14},{default:e(()=>[a("div",ut,[t(D)])]),_:1})]),_:1})}const mt=$(dt,[["render",rt],["__scopeId","data-v-f16fb642"]]);const it=x({components:{AdminLayout:E,StatementGenerateForm:N,StatementGenerateList:mt},data(){return{title:"Statement Report"}}}),L=o=>(C("data-v-ff05c131"),o=o(),G(),o),pt={class:"view-container"},ft={class:"generate-report-container"},yt=L(()=>a("hr",null,null,-1)),ht=L(()=>a("br",null,null,-1));function wt(o,f,d,m,i,b){const l=n("StatementGenerateForm"),_=n("StatementGenerateList"),u=n("AdminLayout");return w(),v(u,{defaultKey:"8"},{default:e(()=>[a("h1",null,[a("span",null,P(o.title),1)]),a("div",pt,[a("div",ft,[t(l),yt,ht,t(_)])])]),_:1})}const St=$(it,[["render",wt],["__scopeId","data-v-ff05c131"]]);export{St as default};
