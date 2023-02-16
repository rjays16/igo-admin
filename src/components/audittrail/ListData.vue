<template>
  <AuditTrailGenerateForm /> 

  <div class="audit-trail-filter">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-form>
        <a-form-item
          label="Filter"
          name="clientfilter">
          <a-input v-model:value="form.filter_allcolumn" @keypress.enter="searchAuditTrail()">
            <template #prefix>
              <FilterOutlined class="site-form-item-icon" />
            </template>
          </a-input>
          <a-checkbox v-model:checked="form.filter_activatewildcard">perform subfilter wildcard search</a-checkbox>
        </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="12" class="text-right">
        <h3 class="fw-bold">
          Overall Total Audit Trail Records: {{ active_records.toLocaleString() }}
        </h3>

        <div class="pagination text-right">
          <div class="d-inline-block">
            <ul class="pagination-list lst-none p-0 d-inline-flex w-100">
              <li title="First Page" class="ant-pagination-prev" :class="form.page == 1 ? 'ant-pagination-disabled' : ''">
                <button class="ant-pagination-item-link" type="button" @click="toFirstPage" :disabled="form.page == 1">
                  <StepBackwardFilled />
                </button>
              </li>
              <li class="ant-pagination-prev" :class="form.page == 1 ? 'ant-pagination-disabled' : ''">
                <button class="ant-pagination-item-link" type="button" @click="toPreviousPage" :disabled="form.page == 1">
                  <CaretLeftFilled />
                </button>
              </li>
              <li class="d-inline-block mr-2">
                <p class="d-inline-block mr-2">page</p>
                <a-input-number class="d-inline-block text-center page-number" v-model:value="current" :min="1" @change="onPageChange" @pressEnter="onPageChange" />
              </li>
              <li class="ant-pagination-next mr-2" :class="audit_trail_pagination.links.next ? '' : 'ant-pagination-disabled'">
                <button class="ant-pagination-item-link" type="button" @click="toNextPage" :disabled="!audit_trail_pagination.links.next">
                  <CaretRightFilled />
                </button>
              </li>
              <li title="Last Page" class="ant-pagination-next mr-2 ant-pagination-disabled">
                <button class="ant-pagination-item-link" type="button" @click="toLastPage" disabled>
                  <StepForwardFilled />
                </button>
              </li>

              <a-select v-model:value="pageSize" @change="onPageChange">
                <a-select-option :value="size" v-for="(size, index) in page_sizes" :key="index">
                  {{ size + " / page" }}
                </a-select-option>
              </a-select>
            </ul>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>

  <a-table
    sticky
    :columns="columns" 
    :data-source="audit_trail_list" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 1500 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    :pagination="false"
    :loading="loading"
    size="small">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Activity ID<br>
          <input class="single-input" type="text" v-model="form.filter_id" @keypress.enter="searchAuditTrail()" /></span>          
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'user_id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">User ID<br>
          <input class="single-input" type="text" v-model="form.filter_user_id" @keypress.enter="searchAuditTrail()" /></span>          
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_user_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_user_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'pages'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Pages<br>
          <input class="single-input" type="text" v-model="form.filter_pages" @keypress.enter="searchAuditTrail()" /></span>          
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_pages')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_pages == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_pages != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'activity'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Activity<br>
          <input class="single-input" type="text" v-model="form.filter_activity" @keypress.enter="searchAuditTrail()" /></span>          
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_activity')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_activity == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_activity != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'created_at'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Created At<br>
          <input class="single-input" type="text" v-model="form.filter_created_at" @keypress.enter="searchAuditTrail()" /></span>          
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_created_at')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_created_at == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_created_at != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
    </template>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'txtype'">
        <span>
          <a-tag color="#FBB125">{{ text }}</a-tag>
        </span>
      </template>
    </template>
  </a-table>
</template>
<script>
import { FormOutlined, DeleteOutlined, FilterOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined,
  StepBackwardFilled, StepForwardFilled, CaretLeftFilled, CaretRightFilled } from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import AuditTrailGenerateForm from "../../components/audittrail/AuditTrailGenerateForm.vue";
import axios from 'axios'

