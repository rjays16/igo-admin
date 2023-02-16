<template>
    <div class="export-dropdown-wrap">
        <a-dropdown :trigger="['click']">
        <template #overlay>
            <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
                <FileExcelOutlined />
                Excel File
            </a-menu-item>
            <a-menu-item key="2">
                <FileOutlined />
                CSV File
            </a-menu-item>
            <a-menu-item key="3">
                <FilePdfOutlined />
                PDF File
            </a-menu-item>
            </a-menu>
        </template>
        <a-button size="large">
            Export To
            <ExportOutlined />
        </a-button>
        </a-dropdown>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { ExportOutlined, FileExcelOutlined, FileOutlined, FilePdfOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    ExportOutlined,
    FileExcelOutlined,
    FileOutlined,
    FilePdfOutlined,
  },

  setup() {
    const handleMenuClick = e => {
      console.log('click', e);
    };

    return {
      handleMenuClick,
    };
  },

});
</script>
<style scoped>
.export-dropdown-wrap {
  margin-left: auto;
  margin-right: 0 !important;
}
</style>