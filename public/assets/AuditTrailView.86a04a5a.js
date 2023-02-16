import{A as q}from"./AdminLayout.d02771bd.js";import{d as Y,v as N,j as B,m as P,_ as V,r as l,o as p,g as R,w as o,c as a,k as u,D as Q,x as W,y as X,f as Z,a as f,b as s,z as v,t as z,B as d,F as K,G as x,H as $,I as F,h as b,p as tt,e as et}from"./index.c557b90b.js";import{F as at,a as st}from"./FormOutlined.ff69f9fa.js";import{S as ot,a as lt,C as nt,b as it}from"./StepForwardFilled.4ba1e5ec.js";const rt=Y({components:{DownOutlined:N},data(){return{loading:!0,users:[],filter_only_this_user_id:null,filter_from_date:null,filter_to_date:null,options_size:parseInt("5000")}},methods:{getUsers(){this.loading=!0;let t={per_page:this.options_size};B.post("/user",t,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(e=>{let r=e.data;this.users=r.data,this.loading=!1,console.log(r.message)}).catch(e=>{console.error(e),P.error(e.response.data.message),this.users=[],this.loading=!1})},generateAuditTrail(){this.$parent.form.filter_only_this_user_id=this.filter_only_this_user_id,this.$parent.form.filter_from_date=this.filter_from_date,this.$parent.form.filter_to_date=this.filter_to_date,this.$parent.getAuditTrail()},exportTo(t){let e=this.$parent.form;e.export_to=t.key,B.post("/audit-trail",e,{responseType:"blob",headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(r=>{P.success("Successfully exported data.");const h=URL.createObjectURL(new Blob([r.data])),_=document.createElement("a");_.href=h,_.setAttribute("download","audit_trail."+t.key),document.body.appendChild(_),_.click(),document.body.removeChild(_)}).catch(r=>{console.error(r),P.error(r.response.data.message)})},filterOptions(t,e){var r;return((r=e==null?void 0:e.label)!=null?r:"").toLowerCase().includes(t.toLowerCase())}},mounted(){this.getUsers()}});function dt(t,e,r,h,_,M){const k=l("a-select"),c=l("a-form-item"),g=l("a-col"),S=l("a-date-picker"),D=l("a-button"),C=l("a-menu-item"),w=l("a-menu"),U=l("DownOutlined"),O=l("a-dropdown"),I=l("a-row"),L=l("a-form");return p(),R(L,{layout:"vertical",class:"filter-generate"},{default:o(()=>[a(I,{gutter:24},{default:o(()=>[a(g,{span:4},{default:o(()=>[a(c,{label:"User"},{default:o(()=>[a(k,{placeholder:"Select user",value:t.filter_only_this_user_id,"onUpdate:value":e[0]||(e[0]=m=>t.filter_only_this_user_id=m),allowClear:"",loading:t.loading,showSearch:"",optionFilterProp:"children",options:t.users,filterOption:t.filterOptions},null,8,["value","loading","options","filterOption"])]),_:1})]),_:1}),a(g,null,{default:o(()=>[a(c,{label:"From"},{default:o(()=>[a(S,{value:t.filter_from_date,"onUpdate:value":e[1]||(e[1]=m=>t.filter_from_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD",allowClear:""},null,8,["value"])]),_:1})]),_:1}),a(g,null,{default:o(()=>[a(c,{label:"To"},{default:o(()=>[a(S,{value:t.filter_to_date,"onUpdate:value":e[2]||(e[2]=m=>t.filter_to_date=m),format:"YYYY/MM/DD",valueFormat:"YYYY/MM/DD",allowClear:""},null,8,["value"])]),_:1})]),_:1}),a(g,null,{default:o(()=>[a(c,null,{default:o(()=>[a(D,{type:"primary","html-type":"submit",onClick:e[3]||(e[3]=m=>t.generateAuditTrail())},{default:o(()=>[u(" Generate ")]),_:1})]),_:1})]),_:1}),a(g,null,{default:o(()=>[a(c,null,{default:o(()=>[a(O,{class:"client-action",trigger:["click"]},{overlay:o(()=>[a(w,{onClick:t.exportTo},{default:o(()=>[a(C,{key:"xlsx"},{default:o(()=>[u(" Excel File ")]),_:1}),a(C,{key:"csv"},{default:o(()=>[u(" CSV File ")]),_:1}),a(C,{key:"pdf"},{default:o(()=>[u(" PDF File ")]),_:1})]),_:1},8,["onClick"])]),default:o(()=>[a(D,null,{default:o(()=>[u(" Export To "),a(U)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ut=V(rt,[["render",dt],["__scopeId","data-v-532f45da"]]);const pt=Y({components:{FormOutlined:at,DeleteOutlined:Q,FilterOutlined:st,DownOutlined:N,AuditTrailGenerateForm:ut,CaretUpOutlined:W,CaretDownOutlined:X,StepBackwardFilled:ot,StepForwardFilled:lt,CaretLeftFilled:nt,CaretRightFilled:it},setup(){const t=Z([{title:"Activity ID",dataIndex:"id",key:"id",width:80,resizable:!0},{title:"User Id",dataIndex:"user_id",key:"user_id",width:80,resizable:!0},{title:"Pages",dataIndex:"pages",key:"pages",width:300,resizable:!0,ellipsis:!0},{title:"Activity",dataIndex:"activity",key:"activity",width:600,resizable:!0,ellipsis:!0},{title:"Created At",dataIndex:"created_at",key:"created_at",width:150,resizable:!0}]);return{data:[],columns:t,handleResizeColumn:(r,h)=>{h.width=r},labelCol:{span:8},wrapperCol:{span:16}}},data(){return{active_records:0,data:[],audit_trail_list:[],audit_trail_pagination:{meta:{to:1},links:{next:null}},loading:!0,current:1,pageSize:parseInt("10"),page_sizes:JSON.parse('["10", "100", "500", "1000", "3000", "5000", "10000", "20000", "50000"]'),form:{page:1,per_page:parseInt("10"),filter_allcolumn:null,filter_activatewildcard:!1,filter_id:null,filter_user_id:null,filter_pages:null,filter_activity:null,filter_created_at:null,sort_id:0,sort_user_id:0,sort_pages:0,sort_activity:0,sort_created_at:0,filter_only_this_user_id:null,filter_from_date:null,filter_to_date:null,export_to:""}}},methods:{getAuditTrail(){this.form.per_page=this.pageSize,this.getAuditTrailByParams()},getAuditTrailByParams(){this.loading=!0,this.form.export_to="",B.post("/audit-trail",this.form,{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{let e=t.data;this.audit_trail_list=e.data,this.audit_trail_pagination=e,this.loading=!1,P.success(e.message),this.getAuditTrailStats()}).catch(t=>{console.error(t),this.audit_trail_list=[],this.audit_trail_pagination={meta:{total:0},links:{next:null}},this.loading=!1,P.error(t.response.data.message)})},searchAuditTrail(){this.current=1,this.form.per_page=this.pageSize,this.form.page=1,this.getAuditTrailByParams()},onPageChange(){this.form.per_page=this.pageSize,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},toFirstPage(){this.searchAuditTrail(),this.scrollToTop()},toPreviousPage(){this.current=this.current-1,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},toNextPage(){this.current=this.current+1,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},toLastPage(){this.current=this.audit_trail_pagination.meta.to,this.form.page=this.current,this.getAuditTrailByParams(),this.scrollToTop()},changeColumnSort(t){this.form[t]=this.form[t]+1,this.form[t]==3&&(this.form[t]=0),this.searchAuditTrail()},getAuditTrailStats(){B.get("/audit-trail/stats",{headers:{Authorization:`Bearer ${this.$cookies.get("igo-x-access-token")}`}}).then(t=>{this.active_records=t.data.data.active_records}).catch(t=>{console.error(t.response.data.message),this.active_records=0})},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}},mounted(){this.getAuditTrail()}}),y=t=>(tt("data-v-45df17cd"),t=t(),et(),t),ct={class:"audit-trail-filter"},_t={class:"fw-bold"},mt={class:"pagination text-right"},ft={class:"d-inline-block"},gt={class:"pagination-list lst-none p-0 d-inline-flex w-100"},ht=["disabled"],vt=["disabled"],bt={class:"d-inline-block mr-2"},yt=y(()=>s("p",{class:"d-inline-block mr-2"},"page",-1)),kt=["disabled"],Ct={title:"Last Page",class:"ant-pagination-next mr-2 ant-pagination-disabled"},wt={key:0,class:"ant-table-column-sorters"},Tt={class:"ant-table-column-title"},At=y(()=>s("br",null,null,-1)),$t={class:"ant-table-column-sorter ant-table-column-sorter-full"},Ft={key:1,class:"ant-table-column-sorters"},Pt={class:"ant-table-column-title"},St=y(()=>s("br",null,null,-1)),Dt={class:"ant-table-column-sorter ant-table-column-sorter-full"},zt={key:2,class:"ant-table-column-sorters"},Bt={class:"ant-table-column-title"},Ut=y(()=>s("br",null,null,-1)),Ot={class:"ant-table-column-sorter ant-table-column-sorter-full"},It={key:3,class:"ant-table-column-sorters"},Lt={class:"ant-table-column-title"},Yt=y(()=>s("br",null,null,-1)),Vt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Rt={key:4,class:"ant-table-column-sorters"},Mt={class:"ant-table-column-title"},Kt=y(()=>s("br",null,null,-1)),Nt={class:"ant-table-column-sorter ant-table-column-sorter-full"},Et={key:0};function Gt(t,e,r,h,_,M){const k=l("AuditTrailGenerateForm"),c=l("FilterOutlined"),g=l("a-input"),S=l("a-checkbox"),D=l("a-form-item"),C=l("a-form"),w=l("a-col"),U=l("StepBackwardFilled"),O=l("CaretLeftFilled"),I=l("a-input-number"),L=l("CaretRightFilled"),m=l("StepForwardFilled"),E=l("a-select-option"),G=l("a-select"),j=l("a-row"),T=l("CaretUpOutlined"),A=l("CaretDownOutlined"),H=l("a-tag"),J=l("a-table");return p(),f(K,null,[a(k),s("div",ct,[a(j,{gutter:24},{default:o(()=>[a(w,{span:6},{default:o(()=>[a(C,null,{default:o(()=>[a(D,{label:"Filter",name:"clientfilter"},{default:o(()=>[a(g,{value:t.form.filter_allcolumn,"onUpdate:value":e[0]||(e[0]=n=>t.form.filter_allcolumn=n),onKeypress:e[1]||(e[1]=v(n=>t.searchAuditTrail(),["enter"]))},{prefix:o(()=>[a(c,{class:"site-form-item-icon"})]),_:1},8,["value"]),a(S,{checked:t.form.filter_activatewildcard,"onUpdate:checked":e[2]||(e[2]=n=>t.form.filter_activatewildcard=n)},{default:o(()=>[u("perform subfilter wildcard search")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1}),a(w,{span:6}),a(w,{span:12,class:"text-right"},{default:o(()=>[s("h3",_t," Overall Total Audit Trail Records: "+z(t.active_records.toLocaleString()),1),s("div",mt,[s("div",ft,[s("ul",gt,[s("li",{title:"First Page",class:d(["ant-pagination-prev",t.form.page==1?"ant-pagination-disabled":""])},[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[3]||(e[3]=(...n)=>t.toFirstPage&&t.toFirstPage(...n)),disabled:t.form.page==1},[a(U)],8,ht)],2),s("li",{class:d(["ant-pagination-prev",t.form.page==1?"ant-pagination-disabled":""])},[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[4]||(e[4]=(...n)=>t.toPreviousPage&&t.toPreviousPage(...n)),disabled:t.form.page==1},[a(O)],8,vt)],2),s("li",bt,[yt,a(I,{class:"d-inline-block text-center page-number",value:t.current,"onUpdate:value":e[5]||(e[5]=n=>t.current=n),min:1,onChange:t.onPageChange,onPressEnter:t.onPageChange},null,8,["value","onChange","onPressEnter"])]),s("li",{class:d(["ant-pagination-next mr-2",t.audit_trail_pagination.links.next?"":"ant-pagination-disabled"])},[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[6]||(e[6]=(...n)=>t.toNextPage&&t.toNextPage(...n)),disabled:!t.audit_trail_pagination.links.next},[a(L)],8,kt)],2),s("li",Ct,[s("button",{class:"ant-pagination-item-link",type:"button",onClick:e[7]||(e[7]=(...n)=>t.toLastPage&&t.toLastPage(...n)),disabled:""},[a(m)])]),a(G,{value:t.pageSize,"onUpdate:value":e[8]||(e[8]=n=>t.pageSize=n),onChange:t.onPageChange},{default:o(()=>[(p(!0),f(K,null,x(t.page_sizes,(n,i)=>(p(),R(E,{value:n,key:i},{default:o(()=>[u(z(n+" / page"),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onChange"])])])])]),_:1})]),_:1})]),a(J,{sticky:"",columns:t.columns,"data-source":t.audit_trail_list,onResizeColumn:t.handleResizeColumn,scroll:{x:1500},"row-class-name":(n,i)=>i%2===1?"table-striped":null,pagination:!1,loading:t.loading,size:"small"},{headerCell:o(({column:n})=>[n.key==="id"?(p(),f("div",wt,[s("span",Tt,[u("Activity ID"),At,$(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[9]||(e[9]=i=>t.form.filter_id=i),onKeypress:e[10]||(e[10]=v(i=>t.searchAuditTrail(),["enter"]))},null,544),[[F,t.form.filter_id]])]),s("span",$t,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[11]||(e[11]=i=>t.changeColumnSort("sort_id"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_id==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_id!=2?"":"active"])},null,8,["class"])])])])):b("",!0),n.key==="user_id"?(p(),f("div",Ft,[s("span",Pt,[u("User ID"),St,$(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[12]||(e[12]=i=>t.form.filter_user_id=i),onKeypress:e[13]||(e[13]=v(i=>t.searchAuditTrail(),["enter"]))},null,544),[[F,t.form.filter_user_id]])]),s("span",Dt,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[14]||(e[14]=i=>t.changeColumnSort("sort_user_id"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_user_id==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_id!=2?"":"active"])},null,8,["class"])])])])):b("",!0),n.key==="pages"?(p(),f("div",zt,[s("span",Bt,[u("Pages"),Ut,$(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[15]||(e[15]=i=>t.form.filter_pages=i),onKeypress:e[16]||(e[16]=v(i=>t.searchAuditTrail(),["enter"]))},null,544),[[F,t.form.filter_pages]])]),s("span",Ot,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[17]||(e[17]=i=>t.changeColumnSort("sort_pages"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_pages==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_pages!=2?"":"active"])},null,8,["class"])])])])):b("",!0),n.key==="activity"?(p(),f("div",It,[s("span",Lt,[u("Activity"),Yt,$(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[18]||(e[18]=i=>t.form.filter_activity=i),onKeypress:e[19]||(e[19]=v(i=>t.searchAuditTrail(),["enter"]))},null,544),[[F,t.form.filter_activity]])]),s("span",Vt,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[20]||(e[20]=i=>t.changeColumnSort("sort_activity"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_activity==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_activity!=2?"":"active"])},null,8,["class"])])])])):b("",!0),n.key==="created_at"?(p(),f("div",Rt,[s("span",Mt,[u("Created At"),Kt,$(s("input",{class:"single-input",type:"text","onUpdate:modelValue":e[21]||(e[21]=i=>t.form.filter_created_at=i),onKeypress:e[22]||(e[22]=v(i=>t.searchAuditTrail(),["enter"]))},null,544),[[F,t.form.filter_created_at]])]),s("span",Nt,[s("span",{class:"ant-table-column-sorter-inner",onClick:e[23]||(e[23]=i=>t.changeColumnSort("sort_created_at"))},[a(T,{class:d(["ant-table-column-sorter-up",t.form.sort_created_at==1?"active":""])},null,8,["class"]),a(A,{class:d(["ant-table-column-sorter-down",t.form.sort_created_at!=2?"":"active"])},null,8,["class"])])])])):b("",!0)]),bodyCell:o(({column:n,text:i})=>[n.dataIndex==="txtype"?(p(),f("span",Et,[a(H,{color:"#FBB125"},{default:o(()=>[u(z(i),1)]),_:2},1024)])):b("",!0)]),_:1},8,["columns","data-source","onResizeColumn","row-class-name","loading"])],64)}const jt=V(pt,[["render",Gt],["__scopeId","data-v-45df17cd"]]);const Ht=Y({components:{AdminLayout:q,ListData:jt},data(){return{title:"Audit Trail"}}}),Jt={class:"view-container"};function qt(t,e,r,h,_,M){const k=l("ListData"),c=l("AdminLayout");return p(),R(c,{defaultKey:"10"},{default:o(()=>[s("h1",null,[s("span",null,z(t.title),1)]),s("div",Jt,[a(k)])]),_:1})}const xt=V(Ht,[["render",qt],["__scopeId","data-v-84573d8c"]]);export{xt as default};