export default defineComponent({
  components: {
    FormOutlined,
    DeleteOutlined,
    FilterOutlined,
    DownOutlined,
    AuditTrailGenerateForm,
    CaretUpOutlined,
    CaretDownOutlined,
    StepBackwardFilled,
    StepForwardFilled,
    CaretLeftFilled,
    CaretRightFilled
  },
  setup() {
    const columns = ref([
      { title: 'Activity ID', dataIndex: 'id', key: 'id', width: 80, resizable: true, },
      { title: 'User Id', dataIndex: 'user_id', key: 'user_id', width: 80, resizable: true, },
      { title: 'Pages', dataIndex: 'pages', key: 'pages', width: 300, resizable: true, ellipsis: true, },
      { title: 'Activity', dataIndex: 'activity', key: 'activity', width: 600, resizable: true, ellipsis: true, },
      { title: 'Created At', dataIndex: 'created_at', key: 'created_at', width: 150, resizable: true, }
    ]);

    const data = [];

    return {
      data,
      columns,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
  },
  data() {
		return {
      active_records: 0,

      data: [],
      audit_trail_list: [],
      audit_trail_pagination: {
        meta: {
          to: 1
        },
        links: {
          next: null,
        }
      },

      loading: true,
      current: 1,
      pageSize: parseInt(import.meta.env.VITE_DEFAULT_PAGINATION_SIZE),

      page_sizes: JSON.parse(import.meta.env.VITE_PAGINATION_SIZE_OPTIONS),

      form: {
        page: 1,
        per_page: parseInt(import.meta.env.VITE_DEFAULT_PAGINATION_SIZE),
        filter_allcolumn: null,
        filter_activatewildcard: false,
        filter_id: null,
        filter_user_id: null,
        filter_pages: null,
        filter_activity: null,
        filter_created_at: null,

        sort_id: 0,
        sort_user_id: 0,
        sort_pages: 0,
        sort_activity: 0,
        sort_created_at: 0,

        filter_only_this_user_id: null,
        filter_from_date: null,
        filter_to_date: null,
        
        export_to: '',
      },
		}
	},
  methods: {
    getAuditTrail() {
      this.form.per_page = this.pageSize
      this.getAuditTrailByParams()
    },
    getAuditTrailByParams() {
      this.loading = true
      this.form.export_to = ''

      axios.post("/audit-trail", this.form, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data
        this.audit_trail_list = data.data
        this.audit_trail_pagination = data
        this.loading = false
        message.success(data.message)

        this.getAuditTrailStats()
      })
      .catch((err) => {
        console.error(err)
        this.audit_trail_list = []
        this.audit_trail_pagination = {
          meta: {
            total: 0
          },
          links: {
            next: null
          }
        },
        this.loading = false
        message.error(err.response.data.message);
      });
    },
    searchAuditTrail() {
      this.current = 1

      this.form.per_page = this.pageSize
      this.form.page = 1

      this.getAuditTrailByParams()
    },    
    onPageChange() {
      this.form.per_page = this.pageSize
      this.form.page = this.current

      this.getAuditTrailByParams()
      this.scrollToTop()
    },
    toFirstPage() {
      this.searchAuditTrail()
      this.scrollToTop()
    },
    toPreviousPage() {
      this.current = this.current - 1
      this.form.page = this.current
      this.getAuditTrailByParams()
      this.scrollToTop()
    },
    toNextPage() {
      this.current = this.current + 1
      this.form.page = this.current
      this.getAuditTrailByParams()
      this.scrollToTop()
    },
    toLastPage() {
      this.current = this.audit_trail_pagination.meta.to
      this.form.page = this.current
      this.getAuditTrailByParams()
      this.scrollToTop()
    },
    changeColumnSort(column_to_sort) {
      this.form[column_to_sort] = this.form[column_to_sort] + 1
      if(this.form[column_to_sort] == 3) {
        this.form[column_to_sort] = 0
      }

      this.searchAuditTrail()
    },
    getAuditTrailStats() {
      axios.get("/audit-trail/stats", {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.active_records = res.data.data.active_records
      })
      .catch((err) => {
        console.error(err.response.data.message)
        this.active_records = 0
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    this.getAuditTrail()
  }
});
</script>

<style scoped>
.single-input {
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 12px;
}
.client-action {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
:deep(.ant-table-summary) {
  background-color: #331edb;
  color: #fff;
}
:deep(.ant-table-summary) tr td {
  font-weight: 700;
}
:deep(.table-striped) td {
  background-color: #fafafa;
}
.expanded-content :deep(.ant-row) {
  margin-bottom: 24px;
}
.expanded-content {
  max-width: 820px;
  margin: 0 auto;
}
.approve-btn {
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
}
</style>