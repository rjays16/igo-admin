<template>
    <a-modal centered v-model:visible="visible" ok-text="Add" title="Add New Organization" @ok="handleOk">
        <a-form
            :model="addOrganizationFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="organization" label="Name" :rules="[{ required: true, message: 'Please input the organization name.' }]">
                <a-input v-model:value="addOrganizationFormState.organization" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addOrganizationFormState.description" :maxlength="255" />
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
        const addOrganizationFormState = reactive({
            organization: null,
            description: null,
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        return {
            visible,
            handleOk,
            addOrganizationFormState,
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

            axios.post("/organization/store", toRaw(this.addOrganizationFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false

                this.addOrganizationFormState.organization = null
                this.addOrganizationFormState.description = null
                
                if(this.opened_from_clients) {
                    this.$parent.getOrganizations()
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