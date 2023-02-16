<template>
  <AdminLayout defaultKey="1">
    <div class="view-container">
      <ChartData />
    </div>
  </AdminLayout>
</template>

<script>
import { defineComponent } from "vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import ChartData from "../../components/ChartData.vue";
export default defineComponent({
  components: {
    AdminLayout,
    ChartData
  }
});
</script>

<style scoped></style>
