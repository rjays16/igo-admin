<template>
  <div>
    <StopOutlined @click="showModal" style="font-size: large; color: grey; padding-right: 10px;" />
    <a-modal 
        v-model:visible="visible" 
        title="Confirmation" 
        ok-text="Delete"
        centered
        cancel-text="Cancel"
        @ok="handleOk">
      <h3>Are you sure you want to Null this record?</h3>
      <div class="delete-container">
        <p><strong>Trans. ID: 1101<br>
        Account Description: Althea Marie Avila</strong></p>
        <a-input />
        <p>Type <strong>"NULL"</strong>.</p>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { StopOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    StopOutlined,
  },
  setup() {
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
    };
  },

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