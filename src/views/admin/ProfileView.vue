<template>
  <AdminLayout defaultKey="0">
    <h1><span>{{ title }}</span></h1>
    <div class="view-container">
      <a-tabs v-model:activeKey="activeKey" size="large">
        <a-tab-pane key="1" tab="Profile">
          <a-row :gutter="24">
            <a-col :span="8">
              <a-card title="Profile Picture">
                <UserAvatar />
              </a-card>
            </a-col>
            <a-col :span="16">
              <a-card title="Personal Information" style="width: 800px">
                <UserInformation />
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Password">
          <a-card title="Password" style="width: 600px">
            <UserPassword />
          </a-card>
        </a-tab-pane>
      </a-tabs>
    </div>
  </AdminLayout>
</template>

<script>
import { defineComponent, ref } from "vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import UserAvatar from "../../components/profile/UserAvatar.vue";
import UserInformation from "../../components/profile/UserInformation.vue";
import UserPassword from "../../components/profile/UserPassword.vue";

export default defineComponent({
  components: {
    AdminLayout,
    UserAvatar,
    UserInformation,
    UserPassword,
  },
  data() {
    return {
      title: "My Profile",
      activeKey: ref('1'),
    };
  },
});
</script>
<style scoped>
.view-container {
  padding: 24px;
}
h1 {
  padding: 10px 24px;
  background: #e2e2e2;
  font-size: 22px;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
}
h1 span {
  font-weight: 700;
}

</style>