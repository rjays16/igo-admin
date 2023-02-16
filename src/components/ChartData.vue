<template>
  <div class="action-container">
    <div class="row d-flex justify-content-between">
        <div class="col-6 col-left">
            <h1>{{ title }}</h1>
            <small>{{currentDate()}}</small>
        </div>
        <div class="col-6">
            <div class="row d-flex">
                <div class="btn-row">
                    <!-- <button @click="toggleComponentOne">Day</button> -->
                    <button @click="toggleComponentTwo">Month</button>
                    <button @click="toggleComponentThree">Year</button>
                </div>
                <div class="icon-row">
                    <a-space><cloud-download-outlined /></a-space>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <MonthChart v-if="showComponentTwo"/>
        <YearChart v-if="showComponentThree"/>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import {CloudDownloadOutlined} from '@ant-design/icons-vue';
import MonthChart from './clients/MonthChart.vue'
import YearChart from './clients/YearChart.vue'
export default defineComponent({
    name: 'ChartData',
    components:{
        CloudDownloadOutlined,
        MonthChart,
        YearChart
    },
     data() {
        return {
            title: "Statistics",
            showComponentOne: false,
            showComponentTwo: true,
            showComponentThree: false
        };
    },
    methods: {
        currentDate() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const current = new Date();
        const date = `${monthNames[current.getMonth()]} ${current.getFullYear()}`;
        return date;
        },
        // toggleComponentOne () {
        //     this.showComponentOne = this.showComponentOne = true, this.showComponentTwo = false, this.showComponentThree = false;
        // },
        toggleComponentTwo () {
            this.showComponentTwo = this.showComponentTwo = true, this.showComponentOne = false, this.showComponentThree = false;
        },
        toggleComponentThree () {
            this.showComponentThree = this.showComponentThree = true, this.showComponentOne = false, this.showComponentTwo = false;
        },
    },
     setup() {
        return {
        activeKey: ref('1'),
        };
    }
})
</script>
<style scoped>
    .action-container{
        padding: 1em;
    }
    .col-left{
        line-height: 16px;
    }
    small{
        color: #000;
    }
    button{
        opacity: .3;
        color: #000;
        padding: 0px 12px;
        cursor: pointer;
    }
    .btn-row{
        margin: 0 1em;
    }
    :deep(.anticon-cloud-download) svg{
        font-size: 1.9em !important;
        padding: 4px !important;
        background: blue !important;
        color: white !important;
        border-radius: 2px !important;
    }
    .d-flex{
        display: flex;
    }
    .justify-content-between{
        justify-content: space-between;
    }
    .icon-row{
        cursor: pointer;
    }
    svg{
        font-size: 2em !important;
        color: #fff !important;
        background: blue !important;
        padding: 3px;
        border-radius: 3px;

    }
</style>