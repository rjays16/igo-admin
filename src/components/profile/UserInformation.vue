<template>
  <div>
    <a-form layout="vertical" :model="formState">
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-item label="First Name" name="first_name"
            :rules="[
              { required: true, message: 'Please input your first name.' },
              { max: 100, message: 'Maximum of 100 characters.' },
            ]">
            <a-input v-model:value="formState.first_name" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Last Name" name="last_name"
            :rules="[
              { required: true, message: 'Please input your last name.' },
              { max: 100, message: 'Maximum of 100 characters.' },
            ]">
            <a-input v-model:value="formState.last_name" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-item label="Email Address" name="email"
            :rules="[
              { required: true, message: 'Please input your email.' },
              { max: 100, message: 'Maximum of 100 characters.' },
            ]">
            <a-input v-model:value="formState.email" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Phone Number" name="phone"
            :rules="[{ required: true, message: 'Please input your phone.' }]">
            <a-input v-model:value="formState.phone" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item label="State" name="state" has-feedback
            :rules="[{ required: true, message: 'Please select your state.' }]">
            <a-select placeholder="Select Type" v-model:value="state"
              showSearch
              optionFilterProp="children"
              :options="states"
              :filterOption="filterOptions"
              label-in-value
              @change="handleStateChange">
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="City" name="city_id" has-feedback
            :rules="[{ required: true, message: 'Please select your city.' }]">
            <a-select placeholder="Select Type" v-model:value="city_id"
              showSearch
              optionFilterProp="children"
              :options="cities"
              :filterOption="filterOptions"
              label-in-value
              @change="handleCityChange">
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="Zip" name="zip"
            :rules="[{ required: true, message: 'Please input your zip.' }]">
            <a-input v-model:value="formState.zip" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item label="Address1" name="address1"
            :rules="[{ required: true, message: 'Please input your address 1.' }]">
            <a-input v-model:value="formState.address1" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item label="Address2" ame="address2"
            :rules="[{ required: true, message: 'Please input your address 2.' }]">
            <a-input v-model:value="formState.address2" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item>
            <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Update</a-button>
          </a-form-item>
        </a-col>
      </a-row>      
    </a-form>
  </div>
</template>

<script>
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
  setup() {
    const loading = ref(false);

    const formState = reactive({
      client_id: 0,
      first_name: null,
      last_name: null,
      email: null,
      city: null,
      state: null,
      zip: null,
      address1: null,
      address2: null,
      phone: null,
    });

    return {
      formState,
      loading,
    };
  },
  data() {
		return {
      states: [],
      cities: [],

      state: null,

      city_id: null,
      city: null,

      city_request_data: {
        filter_state: null
      },

      options_size: parseInt(import.meta.env.VITE_SELECT_MAX_PAGESIZE),

      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),
    }
  },
  methods: {
    getUser() {
      axios.post(`/user/show/${this.user_data.id}`, {}, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data.data
        this.formState.first_name = data.first_name
        this.formState.last_name = data.last_name
        this.formState.email = data.email        
        this.formState.phone = data.phone
        this.formState.address1 = data.address1
        this.formState.address2 = data.address2
        this.formState.zip = data.zip
        this.formState.state = data.state
        
        this.formState.city_id = this.city_id = data.city_id
        this.formState.city = this.city = data.city
        this.state = data.state
        
        this.getStates()
        this.getCities(false)
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
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
      this.createAuditTrail('Clicked on the update profile button.')

      axios.post(`/auth/update-user-profile`, toRaw(this.formState), {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.loading = false        
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
    handleStateChange(option) {
      this.formState.state = option.value
      this.city_id = null
      
      this.city_request_data.filter_state = option.value
      this.getCities(true)
    },
    handleCityChange(option) {
      this.formState.city_id = option.value
      this.formState.city = option.label
    },
    createAuditTrail(activity_name) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath,
        activity: activity_name,
      }

      axios.post("/audit-trail/store", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        console.log(res.data.message)
      })
      .catch((err) => {
        console.error(err.response.data.message)
      });
    },
  },
  mounted() {
    this.getUser()
  }
});
</script>