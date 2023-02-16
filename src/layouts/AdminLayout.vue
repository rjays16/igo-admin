<template>
  <a-layout class="main-layout">
    <a-layout-sider
      v-model:collapsed="environmentStore.sideBarMenu.collapsed"
      :trigger="null"
      collapsible>
      <div class="logo">
        {{ environmentStore.sideBarMenu.logoUrl }}
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        theme="dark"
        mode="inline">
        <a-menu-item key="1">
          <RouterLink to="/admin" @click="createAuditTrail('Clicked on the sidebar button for dashboard.')">
            <dashboard-outlined />
            <span>Dashboard</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="2">
          <RouterLink to="/admin/clients" @click="createAuditTrail('Clicked on the sidebar button for clients.')">
            <user-outlined />
            <span>Clients</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="3">
          <RouterLink to="/admin/accounts" @click="createAuditTrail('Clicked on the sidebar button for accounts.')">
            <read-outlined />
            <span>Accounts</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="4">
          <RouterLink to="/admin/terms" @click="createAuditTrail('Clicked on the sidebar button for terms.')">
            <bar-chart-outlined />
            <span>Terms</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="5">
          <RouterLink to="/admin/transactions" @click="createAuditTrail('Clicked on the sidebar button for transactions.')">
            <swap-outlined />
            <span>Transactions</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="6">
          <RouterLink to="/admin/summary" @click="createAuditTrail('Clicked on the sidebar button for summary.')">
            <profile-outlined />
            <span>Summary</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="7">
          <RouterLink to="/admin/iadashboard" @click="createAuditTrail('Clicked on the sidebar button for IA dashboard.')">
            <idcard-outlined />
            <span>IA Dashbaord</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="8">
          <RouterLink to="/admin/statements" @click="createAuditTrail('Clicked on the sidebar button for statements.')">
            <file-text-outlined />
            <span>Statements</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="9">
          <RouterLink to="/admin/interestReport" @click="createAuditTrail('Clicked on the sidebar button for interest report.')">
            <line-chart-outlined />
            <span>Interest Report</span>
          </RouterLink>
        </a-menu-item>

        <a-menu-item key="10">
          <RouterLink to="/admin/auditTrail" @click="createAuditTrail('Clicked on the sidebar button for audit trail.')">
            <audit-outlined />
            <span>Audit Trail</span>
          </RouterLink>
        </a-menu-item>

        <a-sub-menu key="11">
          <template #icon>
            <setting-outlined />
          </template>
          <template #title>Settings</template>
          <RouterLink to="/admin/users" @click="createAuditTrail('Clicked on the sidebar button for settings - users.')">
            <a-menu-item key="11-1">
              <usergroup-add-outlined /><span>Users</span>
            </a-menu-item>
          </RouterLink>
          <RouterLink to="/admin/roles" @click="createAuditTrail('Clicked on the sidebar button for settings - roles.')">
            <a-menu-item key="11-2">
              <user-add-outlined /><span>Roles</span>
            </a-menu-item>
          </RouterLink>
          <RouterLink to="/admin/miscellaneous" @click="createAuditTrail('Clicked on the sidebar button for settings - miscellaneous.')">
            <a-menu-item key="11-3">
              <appstore-add-outlined /><span>Miscellaneous</span>
            </a-menu-item>
          </RouterLink>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="environmentStore.sideBarMenu.collapsed"
          class="trigger"
          @click="toggleSidebar()"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="toggleSidebar()"
        />
        <div class="left-nav">
          <RouterLink to="/admin" @click="createAuditTrail('Clicked on the top dashboard button.')">
            Dashboard
          </RouterLink>
        </div>
        <div class="user-right">
          <a-dropdown :trigger="['click']" @click="createAuditTrail('Clicked on the notification bell.')">
            <a class="ant-dropdown-link bell" @click.prevent>
              <bell-outlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">Notification 1</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">Notification 2</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">Notification 3</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
              <span class="user-avatar"></span>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <RouterLink to="/admin/profile" @click="createAuditTrail('Clicked on the dropdown profile button from the top navigation.')">
                    <user-outlined />
                    <span class="m-left">Profile</span>
                  </RouterLink>
                </a-menu-item>
                <a-menu-item>
                  <a class="clickable" @click="logout">
                    <logout-outlined />
                    <span class="m-left">Logout</span>
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          
        </div>
      </a-layout-header>
      <!-- Breadcrumb -->
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $route.name }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '0',
          background: '#fff',
          minHeight: '280px',
        }">
        <!-- show content here-->
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

