<template>
    <div class="prev-trans-heading">
        <h3>Previous Transaction Made</h3>
        <h3 class="yellow">Balance Per Vault: {{ balance_per_vault }}</h3>
    </div>

    <a-table 
        sticky 
        :columns="columns" 
        :data-source="transaction_list" 
        size="small" 
        @resizeColumn="handleResizeColumn" 
        :scroll="{ x: 800, y: 200 }"
        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
        :pagination="false"
        :loading="loading">
        <template #headerCell="{ column }">
        <template v-if="column.key === 'id'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Transaction ID<br>
                <input class="single-input" type="text" v-model="form.filter_id" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_id')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_id == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        <template v-if="column.key === 'account_id'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Account ID<br>
                <input class="single-input" type="text" v-model="form.filter_account_id" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_account_id')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_account_id == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_account_id != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        <template v-if="column.key === 'acct_description'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Account Description<br>
                <input class="single-input" type="text" v-model="form.filter_acct_description" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_acct_description')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_acct_description == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_acct_description != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        <template v-if="column.key === 'effective_date'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Effective Date<br>
                <input class="single-input" type="text" v-model="form.filter_effective_date" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_effective_date')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_effective_date == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_effective_date != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        <template v-if="column.key === 'trans_type'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Transaction Type<br>
                <input class="single-input" type="text" v-model="form.filter_trans_type" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_trans_type')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_trans_type == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_trans_type != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        <template v-if="column.key === 'memo'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Transaction Type<br>
                <input class="single-input" type="text" v-model="form.filter_memo" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_memo')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_memo == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_memo != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        <template v-if="column.key === 'amount'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Amount<br>
                <input class="single-input" type="text" v-model="form.filter_amount" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_amount')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_amount == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_amount != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        <template v-if="column.key === 'entry_date'">
            <div class="ant-table-column-sorters">
                <span class="ant-table-column-title">Entry Date<br>
                <input class="single-input" type="text" v-model="form.filter_entry_date" @keypress.enter="searchTransactions()" /></span>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner" @click="changeColumnSort('sort_entry_date')">
                        <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_entry_date == 1 ? 'active' : ''" />
                        <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_entry_date != 2 ? '' : 'active'" />
                    </span>
                </span>
            </div>
        </template>
        </template>
        <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
            <a>{{ text }}</a>
        </template>
        </template>
    </a-table>

    <div class="pagination mt-3">
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
</template>

<script>
import { CaretUpOutlined, CaretDownOutlined, StepBackwardFilled, StepForwardFilled, CaretLeftFilled, CaretRightFilled } from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
    components: {
        CaretUpOutlined,
        CaretDownOutlined,
        StepBackwardFilled,
        StepForwardFilled,
        CaretLeftFilled,
        CaretRightFilled,
    },
    setup() {
        const columns = ref([
            { title: 'ID', dataIndex: 'id', key: 'id', width: 100, resizable: true, },
            { title: 'Account ID', dataIndex: 'account_id', key: 'account_id', width: 120, resizable: true, },
            { title: 'Account Description', dataIndex: 'acct_description', key: 'acct_description', width: 150, resizable: true, },
            { title: 'Effective Date', dataIndex: 'effective_date', key: 'effective_date', width: 120, resizable: true, },
            { title: 'Transaction Type', dataIndex: 'trans_type', key: 'trans_type', width: 150, resizable: true, },
            { title: 'Memo', dataIndex: 'memo', key: 'memo', width: 200, resizable: true, },
            { title: 'Amount', dataIndex: 'amount', key: 'amount', width: 150, resizable: true, },
            { title: 'Entry Date', dataIndex: 'entry_date', key: 'entry_date', width: 120, resizable: true, }
        ]);

        const data = [];

        return {
            data,
            columns,
            handleResizeColumn: (w, col) => {
                col.width = w;
            },
        };
    },
    data() {
		return {
            transaction_list: [],
            transaction_pagination: {
                meta: {
                    to: 1
                },
                links: {
                    next: null,
                }
            },

            balance_per_vault: 0,

            loading: false,
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
            }
        }
    },
    methods: {
        getTransactions(account_id) {
            this.account_id = account_id
            this.form.per_page = this.pageSize
            this.getTransactionsByParams()
        },
        getTransactionsByParams() {
            this.loading = true
            this.form.export_to = ''

            axios.post(`/transaction/previous/${this.account_id}`, this.form, {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                let data = res.data
                this.transaction_list = data.data
                this.transaction_pagination = data
                this.balance_per_vault = data.balance_per_vault
                this.loading = false
                message.success(data.message)
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
        searchTransactions() {
            this.current = 1

            this.form.per_page = this.pageSize
            this.form.page = 1

            this.getTransactionsByParams()
        },    
        onPageChange() {
            this.form.per_page = this.pageSize
            this.form.page = this.current

            this.getTransactionsByParams()
        },
        toFirstPage() {
            this.searchTransactions()
        },
        toPreviousPage() {
            this.current = this.current - 1
            this.form.page = this.current
            this.getTransactionsByParams()
        },
        toNextPage() {
            this.current = this.current + 1
            this.form.page = this.current
            this.getTransactionsByParams()
        },
        toLastPage() {
            this.current = this.transaction_pagination.meta.to
            this.form.page = this.current
            this.getTransactionsByParams()
        },
        changeColumnSort(column_to_sort) {
            this.form[column_to_sort] = this.form[column_to_sort] + 1
            if(this.form[column_to_sort] == 3) {
                this.form[column_to_sort] = 0
            }

            this.searchTransactions()
        },
    },
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
.prev-trans-heading {
    display: flex;
    justify-content: space-between;
    padding: 15px 0 5px;
    border-bottom: 2px solid #d4d4d4;
    margin-bottom: 10px;
}
.prev-trans-heading h3 {
    margin: 0;
    font-weight: 700;
}
.prev-trans-heading h3.yellow {
    background-color: yellow;
    padding: 0 10px;
}
:deep(.table-striped) td {
  background-color: #fafafa;
}
</style>


