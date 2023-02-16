<template> 
    <a-modal centered v-model:visible="visible" ok-text="Update" title="Update Client Type" @ok="handleOk">
        <a-form
            :model="addClientTypeFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="client_type" label="Client Type" :rules="[{ required: true, message: 'Please input the client type.' }]">
                <a-input v-model:value="addClientTypeFormState.client_type" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addClientTypeFormState.description" :maxlength="255" />
            </a-form-item>
        </a-form>

        <template #footer>
            <a-button key="back" @click="handleCancel">Cancel</a-button>
            <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Update</a-button>
        </template>
    </a-modal>
</template>
<script>
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
    setup() {
        const loading = ref(false);
        const visible = ref(false);

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

        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const addClientTypeFormState = reactive({
            client_type: null,
            description: null,
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        return {
            visible,
            handleOk,
            addClientTypeFormState,
            onFinish,
            layout,
            handleCancel,
            loading
        };
    },
    data() {
		return {
            options_size: parseInt(import.meta.env.VITE_SELECT_MAX_PAGESIZE)
        }
    },
    methods: {
        showModal(type_id) {
            this.type_id = type_id
            this.visible = true;
            this.getClientType()
        },
        getClientType() {
            axios.post(`/client-type/show/${this.type_id}`, {}, {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                let data = res.data.data
                this.addClientTypeFormState.client_type = data.client_type
                this.addClientTypeFormState.description = data.description
            })
            .catch((err) => {
                console.error(err)
                message.error(err.response.data.message)
                this.visible = false
            });
        },
        submit() {
            this.loading = true

            axios.post(`/client-type/update/${this.type_id}`, toRaw(this.addClientTypeFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false
                this.$parent.getClientTypes()
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