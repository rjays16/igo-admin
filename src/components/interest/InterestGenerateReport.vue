<template>
    <a-form layout="inline" class="filter-generate">
        <a-form-item label="Interest Period">
            <a-date-picker />
        </a-form-item>
        <a-form-item label="Effective Date">
            <a-date-picker />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit">Generate</a-button>
        </a-form-item>
    </a-form>

    <div class="scroll-table-container">
        <div>
        <a-card size="small" title="Summary" style="width: 400px;">
            <a-table :columns="columns" :data-source="data" size="small" :pagination="false"></a-table>
        </a-card>
        <a-card size="small" title="Summary" style="width: 400px;">
            <a-table :columns="columns" :data-source="data" size="small" :pagination="false"></a-table>
        </a-card>
        </div>
        <a-card size="small" title="Liabilities by Debtor Organization" style="width: 1000px;">
            <a-table :columns="columnstwo" :data-source="datatwo" size="small" :pagination="false">
                <template #summary>
                    <a-table-summary>
                        <a-table-summary-row>
                            <a-table-summary-cell :col-span="1"></a-table-summary-cell>
                            <a-table-summary-cell>Total</a-table-summary-cell>
                            <a-table-summary-cell>1,200.00</a-table-summary-cell>
                            <a-table-summary-cell>1,200.00</a-table-summary-cell>
                            <a-table-summary-cell>1,200.00</a-table-summary-cell>
                        </a-table-summary-row>
                    </a-table-summary>
                </template>
            </a-table>
        </a-card>
        <div>
        <a-card size="small" title="Summary" style="width: 400px;">
            <a-table :columns="columns" :data-source="data" size="small" :pagination="false"></a-table>
        </a-card>
        <a-card size="small" title="Summary" style="width: 400px;">
            <a-table :columns="columns" :data-source="data" size="small" :pagination="false"></a-table>
        </a-card>
        </div>
        <a-card size="small" title="Liabilities by Debtor Organization" style="width: 1000px;">
            <a-table :columns="columnstwo" :data-source="datatwo" size="small" :pagination="false">
                <template #summary>
                    <a-table-summary>
                        <a-table-summary-row>
                            <a-table-summary-cell :col-span="1"></a-table-summary-cell>
                            <a-table-summary-cell>Total</a-table-summary-cell>
                            <a-table-summary-cell>1,200.00</a-table-summary-cell>
                            <a-table-summary-cell>1,200.00</a-table-summary-cell>
                            <a-table-summary-cell>1,200.00</a-table-summary-cell>
                        </a-table-summary-row>
                    </a-table-summary>
                </template>
            </a-table>
        </a-card>
    </div>

</template>

<script>
import { defineComponent } from 'vue';
const columns = [{
    title: '',
    dataIndex: 'description',
}, {
    title: 'Total',
    dataIndex: 'total',
}];
const data = [{
    key: '1',
    description: 'Interest This Period',
    total: '$380.00',
}, {
    key: '2',
    description: 'Recent Balances',
    total: '$380.00',
}, {
    key: '3',
    description: 'Current Balances',
    total: '$380.00',
}];

const columnstwo = [{
    title: 'Debtor Organization',
    dataIndex: 'debtororg',
}, {
    title: 'ID',
    dataIndex: 'id',
}, {
    title: 'Int This Method',
    dataIndex: 'intthismethod',
}, {
    title: 'Record Balance',
    dataIndex: 'recbalance',
}, {
    title: 'Current Balance',
    dataIndex: 'curbalance',
}];
const datatwo = [{
    key: '1',
    debtororg: 'Lindsey, Alan',
    id: 'C004',
    intthismethod: '380.00',
    recbalance: '380.00',
    curbalance: '380.00',
}, {
    key: '2',
    debtororg: 'Lindsey, Alan',
    id: 'C004',
    intthismethod: '380.00',
    recbalance: '380.00',
    curbalance: '380.00',
}, {
    key: '3',
    debtororg: 'Lindsey, Alan',
    id: 'C004',
    intthismethod: '380.00',
    recbalance: '380.00',
    curbalance: '380.00',
}];

export default defineComponent({
    setup() {
        return {
            data,
            columns,
            columnstwo,
            datatwo,
        };
    },
});
</script>
<style scoped>
.filter-generate {
    padding: 0 0 20px;
}
.table-footer {
    text-align: right;
    font-weight: 700;
}
.scroll-table-container {
    padding: 20px;
    border: 1px solid #f2f2f2;
    margin: 0 0 25px;
    display: flex;
    flex-wrap: wrap;
    height: 300px;
    overflow-y: scroll;
    gap: 5%;
    justify-content: center;
}
:deep(.ant-table-summary) tr td {
    font-weight: 700;
    border-bottom: none;
}
:deep(.ant-card-small) {
    margin-bottom: 15px;
}
</style>