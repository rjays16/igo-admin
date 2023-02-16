<template>
  <a-form layout="vertical" class="filter-generate">
    <a-row :gutter="16">
      <a-col>
        <a-form-item label="Account">
          <a-select placeholder="Open this select menu">
            <a-select-option value="Lindsey 01">Lindsey 01</a-select-option>
            <a-select-option value="Lindsey 02">Lindsey 02</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item label="From">
          <a-date-picker />
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item label="To">
          <a-date-picker />
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item label="Int Check Thru">
          <a-input />
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item>
          <a-button type="primary" html-type="submit">Generate</a-button>
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item>
          <a-button type="primary" html-type="submit">Email to Client</a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>

  <div class="scroll-table-container">
    <div class="generate-heading">
      <a-row :gutter="24">
        <a-col :span="4">
          Client ID: 005
        </a-col>
        <a-col :span="4">
          Name: DASP Workshop
        </a-col>
        <a-col :span="4">
          Loan Extents
        </a-col>
        <a-col :span="12">
          <span>First Transaction: 31/03/2006</span>
          <span>Last Transaction: 28/02/2022</span>
        </a-col>
      </a-row>
    </div>
    <a-card size="small" style="width: 700px">
      <a-table class="ia-generate-table" :columns="columns" :data-source="data" size="small" :pagination="false">
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
    </a-card>
    <a-card size="small" style="width: 700px">
      <a-table class="ia-interest-calculation" :columns="columnstwo" :data-source="datatwo" size="small" :pagination="false">
      </a-table>
    </a-card>
    <a-card size="small" style="width: 700px" >
      <a-table class="ia-generate-table" :columns="columns" :data-source="data" size="small" :pagination="false">
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
    </a-card>
    <a-card size="small" style="width: 700px">
      <a-table class="ia-interest-calculation" :columns="columnstwo" :data-source="datatwo" size="small" :pagination="false">
      </a-table>
    </a-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
const columns = [
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Account Summary",
    dataIndex: "accountsummary",
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
const data = [
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

const columnstwo = [
  {
  title: 'Interest Calculation Checks',
    children: [{
      title: '',
      dataIndex: 'calculation',
    }, {
      title: '',
      dataIndex: 'description',
    }],
  },
];
const datatwo = [
  {
    key: "1",
    calculation: "28/02/2022",
    description: "Last IP Payment Prior to This Statement End Date",
  },
  {
    key: "2",
    calculation: "$73,020.00",
    description: "Final Balance on Last IP Date",
  },
  {
    key: "3",
    calculation: "2.5%",
    description: "APR in force at Last IP Date",
  },
  {
    key: "4",
    calculation: "365",
    description: "Days in Years of Period (Error if crossing leap year boundary from first day of period)",
  },
  {
    key: "5",
    calculation: "0.006456%",
    description: "Daily Rate at Last IP Date",
  },
  {
    key: "6",
    calculation: "$1,035.05",
    description: "Interest through 09/21/22 (this statement range) on Balance as of Last IP Date",
  },
  {
    key: "7",
    calculation: "$ -",
    description: "Total SDCM Interest on Txs after last IP date (see below details)",
  },
  {
    key: "8",
    calculation: "$ 1,034.49",
    description: "Total UNPAID Interest through period end date",
  },
];

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
  padding: 0 0 20px;
  border: 1px solid #f2f2f2;
  margin: 0 0 25px;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  overflow-y: scroll;
  gap: 5%;
  justify-content: center;
  position: relative;
}
:deep(.ant-table-summary) tr td {
  font-weight: 700;
  border-bottom: none;
}
.ant-form-vertical > :deep(.ant-row) {
  align-items: flex-end;
}
.generate-heading {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background-color: #331edb;
  color: #fff;
  z-index: 100;
}
.generate-heading > :deep(.ant-row) span {
  padding: 0 10px;
}
.ia-generate-table :deep(.ant-table-thead) tr th {
  background-color: #000;
  color: #fff;
}
.ia-interest-calculation :deep(.ant-table-thead) tr th {
  background-color: #000;
  color: #fff;
}
.ia-interest-calculation :deep(.ant-table-thead) tr:nth-child(2) {
  display: none;
}
</style>