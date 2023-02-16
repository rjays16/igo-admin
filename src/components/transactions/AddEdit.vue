<template>
    <div>
        <a-button size="large" type="primary" @click="showModal">Add Transaction</a-button>
        <a-modal 
            v-model:visible="visible" 
            title="Add Transaction" 
            ok-text="Save" 
            width="1000px" 
            centered
            :footer="null"
            cancel-text="Cancel">
            <a-form
                :model="AddEditformState"
                name="basic"
                layout="vertical" 
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed">
                <a-row :gutter="24">
                    <a-col :span="12">
                        <a-form-item
                            label="Account"
                            name="account_id"
                            has-feedback
                            :rules="[{ required: true, message: 'Please select the account.' }]">
                            <a-select placeholder="Select Account" v-model:value="account_id"
                                showSearch
                                optionFilterProp="children"
                                :options="accounts"
                                :filterOption="filterOptions"
                                label-in-value
                                @change="handleAccountChange">
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item
                            label="Effective Date"
                            name="effective_date"
                            :rules="[{ required: true, message: 'Please select the effective date.' }]">
                            <a-date-picker v-model:value="AddEditformState.effective_date" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="12">
                        <a-form-item
                            label="Transaction Type"
                            name="trans_type_id"
                            has-feedback
                            :rules="[{ required: true, message: 'Please select the Transaction Type.' }]">
                            <a-select placeholder="Select Transaction Type" v-model:value="trans_type_id"
                                showSearch
                                optionFilterProp="children"
                                :options="transaction_types"
                                :filterOption="filterOptions"
                                label-in-value
                                @change="handleTransactionTypeChange">
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item
                            label="Amount"
                            name="amount"
                            :rules="[{ required: true, message: 'Please input the amount.' }]">
                            <a-input v-model:value="AddEditformState.amount" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="12">
                        <a-form-item
                            label="Entry Date"
                            name="entry_date"
                            :rules="[{ required: true, message: 'Please select the entry date.' }]">
                            <a-date-picker v-model:value="AddEditformState.entry_date" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-form-item
                            label="Memo"
                            name="memo"
                            :rules="[{ required: true, message: 'Please input the memo.' }]">
                            <a-textarea v-model:value="AddEditformState.memo" :maxlength="255" />
                        </a-form-item>
                    </a-col>
                </a-row>

                <a-row :gutter="24">
                    <a-col :span="8" class="justify-end">
                        <a-form-item>
                            <a-button type="warning" html-type="submit" @click="handleCancel">Cancel</a-button>
                            <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Add</a-button>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            
            <PrevTransactions ref="prevTransactionsTable" />
        </a-modal>        
    </div>
</template>
<script>
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import PrevTransactions from "../../components/transactions/PrevTransactions.vue";
import axios from 'axios'

export default defineComponent({
    components: {
        PrevTransactions,
    },
    setup() {
        const loading = ref(false);
        const visible = ref(false);

        const showModal = () => {
            visible.value = true;
        };

        const AddEditformState = reactive({
            effective_date: null,
            amount: null,
            memo: null,
            entry_date: null
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const handleOk = () => {
            visible.value = false;
        };
        const handleCancel = () => {
            visible.value = false;
        };

        return {
            visible,
            showModal,
            AddEditformState,
            onFinish,
            onFinishFailed,
            handleCancel,
            handleOk,
            loading,
        };
    },
    data() {
		return {
            accounts: [],
            transaction_types: [],

            account_id: null,
            acct_description: null,

            trans_type_id: null,
            trans_type: null,

            options_size: parseInt(import.meta.env.VITE_SELECT_MAX_PAGESIZE)
        }
    },
    methods: {
        getAccounts() {
            let data = {
                per_page: this.options_size
            }

            axios.post("/account", data, {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                this.accounts = res.data.data
            })
            .catch((err) => {
                console.error(err.response.data.message)
                this.accounts = []
            });
        },
        getTransactionTypes() {
            let data = {
                per_page: this.options_size
            }

            axios.post("/transaction-type", data, {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                this.transaction_types = res.data.data
            })
            .catch((err) => {
                console.error(err.response.data.message)
                this.transaction_types = []
            });
        },
        submit() {
            this.loading = true

            axios.post("/transaction/store", toRaw(this.AddEditformState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false
            })
            .catch((err) => {
                message.error(err.response.data.message)
                this.loading = false
            });
        },
        filterOptions(input, option) {
            return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        },
        handleAccountChange(option) {
            this.AddEditformState.account_id = option.value
            this.AddEditformState.acct_description = option.label

            this.$refs.prevTransactionsTable.getTransactions(option.value)
        },
        handleTransactionTypeChange(option) {
            this.AddEditformState.trans_type_id = option.value
            this.AddEditformState.trans_type = option.label
        },
    },
    mounted() {
        this.getAccounts()
        this.getTransactionTypes()
    }
});
</script>
<style scoped>
.ant-form-item {
    margin-bottom: 15px;
}
.ant-picker {
    width: 100%;
}
.justify-end {
    display: flex;
    align-items: flex-end;
}
.justify-end button {
    margin-right: 20px;
}
</style>