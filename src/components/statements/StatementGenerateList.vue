<template>
  <a-row :gutter="24">
    <a-col :span="10">
      <a-row class="search-row" :gutter="16">
        <a-col>
          <a-form layout="vertical">
            <a-form-item label="Search">
              <a-input />
            </a-form-item>
          </a-form>
        </a-col>
        <a-col>
          <a-dropdown class="client-action" :trigger="['click']">
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  Email all their Respective Statements
                </a-menu-item>
                <a-menu-item>
                  Email Statement to Selected Accounts
                </a-menu-item>
              </a-menu>
            </template>
            <a-button>
              Action
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </a-col>
      </a-row>
      <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" size="small" :pagination="false" :scroll="{ y: 400 }">
        <template #bodyCell="{ column }">
          <template v-if="column.dataIndex === 'action'">
            <a-button>Show</a-button>
          </template>
        </template>
      </a-table>
    </a-col>
    <a-col :span="14">
      <div class="statement-report-container">
        <StatementGenerateReport />
      </div>
    </a-col>
  </a-row>
      
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
import StatementGenerateReport from "../../components/statements/StatementGenerateReport.vue";
import { defineComponent } from "vue";
const columns = [
  {
    title: "",
    dataIndex: "account",
  },
  {
    title: "",
    dataIndex: "action",
    width: 100,
  }

];
const data = [
  {
    key: "1",
    account: "Winters, Jamison (Loan 1)",
  },
  {
    key: "2",
    account: "Winters, Jamison (Loan 1)",
    accountsummary: "Credit (internal funds)",
  },
  {
    key: "3",
    account: "Winters, Jamison (Loan 1)",
  }
];

export default defineComponent({
  components: {
    DownOutlined,
    StatementGenerateReport,
  },
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return {
      data,
      columns,
      rowSelection,
    };
  },
});
</script>
<style scoped>
.search-row {
  align-items: flex-end;
  margin-bottom: 24px;
}
.search-row :deep(.ant-form-item) {
  margin-bottom: 0;
}
.statement-report-container {
  padding: 10px 24px 24px;
  border: 1px solid #d4d4d4;
}
</style>