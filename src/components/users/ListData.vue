<template>
  <div class="action-container">
    <AddEdit @click="createAuditTrail('click', 'Clicked on the add user button.')" />
    <UserExport @click="createAuditTrail('click', 'Clicked on the export users button.')" />
  </div>

  <div class="user-filter">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-form>
        <a-form-item
          label="Filter"
          name="userfilter">
          <a-input v-model:value="form.filter_allcolumn" @keypress.enter="searchUsers(true)">
            <template #prefix>
              <FilterOutlined class="site-form-item-icon" />
            </template>
          </a-input>
          <a-checkbox v-model:checked="form.filter_activatewildcard">perform subfilter wildcard search</a-checkbox>
        </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="12" class="text-right">
        <h3 class="fw-bold">
          Overall Total User Records: {{ active_records.toLocaleString() }}
        </h3>

        <div class="pagination mt-3 text-right">
          <div class="d-inline-block">
            <ul class="pagination-list lst-none p-0 d-inline-flex w-100">
              <li title="First Page" class="ant-pagination-prev" :class="form.page == 1 ? 'ant-pagination-disabled' : ''">
                <button class="ant-pagination-item-link" type="button" @click="toFirstPage" :disabled="form.page == 1">
                  <StepBackwardFilled />
                </button>
              </li>
              <li class="ant-pagination-prev" :class="form.page == 1 ? 'ant-pagination-disabled' : ''">
                <button class="ant-pagination-item-link" type="button" @click="toPreviousPage" :disabled="form.page == 1">
                  <CaretLeftFilled />
                </button>
              </li>
              <li class="d-inline-block mr-2">
                <p class="d-inline-block mr-2">page</p>
                <a-input-number class="d-inline-block text-center page-number" v-model:value="current" :min="1" @change="onPageChange" @pressEnter="onPageChange" />
              </li>
              <li class="ant-pagination-next mr-2" :class="user_pagination.links.next ? '' : 'ant-pagination-disabled'">
                <button class="ant-pagination-item-link" type="button" @click="toNextPage" :disabled="!user_pagination.links.next">
                  <CaretRightFilled />
                </button>
              </li>
              <li title="Last Page" class="ant-pagination-next mr-2 ant-pagination-disabled">
                <button class="ant-pagination-item-link" type="button" @click="toLastPage" disabled>
                  <StepForwardFilled />
                </button>
              </li>

              <a-select v-model:value="pageSize" @change="onPageChange">
                <a-select-option :value="size" v-for="(size, index) in page_sizes" :key="index">
                  {{ size + " / page" }}
                </a-select-option>
              </a-select>
            </ul>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>

  <a-table
    sticky 
    :columns="columns" 
    :data-source="user_list" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 1500 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    :pagination="false"
    :loading="loading"
    size="small">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">ID<br>
          <input class="single-input" type="text" v-model="form.filter_id" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'first_name'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">First Name<br>
          <input class="single-input" type="text" v-model="form.filter_first_name" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_first_name')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_first_name == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_first_name != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'last_name'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Last Name<br>
          <input class="single-input" type="text" v-model="form.filter_last_name" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_last_name')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_last_name == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_last_name != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'email'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Email<br>
          <input class="single-input" type="text" v-model="form.filter_email" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_email')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_email == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_email != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'phone'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Phone<br>
          <input class="single-input" type="text" v-model="form.filter_phone" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_phone')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_phone == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_phone != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'address1'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Address1<br>
          <input class="single-input" type="text" v-model="form.filter_address1" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_address1')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_address1 == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_address1 != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'address2'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Address2<br>
          <input class="single-input" type="text" v-model="form.filter_address2" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_address2')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_address2 == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_address2 != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'city'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">City<br>
          <input class="single-input" type="text" v-model="form.filter_city" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_city')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_city == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_city != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'state'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">State<br>
          <input class="single-input" type="text" v-model="form.filter_state" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_state')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_state == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_state != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'zip'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Zip<br>
          <input class="single-input" type="text" v-model="form.filter_zip" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_zip')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_zip == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_zip != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'role'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Role<br>
          <input class="single-input" type="text" v-model="form.filter_role" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_role')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_role == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_role != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'created_at'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Created At<br>
          <input class="single-input" type="text" v-model="form.filter_created_at" @keypress.enter="searchUsers(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_created_at')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_created_at == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_created_at != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'action'">
        Action<br/><br/>
      </template>
    </template>
    <template #bodyCell="{ column, record, text }">
      <template v-if="column.dataIndex === 'role'">
        <a-tag color="green" v-if="record.role">{{ text }}</a-tag>
      </template>
      <template v-if="column.dataIndex === 'action'">
        <div class="d-flex">
          <FormOutlined @click="showEditDataModal(record.id)" class="icon-edit" />
          <DeleteData @click="createAuditTrail('click', 'Clicked on the delete user button.')" :user_id="record.id" :full_name="record.first_name + ' ' + record.last_name" />
        </div>
      </template>
    </template>
  </a-table>

  <EditData ref="editDataModal" />
