<template>
    <a-modal centered v-model:visible="visible" ok-text="Add" title="Add New State" @ok="handleOk">
        <a-form
            :model="addStateFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="state" label="State" :rules="[{ required: true, message: 'Please input the state.' }]">
                <a-input v-model:value="addStateFormState.state" />
            </a-form-item>
            <a-form-item name="name" label="Name" :rules="[{ required: true, message: 'Please input the name.' }]">
                <a-input v-model:value="addStateFormState.name" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addStateFormState.description" :maxlength="50" />
            </a-form-item>
        </a-form>

        <template #footer>
            <a-button key="back" @click="handleCancel">Cancel</a-button>
            <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">
                Add
            </a-button>
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
            console.log(e);
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
        const addStateFormState = reactive({
            state: null,
            name: null,
            description: null,
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        return {
            visible,
            handleOk,
            addStateFormState,
            onFinish,
            layout,
            loading,
            handleCancel,
        };
    },
    data() {
        return {
            opened_from_clients: false,
        }
    },
    methods: {
        showModal(opened_from_clients) {
            this.visible = true;
            this.opened_from_clients = opened_from_clients
        },
        submit() {
            this.loading = true
            
            axios.post("/state/store", toRaw(this.addStateFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false

                this.addStateFormState.state = null
                this.addStateFormState.name = null
                this.addStateFormState.description = null
                
                if(this.opened_from_clients) {
                    this.$parent.getStates()
                } else {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                }
            })
            .catch((err) => {
                message.error(err.response.data.message)
                this.loading = false
            });
        }
    }
});
</script>