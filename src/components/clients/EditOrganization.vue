<template> 
    <a-modal centered v-model:visible="visible" ok-text="Update" title="Update Organization" @ok="handleOk">
        <a-form
            :model="addOrganizationFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="organization" label="Organization" :rules="[{ required: true, message: 'Please input the organization name.' }]">
                <a-input v-model:value="addOrganizationFormState.organization" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addOrganizationFormState.description" :maxlength="255" />
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
        const addOrganizationFormState = reactive({
            trans_type: null,
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
        showModal(organization_id) {
            this.organization_id = organization_id
            this.visible = true;
            this.getOrganzation()
        },
        getOrganzation() {
            axios.post(`/organization/show/${this.organization_id}`, {}, {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                let data = res.data.data
                this.addOrganizationFormState.organization = data.organization
                this.addOrganizationFormState.description = data.description
            })
            .catch((err) => {
                console.error(err)
                message.error(err.response.data.message)
                this.visible = false
            });
        },
        submit() {
            this.loading = true

            axios.post(`/organization/update/${this.organization_id}`, toRaw(this.addOrganizationFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false
                this.$parent.getOrganizations()
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