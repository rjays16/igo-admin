<template>
  <div>
    <a-button size="large" type="primary" @click="showModal">Add Client</a-button>
    <a-modal 
      v-model:visible="visible" 
      title="Add New Client" 
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
              label="First Name"
              name="first_name"
              :rules="[{ required: true, message: 'Please input the first name.' }]">
              <a-input v-model:value="AddEditformState.first_name" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Last Name"
              name="last_name"
              :rules="[{ required: true, message: 'Please input the last name.' }]">
              <a-input v-model:value="AddEditformState.last_name" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Email Address"
              name="email"
              :rules="[{ required: true, message: 'Please input the email address.' }]">
              <a-input v-model:value="AddEditformState.email" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Type"
              name="client_type_id"
              :wrapper-col="{ offset: 2, pull: 2 }"
              has-feedback
              :rules="[{ required: true, message: 'Please select the client type.' }]">
              <a-select placeholder="Select Type" v-model:value="client_type_id" 
                showSearch
                optionFilterProp="children"
                :options="client_types"
                :filterOption="filterOptions"
                label-in-value
                @change="handleClientTypeChange">
              </a-select>
            </a-form-item>
            
            <a-button type="primary" @click="showAddClientTypeModal" class="custom-add">
              <template #icon>
                <EllipsisOutlined />
              </template>
              <span class="btn-text">Add Client Type</span>
            </a-button>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Date of Birth"
              name="date_of_birth"
              :rules="[{ required: true, message: 'Please input the date of birth.' }]">
              <a-date-picker v-model:value="AddEditformState.date_of_birth" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" class="w-100" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Gender"
              name="gender"
              :rules="[{ required: true, message: 'Please select the gender.' }]">
              <a-radio-group v-model:value="AddEditformState.gender">
                <a-radio :value="'Male'">Male</a-radio>
                <a-radio :value="'Female'">Female</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item
              label="Organization"
              name="organization_id"             
              :wrapper-col="{ offset: 1, pull: 1 }"
              has-feedback
              :rules="[{ required: true, message: 'Please select the organization.' }]">
              <a-select placeholder="Select Organization" v-model:value="organization_id"
                showSearch
                optionFilterProp="children"
                :options="organizations"
                :filterOption="filterOptions"
                label-in-value
                @change="handleOrganizationChange">
              </a-select>
            </a-form-item>

            <a-button type="primary" @click="showAddOrganizationModal" class="custom-add">
              <template #icon>
                <EllipsisOutlined />
              </template>
              <span class="btn-text">Add Organization</span>
            </a-button>
          </a-col>
        </a-row>
        <a-form-item
          label="Address 1"
          name="address1"
          :rules="[{ required: true, message: 'Please input the address 1.' }]">
          <a-input v-model:value="AddEditformState.address1" />
        </a-form-item>
        <a-form-item
          label="Address 2"
          name="address2"
          :rules="[{ required: true, message: 'Please input the address 2.' }]">
          <a-input v-model:value="AddEditformState.address2" />
        </a-form-item>

        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Zip"
              name="zip"
              :rules="[{ required: true, message: 'Please input the zip.' }]">
              <a-input v-model:value="AddEditformState.zip" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="State"
              name="state"
              :wrapper-col="{ offset: 2, pull: 2 }"
              has-feedback
              :rules="[{ required: true, message: 'Please select the state.' }]">
              <a-select placeholder="Select Type" v-model:value="state"
                showSearch
                optionFilterProp="children"
                :options="states"
                :filterOption="filterOptions"
                label-in-value
                @change="handleStateChange">
              </a-select>
            </a-form-item>

            <a-button type="primary" @click="showAddStateModal" class="custom-add">
              <template #icon>
                <EllipsisOutlined />
              </template>
              <span class="btn-text">Add State</span>
            </a-button>
          </a-col>
        </a-row>

        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="City"
              name="city_id"
              :wrapper-col="{ offset: 2, pull: 2 }"
              has-feedback
              :rules="[{ required: true, message: 'Please select the city.' }]">
              <a-select placeholder="Select Type" v-model:value="city_id"
                showSearch
                optionFilterProp="children"
                :options="cities"
                :filterOption="filterOptions"
                label-in-value
                @change="handleCityChange">
              </a-select>
            </a-form-item>

            <a-button type="primary" @click="showAddCityModal" class="custom-add">
              <template #icon>
                <EllipsisOutlined />
              </template>
              <span class="btn-text">Add City</span>
            </a-button>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Phone"
              name="phone"
              :rules="[{ required: true, message: 'Please input the phone.' }]">
              <a-input v-model:value="AddEditformState.phone" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="CA Date"
              name="ca_date"
              :rules="[{ required: true, message: 'Please input the CA date.' }]">
              <a-date-picker v-model:value="AddEditformState.ca_date" format="YYYY/MM/DD" valueFormat="YYYY/MM/DD" class="w-100" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Tag"
              name="tag">
              <a-input v-model:value="AddEditformState.tag" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-form-item
          label="Admin Note"
          name="note">
          <a-textarea v-model:value="AddEditformState.note" :maxlength="255" />
        </a-form-item>
      </a-form>

      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Add</a-button>
      </template>
    </a-modal>
    
    <AddClientType ref="addClientTypeModal" />
    <AddOrganization ref="addOrganizationModal" />
    <AddState ref="addStateModal" />
    <AddCity ref="addCityModal" />
  </div>  
