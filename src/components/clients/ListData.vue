<template>
  <div class="action-container">
    <AddEdit @click="createAuditTrail('click', 'Clicked on the add client button.')" />
    <AddBulk @click="createAuditTrail('click', 'Clicked on the add bulk clients button.')" />
    <ImportData @click="createAuditTrail('click', 'Clicked on the import clients button.')" />
    <ClientExport @click="createAuditTrail('click', 'Clicked on the export clients button.')" />
  </div>

  <div class="client-filter">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-form>
          <a-form-item
            label="Filter"
            name="clientfilter">
            <a-input v-model:value="form.filter_allcolumn" @keypress.enter="searchClients(true)">
              <template #prefix>
                <FilterOutlined class="site-form-item-icon" />
              </template>
            </a-input>
            <a-checkbox v-model:checked="form.filter_activatewildcard">perform subfilter wildcard search</a-checkbox>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="6">
        <a-dropdown class="client-action" :trigger="['click']">
          <template #overlay>
            <a-menu>
              <a-menu-item>
                Show Statement of Selected Clients
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            Action
            <DownOutlined />
          </a-button>
        </a-dropdown>
      </a-col>
      <a-col :span="12" class="text-right">
        <h3 class="fw-bold">
          Overall Total Client Records: {{ active_records.toLocaleString() }}
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
              <li class="ant-pagination-next mr-2" :class="client_pagination.links.next ? '' : 'ant-pagination-disabled'">
                <button class="ant-pagination-item-link" type="button" @click="toNextPage" :disabled="!client_pagination.links.next">
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
    :row-selection="rowSelection" 
    :columns="columns" 
    :data-source="client_list" 
    @resizeColumn="handleResizeColumn" 
    :scroll="{ x: 2000 }" 
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    :pagination="false"
    :loading="loading"
    size="small">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'id'">
        <!-- Custom Sorter -->
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Client ID<br>
          <input class="single-input" type="text" v-model="form.filter_id" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
        <!-- Custom Sorter -->
      </template>
      <template v-if="column.key === 'first_name'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">First Name<br>
          <input class="single-input" type="text" v-model="form.filter_first_name" @keypress.enter="searchClients(true)" /></span>
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
          <input class="single-input" type="text" v-model="form.filter_last_name" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_last_name')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_last_name == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_last_name != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'gender'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Gender<br>
          <input class="single-input" type="text" v-model="form.filter_gender" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_gender')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_gender == 1 ? 'active' : ''"/>
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_gender != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'date_of_birth'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Date of Birth<br>
          <input class="single-input" type="text" v-model="form.filter_date_of_birth" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_date_of_birth')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_date_of_birth == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_date_of_birth != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'email'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Email Address<br>
          <input class="single-input" type="text" v-model="form.filter_email" @keypress.enter="searchClients(true)" /></span>
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
          <input class="single-input" type="text" v-model="form.filter_phone" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_phone')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_phone == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_phone != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'organization'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Organization<br>
          <input class="single-input" type="text" v-model="form.filter_organization" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_organization')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_organization == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_organization != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'address1'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Address1<br>
          <input class="single-input" type="text" v-model="form.filter_address1" @keypress.enter="searchClients(true)" /></span>
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
          <input class="single-input" type="text" v-model="form.filter_address2" @keypress.enter="searchClients(true)" /></span>
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
          <input class="single-input" type="text" v-model="form.filter_city" @keypress.enter="searchClients(true)" /></span>
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
          <input class="single-input" type="text" v-model="form.filter_state" @keypress.enter="searchClients(true)" /></span>
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
          <input class="single-input" type="text" v-model="form.filter_zip" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_zip')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_zip == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_zip != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'client_type'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Types<br>
          <input class="single-input" type="text" v-model="form.filter_client_type" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_client_type')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_client_type == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_client_type != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'ca_date'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">CA Date<br>
          <input class="single-input" type="text" v-model="form.filter_ca_date" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_ca_date')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_ca_date == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_ca_date != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'note'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Note<br>
          <input class="single-input" type="text" v-model="form.filter_note" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_note')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_note == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_note != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'tag'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Tag<br>
          <input class="single-input" type="text" v-model="form.filter_tag" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_tag')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_tag == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_tag != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'created_at'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Created At<br>
          <input class="single-input" type="text" v-model="form.filter_created_at" @keypress.enter="searchClients(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_created_at')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_created_at == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_created_at != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'action'">
        Action<br /><br />
      </template>
    </template>
    <template #bodyCell="{ column, record, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-if="column.dataIndex === 'action'">
        <div class="d-flex">
          <FormOutlined @click="showEditDataModal(record.id)" class="icon-edit" />
          <DeleteData @click="createAuditTrail('click', 'Clicked on the delete client button.')" :client_id="record.id" :full_name="record.first_name + ' ' + record.last_name" />
        </div>
      </template>
    </template>
  </a-table>
  
  <EditData ref="editDataModal" />
</template>

<script>
import { FormOutlined, DeleteOutlined, FilterOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined,
  StepBackwardFilled, StepForwardFilled, CaretLeftFilled, CaretRightFilled } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import EditData from "../../components/clients/EditData.vue";
