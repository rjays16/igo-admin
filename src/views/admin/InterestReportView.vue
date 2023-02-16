<template>
  <AdminLayout defaultKey="9">
    <h1><span>{{ title }}</span> <InterestExport /></h1>
    <div class="view-container">
      <div class="generate-report-container">
        <InterestGenerateReport />
      </div>   
      <ListData />
    </div>
  </AdminLayout>
</template>

<script>
import { defineComponent } from "vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import ListData from "../../components/interest/ListData.vue";
import InterestGenerateReport from "../../components/interest/InterestGenerateReport.vue";
import InterestExport from "../../components/interest/InterestExport.vue";


export default defineComponent({
  components: {
    AdminLayout,
    ListData,
    InterestExport,
    InterestGenerateReport,
  },
  data() {
    return {
      title: "Interest Report",
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
</style>