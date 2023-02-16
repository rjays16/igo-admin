<template>
  <div>
    <a-form layout="vertical" :model="formState">
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item
            label="Current Password"
            name="current_password"
            :rules="[
              { required: true, message: 'Please input your current password.' },
              { min: 8, message: 'Minimum of 8 characters.' },
              { max: 255, message: 'Maximum of 255 characters.' },
            ]">
            <a-input-password v-model:value="formState.current_password" />
          </a-form-item>
          <a-form-item
            label="New Password"
            name="new_password"
            :rules="[
              { required: true, message: 'Please input your new password.' },
              { min: 8, message: 'Minimum of 8 characters.' },
              { max: 255, message: 'Maximum of 255 characters.' },
            ]">
            <a-input-password v-model:value="formState.new_password" />
          </a-form-item>
          <a-form-item
            label="Re-type New Password"
            name="new_password_confirmation"
            :dependencies="['new_password']"
            :rules="[
              { required: true, message: 'Please input your password confirmation.' },
              { min: 8, message: 'Minimum of 8 characters.' },
              { max: 255, message: 'Maximum of 255 characters.' },
            ]">
            <a-input-password v-model:value="formState.new_password_confirmation" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item>
            <a-button type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="recheckInputs()">Update New Password</a-button>
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
      current_password: null,
      new_password: null,
      new_password_confirmation: null,
    });

    return {
      formState,
      loading,
    };
  },
  methods: {
    recheckInputs() {
      if(this.formState.new_password !== this.formState.new_password_confirmation) {
        message.error("The new password and confirmation password should match.")
      } else {
        this.submit()
      }
    },
    submit() {
      this.loading = true
      
      axios.post("/auth/change-password", toRaw(this.formState), {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.loading = false
      })
      .catch((err) => {
        message.error(err.response.data.message)
        this.loading = false
      });
    }
  }
});
</script>