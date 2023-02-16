<template>
  <AdminLayout defaultKey="11-2" preOpenKey="11">
    <h1>{{ title }}</h1>
    <div class="view-container">
      <ListData />
    </div>
  </AdminLayout>
</template>

<script>
import { defineComponent } from "vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import ListData from "../../components/roles/ListData.vue";

export default defineComponent({
  components: {
    AdminLayout,
    ListData,
  },
  data() {
    return {
      title: "Role Management",
    };
  },
});
</script>
<style scoped>
.view-container {
  padding: 24px;
}
h1 {
  padding: 10px 24px;
  background: #e2e2e2;
  font-size: 22px;
  margin: 0;
  font-weight: 700;
}
</style>