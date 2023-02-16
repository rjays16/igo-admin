<template>
    <a-row :gutter="24">
        <a-col :span="4">
            <a-form layout="inline" class="filter-generate">
                <a-form-item label="Interest Period">
                    <a-date-picker />
                </a-form-item>                
            </a-form>
        </a-col>
        <a-col>
            <a-button type="primary" html-type="submit">Generate</a-button>
        </a-col>
        <a-col>
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
                    <a-button>
                        Export To
                        <ExportOutlined />
                    </a-button>
                </a-dropdown>
            </div>
        </a-col>
    </a-row>

    <div class="scroll-table-container">
        <a-card size="small" title="Balance Summary by Type" style="width: 500px;">
            <a-table :columns="columns" :data-source="data" size="small" :pagination="false">
                <template #summary>
                    <a-table-summary>
                        <a-table-summary-row>
                            <a-table-summary-cell :col-span="2"></a-table-summary-cell>
                            <a-table-summary-cell>Total: $1,200.00</a-table-summary-cell>
                        </a-table-summary-row>
                    </a-table-summary>
                </template>
            </a-table>
        </a-card>
        <a-card size="small" title="Interest Last Year and Current Balance" style="width: 500px;">
            <a-table :columns="columnstwo" :data-source="datatwo" size="small" :pagination="false">
                <template #summary>
                    <a-table-summary>
                        <a-table-summary-row>
                            <a-table-summary-cell :col-span="1"></a-table-summary-cell>
                            <a-table-summary-cell>Total: $180,200.00</a-table-summary-cell>
                            <a-table-summary-cell>80,200.00</a-table-summary-cell>
                        </a-table-summary-row>
                    </a-table-summary>
                </template>
            </a-table>
        </a-card>
        <a-card size="small" title="Balance Summary by Type" style="width: 500px;">
            <a-table :columns="columns" :data-source="data" size="small" :pagination="false">
                <template #summary>
                    <a-table-summary>
                        <a-table-summary-row>
                            <a-table-summary-cell :col-span="2"></a-table-summary-cell>
                            <a-table-summary-cell>Total: $1,200.00</a-table-summary-cell>
                        </a-table-summary-row>
                    </a-table-summary>
                </template>
            </a-table>
        </a-card>
        <a-card size="small" title="Interest Last Year and Current Balance" style="width: 500px;">
            <a-table :columns="columnstwo" :data-source="datatwo" size="small" :pagination="false">
                <template #summary>
                    <a-table-summary>
                        <a-table-summary-row>
                            <a-table-summary-cell :col-span="1"></a-table-summary-cell>
                            <a-table-summary-cell>Total: $180,200.00</a-table-summary-cell>
                            <a-table-summary-cell>80,200.00</a-table-summary-cell>
                        </a-table-summary-row>
                    </a-table-summary>
                </template>
            </a-table>
        </a-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ExportOutlined, FileExcelOutlined, FileOutlined, FilePdfOutlined } from "@ant-design/icons-vue";

const columns = [
    { title: 'Type', dataIndex: 'type', },
    { title: 'Description', dataIndex: 'description', },
    { title: 'Amount', dataIndex: 'amount', }
];
const data = [
    { key: '1', type: '0', description: 'Owner', amount: '$100', },
    { key: '2', type: '1', description: 'Children', amount: '$100', },
    { key: '3', type: '2', description: 'Organization', amount: '$100', }
];

const columnstwo = [
    { title: 'Type', dataIndex: 'typetwo', },
    { title: 'Int Last Year', dataIndex: 'intlastyear', },
    { title: 'Current Balance', dataIndex: 'curbalance', }
];
const datatwo = [
    { key: '1', typetwo: '0', intlastyear: '-', curbalance: '29,000', },
    { key: '2', typetwo: '1', intlastyear: '32,000', curbalance: '-', },
    { key: '3', typetwo: '2', intlastyear: '-', curbalance: '19,000', }
];

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
            data,
            columns,
            columnstwo,
            datatwo,
            handleMenuClick
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
    gap: 10%;
    justify-content: center;
}
:deep(.ant-table-summary) tr td {
    font-weight: 700;
    border-bottom: none;
}
.export-dropdown-wrap {
  margin-left: auto;
  margin-right: 0 !important;
}
</style>