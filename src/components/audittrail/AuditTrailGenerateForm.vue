<template>
  <a-form layout="vertical" class="filter-generate">
    <a-row :gutter="24">
      <a-col :span="4">
        <a-form-item label="User">
          <a-select placeholder="Select user" v-model:value="filter_only_this_user_id" allowClear
            :loading="loading"
            showSearch
            optionFilterProp="children"
            :options="users"
            :filterOption="filterOptions">
          </a-select>
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item label="From">
          <a-date-picker v-model:value="filter_from_date" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" allowClear />
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item label="To">
          <a-date-picker v-model:value="filter_to_date" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" allowClear />
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="generateAuditTrail()">
            Generate
          </a-button>
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item>
          <a-dropdown class="client-action" :trigger="['click']">
            <template #overlay>
              <a-menu @click="exportTo">
                <a-menu-item key="xlsx">
                  Excel File
                </a-menu-item>
                <a-menu-item key="csv">
                  CSV File
                </a-menu-item>
                <a-menu-item key="pdf">
                  PDF File
                </a-menu-item>
              </a-menu>
            </template>
            <a-button>
              Export To
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { defineComponent } from 'vue';
import { DownOutlined } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
  components: {
    DownOutlined
  },
  data() {
    return {
      loading: true,

      users: [],

      filter_only_this_user_id: null,
      filter_from_date: null,
      filter_to_date: null,

      options_size: parseInt(import.meta.env.VITE_SELECT_MAX_PAGESIZE)
    }
  },
  methods: {
    getUsers() {
      this.loading = true

      let data = {
        per_page: this.options_size
      }

      axios.post("/user", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data
        this.users = data.data
        this.loading = false
        console.log(data.message)
        // message.success(data.message)
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.users = []
        this.loading = false
      });
    },
    generateAuditTrail() {
      this.$parent.form.filter_only_this_user_id = this.filter_only_this_user_id
      this.$parent.form.filter_from_date = this.filter_from_date
      this.$parent.form.filter_to_date = this.filter_to_date
      this.$parent.getAuditTrail()
    },
    exportTo(e) {
      let data = this.$parent.form
      data.export_to = e.key

      axios.post("/audit-trail", data, {
        responseType: 'blob',
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success("Successfully exported data.")

        const url = URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', "audit_trail." + e.key)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message);
      });
    },
    filterOptions(input, option) {
      return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    },
  },
  mounted() {
    this.getUsers()
  }
});
</script>
<style scoped>
.ant-form-vertical > :deep(.ant-row) {
  align-items: flex-end;
}
</style>