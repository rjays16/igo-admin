<template>
  <div>
    <a-modal 
      v-model:visible="visible"
      title="Update Account"
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
              label="Creditor"
              name="creditor_id">
              <a-input v-model:value="AddEditformState.creditor_name" disabled />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Debtor"
              name="debtor_id"
              has-feedback
              :rules="[{ required: true, message: 'Please select the debtor.' }]">
              <a-select placeholder="Select Creditor" v-model:value="AddEditformState.debtor_id"
                :loading="is_client_list_loading"
                showSearch
                optionFilterProp="children"
                :options="debtors"
                :filterOption="filterOptions">
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Tag"
              name="tag"
              :rules="[{ required: true, message: 'Please input the tag.' }]">
              <a-input v-model:value="AddEditformState.tag" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Status"
              name="status_id"
              has-feedback
              :rules="[{ required: true, message: 'Please select the status.' }]">
              <a-select placeholder="Select Status" v-model:value="status_id"
                showSearch
                optionFilterProp="children"
                :options="statuses"
                :filterOption="filterOptions"
                label-in-value
                @change="handleStatusChange">
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>              
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Origin Date"
              name="origin_date"
              :rules="[{ required: true, message: 'Please select the date.' }]">
              <a-date-picker v-model:value="AddEditformState.origin_date" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item
              label="Account Description"
              name="acct_description"
              :rules="[{ required: true, message: 'Please input the account description.' }]">
              <a-textarea v-model:value="AddEditformState.acct_description" :maxlength="255" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item
              label="Note"
              name="note"
              :rules="[{ required: true, message: 'Please input the note.' }]">
              <a-textarea v-model:value="AddEditformState.note" :maxlength="255" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>

      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Update</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { FormOutlined } from "@ant-design/icons-vue";
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
  components: {
    FormOutlined,
  },
  setup() {
    const loading = ref(false);
    const visible = ref(false);

    const AddEditformState = reactive({
      debtor_id: null,
      origin_date: null,
      tag: null,
      note: null,
      acct_description: null,
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
      creditors: [],
      debtors: [],
      statuses: [],

      creditor_id: null,

      status_id: null,
      status: null,

      is_client_list_loading: true,
      options_size: parseInt(import.meta.env.VITE_SELECT_MAX_PAGESIZE)
    }
  },
  methods: {
    showModal(account_id) {
      this.account_id = account_id
      this.visible = true;
      this.getClients()
    },
    getAccount() {
      axios.post(`/account/show/${this.account_id}`, {}, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data.data
        this.AddEditformState.creditor_name = data.creditor_name
        this.AddEditformState.debtor_id = data.debtor_id
        this.AddEditformState.origin_date = data.origin_date
        this.AddEditformState.tag = data.tag
        this.AddEditformState.note = data.note
        this.AddEditformState.acct_description = data.acct_description

        this.AddEditformState.creditor_id = data.creditor_id
        this.AddEditformState.status_id = this.status_id = data.status_id
        this.AddEditformState.status = this.status = data.status

        this.getStatuses()
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.visible = false
      });
    },
    getClients() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/client", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.creditors = res.data.data
        this.debtors = res.data.data
        this.is_client_list_loading = false
        this.getAccount()
      })
      .catch((err) => {
        console.error(err.response.data.message)
        this.is_client_list_loading = false
        message.error(err.response.data.message)
        this.visible = false
      });
    },
    getStatuses() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/status", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.statuses = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
      });
    },
    submit() {
      this.loading = true

      axios.post(`/account/update/${this.account_id}`, toRaw(this.AddEditformState), {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.visible = false
        this.loading = false
        this.$parent.getAccounts()
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.loading = false
      });
    },
    filterOptions(input, option) {
      return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    },
    handleStatusChange(option) {
      this.AddEditformState.status_id = option.value
      this.AddEditformState.status = option.label
    },
  },
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