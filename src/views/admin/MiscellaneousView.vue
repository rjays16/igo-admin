<template>
  <AdminLayout defaultKey="11-3" preOpenKey="11">
    <h1>{{ title }}</h1>
    <div class="view-container">
      <a-tabs v-model:activeKey="activeKey" size="large" type="card" :change="createAuditTrail('tab')">
        <a-tab-pane key="1" tab="Transaction Type">
          <div class="action-container">
            <a-button size="large" type="primary" @click="showAddTransactionTypeModal" class="custom-add">
              Add Transaction Type
            </a-button>
          </div>
          <TransactionList />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Client Type">
          <div class="action-container">
            <a-button type="primary" @click="showAddClientTypeModal" class="custom-add">
              <span class="btn-text">Add Client Type</span>
            </a-button>
          </div>  
          <ClientTypeList />
        </a-tab-pane>
        <a-tab-pane key="3" tab="Organizations">
          <div class="action-container">
            <a-button type="primary" @click="showAddOrganizationModal" class="custom-add">
              <span class="btn-text">Add Organization</span>
            </a-button>
          </div>
          <OrganizationList />
        </a-tab-pane>
        <a-tab-pane key="4" tab="States">
          <div class="action-container">
            <a-button type="primary" @click="showAddStateModal" class="custom-add">
              <span class="btn-text">Add State</span>
            </a-button>
          </div>
          <StateList />
        </a-tab-pane>
        <a-tab-pane key="5" tab="Cities">
          <div class="action-container">
            <a-button type="primary" @click="showAddCityModal" class="custom-add">
              <span class="btn-text">Add City</span>
            </a-button>
          </div>  
          <CityList />
        </a-tab-pane>
      </a-tabs>
    </div>
    
    <AddTransactionType ref="addTransactionTypeModal" />
    <AddClientType ref="addClientTypeModal" />
    <AddOrganization ref="addOrganizationModal" />
    <AddState ref="addStateModal" />
    <AddCity ref="addCityModal" />
  </AdminLayout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AdminLayout from "../../layouts/AdminLayout.vue";
import TransactionList from "../../components/miscellaneous/TransactionList.vue";
import ClientTypeList from "../../components/miscellaneous/ClientTypeList.vue";
import OrganizationList from "../../components/miscellaneous/OrganizationList.vue";
import StateList from "../../components/miscellaneous/StateList.vue";
import CityList from "../../components/miscellaneous/CityList.vue";
import AddTransactionType from "../../components/transactions/AddTransactionType.vue";
import AddClientType from "../../components/clients/AddClientType.vue";
import AddOrganization from "../../components/clients/AddOrganization.vue";
import AddState from "../../components/clients/AddState.vue";
import AddCity from "../../components/clients/AddCity.vue";
import axios from 'axios'

export default defineComponent({
  components: {
    AdminLayout,
    TransactionList,
    AddTransactionType,
    AddClientType,
    ClientTypeList,
    OrganizationList,
    AddOrganization,
    StateList,
    AddState,
    CityList,
    AddCity,
  },
  data() {
    return {
      title: "Settings",
      activeKey: ref('1'),

      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),

      searched_columns: ''
    };
  },
  methods: {
    showAddTransactionTypeModal() {
      this.$refs.addTransactionTypeModal.showModal()
      this.createAuditTrail('click', 'Clicked on the add transaction type button.')
    },
    showAddClientTypeModal() {
      this.$refs.addClientTypeModal.showModal(false)
      this.createAuditTrail('click', 'Clicked on the add client type button.')
    },
    showAddOrganizationModal() {
      this.$refs.addOrganizationModal.showModal(false)
      this.createAuditTrail('click', 'Clicked on the add organization button.')
    },
    showAddStateModal() {
      this.$refs.addStateModal.showModal(false)
      this.createAuditTrail('click', 'Clicked on the add state button.')
    },
    showAddCityModal() {
      this.$refs.addCityModal.showModal(false)
      this.createAuditTrail('click', 'Clicked on the add city button.')
    },
    createAuditTrail(type, activity_name) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath
      }

      if(type == 'click') {
        data.activity = activity_name
      } else {
        let tab_name = ''
        if(this.activeKey == 1) {
          tab_name = 'transaction type'
        } else if(this.activeKey == 2) {
          tab_name = 'client type'
        } else if(this.activeKey == 3) {
          tab_name = 'organizations'
        } else if(this.activeKey == 4) {
          tab_name = 'states'
        } else if(this.activeKey == 5) {
          tab_name = 'cities'
        } else {
          tab_name = 'miscellaneous'
        }

        data.activity = `Clicked on the ${tab_name} tab button.`
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
    }
  }
});
</script>
<style scoped>
.action-container {
  padding: 20px 0 40px;
  display: flex;
}
.action-container div {
  margin-right: 20px;
}
.view-container {
  padding: 24px;
}
h1 {
  padding: 10px 24px;
  background: #e2e2e2;
  font-size: 22px;
  margin: 0;
  font-weight: 700;
}
.action-container :deep(.custom-add) {
  position: relative;
  height: 40px;
  padding: 6.4px 15px;
  font-size: 16px;
  border-radius: 2px;
  width: auto;
  right: auto;
  bottom: auto;
}
.action-container :deep(.custom-add) > .btn-text {
  display: inline-block;
}
.action-container :deep(.custom-add) > .anticon {
  display: none;
}
.action-container :deep(.custom-add) > .anticon + span {
  margin-left: 0;
}
</style>