</template>
<script>
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { EllipsisOutlined } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import AddClientType from "../../components/clients/AddClientType.vue";
import AddOrganization from "../../components/clients/AddOrganization.vue";
import AddState from "../../components/clients/AddState.vue";
import AddCity from "../../components/clients/AddCity.vue";
import axios from 'axios'

export default defineComponent({
  components: {
    AddClientType,
    AddOrganization,
    AddState,
    AddCity,
    EllipsisOutlined,
  },
  setup() {
    const loading = ref(false);
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const AddEditformState = reactive({
      first_name: null,
      last_name: null,
      email: null,
      date_of_birth: null,
      gender: "Male",
      address1: null,
      address2: null,
      zip: null,
      state: null,
      phone: null,
      ca_date: null,
      tag: null,
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
      client_types: [],
      organizations: [],
      states: [],
      cities: [],

      client_type_id: null,
      client_type: null,

      organization_id: null,
      organization: null,

      state: null,

      city_id: null,
      city: null,

      city_request_data: {
        filter_state: null
      },

      options_size: parseInt(import.meta.env.VITE_SELECT_MAX_PAGESIZE)
    }
  },
  methods: {
    getClientTypes() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/client-type", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.client_types = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
        this.client_types = []
      });
    },
    getOrganizations() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/organization", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.organizations = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
      });
    },
    getStates() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/state", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.states = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
      });
    },
    getCities(enableFilter) {
      let data = {
        per_page: this.options_size
      }

      if(enableFilter) {
        data.filter_state = this.city_request_data.filter_state
      }

      axios.post("/city", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.cities = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
      });
    },
    submit() {
      // this.AddEditformState.validate()
      // console.log(toRaw(this.AddEditformState))
      this.loading = true

      axios.post("/client/store", toRaw(this.AddEditformState), {
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
    handleClientTypeChange(option) {
      this.AddEditformState.client_type_id = option.value
      this.AddEditformState.client_type = option.label
    },
    handleOrganizationChange(option) {
      this.AddEditformState.organization_id = option.value
      this.AddEditformState.organization = option.label
    },
    handleStateChange(option) {
      this.AddEditformState.state = option.value
      this.city_id = null
      
      this.city_request_data.filter_state = option.value
      this.getCities(true)
    },
    handleCityChange(option) {
      this.AddEditformState.city_id = option.value
      this.AddEditformState.city = option.label
    },
    showAddClientTypeModal() {
      this.$refs.addClientTypeModal.showModal(true)
    },
    showAddOrganizationModal() {
      this.$refs.addOrganizationModal.showModal(true)
    },
    showAddStateModal() {
      this.$refs.addStateModal.showModal(true)
    },
    showAddCityModal() {
      this.$refs.addCityModal.showModal(true)
    },
  },
  mounted() {
    this.getClientTypes()
    this.getOrganizations()
    this.getStates()
    this.getCities(false)
  }
});
</script>
<style scoped>
.ant-form-item {
  margin-bottom: 15px;
}

.custom-add {
  position: absolute;
  right: 12px;
  bottom: 15px;
  width: 32px;
  height: 32px;
  padding: 2.4px 0;
  font-size: 16px;
  border-radius: 2px;
  vertical-align: -3px;
}
.custom-add > .anticon {
  display: flex;
  justify-content: center;
}
.custom-add > .btn-text {
  display: none;
}
</style>