<template>
    <div class="container">
        <div class="chart-container"><canvas id="acquisitions"></canvas></div>
    </div>
    <div class="container">
        <a-row class="d-flex">
            <a-col :span="4">
                <a-statistic title="Deposit" :value="`$29.703`" style="margin-right: 50px" />
                <a-progress :percent="50" size="small" stroke-color="#52c41a" :show-info="false" />
            </a-col>
            <a-col :span="4">
                <a-statistic title="Credit" :precision="2" :value="`$29.094`" />
                <a-progress :percent="50" size="small" stroke-color="#1890ff" :show-info="false" />
            </a-col>
            <a-col :span="4">
                <a-statistic title="Withdrawal" :precision="2" :value="`$78.706`" />
                <a-progress :percent="50" size="small" stroke-color="#ffc107" :show-info="false" />
            </a-col>
            <a-col :span="4">
                <a-statistic title="Interest Earned Periodic" :precision="2" :value="`$22.123`" />
                <a-progress :percent="50" size="small" stroke-color="#e91e63" :show-info="false" />
            </a-col>
            <a-col :span="4">
                <a-statistic title="Interest Adjustment" :precision="2" :value="`$22.123`" />
                <a-progress :percent="50" size="small" stroke-color="#0000ff" :show-info="false" />
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Chart } from 'chart.js/auto'
export default defineComponent({
    name: 'YearChart',
    mounted(){
        (async function() {
        const data = [
            { month: 'Jan', count: 10 },
            { month: 'Feb', count: 20 },
            { month: 'Mar', count: 40 },
            { month: 'Apr', count: 80 },
            { month: 'May', count: 100 },
            { month: 'Jun', count: 150 },
            { month: 'Jul', count: 200 },
            { month: 'Aug', count: 180 },
            { month: 'Sep', count: 190 },
            { month: 'Oct', count: 170 },
            { month: 'Nov', count: 175 },
            { month: 'Dec', count: 165 },
        ];
        const data2 = [
            { count: 10 },
            { count: 10 },
            { count: 40 },
            { count: 75 },
            { count: 55 },
            { count: 100 },
            { count: 105 },
            { count: 90 },
            { count: 90 },
            { count: 130 },
            { count: 145 },
            { count: 155 },
        ];
        const data3 = [
            { count: 65 },
            { count: 45 },
            { count: 55 },
            { count: 75 },
            { count: 105 },
            { count: 110 },
            { count: 100 },
            { count: 140 },
            { count: 100 },
            { count: 150 },
            { count: 190 },
            { count: 195 },
        ];
        const data4 = [
            { count: 55 },
            { count: 55 },
            { count: 65 },
            { count: 50 },
            { count: 85 },
            { count: 110 },
            { count: 120 },
            { count: 150 },
            { count: 150 },
            { count: 160 },
            { count: 150 },
            { count: 130 },
        ];
        const data5 = [
            { count: 35 },
            { count: 35 },
            { count: 55 },
            { count: 60 },
            { count: 100 },
            { count: 110 },
            { count: 100 },
            { count: 155 },
            { count: 180 },
            { count: 190 },
            { count: 130 },
            { count: 130 },
        ];

        new Chart(
            document.getElementById('acquisitions'),
            {
            type: 'line',
            data: {
                labels: data.map(row => row.month),
                datasets: [
                {
                    fill: 'origin',
                    label: 'Deposit',
                    data: data.map(row => row.count)
                },
                {
                    fill: 'origin',
                    label: 'Credit',
                    data: data2.map(row => row.count)
                },
                {
                    fill: 'origin',
                    label: 'Withdrawal',
                    data: data3.map(row => row.count)
                },
                {
                    fill: 'origin',
                    label: 'interest earned periodic',
                    data: data4.map(row => row.count)
                },
                {
                    fill: 'origin',
                    label: 'interest adjustment',
                    data: data5.map(row => row.count)
                },
                ]
            }
            }
        );
        })();
    }
});
</script>

<style scoped>
.chart-container {
  position: relative;
  margin: auto;
  height: 70vh;
  width: 70vw;
}
:deep(.ant-row) {
    display: flex;
    justify-content: space-evenly;
}
:deep(.ant-col-4) {
    text-align: center;
    padding: 2em;
}
:deep(.ant-statistic-title){
    color: #000;
}
:deep(.ant-statistic-content-value){
    font-size: 16px;
}
</style>


