<template>
  <div class="generate-report-container">
    <SummaryGenerateReport />
  </div>

  <div class="client-filter">
    <a-row :gutter="16">
      <a-col :span="6">
        <a-form>
        <a-form-item
          label="Filter"
          name="clientfilter">
          <a-input>
            <template #prefix>
              <FilterOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>

  <a-table 
    sticky 
    :columns="columns" 
    size="small" 
    :data-source="data" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 1500 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'summid'">
        Summary ID<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'acctdes'">
        Account Description<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'status'">
        Status<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'clientid'">
        Client ID<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'type'">
        Type<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'bflag'">
        BFlag<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'crate'">
        CRate<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'rchanges'">
        RChanges<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'liepdate'">
        LIEP Date<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'lyear'">
        LYear<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'lmonth'">
        LMonth<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'tyear'">
        TYear<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'todate'">
        To Date<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'pbt'">
        PBT<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'bfic'">
        BFIC<br />
        <input class="single-input" type="text" />
      </template>
    </template>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'status'">
        <a-tag color="#87d068">{{ text }}</a-tag>
      </template>
      <template v-if="column.dataIndex === 'type'">
        <span>
          <a-tag color="#FBB125">{{ text }}</a-tag>
        </span>
      </template>
    </template>
    <template #summary>
      <a-table-summary :fixed="fixedTop ? 'bottom' : 'top'">
        <a-table-summary-row>
          <a-table-summary-cell :col-span="8"></a-table-summary-cell>
          <a-table-summary-cell>Total</a-table-summary-cell>
          <a-table-summary-cell>800.00</a-table-summary-cell>
          <a-table-summary-cell>123.00</a-table-summary-cell>
          <a-table-summary-cell>900.00</a-table-summary-cell>
          <a-table-summary-cell>900.00</a-table-summary-cell>
          <a-table-summary-cell>1,000.00</a-table-summary-cell>
          <a-table-summary-cell>1,300.00</a-table-summary-cell>
        </a-table-summary-row>
      </a-table-summary>
    </template>
  </a-table>
</template>
<script>
import { FormOutlined, DeleteOutlined, FilterOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
import SummaryGenerateReport from "../../components/summary/SummaryGenerateReport.vue";

export default defineComponent({
  components: {
    FormOutlined,
    DeleteOutlined,
    FilterOutlined,
    DownOutlined,
    SummaryGenerateReport,
  },
  setup() {
    const columns = ref([
      { title: 'Summary ID', dataIndex: 'key', key: 'summid', width: 100, resizable: true, },
      { title: 'Account Description', dataIndex: 'acctdes', key: 'acctdes', width: 150, resizable: true, ellipsis: true, },
      { title: 'Status', dataIndex: 'status', key: 'status', width: 100, resizable: true, },
      { title: 'Client ID', dataIndex: 'clientid', key: 'clientid', width: 100, resizable: true, },
      { title: 'Type', dataIndex: 'type', key: 'type', width: 100, resizable: true, },
      { title: 'BFlag', dataIndex: 'bflag', key: 'bflag', width: 100, resizable: true, },
      { title: 'CRate', dataIndex: 'crate', key: 'crate', width: 100, resizable: true, },
      { title: 'RChanges', dataIndex: 'rchanges', key: 'rchanges', width: 100, resizable: true, },
      { title: 'LIEP Date', dataIndex: 'liepdate', key: 'liepdate', width: 150, resizable: true, },
      { title: 'LYear', dataIndex: 'lyear', key: 'lyear', width: 100, resizable: true, },
      { title: 'LMonth', dataIndex: 'lmonth', key: 'lmonth', width: 100, resizable: true, },
      { title: 'TYear', dataIndex: 'tyear', key: 'tyear', width: 100, resizable: true, },
      { title: 'To Date', dataIndex: 'todate', key: 'todate', width: 100, resizable: true, },
      { title: 'PBT', dataIndex: 'pbt', key: 'pbt', width: 100, resizable: true, },
      { title: 'BFIC', dataIndex: 'bfic', key: 'bfic', width: 100, resizable: true, }
    ]);
    const data = [];

    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        acctdes: 'Lindsey',
        status: 'Active',
        clientid: i,
        type: 'ORG',
        bflag: '0',
        crate: '0.01%',
        rchanges: '2',
        liepdate: '01/01/2000',
        lyear: '0.00',
        lmonth: '0.00',
        tyear: '0.00',
        todate: '0.00',
        pbt: '0.00',
        bfic: '0.00',
      });
    }

    return {
      data,
      columns,
      fixedTop: ref(false),
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
    };
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
</style>