</template>

<script>
import { FormOutlined, DeleteOutlined, FilterOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined,
  StepBackwardFilled, StepForwardFilled, CaretLeftFilled, CaretRightFilled } from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import EditData from "../../components/users/EditData.vue";
import DeleteData from "../../components/users/DeleteData.vue";
import AddEdit from "../../components/users/AddEdit.vue";
import UserExport from "../../components/users/UserExport.vue";
import axios from 'axios'

export default defineComponent({
  components: {
    FormOutlined,
    DeleteOutlined,
    FilterOutlined,
    DownOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    EditData,
    DeleteData,
    StepBackwardFilled,
    StepForwardFilled,
    CaretLeftFilled,
    CaretRightFilled,
    AddEdit,
    UserExport,
  },
  setup() {
    const columns = ref([
      { title: 'User ID', dataIndex: 'id', key: 'id', width: 100, resizable: true, },
      { title: 'First Name', dataIndex: 'first_name', key: 'first_name', width: 200, resizable: true, ellipsis: true, },
      { title: 'Last Name',  dataIndex: 'last_name', key: 'last_name', width: 200, resizable: true, ellipsis: true, },
      { title: 'Email', dataIndex: 'email', key: 'email', width: 200, resizable: true, ellipsis: true, },
      { title: 'Phone', dataIndex: 'phone', key: 'phone', width: 150, resizable: true, },
      { title: 'Address1', dataIndex: 'address1', key: 'address1', width: 200, resizable: true, ellipsis: true, },
      { title: 'Address2', dataIndex: 'address2', key: 'address2', width: 200, resizable: true, ellipsis: true, },
      { title: 'City', dataIndex: 'city', key: 'city', width: 150, resizable: true, ellipsis: true, },
      { title: 'State', dataIndex: 'state', key: 'state', width: 100, resizable: true, },
      { title: 'Zip', dataIndex: 'zip', key: 'zip', width: 100, resizable: true, },
      { title: 'Role', dataIndex: 'role', key: 'role', width: 150, resizable: true, },
      { title: 'Created At', dataIndex: 'created_at', key: 'created_at', width: 180, resizable: true, },
      { title: 'Action', dataIndex: 'action', key: 'action', fixed: 'right', width: 80, }
    ]);
    
    const data = [];

    return {
      data,
      columns,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
    };
  },
  data() {
		return {
      active_records: 0,

      data: [],
      user_list: [],
      user_pagination: {
        meta: {
          to: 1
        },
        links: {
          next: null,
        }
      },

      loading: true,
      current: 1,
      pageSize: parseInt(import.meta.env.VITE_DEFAULT_PAGINATION_SIZE),

      page_sizes: JSON.parse(import.meta.env.VITE_PAGINATION_SIZE_OPTIONS),

      form: {
        page: 1,
        per_page: parseInt(import.meta.env.VITE_DEFAULT_PAGINATION_SIZE),
        filter_allcolumn: null,
        filter_activatewildcard: false,
        filter_id: null,
        filter_first_name: null,
        filter_last_name: null,
        filter_email: null,
        filter_phone: null,
        filter_address1: null,
        filter_address2: null,
        filter_city: null,
        filter_state: null,
        filter_zip: null,
        filter_role: null,
        filter_created_at: null,

        sort_id: 0,
        sort_first_name: 0,
        sort_last_name: 0,
        sort_email: 0,
        sort_phone: 0,
        sort_address1: 0,
        sort_address2: 0,
        sort_city: 0,
        sort_state: 0,
        sort_zip: 0,
        sort_role: 0,
        sort_created_at: 0,

        export_to: '',
      },

      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),

      searched_columns: ''
		}
	},
  methods: {
    getUsers() {
      this.form.per_page = this.pageSize
      this.getUsersByParams()
    },
    getUsersByParams() {
      this.loading = true
      this.form.export_to = ''

      axios.post("/user", this.form, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data
        this.user_list = data.data
        this.user_pagination = data
        this.loading = false
        message.success(data.message)

        this.getUsersStats()
      })
      .catch((err) => {
        console.error(err)
        this.user_list = []
        this.user_pagination = {
          meta: {
            total: 0
          },
          links: {
            next: null
          }
        },
        this.loading = false
        message.error(err.response.data.message);
      });
    },
    searchUsers(create_trail) {
      this.current = 1

      this.form.per_page = this.pageSize
      this.form.page = 1

      this.getUsersByParams()

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },    
    onPageChange() {
      this.form.per_page = this.pageSize
      this.form.page = this.current

      this.getUsersByParams()
      this.scrollToTop()
    },
    toFirstPage() {
      this.searchUsers()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to first page" button in the pagination for users.')
    },
    toPreviousPage() {
      this.current = this.current - 1
      this.form.page = this.current
      this.getUsersByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the previous button in the pagination for users.')
    },
    toNextPage() {
      this.current = this.current + 1
      this.form.page = this.current
      this.getUsersByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the next button in the pagination for users.')
    },
    toLastPage() {
      this.current = this.user_pagination.meta.to
      this.form.page = this.current
      this.getUsersByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to last page" button in the pagination for users.')
    },
    changeColumnSort(create_trail, column_to_sort) {
      this.form[column_to_sort] = this.form[column_to_sort] + 1
      if(this.form[column_to_sort] == 3) {
        this.form[column_to_sort] = 0
      }

      this.searchUsers()

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },
    getUsersStats() {
      axios.get("/user/stats", {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        this.active_records = res.data.data.active_records
      })
      .catch((err) => {
        console.error(err.response.data.message)
        this.active_records = 0
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    showEditDataModal(user_id) {
      this.$refs.editDataModal.showModal(user_id)
      this.createAuditTrail('click', 'Clicked on the edit user button.')
    },
    createAuditTrail(type, activity_name = null) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath,
      }

      if(type == 'click') {
        data.activity = activity_name
      } else if(type == 'search') {
        let search_string = 'Searched users by '
        this.searched_columns = Object.entries(this.form).toString()
          .replaceAll(',', ', ').replaceAll(' ,', ' null,')
          .replaceAll('filter_', '').replaceAll(/\export_to.*?\b/g, '')
          .replaceAll('_', ' ');

        let concatenated = search_string.concat('', this.searched_columns)
        let search_array = concatenated.split(/sort(.*)/s)
        let sort_string = search_array[1].replaceAll(' 0,', ' default,').replaceAll(', 0', ', default').replaceAll(' 1,', ' ascending,').replaceAll(', 1', ', ascending').replaceAll(' 2,', ' descending,').replaceAll(', 2', ', descending')
        let search_to_pass = search_array[0].concat('sort', sort_string).replace(/(^[,\s]+)|([,\s]+$)/g, '')

        data.activity = search_to_pass
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
  },
  mounted() {
    this.getUsers()
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
.single-input {
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 12px;
}
.client-action {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
:deep(.table-striped) td {
  background-color: #fafafa;
}
.action-container {
  display: flex;
}
</style>