import DeleteData from "../../components/clients/DeleteData.vue";
import AddEdit from "../../components/clients/AddEdit.vue";
import ImportData from "../../components/clients/ImportData.vue";
import AddBulk from "../../components/clients/AddBulk.vue";
import ClientExport from "../../components/clients/ClientExport.vue";
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
    ImportData,
    AddBulk,
    ClientExport,
  },
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };

    const columns = ref([
      { title: 'Client ID', dataIndex: 'id', key: 'id', width: 120, resizable: true, },
      { title: 'First Name', dataIndex: 'first_name', key: 'first_name', width: 200, resizable: true, ellipsis: true, },
      { title: 'Last Name', dataIndex: 'last_name', key: 'last_name', width: 200, resizable: true, ellipsis: true, },
      { title: 'Gender', dataIndex: 'gender', key: 'gender', width: 200, resizable: true, },
      { title: 'Date of Birth', dataIndex: 'date_of_birth', key: 'date_of_birth', width: 200, resizable: true, },
      { title: 'Email Address', dataIndex: 'email', key: 'email', width: 200, resizable: true, ellipsis: true, },
      { title: 'Phone', dataIndex: 'phone', key: 'phone', width: 200, resizable: true, },
      { title: 'Organization', dataIndex: 'organization', key: 'organization', width: 200, resizable: true, ellipsis: true, },
      { title: 'Address1', dataIndex: 'address1', key: 'address1', width: 200, resizable: true, ellipsis: true, },
      { title: 'Address2', dataIndex: 'address2', key: 'address2', width: 200, resizable: true, ellipsis: true, },
      { title: 'City', dataIndex: 'city', key: 'city', width: 150, resizable: true, ellipsis: true, },
      { title: 'State', dataIndex: 'state', key: 'state', width: 100, resizable: true, },
      { title: 'Zip', dataIndex: 'zip', key: 'zip', width: 100, resizable: true, },
      { title: 'Type', dataIndex: 'client_type', key: 'client_type', width: 200, resizable: true, },
      { title: 'CA Date', dataIndex: 'ca_date', key: 'ca_date', width: 200, resizable: true, },
      { title: 'Note', dataIndex: 'note', key: 'note', width: 600, resizable: true, ellipsis: true, },
      { title: 'Tag', dataIndex: 'tag', key: 'tag', width: 200, resizable: true, ellipsis: true, },
      { title: 'Created At', dataIndex: 'created_at', key: 'created_at', width: 180, resizable: true, },      
      { title: 'Action', dataIndex: 'action', key: 'action', fixed: 'right', width: 80, }
    ]);

    let data = [];

    return {
      data,
      columns,
      rowSelection,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
    };
  },
  data() {
		return {
      active_records: 0,

      data: [],
      client_list: [],
      client_pagination: {
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
        filter_gender: null,
        filter_date_of_birth: null,
        filter_email: null,
        filter_organization: null,
        filter_address1: null,
        filter_address2: null,
        filter_city: null,
        filter_state: null,
        filter_zip: null,
        filter_phone: null,
        filter_client_type: null,
        filter_ca_date: null,
        filter_note: null,
        filter_tag: null,
        filter_created_at: null,

        sort_id: 0,
        sort_first_name: 0,
        sort_last_name: 0,
        sort_gender: 0,
        sort_date_of_birth: 0,
        sort_email: 0,
        sort_organization: 0,
        sort_address1: 0,
        sort_address2: 0,
        sort_city: 0,
        sort_state: 0,
        sort_zip: 0,
        sort_phone: 0,
        sort_client_type: 0,
        sort_ca_date: 0,
        sort_note: 0,
        sort_tag: 0,
        sort_created_at: 0,
        
        export_to: '',
      },
      
      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),

      searched_columns: ''
		}
	},
  methods: {
    getClients() {
      this.form.per_page = this.pageSize
      this.getClientsByParams()
    },
    getClientsByParams() {
      this.loading = true
      this.form.export_to = ''

      axios.post("/client", this.form, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data
        this.client_list = data.data
        this.client_pagination = data
        this.loading = false
        message.success(data.message)

        this.getClientsStats()
      })
      .catch((err) => {
        console.error(err)
        this.client_list = []
        this.client_pagination = {
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
    searchClients(create_trail) {
      this.current = 1

      this.form.per_page = this.pageSize
      this.form.page = 1

      this.getClientsByParams()
      
      if(create_trail) {
        this.createAuditTrail('search')
      }
    },    
    onPageChange() {
      this.form.per_page = this.pageSize
      this.form.page = this.current

      this.getClientsByParams()
      this.scrollToTop()
    },
    toFirstPage() {
      this.searchClients(false)
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to first page" button in the pagination for clients.')
    },
    toPreviousPage() {
      this.current = this.current - 1
      this.form.page = this.current
      this.getClientsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the previous button in the pagination for clients.')
    },
    toNextPage() {
      this.current = this.current + 1
      this.form.page = this.current
      this.getClientsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the next button in the pagination for clients.')
    },
    toLastPage() {
      this.current = this.client_pagination.meta.to
      this.form.page = this.current
      this.getClientsByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to last page" button in the pagination for clients.')
    },
    changeColumnSort(create_trail, column_to_sort) {
      this.form[column_to_sort] = this.form[column_to_sort] + 1
      if(this.form[column_to_sort] == 3) {
        this.form[column_to_sort] = 0
      }

      this.searchClients(false)

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },
    getClientsStats() {
      axios.get("/client/stats", {
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
    showEditDataModal(account_id) {
      this.$refs.editDataModal.showModal(account_id)
      this.createAuditTrail('click', 'Clicked on the edit client button.')
    },
    createAuditTrail(type, activity_name = null) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath,
      }

      if(type == 'click') {
        data.activity = activity_name
      } else if(type == 'search') {
        let search_string = 'Searched clients by '
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
    // console.log("BASE_URL: ", import.meta.env.VITE_BASE_URL)
    this.getClients()
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
</style>