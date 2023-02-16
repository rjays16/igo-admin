<template>
  <div class="action-container">
    <AddEdit @click="createAuditTrail('click', 'Clicked on the add account button.')" />
    <AddBulk @click="createAuditTrail('click', 'Clicked on the add bulk account button.')" />
    <ImportData @click="createAuditTrail('click', 'Clicked on the import account button.')" />
    <AccountExport @click="createAuditTrail('click', 'Clicked on the export account button.')" />
  </div>

  <div class="account-filter">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-form>
        <a-form-item
          label="Filter"
          name="accountfilter">
          <a-input v-model:value="form.filter_allcolumn" @keypress.enter="searchAccounts(true)">
            <template #prefix>
              <FilterOutlined class="site-form-item-icon" />
            </template>
          </a-input>
          <a-checkbox v-model:checked="form.filter_activatewildcard">perform subfilter wildcard search</a-checkbox>
        </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="6">
        <a-dropdown class="account-action" :trigger="['click']">
          <template #overlay>
            <a-menu>
              <a-menu-item>
                Show Statement of Selected Accounts
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            Action
            <DownOutlined />
          </a-button>
        </a-dropdown>
      </a-col>
      <a-col :span="12" class="text-right">
        <h3 class="fw-bold">
          Overall Total Account Records: {{ active_records.toLocaleString() }}
        </h3>

        <div class="pagination mt-3 text-right">
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
              <li class="ant-pagination-next mr-2" :class="account_pagination.links.next ? '' : 'ant-pagination-disabled'">
                <button class="ant-pagination-item-link" type="button" @click="toNextPage" :disabled="!account_pagination.links.next">
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
    :row-selection="rowSelection" 
    :columns="columns" 
    :data-source="account_list" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 2000 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    :pagination="false"
    :loading="loading"
    size="small">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Account ID<br>
          <input class="single-input" type="text" v-model="form.filter_id" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'status'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Status<br>
          <input class="single-input" type="text" v-model="form.filter_status" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_status')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_status == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_status != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'creditor_id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Creditor<br>
          <input class="single-input" type="text" v-model="form.filter_creditor_id" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_creditor_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_creditor_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_creditor_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'acct_description'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Account Description<br>
          <input class="single-input" type="text" v-model="form.filter_acct_description" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_acct_description')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_acct_description == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_acct_description != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'acct_number'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Account Number<br>
          <input class="single-input" type="text" v-model="form.filter_acct_number" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_acct_number')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_acct_number == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_acct_number != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'debtor_id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Debtor<br>
          <input class="single-input" type="text" v-model="form.filter_debtor_id" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_debtor_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_debtor_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_debtor_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'rate'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Current Rate<br>
          <input class="single-input" type="text" v-model="form.filter_rate" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_rate')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_rate == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_rate != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'note'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Note<br>
          <input class="single-input" type="text" v-model="form.filter_note" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_note')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_note == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_note != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'origin_date'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Origin Date<br>
          <input class="single-input" type="text" v-model="form.filter_origin_date" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_origin_date')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_origin_date == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_origin_date != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'created_at'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Created at<br>
          <input class="single-input" type="text" v-model="form.filter_created_at" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_created_at')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_created_at == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_created_at != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'tag'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Tag<br>
          <input class="single-input" type="text" v-model="form.filter_tag" @keypress.enter="searchAccounts(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_tag')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_tag == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_tag != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'action'">
        Action<br/><br/>
      </template>
    </template>
    <template #bodyCell="{ column, record, text }">
      <template v-if="column.dataIndex === 'status'">
        <a-tag :color="record.status_id == 0 ? 'gray'
          : record.status_id == 1 ? 'green'
            : record.status_id == 2 ? 'purple'
              : 'orange'">
          {{ text }}
        </a-tag>
      </template>
      <template v-if="column.dataIndex === 'tag'">
        <span>
          <a-tag color="blue">{{ text }}</a-tag>
        </span>
      </template>
      <template v-if="column.dataIndex === 'action'">
        <div class="d-flex">          
          <FormOutlined @click="showEditDataModal(record.id)" class="icon-edit" />
          <DeleteData @click="createAuditTrail('click', 'Clicked on the delete account button.')" :account_id="record.id" :acct_description="record.acct_description" />
        </div>
      </template>
    </template>
  </a-table>

  <EditData ref="editDataModal" />
</template>

<script>
import { FormOutlined, DeleteOutlined, FilterOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined,
  StepBackwardFilled, StepForwardFilled, CaretLeftFilled, CaretRightFilled } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import EditData from "../../components/accounts/EditData.vue";
import DeleteData from "../../components/accounts/DeleteData.vue";
import AddEdit from "../../components/accounts/AddEdit.vue";
import ImportData from "../../components/accounts/ImportData.vue";
import AddBulk from "../../components/accounts/AddBulk.vue";
import AccountExport from "../../components/accounts/AccountExport.vue";
import axios from 'axios'