import { defineComponent, ref } from "vue";
import { useEnvironmentStore } from "@/stores/EnvironmentStore";
import {
  SettingOutlined,
  LineChartOutlined,
  FileTextOutlined,
  AuditOutlined,
  ProfileOutlined,
  SwapOutlined,
  BarChartOutlined,
  ReadOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  AppstoreAddOutlined,
  BellOutlined,
  IdcardOutlined,
  LogoutOutlined
} from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import axios from 'axios'

export default defineComponent({
  components: {
    SettingOutlined,
    LineChartOutlined,
    FileTextOutlined,
    AuditOutlined,
    ProfileOutlined,
    SwapOutlined,
    BarChartOutlined,
    ReadOutlined,
    DashboardOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
    AppstoreAddOutlined,
    BellOutlined,
    IdcardOutlined,
    LogoutOutlined
  },

  props: ["defaultKey", "preOpenKey"],

  setup() {
    // Initiate Environment Store to Access All of its States
    const environmentStore = useEnvironmentStore();
    return {
      //return appEnvironment so you can use it in the tamplates above
      environmentStore,
    };
  },
  data(props) {
    return {
      selectedKeys: ref([props.defaultKey]),
      openKeys: ref([props.preOpenKey]),

      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),
    };
  },
  methods: {
    toggleSidebar() {
      this.environmentStore.sideBarMenu.collapsed = !this.environmentStore.sideBarMenu.collapsed
      this.createAuditTrail('Clicked on the toggle button for the sidebar.')
    },
    createAuditTrail(activity_name) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath,
        activity: activity_name,
      }

      axios.post("/audit-trail/store", data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        console.log(res.data.message)
      })
      .catch((err) => {
        console.error(err.response.data.message)
      });
    },
    logout() {
      this.createAuditTrail('Clicked on the logout button.')

      axios.post("/auth/logout", {},
        { headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`} }
      )
      .then((res) => {
        message.success("Successfully logged out.")
        this.$cookies.remove('igo-x-access-token')
        this.$cookies.remove('user-data')
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err)
        message.error(err.response.data.message)
        this.$cookies.remove('igo-x-access-token')
        this.$cookies.remove('user-data')
        this.$router.push('/')
      });
    }
  }
});
</script>

<style>
.main-layout {
  min-height: 100vh;
}
.ant-breadcrumb {
  padding: 20px;
  background: #ffffff;
  border-top: 1px solid #f2f2f2;
}
.user-right {
  position: absolute;
  top: 0;
  right: 20px;
  display: flex;
  align-items: center;
}
.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
  background: #d4d4d4;
}
.ant-dropdown-link.bell {
  font-size: 25px;
  color: #333333;
  margin-right: 10px;
}
.anticon-menu-fold,
.anticon-menu-unfold {
  font-size: 22px;
  margin-left: 20px;
}
.left-nav {
    position: absolute;
    top: 0;
    left: 75px;
    display: flex;
    height: 100%;
    align-items: center;
}
.left-nav a {
  color: #333333;
  font-weight: 700;
  font-size: 18px;
}
.logo {
  color: #fff;
  text-align: center;
  padding: 10px;
  background: #2f3e55;
  height: 64px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
}
.m-left {
  margin-left: 10px;
}
</style>