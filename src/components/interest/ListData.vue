<template>
  <div class="client-filter">
    <a-row :gutter="16">
      <a-col :span="6">
        <a-form>
        <a-form-item
          label="Filter"
          name="clientfilter"
        >
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
    :data-source="data" 
    :row-selection="rowSelection" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 1500 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    size="small"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'owner'">
        Owner<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'acctid'">
        Account ID<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'acctdes'">
        Account Description<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'effdate'">
        Eff. Date<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'txtype'">
        TxType<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'intdes'">
        Interest Description<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'amount'">
        Amount<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'entrydate'">
        Entry Date<br />
        <input class="single-input" type="text" />
      </template>
    </template>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'txtype'">
        <span>
          <a-tag color="#FBB125">{{ text }}</a-tag>
        </span>
      </template>
    </template>
    <template #expandedRowRender>
      <div class="expanded-content">
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-row :gutter="24">
            <a-col :span="12">
              <a-form-item label="Rate this Period">
                <a-input />
              </a-form-item>
              <a-form-item label="Last IP Pmt Date">
                <a-input />
              </a-form-item>
              <a-form-item label="Balance on Last IP Date">
                <a-input />
              </a-form-item>
              <a-form-item label="Days in Year for Period">
                <a-input />
              </a-form-item>
              <a-form-item label="Account Debtor ID">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Rate Changes">
                <a-input />
              </a-form-item>
              <a-form-item label="Loan Rate Changes">
                <a-input />
              </a-form-item>
              <a-form-item label="Last Rate in force of Period">
                <a-input />
              </a-form-item>
              <a-form-item label="If Txs prior to period end">
                <a-input />
              </a-form-item>
              <a-form-item label="Date of most recent IP or 1st Tx">
                <a-input />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="24">
            <a-col :span="12">
              <a-form-item label="Recent Acct Balance">
                <a-input />
              </a-form-item>
              <a-form-item label="Last Transaction Date">
                <a-input />
              </a-form-item>
              <a-form-item label="Previous Balance this Table">
                <a-input />
              </a-form-item>
              <a-form-item label="New Balance">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12" class="approve-btn">
              <a-form-item>
                <a-button type="primary" html-type="submit">Approve</a-button>
            </a-form-item>
            </a-col>
          </a-row>        
      </a-form>
        
      </div>
    </template>
  </a-table>
</template>
<script>
import { FormOutlined, DeleteOutlined, FilterOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    FormOutlined,
    DeleteOutlined,
    FilterOutlined,
    DownOutlined,
  },
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    const columns = ref([{
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      width: 150,
      resizable: true,
      ellipsis: true,
    }, {
      title: 'Account Id',
      dataIndex: 'key',
      key: 'acctid',
      width: 100,
      resizable: true,
    }, {
      title: 'Account Description',
      dataIndex: 'acctdes',
      key: 'acctdes',
      width: 200,
      resizable: true,
      ellipsis: true,
    }, {
      title: 'Eff. Date',
      dataIndex: 'effdate',
      key: 'effdate',
      width: 100,
      resizable: true,
    }, {
      title: 'TxType',
      dataIndex: 'txtype',
      key: 'txtype',
      width: 100,
      resizable: true,
    }, {
      title: 'Interest Description',
      dataIndex: 'intdes',
      key: 'intdes',
      width: 200,
      resizable: true,
      ellipsis: true,
    }, {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: 100,
      resizable: true,
    }, {
      title: 'Entry Date',
      dataIndex: 'entrydate',
      key: 'entrydate',
      width: 100,
      resizable: true,
    }]);
    const data = [];

    for (let i = 0; i < 100; i++) {
      data.push({
        owner: 'DASP Workshop',
        key: i,
        acctdes: 'Avila, Althea',
        effdate: '01/01/2000',
        txtype: 'DEP',
        intdes: 'Int. Accrued 01/01/22 - 01/01/22',
        amount: '200.00',
        entrydate: '01/01/2000',
      });
    }

    return {
      data,
      columns,
      rowSelection,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
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
.expanded-content :deep(.ant-row) {
  margin-bottom: 24px;
}
.expanded-content {
  max-width: 1200px;
  margin: 0 auto;
}
.approve-btn {
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
}
</style>


