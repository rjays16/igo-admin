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
    size="small" 
    :data-source="data" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 1500 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'date'">
        Date<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'type'">
        Type<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'memo'">
        Memo<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'effd'">
        Eff D(+/-)<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'balance'">
        Balance<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'sdcmint'">
        SDCM Int.<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'activerate'">
        Active Rate<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'dailyrate'">
        Daily Rate<br />
        <input class="single-input" type="text" />
      </template>
      <template v-if="column.key === 'intcheckthru'">
        Int Check Thru<br />
        <input class="single-input" type="text" />
      </template>
    </template>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'type'">
        <span>
          <a-tag color="#FBB125">{{ text }}</a-tag>
        </span>
      </template>
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
    const columns = ref([{
      title: 'Date',
      dataIndex: 'key',
      key: 'date',
      width: 200,
      resizable: true,
    }, {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 100,
      resizable: true,
    }, {
      title: 'Memo',
      dataIndex: 'memo',
      key: 'memo',
      width: 250,
      resizable: true,
      ellipsis: true,
    }, {
      title: 'Eff. D(+/-)',
      dataIndex: 'effd',
      key: 'effd',
      width: 150,
      resizable: true,
    }, {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      width: 150,
      resizable: true,
    }, {
      title: 'SDCM Int.',
      dataIndex: 'sdcmint',
      key: 'sdcmint',
      width: 150,
      resizable: true,
    }, {
      title: 'Active Rate',
      dataIndex: 'activerate',
      key: 'activerate',
      width: 150,
      resizable: true,
    }, {
      title: 'Daily Rate',
      dataIndex: 'dailyrate',
      key: 'dailyrate',
      width: 200,
      resizable: true,
    }, {
      title: 'Int Check Thru',
      dataIndex: 'intcheckthru',
      key: 'intcheckthru',
      width: 150,
      resizable: true,
    }]);
    const data = [];

    for (let i = 0; i < 100; i++) {
      data.push({
        key: '01/01/2000',
        type: 'IEP',
        memo: 'Put your memo here',
        effd: '0.00',
        balance: '0.00',
        sdcmint: '0.00',
        activerate: '5%',
        dailyrate: '0.122345%',
        intcheckthru: '0.00',
      });
    }

    return {
      data,
      columns,
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
:deep(.table-striped) td {
  background-color: #fafafa;
}
</style>


