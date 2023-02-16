<template>
  <AdminLayout defaultKey="8">
    <h1><span>{{ title }}</span></h1>
    <div class="view-container">
      <div class="generate-report-container">
        <StatementGenerateForm />
        <hr><br>
        <StatementGenerateList />
      </div>   
    </div>
  </AdminLayout>
</template>

<script>
import { defineComponent } from "vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import StatementGenerateForm from "../../components/statements/StatementGenerateForm.vue";
import StatementGenerateList from "../../components/statements/StatementGenerateList.vue";

export default defineComponent({
  components: {
    AdminLayout,
    StatementGenerateForm,
    StatementGenerateList,
  },
  data() {
    return {
      title: "Statement Report",
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