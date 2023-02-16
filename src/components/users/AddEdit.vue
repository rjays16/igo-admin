<template>
  <div>
    <a-button size="large" type="primary" @click="showModal">Add User</a-button>
    <a-modal 
      v-model:visible="visible" 
      title="Add New User" 
      ok-text="Add" 
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
              label="Email"
              name="email"
              :rules="[{ required: true, message: 'Please input the email.' }]">
              <a-input v-model:value="AddEditformState.email" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Role"
              name="role"
              has-feedback
              :rules="[{ required: true, message: 'Please select the role.' }]">
              <a-select placeholder="Select Role" v-model:value="role_id"
                showSearch
                optionFilterProp="children"
                :options="roles"
                :filterOption="filterOptions"
                label-in-value
                @change="handleRoleChange">
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item
              label="Address1"
              name="address1"
              :rules="[{ required: true, message: 'Please input the Address1.' }]">
              <a-input v-model:value="AddEditformState.address1" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item
              label="Address2"
              name="address2"
              :rules="[{ required: true, message: 'Please input the address2.' }]">
              <a-input v-model:value="AddEditformState.address2" />
            </a-form-item>
          </a-col>
        </a-row>

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
      </a-form>

      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Add</a-button>
      </template>
    </a-modal>

    <AddState ref="addStateModal" />
    <AddCity ref="addCityModal" />
  </div>
</template>
<script>
import { EllipsisOutlined } from "@ant-design/icons-vue";
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import AddClientType from "../../components/clients/AddClientType.vue";
import AddState from "../../components/clients/AddState.vue";
import AddCity from "../../components/clients/AddCity.vue";
import axios from 'axios'

export default defineComponent({
  components: {
    EllipsisOutlined,
    AddClientType,
    AddState,
    AddCity,
  },
  setup() {
    const loading = ref(false);
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const AddEditformState = reactive({
      client_id: 0,
      first_name: null,
      last_name: null,
      email: null,
      address1: null,
      address2: null,
      zip: null,
      state: null,
      phone: null,
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
      roles: [],
      states: [],
      cities: [],

      role_id: null,
      role: null,
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
    getRoles() {
      let data = {
        per_page: this.options_size
      }

      axios.post("/role", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.roles = res.data.data
      })
      .catch((err) => {
        console.error(err.response.data.message)
        this.roles = []
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
      this.loading = true

      axios.post('/user/store', toRaw(this.AddEditformState), {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.visible = false
        this.loading = false        
        this.$parent.getUsers()
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.loading = false
      });
    },
    filterOptions(input, option) {
      return (option?.label ?? null).toLowerCase().includes(input.toLowerCase())
    },
    handleRoleChange(option) {
      this.AddEditformState.role_id = option.value
      this.AddEditformState.role = option.label
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
    // showAddRoleModal() {
    //   this.$refs.addRole.showModal(true)
    // },
    showAddStateModal() {
      this.$refs.addStateModal.showModal(true)
    },
    showAddCityModal() {
      this.$refs.addCityModal.showModal(true)
    },
  },
  mounted() {
    this.getRoles()
    this.getStates()
    this.getCities()
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