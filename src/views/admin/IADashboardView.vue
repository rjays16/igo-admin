<template>
  <AdminLayout defaultKey="7">
    <h1><span>{{ title }}</span> <span class="export-container"><IAStatementExport /><IAEntireExport /></span></h1>
    <div class="view-container">
      <div class="generate-report-container">
        <IAGenerateReport />
      </div>   
      <ListData />
    </div>
  </AdminLayout>
</template>

<script>
import { defineComponent } from "vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import ListData from "../../components/iadashboard/ListData.vue";
import IAStatementExport from "../../components/iadashboard/IAStatementExport.vue";
import IAEntireExport from "../../components/iadashboard/IAEntireExport.vue";
import IAGenerateReport from "../../components/iadashboard/IAGenerateReport.vue";


export default defineComponent({
  components: {
    AdminLayout,
    ListData,
    IAStatementExport,
    IAEntireExport,
    IAGenerateReport,
  },
  data() {
    return {
      title: "Individual Account Dashboard",
    };
  },
});
</script>
<style scoped>
.action-container {
  padding: 20px 0 40px;
  display: flex;
}
.action-container div {
  margin-right: 20px;
}
.view-container {
  padding: 24px;
}
h1 {
  padding: 10px 24px;
  background: #e2e2e2;
  font-size: 22px;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
}
h1 span {
  font-weight: 700;
}
.export-container {
  display: flex;
}
.export-container > div {
  margin: 0 5px;
}
</style>