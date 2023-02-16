<template>  
  <div class="action-container">
    <AddEdit @click="createAuditTrail('click', 'Clicked on the add transaction button.')" />
    <AddBulk @click="createAuditTrail('click', 'Clicked on the add bulk transactions button.')" />
    <ImportData @click="createAuditTrail('click', 'Clicked on the import transactions button.')" />
    <TransactionExport @click="createAuditTrail('click', 'Clicked on the export transactions button.')" />
  </div>   
  
  <div class="transaction-filter">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-form>
        <a-form-item
          label="Filter"
          name="transactionfilter">
          <a-input v-model:value="form.filter_allcolumn" @keypress.enter="searchTransactions(true)">
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
          Overall Total Transaction Records: {{ active_records.toLocaleString() }}
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
              <li class="ant-pagination-next mr-2" :class="transaction_pagination.links.next ? '' : 'ant-pagination-disabled'">
                <button class="ant-pagination-item-link" type="button" @click="toNextPage" :disabled="!transaction_pagination.links.next">
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
    :data-source="transaction_list" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 1800 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    :pagination="false"
    :loading="loading"
    size="small">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Transaction ID<br>
          <input class="single-input" type="text" v-model="form.filter_id" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'account_id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Account ID<br>
          <input class="single-input" type="text" v-model="form.filter_account_id" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_account_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_account_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_account_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'acct_description'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Account Description<br>
          <input class="single-input" type="text" v-model="form.filter_acct_description" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_acct_description')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_acct_description == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_acct_description != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'effective_date'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Effective Date<br>
          <input class="single-input" type="text" v-model="form.filter_effective_date" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_effective_date')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_effective_date == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_effective_date != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'trans_type'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Transaction Type<br>
          <input class="single-input" type="text" v-model="form.filter_trans_type" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_trans_type')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_trans_type == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_trans_type != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'memo'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Memo<br>
          <input class="single-input" type="text" v-model="form.filter_memo" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_memo')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_memo == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_memo != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'amount'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Amount<br>
          <input class="single-input" type="text" v-model="form.filter_amount" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_amount')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_amount == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_amount != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'entry_date'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Entry Date<br>
          <input class="single-input" type="text" v-model="form.filter_entry_date" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_entry_date')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_entry_date == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_entry_date != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'created_at'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Created At<br>
          <input class="single-input" type="text" v-model="form.filter_created_at" @keypress.enter="searchTransactions(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_created_at')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_created_at == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_created_at != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'action'">
        Action<br/><br/>
      </template>
    </template>
    <template #bodyCell="{ column, record, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-if="column.dataIndex === 'txtype'">
        <a-tag color="#3197FC">{{ text }}</a-tag>
      </template>
      <template v-if="column.dataIndex === 'action'">
        <div class="d-flex">
          <FormOutlined @click="showEditDataModal(record.id)" class="icon-edit" />
          <NullData @click="createAuditTrail('click', 'Clicked on the nullify transaction button.')" />
          <DeleteData @click="createAuditTrail('click', 'Clicked on the delete transaction button.')" :transaction_id="record.id" :acct_description="record.acct_description" />
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
import EditData from "../../components/transactions/EditData.vue";
import DeleteData from "../../components/transactions/DeleteData.vue";
import NullData from "../../components/transactions/NullData.vue";
import AddEdit from "../../components/transactions/AddEdit.vue";
import ImportData from "../../components/transactions/ImportData.vue";
import AddBulk from "../../components/transactions/AddBulk.vue";
import TransactionExport from "../../components/transactions/TransactionExport.vue";
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
    NullData,
    StepBackwardFilled,
    StepForwardFilled,
    CaretLeftFilled,
    CaretRightFilled,
    AddEdit,
    AddBulk,
    ImportData,
    TransactionExport,
  },
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    const columns = ref([
      { title: 'ID', dataIndex: 'id', key: 'id', width: 150, resizable: true, },
      { title: 'Account ID', dataIndex: 'account_id', key: 'account_id', width: 150, resizable: true, },
      { title: 'Account Description', dataIndex: 'acct_description', key: 'acct_description', width: 300, resizable: true, ellipsis: true, },
      { title: 'Effective Date', dataIndex: 'effective_date', key: 'effective_date', width: 150, resizable: true, },
      { title: 'Transaction Type', dataIndex: 'trans_type', key: 'trans_type', width: 200, resizable: true, },
      { title: 'Memo', dataIndex: 'memo', key: 'memo', width: 400, resizable: true, ellipsis: true, },
      { title: 'Amount', dataIndex: 'amount', key: 'amount', width: 200, resizable: true, },
      { title: 'Entry Date', dataIndex: 'entry_date', key: 'entry_date', width: 150, resizable: true, },
      { title: 'Created At', dataIndex: 'created_at', key: 'created_at', width: 170, resizable: true, },
      { title: 'Action', dataIndex: 'action', key: 'action', fixed: 'right', width: 100, }
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
      transaction_list: [],
      transaction_pagination: {
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
        filter_account_id: null,
        filter_acct_description: null,
        filter_effective_date: null,
        filter_trans_type: null,
        filter_memo: null,
        filter_amount: null,
        filter_entry_date: null,
        filter_created_at: null,

        sort_id: 0,
        sort_account_id: 0,
        sort_acct_description: 0,
        sort_effective_date: 0,
        sort_trans_type: 0,
        sort_memo: 0,
        sort_amount: 0,
        sort_entry_date: 0,
        sort_created_at: 0,

        export_to: '',
      },
      
      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),

      searched_columns: ''
		}
	},
  methods: {
    getTransactions() {
      this.form.per_page = this.pageSize
      this.getTransactionsByParams()
    },
    getTransactionsByParams() {
      this.loading = true
      this.form.export_to = ''

      axios.post("/transaction", this.form, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data
        this.transaction_list = data.data
        this.transaction_pagination = data
        this.loading = false
        message.success(data.message)

        this.getTransactionsStats()
      })
      .catch((err) => {
        console.error(err)
        this.transaction_list = []
        this.transaction_pagination = {
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
    searchTransactions(create_trail) {
      this.current = 1

      this.form.per_page = this.pageSize
      this.form.page = 1

      this.getTransactionsByParams()

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },    
    onPageChange() {
      this.form.per_page = this.pageSize
      this.form.page = this.current

      this.getTransactionsByParams()
      this.scrollToTop()
    },
    toFirstPage() {
      this.searchTransactions()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to first page" button in the pagination for transactions.')
    },
    toPreviousPage() {
      this.current = this.current - 1
      this.form.page = this.current
      this.getTransactionsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the previous button in the pagination for transactions.')
    },
    toNextPage() {
      this.current = this.current + 1
      this.form.page = this.current
      this.getTransactionsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the next button in the pagination for transactions.')
    },
    toLastPage() {
      this.current = this.transaction_pagination.meta.to
      this.form.page = this.current
      this.getTransactionsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to last page" button in the pagination for transactions.')
    },
    changeColumnSort(create_trail, column_to_sort) {
      this.form[column_to_sort] = this.form[column_to_sort] + 1
      if(this.form[column_to_sort] == 3) {
        this.form[column_to_sort] = 0
      }

      this.searchTransactions()

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },
    getTransactionsStats() {
      axios.get("/transaction/stats", {
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
    showEditDataModal(transaction_id) {
      this.$refs.editDataModal.showModal(transaction_id)
      this.createAuditTrail('click', 'Clicked on the edit transaction button.')
    },
    createAuditTrail(type, activity_name = null) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath,
      }

      if(type == 'click') {
        data.activity = activity_name
      } else if(type == 'search') {
        let search_string = 'Searched transactions by '
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
    this.getTransactions()
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
.client-action {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
:deep(.table-striped) td {
  background-color: #fafafa;
}
.action-container {
  display: flex;
}
</style>