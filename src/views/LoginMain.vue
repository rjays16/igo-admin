<template>
  <LoginOrSignupLayout>
    <div id="parent">
      <div style="background: #ececec; padding: 30px;">
        <a-row :gutter="0">
          <a-col>
            <a-card title="Login" :bordered="false" id="child">
              <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
                autocomplete="off"
                @finishFailed="onFinishFailed">
                <a-form-item
                  label="Username"
                  name="email"
                  :rules="[{ required: true, message: 'Please input your username.' }]">
                  <a-input v-model:value="formState.email" />
                </a-form-item>

                <a-form-item
                  label="Password"
                  name="password"
                  :rules="[{ required: true, message: 'Please input your password.' }]">
                  <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                  <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                  <a-button type="primary" html-type="submit" :loading="loading" :disabled="loading" @click="submit">Submit</a-button>
                </a-form-item>
              </a-form>
            </a-card>
          </a-col>

          <a-col>
            <a-card title="" :bordered="false" id="child2">
              <div class="text-center">
                <h1>iGo Talent Builders</h1>
              </div><br/><br/>
              <p align="center">Lorem ipsum lorem ipsum</p>
              <p align="center">Lorem ipsum lorem ipsum lorem</p>
              <p align="center">Lorem ipsum lorem ipsum</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </LoginOrSignupLayout>
</template>

<script>
import { defineComponent, toRaw, ref, reactive } from 'vue';
import { message } from 'ant-design-vue';
import LoginOrSignupLayout from "../layouts/LoginOrSignupLayout.vue";
import axios from 'axios'

export default defineComponent({
  // middleware: "isAuth",
  components: {
    LoginOrSignupLayout
  },
  setup() {
    const loading = ref(false);

    const formState = reactive({
      email: null,
      password: null,
      remember: true,
    });

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinishFailed,
      loading,
    };
  },
  methods: {
    submit() {
      this.loading = true
        
      axios.post("/auth/login", toRaw(this.formState))
      .then((res) => {
        let data = res.data
        this.$cookies.set('igo-x-access-token', data.access_token, '/')
        this.$cookies.set('user-data', data.data, '/')
        this.$router.push('/admin')
      })
      .catch((err) => {
        console.log(err)
        message.error(err.response.data.message)
        this.loading = false
      });
    }
  },
});
</script>

<style scoped>
#parent {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
}
#child {
  min-width: 500px;
  height: 45vh;
  position: relative;
  background: white;
  padding: 2rem;
  color: white;
  box-shadow: 5px 5px 20px rgba(0,0,0,.4);
}
#child2 {  
  min-width: 400px;
  height: 45vh;
  position: relative;
  background: blue;
  padding: 2rem;
  color: white;
  box-shadow: 5px 5px 20px rgba(0,0,0,.4);
}
h1 {
  color: white;
}
</style>