<template> 
    <a-modal centered v-model:visible="visible" ok-text="Update" title="Update State" @ok="handleOk">
        <a-form
            :model="addStateFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="state" label="State Abbreviation" :rules="[{ required: true, message: 'Please input the state abbreviation.' }]">
                <a-input v-model:value="addStateFormState.state" />
            </a-form-item>
            <a-form-item name="name" label="Name" :rules="[{ required: true, message: 'Please input the state name.' }]">
                <a-textarea v-model:value="addStateFormState.name" :maxlength="50" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addStateFormState.description" :maxlength="50" />
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
        const addStateFormState = reactive({
            state: null,
            name: null,
            description: null
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
        showModal(state) {
            this.state = state
            this.visible = true;
            this.getState()
        },
        getState() {
            axios.post(`/state/show/${this.state}`, data, {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                let data = res.data.data
                this.addStateFormState.state = data.state
                this.addStateFormState.name = data.name
                this.addStateFormState.description = data.description                
            })
            .catch((err) => {
                console.error(err)
                message.error(err.response.data.message)
                this.visible = false
            });
        },
        submit() {
            this.loading = true

            axios.post(`/state/update/${this.state}`, toRaw(this.addStateFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false
                this.$parent.getStates()
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