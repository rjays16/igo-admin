<template>
  <div>
    <a-button size="large" type="primary" @click="showModal">Import Data</a-button>
    <a-modal 
        v-model:visible="visible" 
        title="Import Transaction" 
        ok-text="Upload"
        centered
        cancel-text="Cancel"
        @ok="handleOk">

        <a-upload-dragger
            v-model:fileList="fileList"
            name="file"
            :multiple="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="handleChange"
            @drop="handleDrop"
        >
            <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">
            Support for a single upload. Strictly prohibit from uploading company data or other
            band files
            </p>
        </a-upload-dragger>

    </a-modal>
  </div>
</template>
<script>
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        InboxOutlined,
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
        const handleChange = info => {
            const status = info.file.status;

            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        };
        return {
            visible,
            showModal,
            handleOk,
            handleChange,
            fileList: ref([]),
            handleDrop: e => {
                console.log(e);
            },
        };
    },

});
</script>