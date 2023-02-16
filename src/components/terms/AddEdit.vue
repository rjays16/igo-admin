<template>
  <div>
    <a-button size="large" type="primary" @click="showModal">Add Term</a-button>
    <a-modal 
      v-model:visible="visible" 
      title="Add Term Record" 
      ok-text="Save" 
      width="800px" 
      centered
      cancel-text="Cancel">
      <a-form
        :model="AddEditformState"
        name="basic"
        layout="vertical" 
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed">
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Account"
              name="account_id"
              has-feedback
              :rules="[{ required: true, message: 'Please select the account.' }]">
              <a-select placeholder="Select account" v-model:value="account_id"
                showSearch
                optionFilterProp="children"
                :options="accounts"
                :filterOption="filterOptions"
                label-in-value
                @change="handleAccountChange">
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Effective Date"
              name="effective_date"
              :rules="[{ required: true, message: 'Please select the effective date.' }]">
              <a-date-picker v-model:value="AddEditformState.effective_date" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Rate"
              name="rate"
              :rules="[{ required: true, message: 'Please input the rate.' }]">
              <a-input v-model:value="AddEditformState.rate" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Compound Period"
              name="compound_period_id"
              has-feedback
              :rules="[{ required: true, message: 'Please select the compounding period.' }]">
              <a-select placeholder="Select compound period" v-model:value="compound_period_id"
                showSearch
                optionFilterProp="children"
                :options="compound_periods"
                :filterOption="filterOptions"
                label-in-value
                @change="handleCompoundPeriodChange">
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-form-item
          label="Note"
          name="note"
          :rules="[{ required: true, message: 'Please input the note.' }]">
          <a-textarea v-model:value="AddEditformState.note" :maxlength="255" />
        </a-form-item>        
      </a-form>

      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Add</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
  setup() {
    const loading = ref(false);
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const AddEditformState = reactive({
      effective_date: null,
      rate: null,
      note: null,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 1000);
    };
    const handleCancel = () => {
      visible.value = false;
    };

    return {
      visible,
      showModal,
      AddEditformState,
      onFinish,
      onFinishFailed,
      handleCancel,
      handleOk,
      loading,
    };
  },
  data() {
		return {
      accounts: [],
      compound_periods: [],

      account_id: null,
      acct_description: null,

      compound_period_id: null,
      compound_period: null,

      options_size: parseInt(import.meta.env.VITE_SELECT_MAX_PAGESIZE)
    }
  },
  methods: {
    getAccounts() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/account", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.accounts = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
        this.accounts = []
      });
    },
    getCompoundPeriods() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/compound-period", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.compound_periods = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
        this.compound_periods = []
      });
    },
    submit() {
      this.loading = true

      axios.post("/term/store", toRaw(this.AddEditformState), {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.visible = false
        this.loading = false
      })
      .catch((err) => {
        message.error(err.response.data.message)
        this.loading = false
      });
    },
    filterOptions(input, option) {
      return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    },
    handleAccountChange(option) {
      this.AddEditformState.account_id = option.value
      this.AddEditformState.acct_description = option.label
    },
    handleCompoundPeriodChange(option) {
      this.AddEditformState.compound_period_id = option.value
      this.AddEditformState.compound_period = option.label
    },
  },
  mounted() {
    this.getAccounts()
    this.getCompoundPeriods()
  }
});
</script>
<style scoped>
.ant-form-item {
  margin-bottom: 15px;
}
.ant-picker {
  width: 100%;
}
</style>