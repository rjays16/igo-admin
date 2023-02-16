<template>
  <a-modal 
    v-model:visible="visible" 
    title="Update Role" 
    ok-text="Update" 
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
            label="Role"
            name="role"
            :rules="[{ required: true, message: 'Please input the role.' }]">
            <a-input v-model:value="AddEditformState.role" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
            <a-textarea v-model:value="AddEditformState.description" :maxlength="255" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <div class="ant-col ant-form-item-label">
            <label for="basic_permission" class="ant-form-item-required" title="Permissions">
              Permissions
            </label>
          </div>
        </a-col>
      </a-row>

      <div class="tree-node-container">
        <RoleTreeNodes ref="permissionNodes" />
      </div>
    </a-form>

    <template #footer>
      <a-button key="back" @click="handleCancel">Cancel</a-button>
      <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Update</a-button>
    </template>
  </a-modal>
</template>
<script>
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { FormOutlined } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import RoleTreeNodes from "../../components/roles/RoleTreeNodes.vue";
import axios from 'axios'

export default defineComponent({
  components: {
    FormOutlined,
    RoleTreeNodes
  },
  setup() {
    const loading = ref(false);
    const visible = ref(false);

    const AddEditformState = reactive({
      role: null,
      description: null,
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
  methods: {
    showModal(role_id) {
      this.role_id = role_id
      this.visible = true;
      this.getRole()
    },
    getRole() {
      axios.post(`/role/show/${this.role_id}`, {}, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data.data
        this.AddEditformState.role = data.role
        this.AddEditformState.description = data.description
        let permissions = data.permission.split(",")
        this.$refs.permissionNodes.checkedKeys = permissions
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.visible = false
      });
    },
    submit() {
      this.loading = true
      this.AddEditformState.permission = this.$refs.permissionNodes.checkedKeys.toString()

      axios.post(`/role/update/${this.role_id}`, toRaw(this.AddEditformState), {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.visible = false
        this.loading = false
        this.$parent.getRoles()
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.loading = false
      });
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
.tree-node-container {
  padding: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
}
</style>