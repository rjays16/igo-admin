<template>
    <a-modal centered v-model:visible="visible" ok-text="Add" title="Add New City" @ok="handleOk">
        <a-form
            :model="addCityFormState"
            v-bind="layout"
            @finish="onFinish">
            <a-form-item name="state" label="State" :rules="[{ required: true, message: 'Please input the state.' }]">
                <a-input v-model:value="addCityFormState.state" />
            </a-form-item>
            <a-form-item name="city" label="City Name" :rules="[{ required: true, message: 'Please input the city name.' }]">
                <a-textarea v-model:value="addCityFormState.city" :maxlength="150" />
            </a-form-item>
            <a-form-item name="description" label="Description" :rules="[{ required: true, message: 'Please input the description.' }]">
                <a-textarea v-model:value="addCityFormState.description" :maxlength="255" />
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
            
            axios.post("/city/store", toRaw(this.addCityFormState), {
                headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
            })
            .then((res) => {
                message.success(res.data.message)
                this.visible = false
                this.loading = false

                this.addCityFormState.state = null
                this.addCityFormState.city = null
                this.addCityFormState.description = null
                
                if(this.opened_from_clients) {
                    this.$parent.getCities()
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