<template>
  <div class="report-container">
    <div class="sticky-report-header">
      <a-row :gutter="24">
        <a-col :span="12">
          <h3>Loan Extents</h3>
          <p>First TX 01/01/2021</p>
          <p>Last TX 01/01/2021</p>
          <p></p>
        </a-col>
        <a-col :span="12">
          <a-button type="primary">Email to Client</a-button>
          <a-dropdown class="client-action" :trigger="['click']">
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  Excel FIle
                </a-menu-item>
                <a-menu-item>
                  CSV File
                </a-menu-item>
                <a-menu-item>
                  PDF File
                </a-menu-item>
              </a-menu>
            </template>
            <a-button>
              Export To
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </a-col>
      </a-row>
    </div>
    <a-table class="report-table" :columns="columns" :data-source="data" size="small" :pagination="false" :scroll="{ x: 800, y: 400 }">
      <template #title>
        <div class="report-header">
          <a-row :gutter="16">
            <a-col :span="24">
              <h2>Talent Builders</h2>
              <p>913 Christine Rd, Columbia, KY 42728</p>
              <p>(330) 277-5000</p>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <span>Samaritan Ministries 
              <br>0</span>
            </a-col>
            <a-col :span="12">
              <h2>Statement of Account</h2>
              <p>Statement Date: 01/01/2022</p>
            </a-col>
          </a-row>
        </div>
      </template>
    </a-table>
    <a-table class="report-table" :columns="columnstwo" :data-source="datatwo" size="small" :pagination="false" :scroll="{ x: 800, y: 400 }">
      <template #title>
        <div class="report-header">
          <h2>Ending Balance</h2>
        </div>
      </template>
      <template #summary>
        <a-table-summary>
          <a-table-summary-row>
            <a-table-summary-cell :col-span="1"></a-table-summary-cell>
            <a-table-summary-cell>Net Effect on Account Balance</a-table-summary-cell>
            <a-table-summary-cell>73,645.30</a-table-summary-cell>
            <a-table-summary-cell>73,645.30</a-table-summary-cell>
            <a-table-summary-cell>73,645.30</a-table-summary-cell>
          </a-table-summary-row>
        </a-table-summary>
      </template>
    </a-table>
  </div>
</template>


<script>
import { DownOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
    width: 120,
  },
  {
    title: "Type",
    dataIndex: "type",
    width: 80,
  },
  {
    title: "Memo",
    dataIndex: "memo",
    width: 250,
    ellipsis: true,
  },
  {
    title: "(+/-)",
    dataIndex: "int",
    width: 150,
  },
  {
    title: "Balance",
    dataIndex: "balance",
  }

];
const data = [
  {
    key: "1",
    date: "01/01/2021",
    type: "IP",
    memo: "Interest Accrued 01/01/21 - 01/01/22",
    int: "281.45",
    balance: "33,555.00",
  },
  {
    key: "2",
    date: "01/01/2021",
    type: "IP",
    memo: "Interest Accrued 01/01/21 - 01/01/22",
    int: "281.45",
    balance: "33,555.00",
  },
  {
    key: "3",
    date: "01/01/2021",
    type: "IP",
    memo: "Interest Accrued 01/01/21 - 01/01/22",
    int: "281.45",
    balance: "33,555.00",
  },
  {
    key: "4",
    date: "01/01/2021",
    type: "IP",
    memo: "Interest Accrued 01/01/21 - 01/01/22",
    int: "281.45",
    balance: "33,555.00",
  },
  {
    key: "5",
    date: "01/01/2021",
    type: "IP",
    memo: "Interest Accrued 01/01/21 - 01/01/22",
    int: "281.45",
    balance: "33,555.00",
  },
  {
    key: "6",
    date: "01/01/2021",
    type: "IP",
    memo: "Interest Accrued 01/01/21 - 01/01/22",
    int: "281.45",
    balance: "33,555.00",
  }
];

const columnstwo = [
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Account Summary",
    dataIndex: "accountsummary",
    ellipsis: true,
  },
  {
    title: "Statement",
    dataIndex: "statement",
  },
  {
    title: "To Date",
    dataIndex: "todate",
  },
  {
    title: "Lifetime",
    dataIndex: "lifetime",
  },
];
const datatwo = [
  {
    key: "1",
    type: "D",
    accountsummary: "Deposit (new money)",
    statement: "155003.00",
    todate: "155003.00",
    lifetime: "155003.00",
  },
  {
    key: "2",
    type: "C",
    accountsummary: "Credit (internal funds)",
    statement: "0",
    todate: "0",
    lifetime: "0",
  },
  {
    key: "3",
    type: "T",
    accountsummary: "Transfer (loan to loan)",
    statement: "0",
    todate: "0",
    lifetime: "0",
  },
  {
    key: "4",
    type: "W",
    accountsummary: "Withdrawal",
    statement: "-155003.00",
    todate: "-155003.00",
    lifetime: "-155003.00",
  },
  {
    key: "5",
    type: "IP",
    accountsummary: "Interest Earned, Periodic",
    statement: "2106.20",
    todate: "2106.20",
    lifetime: "2106.20",
  },
  {
    key: "6",
    type: "IA",
    accountsummary: "Interest Adjustments",
    statement: "16217.40",
    todate: "16217.40",
    lifetime: "16217.40",
  },
  {
    key: "7",
    type: "A",
    accountsummary: "Adjustments",
    statement: "0",
    todate: "0",
    lifetime: "0",
  },
  {
    key: "8",
    type: "M",
    accountsummary: "Memo or Account Annotation",
    statement: "0",
    todate: "0",
    lifetime: "0",
  },
];

export default defineComponent({
  components: {
    DownOutlined
  },
  setup() {
    return {
      data,
      columns,
      datatwo,
      columnstwo,
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
.report-table {
  margin-bottom: 24px;
}
.report-header {
  text-align: right;
}
.report-header h2 {
  margin: 0;
}
.report-header p {
  margin: 0;
}
.report-header span {
  display: block;
  text-align: center;
}
.report-header :deep(.ant-row) {
  margin-bottom: 24px;
}
:deep(.ant-table-summary) tr td {
  font-weight: 700;
}
.report-container {
  position: relative;
}
.sticky-report-header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px 0 15px;
  background: #ffffff;
  margin-bottom: 15px;
}
.sticky-report-header p {
  margin: 0;
}
.sticky-report-header button {
  margin: 0 5px;
}
.sticky-report-header :deep(.ant-row) {
  align-items: flex-end;
}
</style>