<template> 
    <a-modal centered v-model:visible="visible" ok-text="Add" title="Add Transaction Type" @ok="handleOk">
        <a-form
            :model="addTransactionTypeFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="trans_type" label="Transaction Type" :rules="[{ required: true, message: 'Please input the transaction type.' }]">
                <a-input v-model:value="addTransactionTypeFormState.trans_type" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addTransactionTypeFormState.description" :maxlength="255" />
            </a-form-item>
        </a-form>

        <template #footer>
            <a-button key="back" @click="handleCancel">Cancel</a-button>
            <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Add</a-button>
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

        const handleOk = e => {
            visible.value = false;
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
        const addTransactionTypeFormState = reactive({
            trans_type: null,
            description: null,
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        return {
            visible,
            handleOk,
            addTransactionTypeFormState,
            onFinish,
            layout,
            handleCancel,
            loading,
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        submit() {
            this.loading = true

            axios.post("/transaction-type/store", toRaw(this.addTransactionTypeFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false

                this.addTransactionTypeFormState.trans_type = null
                this.addTransactionTypeFormState.description = null
                
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
            .catch((err) => {
                message.error(err.response.data.message)
                this.loading = false
            });
        },
    }
});
</script>