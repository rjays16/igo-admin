<template>
  <div class="export-dropdown-wrap">
    <a-dropdown :trigger="['click']">
      <template #overlay>
        <a-menu @click="exportTo">
          <a-menu-item key="xlsx">
            <FileExcelOutlined />
            Excel File
          </a-menu-item>
          <a-menu-item key="csv">
            <FileOutlined />
            CSV File
          </a-menu-item>
          <a-menu-item key="pdf">
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
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
  components: {
    ExportOutlined,
    FileExcelOutlined,
    FileOutlined,
    FilePdfOutlined,
  },
  methods: {
    exportTo(e) {
      let data = this.$parent.form
      data.export_to = e.key

      axios.post("/transaction", data, {
        responseType: 'blob',
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success("Successfully exported data.")

        const url = URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', "transactions." + e.key)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message);
      });
    }
  }
});
</script>
<style scoped>
.export-dropdown-wrap {
    margin-left: auto;
    margin-right: 0 !important;
}
</style>