<template>
  <div>
    <DeleteOutlined @click="showModal" style="font-size: large; color: red" />
    <a-modal 
      v-model:visible="visible" 
      title="Confirmation" 
      ok-text="Delete"
      centered
      cancel-text="Cancel"
      @ok="handleOk">
      <h3>Are you sure you want to delete this record?</h3>
      <div class="delete-container">
        <p><strong>ID: {{ client_id }}<br>
        Name: {{ full_name }}</strong></p>
        <a-input v-model:value="confirmation_input" @input="checkText()" />
        <p>Type <strong>"YES DELETE"</strong>.</p>
      </div>

      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="disabled" @click="submit">
          Yes
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { DeleteOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
  props: ["client_id", "full_name"],
  components: {
    DeleteOutlined,
  },
  setup() {
    const loading = ref(false);
    const disabled = ref(true);
    const visible = ref(false);

    const handleOk = e => {
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
      handleCancel,
      handleOk,
      loading,
      disabled
    };
  },
  data() {
		return {
      confirmation_text: "YES DELETE",
      confirmation_input: null
    }
  },
  methods: {
    showModal() {
      this.visible = true;
      // this.getClient()
    },
    getClient() {
      axios.post(`/client/show/${this.client_id}`, {}, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data.data
        this.full_name = data.first_name.concat(' ', data.last_name)
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.visible = false
      });
    },
    checkText() {
      this.disabled = this.confirmation_input != this.confirmation_text
    },
    submit() {
      this.loading = true
      this.disabled = true

      axios.delete(`/client/delete/${this.client_id}`, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.visible = false
        this.loading = false
        this.disabled = false
        
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.loading = false
        this.disabled = false
      });
    },
  }
});
</script>
<style scoped>
h3 {
  text-align: center;
  color: #ff0000;
  margin-bottom: 20px;
}
.delete-container {
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
}
.delete-container input {
  margin: 0 0 15px;
}
</style>