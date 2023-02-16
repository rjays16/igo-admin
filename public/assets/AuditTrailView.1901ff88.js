import{A as J}from"./AdminLayout.40b9b66a.js";import{e as Y,v as N,k as O,m as $,_ as V,f as n,o as p,c as R,w as l,b as a,a as u,D as Q,x as W,y as X,r as Z,n as f,g as s,z as b,t as U,B as d,F as K,G as x,H as F,I as P,s as v,p as tt,q as et}from"./index.467a513f.js";import{F as at,a as st}from"./FormOutlined.1fe55579.js";import{S as lt,a as nt,C as ot,b as it}from"./StepForwardFilled.2f00db47.js";const rt=Y({components:{DownOutlined:N},data(){return{loading:!0,users:[],filter_only_this_user_id:null,filter_from_date:null,filter_to_date:null,options_size:parseInt("5000")}},methods:{getUsers(){this.loading=!0;let t={per_page:this.options_size};O.post("/user",t).then(e=>{let r=e.data;this.users=r.data,this.loading=!1,console.log(r.message)}).catch(e=>{console.error(e),$.error(e.response.data.message),this.users=[],this.loading=!1})},generateAuditTrail(){this.$parent.form.filter_only_this_user_id=this.filter_only_this_user_id,this.$parent.form.filter_from_date=this.filter_from_date,this.$parent.form.filter_to_date=this.filter_to_date,this.$parent.getAuditTrail()},exportTo(t){let e=this.$parent.form;e.export_to=t.key,O.post("/audit-trail",e,{responseType:"blob"}).then(r=>{$.success("Successfully exported data.");const h=URL.createObjectURL(new Blob([r.data])),_=document.createElement("a");_.href=h,_.setAttribute("download","audit_trail."+t.key),document.body.appendChild(_),_.click(),document.body.removeChild(_)}).catch(r=>{console.error(r),$.error(r.response.data.message)})},filterOptions(t,e){var r;return((r=e==null?void 0:e.label)!=null?r:"").toLowerCase().includes(t.toLowerCase())}},mounted(){this.getUsers()}});function dt(t,e,r,h,_,M){const k=n("a-select"),c=n("a-form-item"),g=n("a-col"),S=n("a-date-picker"),D=n("a-button"),C=n("a-menu-item"),w=n("a-menu"),z=n("DownOutlined"),I=n("a-dropdown"),L=n("a-row"),B=n("a-form");return p(),R(B,{layout:"vertical",class:"filter-generate"},{default:l(()=>[a(L,{gutter:24},{default:l(()=>[a(g,{span:4},{default:l(()=>[a(c,{label:"User"},{default:l(()=>[a(k,{placeholder:"Select user",value:t.filter_only_this_user_id,"onUpdate:value":e[0]||(e[0]=m=>t.filter_only_this_user_id=m),allowClear:"",loading:t.loading,showSearch:"",optionFilterProp:"children",options:t.users,filterOption:t.filterOptions},null,8,["value","loading","options","filterOption"])]),_:1})]),_:1}),a(g,null,{default:l(()=>[a(c,{label:"From"},{default:l(()=>[a(S,{value:t.filter_from_date,"onUpdate:value":e[1]||(e[1]=m=>t.filter_from_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD",allowClear:""},null,8,["value"])]),_:1})]),_:1}),a(g,null,{default:l(()=>[a(c,{label:"To"},{default:l(()=>[a(S,{value:t.filter_to_date,"onUpdate:value":e[2]||(e[2]=m=>t.filter_to_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD",allowClear:""},null,8,["value"])]),_:1})]),_:1}),a(g,null,{default:l(()=>[a(c,null,{default:l(()=>[a(D,{type:"primary","html-type":"submit",onClick:e[3]||(e[3]=m=>t.generateAuditTrail())},{default:l(()=>[u(" Generate ")]),_:1})]),_:1})]),_:1}),a(g,null,{default:l(()=>[a(c,null,{default:l(()=>[a(I,{class:"client-action",trigger:["click"]},{overlay:l(()=>[a(w,{onClick:t.exportTo},{default:l(()=>[a(C,{key:"xlsx"},{default:l(()=>[u(" Excel File ")]),_:1}),a(C,{key:"csv"},{default:l(()=>[u(" CSV File ")]),_:1}),a(C,{key:"pdf"},{default:l(()=>[u(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:l(()=>[a(D,null,{default:l(()=>[u(" Export To "),a(z)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ut=V(rt,[["render",dt],["__scopeId","data-v-4c0cab76"]]);const pt=Y({components:{FormOutlined:at,DeleteOutlined:Q,FilterOutlined:st,DownOutlined:N,AuditTrailGenerateForm:ut,CaretUpOutlined:W,CaretDownOutlined:X,StepBackwardFilled:lt,StepForwardFilled:nt,CaretLeftFilled:ot,CaretRightFilled:it},setup(){const t=Z([{title:"Activity ID",dataIndex:"id",key:"id",width:100,resizable:!0},{title:"User Id",dataIndex:"user_id",key:"user_id",width:100,resizable:!0},{title:"Pages",dataIndex:"pages",key:"pages",width:150,resizable:!0},{title:"Activity",dataIndex:"activity",key:"activity",width:300,resizable:!0},{title:"Created At",dataIndex:"created_at",key:"created_at",width:150,resizable:!0}]);return{data:[],columns:t,handleResizeColumn:(r,h)=>{h.width=r},labelCol:{span:8},wrapperCol:{span:16}}},data(){return{active_records:0,data:[],audit_trail_list:[],audit_trail_pagination:{meta:{to:1},links:{next:null}},loading:!0,current:1,pageSize:parseInt("10"),page_sizes:JSON.parse('["10", "100", "500", "1000", "3000", "5000", "10000", "20000", "50000"]'),form:{page:1,per_page:parseInt("10"),filter_allcolumn:null,filter_activatewildcard:!1,filter_id:null,filter_user_id:null,filter_pages:null,filter_activity:null,filter_created_at:null,sort_id:0,sort_user_id:0,sort_pages:0,sort_activity:0,sort_created_at:0,filter_only_this_user_id:null,filter_from_date:null,filter_to_date:null,export_to:""}}},methods:{getAuditTrail(){this.form.per_page=this.pageSize,this.getAuditTrailByParams()},getAuditTrailByParams(){this.loading=!0,this.form.export_to="",O.post("/audit-trail",this.form).then(t=>{let e=t.data;this.audit_trail_list=e.data,this.audit_trail_pagination=e,this.loading=!1,$.success(e.message),this.getAuditTrailStats()}).catch(t=>{console.error(t),this.audit_trail_list=[],this.audit_trail_pagination={meta:{total:0},links:{next:null}},this.loading=!1,$.error(t.response.data.message)})},searchAuditTrail(){this.current=1,this.form.per_page=this.pageSize,this.form.page=1,this.getAuditTrailByParams()},onPageChange(){this.form.per_page=this.pageSize,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},toFirstPage(){this.searchAuditTrail(),this.scrollToTop()},toPreviousPage(){this.current=this.current-1,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},toNextPage(){this.current=this.current+1,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},toLastPage(){this.current=this.audit_trail_pagination.meta.to,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},changeColumnSort(t){this.form[t]=this.form[t]+1,this.form[t]==3&&(this.form[t]=0),this.searchAuditTrail()},getAuditTrailStats(){O.get("/audit-trail/stats").then(t=>{this.active_records=t.data.data.active_records}).catch(t=>{console.error(t.response.data.message),this.active_records=0})},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}},mounted(){this.getAuditTrail()}}),y=t=>(tt("data-v-191b78e4"),t=t(),et(),t),ct={class:"audit-trail-filter"},_t={class:"fw-bold"},mt={class:"pagination text-right"},ft={class:"d-inline-block"},gt={class:"pagination-list lst-none p-0 d-inline-flex w-100"},ht=["disabled"],bt=["disabled"],vt={class:"d-inline-block mr-2"},yt=y(()=>s("p",{class:"d-inline-block mr-2"},"page",-1)),kt=["disabled"],Ct={title:"Last Page",class:"ant-pagination-next mr-2 ant-pagination-disabled"},wt={key:0,class:"ant-table-column-sorters"},Tt={class:"ant-table-column-title"},At=y(()=>s("br",null,null,-1)),Ft={class:"ant-table-column-sorter ant-table-column-sorter-full"},Pt={key:1,class:"ant-table-column-sorters"},$t={class:"ant-table-column-title"},St=y(()=>s("br",null,null,-1)),Dt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Ut={key:2,class:"ant-table-column-sorters"},Ot={class:"ant-table-column-title"},zt=y(()=>s("br",null,null,-1)),It={class:"ant-table-column-sorter ant-table-column-sorter-full"},Lt={key:3,class:"ant-table-column-sorters"},Bt={class:"ant-table-column-title"},Yt=y(()=>s("br",null,null,-1)),Vt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Rt={key:4,class:"ant-table-column-sorters"},Mt={class:"ant-table-column-title"},Kt=y(()=>s("br",null,null,-1)),Nt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Et={key:0};function Gt(t,e,r,h,_,M){const k=n("AuditTrailGenerateForm"),c=n("FilterOutlined"),g=n("a-input"),S=n("a-checkbox"),D=n("a-form-item"),C=n("a-form"),w=n("a-col"),z=n("StepBackwardFilled"),I=n("CaretLeftFilled"),L=n("a-input-number"),B=n("CaretRightFilled"),m=n("StepForwardFilled"),E=n("a-select-option"),G=n("a-select"),j=n("a-row"),T=n("CaretUpOutlined"),A=n("CaretDownOutlined"),q=n("a-tag"),H=n("a-table");return p(),f(K,null,[a(k),s("div",ct,[a(j,{gutter:24},{default:l(()=>[a(w,{span:6},{default:l(()=>[a(C,null,{default:l(()=>[a(D,{label:"Filter",name:"clientfilter"},{default:l(()=>[a(g,{value:t.form.filter_allcolumn,"onUpdate:value":e[0]||(e[0]=o=>t.form.filter_allcolumn=o),onKeypress:e[1]||(e[1]=b(o=>t.searchAuditTrail(),["enter"]))},{prefix:l(()=>[a(c,{class:"site-form-item-icon"})]),_:1},8,["value"]),a(S,{checked:t.form.filter_activatewildcard,"onUpdate:checked":e[2]||(e[2]=o=>t.form.filter_activatewildcard=o)},{default:l(()=>[u("perform subfilter wildcard search")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1}),a(w,{span:6}),a(w,{span:12,class:"text-right"},{default:l(()=>[s("h3",_t," Overall Total Audit Trail Records: "+U(t.active_records.toLocaleString()),1),s("div",mt,[s("div",ft,[s("ul",gt,[s("li",{title:"First Page",class:d(["ant-pagination-prev",t.form.page==1?"ant-pagination-disabled":""])},[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[3]||(e[3]=(...o)=>t.toFirstPage&&t.toFirstPage(...o)),disabled:t.form.page==1},[a(z)],8,ht)],2),s("li",{class:d(["ant-pagination-prev",t.form.page==1?"ant-pagination-disabled":""])},[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[4]||(e[4]=(...o)=>t.toPreviousPage&&t.toPreviousPage(...o)),disabled:t.form.page==1},[a(I)],8,bt)],2),s("li",vt,[yt,a(L,{class:"d-inline-block text-center page-number",value:t.current,"onUpdate:value":e[5]||(e[5]=o=>t.current=o),min:1,onChange:t.onPageChange,onPressEnter:t.onPageChange},null,8,["value","onChange","onPressEnter"])]),s("li",{class:d(["ant-pagination-next mr-2",t.audit_trail_pagination.links.next?"":"ant-pagination-disabled"])},[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[6]||(e[6]=(...o)=>t.toNextPage&&t.toNextPage(...o)),disabled:!t.audit_trail_pagination.links.next},[a(B)],8,kt)],2),s("li",Ct,[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[7]||(e[7]=(...o)=>t.toLastPage&&t.toLastPage(...o)),disabled:""},[a(m)])]),a(G,{value:t.pageSize,"onUpdate:value":e[8]||(e[8]=o=>t.pageSize=o),onChange:t.onPageChange},{default:l(()=>[(p(!0),f(K,null,x(t.page_sizes,(o,i)=>(p(),R(E,{value:o,key:i},{default:l(()=>[u(U(o+" / page"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange"])])])])]),_:1})]),_:1})]),a(H,{sticky:"",columns:t.columns,"data-source":t.audit_trail_list,onResizeColumn:t.handleResizeColumn,scroll:{x:1500},"row-class-name":(o,i)=>i%2===1?"table-striped":null,pagination:!1,loading:t.loading},{headerCell:l(({column:o})=>[o.key==="id"?(p(),f("div",wt,[s("span",Tt,[u("Activity ID"),At,F(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[9]||(e[9]=i=>t.form.filter_id=i),onKeypress:e[10]||(e[10]=b(i=>t.searchAuditTrail(),["enter"]))},null,544),[[P,t.form.filter_id]])]),s("span",Ft,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[11]||(e[11]=i=>t.changeColumnSort("sort_id"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_id==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_id!=2?"":"active"])},null,8,["class"])])])])):v("",!0),o.key==="user_id"?(p(),f("div",Pt,[s("span",$t,[u("User ID"),St,F(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[12]||(e[12]=i=>t.form.filter_user_id=i),onKeypress:e[13]||(e[13]=b(i=>t.searchAuditTrail(),["enter"]))},null,544),[[P,t.form.filter_user_id]])]),s("span",Dt,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[14]||(e[14]=i=>t.changeColumnSort("sort_user_id"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_user_id==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_id!=2?"":"active"])},null,8,["class"])])])])):v("",!0),o.key==="pages"?(p(),f("div",Ut,[s("span",Ot,[u("Pages"),zt,F(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[15]||(e[15]=i=>t.form.filter_pages=i),onKeypress:e[16]||(e[16]=b(i=>t.searchAuditTrail(),["enter"]))},null,544),[[P,t.form.filter_pages]])]),s("span",It,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[17]||(e[17]=i=>t.changeColumnSort("sort_pages"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_pages==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_pages!=2?"":"active"])},null,8,["class"])])])])):v("",!0),o.key==="activity"?(p(),f("div",Lt,[s("span",Bt,[u("Activity"),Yt,F(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[18]||(e[18]=i=>t.form.filter_activity=i),onKeypress:e[19]||(e[19]=b(i=>t.searchAuditTrail(),["enter"]))},null,544),[[P,t.form.filter_activity]])]),s("span",Vt,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[20]||(e[20]=i=>t.changeColumnSort("sort_activity"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_activity==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_activity!=2?"":"active"])},null,8,["class"])])])])):v("",!0),o.key==="created_at"?(p(),f("div",Rt,[s("span",Mt,[u("Created At"),Kt,F(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[21]||(e[21]=i=>t.form.filter_created_at=i),onKeypress:e[22]||(e[22]=b(i=>t.searchAuditTrail(),["enter"]))},null,544),[[P,t.form.filter_created_at]])]),s("span",Nt,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[23]||(e[23]=i=>t.changeColumnSort("sort_created_at"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_created_at==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_created_at!=2?"":"active"])},null,8,["class"])])])])):v("",!0)]),bodyCell:l(({column:o,text:i})=>[o.dataIndex==="txtype"?(p(),f("span",Et,[a(q,{color:"#FBB125"},{default:l(()=>[u(U(i),1)]),_:2},1024)])):v("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name","loading"])],64)}const jt=V(pt,[["render",Gt],["__scopeId","data-v-191b78e4"]]);const qt=Y({components:{AdminLayout:J,ListData:jt},data(){return{title:"Audit Trail"}}}),Ht={class:"view-container"};function Jt(t,e,r,h,_,M){const k=n("ListData"),c=n("AdminLayout");return p(),R(c,{defaultKey:"10"},{default:l(()=>[s("h1",null,[s("span",null,U(t.title),1)]),s("div",Ht,[a(k)])]),_:1})}const xt=V(qt,[["render",Jt],["__scopeId","data-v-84573d8c"]]);export{xt as default};
