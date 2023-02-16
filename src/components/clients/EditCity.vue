<template> 
    <a-modal centered v-model:visible="visible" ok-text="Update" title="Update City" @ok="handleOk">
        <a-form
            :model="addCityFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="state" label="State" :rules="[{ required: true, message: 'Please input the state.' }]">
                <a-input v-model:value="addCityFormState.state" />
            </a-form-item>
            <a-form-item name="city" label="City Name" :rules="[{ required: true, message: 'Please input the city name.' }]">
                <a-input v-model:value="addCityFormState.city" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addCityFormState.description" :maxlength="255" />
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
        const addCityFormState = reactive({
            state: null,
            city: null,
            description: null,
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        return {
            visible,
            handleOk,
            addCityFormState,
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
        showModal(city_id) {
            this.city_id = city_id
            this.visible = true;
            this.getCity()
        },
        getCity() {
            axios.post(`/city/show/${this.city_id}`, {}, {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                let data = res.data.data
                this.addCityFormState.state = data.state
                this.addCityFormState.city = data.city
                this.addCityFormState.description = data.description
            })
            .catch((err) => {
                console.error(err)
                message.error(err.response.data.message)
                this.visible = false
            });
        },
        submit() {
            this.loading = true

            axios.post(`/city/update/${this.city_id}`, toRaw(this.addCityFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false
                this.$parent.getCities()
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