export default defineComponent({
  components: {
    FormOutlined,
    DeleteOutlined,
    FilterOutlined,
    DownOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    EditData,
    DeleteData,
    StepBackwardFilled,
    StepForwardFilled,
    CaretLeftFilled,
    CaretRightFilled,
    
    AddEdit,
    AddBulk,
    ImportData,
    AccountExport,
  },
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };

    const columns = ref([
      { title: 'Account ID', dataIndex: 'id', key: 'id', width: 120, resizable: true, },
      { title: 'Status', dataIndex: 'status', key: 'status', width: 120, resizable: true, },
      { title: 'Creditor', dataIndex: 'creditor_id', key: 'creditor_id', width: 150, resizable: true, },
      { title: 'Account Description', dataIndex: 'acct_description', key: 'acct_description', width: 200, resizable: true, ellipsis: true, },
      { title: 'Account Number', dataIndex: 'acct_number', key: 'acct_number', width: 200, resizable: true, },
      { title: 'Debtor', dataIndex: 'debtor_id', key: 'debtor_id', width: 150, resizable: true, },
      { title: 'Current Rate', dataIndex: 'rate', key: 'rate', width: 150, resizable: true, },
      { title: 'Note', dataIndex: 'note', key: 'note', width: 600, resizable: true, ellipsis: true, },
      { title: 'Origin Date', dataIndex: 'origin_date', key: 'origin_date', width: 150, resizable: true, },
      { title: 'Created at', dataIndex: 'created_at', key: 'created_at', width: 150, resizable: true, },
      { title: 'Tags', dataIndex: 'tag', key: 'tag', width: 150, resizable: true, },
      { title: 'Action', dataIndex: 'action', key: 'action', fixed: 'right', width: 80, }
    ]);
    const data = [];

    return {
      data,
      columns,
      rowSelection,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
    };
  },
  data() {
		return {
      active_records: 0,

      data: [],
      account_list: [],
      account_pagination: {
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
        filter_client_id: null,
        filter_status: null,
        filter_creditor_id: null,
        filter_acct_description: null,
        filter_acct_number: null,
        filter_debtor_id: null,
        filter_rate: null,
        filter_note: null,
        filter_origin_date: null,
        filter_tag: null,
        filter_created_at: null,

        sort_id: 0,
        sort_client_id: 0,
        sort_status: 0,
        sort_creditor_id: 0,
        sort_acct_description: 0,
        sort_acct_number: 0,
        sort_debtor_id: 0,
        sort_rate: 0,
        sort_note: 0,
        sort_origin_date: 0,
        sort_tag: 0,
        sort_created_at: 0,

        export_to: '',
      },

      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),

      searched_columns: ''
		}
	},
  methods: {
    getAccounts() {
      this.form.per_page = this.pageSize
      this.getAccountsByParams()
    },
    getAccountsByParams() {
      this.loading = true
      this.form.export_to = ''

      axios.post("/account", this.form, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data
        this.account_list = data.data
        this.account_pagination = data
        this.loading = false
        message.success(data.message)

        this.getAccountsStats()
      })
      .catch((err) => {
        console.error(err)
        this.account_list = []
        this.account_pagination = {
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
    searchAccounts(create_trail) {
      this.current = 1

      this.form.per_page = this.pageSize
      this.form.page = 1

      this.getAccountsByParams()

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },    
    onPageChange() {
      this.form.per_page = this.pageSize
      this.form.page = this.current

      this.getAccountsByParams()
      this.scrollToTop()
    },
    toFirstPage() {
      this.searchAccounts()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to first page" button in the pagination for accounts.')
    },
    toPreviousPage() {
      this.current = this.current - 1
      this.form.page = this.current
      this.getAccountsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the previous button in the pagination for accounts.')
    },
    toNextPage() {
      this.current = this.current + 1
      this.form.page = this.current
      this.getAccountsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the next button in the pagination for accounts.')
    },
    toLastPage() {
      this.current = this.account_pagination.meta.to
      this.form.page = this.current
      this.getAccountsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to last page" button in the pagination for accounts.')
    },
    changeColumnSort(create_trail, column_to_sort) {
      this.form[column_to_sort] = this.form[column_to_sort] + 1
      if(this.form[column_to_sort] == 3) {
        this.form[column_to_sort] = 0
      }

      this.searchAccounts(false)

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },
    getAccountsStats() {
      axios.get("/account/stats", {
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
    showEditDataModal(account_id) {
      this.$refs.editDataModal.showModal(account_id)
      this.createAuditTrail('click', 'Clicked on the edit account button.')
    },
    createAuditTrail(type, activity_name = null) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath,
      }

      if(type == 'click') {
        data.activity = activity_name
      } else if(type == 'search') {
        let search_string = 'Searched accounts by '
        this.searched_columns = Object.entries(this.form).toString()
          .replaceAll(',', ', ').replaceAll(' ,', ' null,')
          .replaceAll('filter_', '').replaceAll(/\export_to.*?\b/g, '')
          .replaceAll('_', ' ');

        let concatenated = search_string.concat('', this.searched_columns)
        let search_array = concatenated.split(/sort(.*)/s)
        let sort_string = search_array[1].replaceAll(' 0,', ' default,').replaceAll(', 0', ', default').replaceAll(' 1,', ' ascending,').replaceAll(', 1', ', ascending').replaceAll(' 2,', ' descending,').replaceAll(', 2', ', descending')
        let search_to_pass = search_array[0].concat('sort', sort_string).replace(/(^[,\s]+)|([,\s]+$)/g, '')

        data.activity = search_to_pass
      }

      axios.post("/audit-trail/store", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        console.log(res.data.message)
      })
      .catch((err) => {
        console.error(err.response.data.message)
      });
    }
  },
  mounted() {
    this.getAccounts()
  }
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
  font-weight: 700;
}
.single-input {
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 12px;
}
.account-action {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
:deep(.table-striped) td {
  background-color: #fafafa;
}
</style>