<template>
  <div>
    <a-button size="large" type="primary" @click="showModal">Add Bulk</a-button>
    <a-modal 
        v-model:visible="visible" 
        title="Add Bulk Clients" 
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
        <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" :scroll="{ x: 2000, y: 400 }" size="small" :pagination="false">
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
  title: 'First Name',
  dataIndex: 'fname',
  width: 150
}, {
  title: 'Last Name',
  dataIndex: 'lname',
  width: 150
}, {
  title: 'Gender',
  dataIndex: 'gender',
  width: 150
}, {
  title: 'Date of Birth',
  dataIndex: 'dob',
  width: 150
}, {
  title: 'Email Address',
  dataIndex: 'email',
  width: 200,
}, {
  title: 'Organization',
  dataIndex: 'organization',
  width: 150,
}, {
  title: 'Address1',
  dataIndex: 'address1',
  width: 200,
}, {
  title: 'Address2',
  dataIndex: 'address2',
  width: 200,
}, {
  title: 'City',
  dataIndex: 'city',
  width: 150
}, {
  title: 'State',
  dataIndex: 'state',
  width: 100
}, {
  title: 'Zip',
  dataIndex: 'zip',
  width: 100
}, {
  title: 'Phone',
  dataIndex: 'phone',
  width: 150
}, {
  title: 'Type',
  dataIndex: 'type',
  width: 150
}, {
  title: 'CA Date',
  dataIndex: 'cadate',
  width: 100
}, {
  title: 'Note',
  dataIndex: 'note',
  width: 300,
}, {
  title: 'Tags',
  dataIndex: 'tags',
  width: 100
}, {
  title: 'Created At',
  dataIndex: 'createdat',
  width: 100
}, {
  title: 'Action',
  dataIndex: 'action',
  fixed: 'right',
  width: 60,
}];
const data = [{
  key: '1',
  fname: 'John',
  lname: 'Brown',
  gender: 'Male',
  dob: '2012-11-26',
  email: 'johnbrown@gmail.com',
  organization: 'United Organization',
  address1: '123 Main St',
  address2: 'Suite 804',
  city: 'New York',
  state: 'NY',
  zip: '10016',
  phone: '+1234567890',
  type: 'Organization',
  age: '32',
  cadate: '1977-11-16',
  note: 'Put your note here',
  tags: 'minus',
  createdat: '2022-11-20',
}, {
  key: '2',
  fname: 'John',
  lname: 'Brown',
  gender: 'Male',
  dob: '2012-11-26',
  email: 'johnbrown@gmail.com',
  organization: 'United Organization',
  address1: '123 Main St',
  address2: 'Suite 804',
  city: 'New York',
  state: 'NY',
  zip: '10016',
  phone: '+1234567890',
  type: 'Organization',
  age: '32',
  cadate: '1977-11-16',
  note: 'Put your note here',
  tags: 'minus',
  createdat: '2022-11-20',
}, {
  key: '3',
  fname: 'John',
  lname: 'Brown',
  gender: 'Male',
  dob: '2012-11-26',
  email: 'johnbrown@gmail.com',
  organization: 'United Organization',
  address1: '123 Main St',
  address2: 'Suite 804',
  city: 'New York',
  state: 'NY',
  zip: '10016',
  phone: '+1234567890',
  type: 'Organization',
  age: '32',
  cadate: '1977-11-16',
  note: 'Put your note here',
  tags: 'minus',
  createdat: '2022-11-20',
}, {
  key: '4',
  fname: 'John',
  lname: 'Brown',
  gender: 'Male',
  dob: '2012-11-26',
  email: 'johnbrown@gmail.com',
  organization: 'United Organization',
  address1: '123 Main St',
  address2: 'Suite 804',
  city: 'New York',
  state: 'NY',
  zip: '10016',
  phone: '+1234567890',
  type: 'Organization',
  age: '32',
  cadate: '1977-11-16',
  note: 'Put your note here',
  tags: 'minus',
  createdat: '2022-11-20',
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