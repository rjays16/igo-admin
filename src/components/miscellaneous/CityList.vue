<template>
  <div class="client-filter">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-form>
        <a-form-item
          label="Filter"
          name="clientfilter">
          <a-input v-model:value="form.filter_allcolumn" @keypress.enter="searchCities(true)">
            <template #prefix>
              <FilterOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="18">
        <div class="pagination text-right">
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
              <li class="ant-pagination-next mr-2" :class="city_pagination.links.next ? '' : 'ant-pagination-disabled'">
                <button class="ant-pagination-item-link" type="button" @click="toNextPage" :disabled="!city_pagination.links.next">
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
    :data-source="city_list"
    @resizeColumn="handleResizeColumn"
    :scroll="{ x: 1500 }"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    :pagination="false"
    :loading="loading"
    size="small">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'id'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">City ID<br>
          <input class="single-input" type="text" v-model="form.filter_id" @keypress.enter="searchCities(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_id')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_id == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_id != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'state'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">State<br>
          <input class="single-input" type="text" v-model="form.filter_state" @keypress.enter="searchCities(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_state')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_state == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_state != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'city'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">City<br>
          <input class="single-input" type="text" v-model="form.filter_city" @keypress.enter="searchCities(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_city')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_city == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_city != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'description'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Description<br>
          <input class="single-input" type="text" v-model="form.filter_description" @keypress.enter="searchCities(true)" /></span>
          <span class="ant-table-column-sorter ant-table-column-sorter-full">
            <span class="ant-table-column-sorter-inner" @click="changeColumnSort(true, 'sort_description')">
              <CaretUpOutlined class="ant-table-column-sorter-up" :class="form.sort_description == 1 ? 'active' : ''" />
              <CaretDownOutlined class="ant-table-column-sorter-down" :class="form.sort_description != 2 ? '' : 'active'" />
            </span>
          </span>
        </div>
      </template>
      <template v-if="column.key === 'created_at'">
        <div class="ant-table-column-sorters">
          <span class="ant-table-column-title">Created At<br>
          <input class="single-input" type="text" v-model="form.filter_created_at" @keypress.enter="searchCities(true)" /></span>
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
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'action'">
        <div class="action-container">
          <FormOutlined @click="showEditDataModal(record.id)" class="icon-edit" />
          <DeleteData @click="createAuditTrail('click', 'Clicked on the delete city button.')" :city_id="record.id" :state="record.state" :city="record.city" />
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
import EditData from "../../components/clients/EditCity.vue";
import DeleteData from "../../components/clients/DeleteCity.vue";
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
  },
  setup() {
    const columns = ref([
      { title: 'ID', dataIndex: 'id', key: 'id', width: 100, resizable: true, },
      { title: 'State', dataIndex: 'state', key: 'state', width: 100, resizable: true, },
      { title: 'City', dataIndex: 'city', key: 'city', width: 250, resizable: true, },
      { title: 'Description', dataIndex: 'description', key: 'description', width: 600, resizable: true, ellipsis: true, },
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
      city_list: [],
      city_pagination: {
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
        filter_id: null,
        filter_state: null,
        filter_description: null,
        filter_created_at: null,

        sort_id: 0,
        sort_client_type: 0,
        sort_description: 0,
        sort_created_at: 0,
        
        export_to: '',
      },

      current_route: this.$router.currentRoute.value,
      user_data: this.$cookies.get('user-data'),

      searched_columns: ''
		}
	},
  methods: {
    getCities() {
      this.form.per_page = this.pageSize
      this.getCitiesByParams()
    },
    getCitiesByParams() {
      this.loading = true
      this.form.export_to = ''

      axios.post("/city", this.form, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data
        this.city_list = data.data
        this.city_pagination = data
        this.loading = false
        message.success(data.message)

        // this.getClientTypesStats()
      })
      .catch((err) => {
        console.error(err)
        this.city_list = []
        this.city_pagination = {
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
    searchCities(create_trail) {
      this.current = 1

      this.form.per_page = this.pageSize
      this.form.page = 1

      this.getCitiesByParams()

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },    
    onPageChange() {
      this.form.per_page = this.pageSize
      this.form.page = this.current

      this.getCitiesByParams()
      this.scrollToTop()
    },
    toFirstPage() {
      this.searchCities()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to first page" button in the pagination for cities.')
    },
    toPreviousPage() {
      this.current = this.current - 1
      this.form.page = this.current
      this.getCitiesByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the previous button in the pagination for cities.')
    },
    toNextPage() {
      this.current = this.current + 1
      this.form.page = this.current
      this.getCitiesByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the next button in the pagination for cities.')
    },
    toLastPage() {
      this.current = this.city_pagination.meta.to
      this.form.page = this.current
      this.getCitiesByParams()
      this.scrollToTop()

      this.createAuditTrail('click', 'Clicked on the "go to last page" button in the pagination for cities.')
    },
    changeColumnSort(create_trail, column_to_sort) {
      this.form[column_to_sort] = this.form[column_to_sort] + 1
      if(this.form[column_to_sort] == 3) {
        this.form[column_to_sort] = 0
      }

      this.searchCities()

      if(create_trail) {
        this.createAuditTrail('search')
      }
    },
    getCitiesStats() {
      axios.get("/city/stats", {
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
    showEditDataModal(city_id) {
      this.$refs.editDataModal.showModal(city_id)
      this.createAuditTrail('click', 'Clicked on the edit city button.')
    },
    createAuditTrail(type, activity_name = null) {
      let data = {
        user_id: this.user_data.id,
        pages: this.current_route.fullPath,
      }

      if(type == 'click') {
        data.activity = activity_name
      } else if(type == 'search') {
        let search_string = 'Searched cities by '
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
    this.getCities()
  }
});
</script>

<style scoped>
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