<template>
  <div>
    <a-button size="large" type="primary" @click="showModal">Add Bulk</a-button>
    <a-modal 
        v-model:visible="visible" 
        title="Add Bulk Terms" 
        ok-text="Add"
        centered
        cancel-text="Cancel"
        width="1200px"
        class="addbulkmodal"
        bodyStyle="padding: 0;"
        @ok="handleOk">
      <p class="note">You may copy and paste your data from excel or any spreadsheet files here and it will automatically show in the table below. To edit the content of each cell just click on it and enter new values. To add new row just click (+) button. To remove a row just click on its (x) button at the right. To remove multiple rows just check those rows and click (-) button.</p>
      <div class="addbulk-container">
        <div class="addbulk-action">
          <a-button type="primary">Paste</a-button>
          <a-button type="primary">
            <template #icon>
              <plus-outlined />
            </template>
          </a-button>
          <a-button type="danger">
            <template #icon>
              <minus-outlined />
            </template>
          </a-button>
        </div>
        <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" :scroll="{ y: 400 }" size="small" :pagination="false">
          <template #bodyCell="{ column }">
            <template v-if="column.dataIndex === 'action'">
              <CloseOutlined style="color: red; margin-left: 10px;" />
            </template>
          </template>
        </a-table>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { PlusOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons-vue';
const columns = [{
  title: 'Applied to Account',
  dataIndex: 'appliedacct',
}, {
  title: 'Effective Date',
  dataIndex: 'effdate',
}, {
  title: 'Rate',
  dataIndex: 'rate',
}, {
  title: 'Compound Period',
  dataIndex: 'compoundperiod',
}, {
  title: 'Note',
  dataIndex: 'note',
}, {
  title: 'Created At',
  dataIndex: 'createdat',
}, {
  title: 'Action',
  dataIndex: 'action',
  fixed: 'right',
  width: 60,
}];
const data = [{
  key: '1',
  appliedacct: 'Lindsey, Alan (loan 1)',
  effdate: '10-11-2021',
  rate: '63.0%',
  compoundperiod: 'Daily',
  note: 'Your note here',
  createdat: '10-11-2021',
}, {
  key: '2',
  appliedacct: 'Lindsey, Alan (loan 1)',
  effdate: '10-11-2021',
  rate: '63.0%',
  compoundperiod: 'Daily',
  note: 'Your note here',
  createdat: '10-11-2021',
}, {
  key: '3',
  appliedacct: 'Lindsey, Alan (loan 1)',
  effdate: '10-11-2021',
  rate: '63.0%',
  compoundperiod: 'Daily',
  note: 'Your note here',
  createdat: '10-11-2021',
}, {
  key: '4',
  appliedacct: 'Lindsey, Alan (loan 1)',
  effdate: '10-11-2021',
  rate: '63.0%',
  compoundperiod: 'Daily',
  note: 'Your note here',
  createdat: '10-11-2021',
}];
export default defineComponent({
  components: {
    PlusOutlined,
    MinusOutlined,
    CloseOutlined
  },
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
      }),
    };

    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = e => {
      console.log(e);
      visible.value = false;
    };

    return {
      visible,
      showModal,
      handleOk,
      columns,
      data,
      rowSelection
    };
  },

});
</script>
<style scoped>
.note {
  background: #fdefb2;
  padding: 15px 24px;
  margin: 0;
}
.addbulk-container {
  padding: 24px;
}
.addbulk-action {
  margin-bottom: 15px;
}
.addbulk-action .ant-btn {
  margin-right: 10px;
}
</style>