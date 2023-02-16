<template>
    <div class="container">
        <div class="chart-container"><canvas id="acquisitions"></canvas></div>
    </div>
    <div class="container">
        <a-row>
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
    name: 'MonthChart',
    mounted(){
        (async function() {
        const data = [
            { day: 1, count: 10 },
            { day: 2, count: 20 },
            { day: 3, count: 40 },
            { day: 4, count: 80 },
            { day: 5, count: 100 },
            { day: 6, count: 150 },
            { day: 7, count: 210 },
            { day: 8, count: 200 },
            { day: 9, count: 190 },
            { day: 10, count: 180 },
            { day: 11, count: 180 },
            { day: 12, count: 170 },
            { day: 13, count: 175 },
            { day: 14, count: 180 },
            { day: 15, count: 185 },
            { day: 16, count: 160 },
            { day: 17, count: 150 },
            { day: 18, count: 155 },
            { day: 19, count: 150 },
            { day: 20, count: 160 },
            { day: 21, count: 140 },
            { day: 22, count: 145 },
            { day: 23, count: 110 },
            { day: 24, count: 120 },
            { day: 25, count: 120 },
            { day: 26, count: 140 },
            { day: 27, count: 120 },
            { day: 28, count: 100 },
            { day: 29, count: 70 },
            { day: 30, count: 80 },
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
            { count: 70 },
            { count: 75 },
            { count: 80 },
            { count: 90 },
            { count: 70 },
            { count: 65 },
            { count: 100 },
            { count: 80 },
            { count: 60 },
            { count: 50 },
            { count: 90 },
            { count: 100 },
            { count: 105 },
            { count: 110 },
            { count: 110 },
            { count: 130 },
            { count: 130 },
            { count: 150 },
            { count: 180 },
            { count: 140 },
            { count: 135 },
        ];
        const data3 = [
            { count: 70 },
            { count: 80 },
            { count: 65 },
            { count: 75 },
            { count: 85 },
            { count: 100 },
            { count: 105 },
            { count: 95 },
            { count: 85 },
            { count: 110 },
            { count: 120 },
            { count: 125 },
            { count: 80 },
            { count: 150 },
            { count: 135 },
            { count: 110 },
            { count: 80 },
            { count: 60 },
            { count: 150 },
            { count: 190 },
            { count: 200 },
            { count: 200 },
            { count: 170 },
            { count: 175 },
            { count: 180 },
            { count: 130 },
            { count: 155 },
            { count: 185 },
            { count: 160 },
            { count: 135 }
        ];
        const data4 = [
            { count: 75 },
            { count: 85 },
            { count: 65 },
            { count: 80 },
            { count: 105 },
            { count: 100 },
            { count: 135 },
            { count: 175 },
            { count: 185 },
            { count: 110 },
            { count: 125 },
            { count: 155 },
            { count: 160 },
            { count: 120 },
            { count: 125 },
            { count: 110 },
            { count: 115 },
            { count: 80 },
            { count: 85 },
            { count: 95 },
            { count: 100 },
            { count: 105 },
            { count: 90 },
            { count: 85 },
            { count: 80 },
            { count: 130 },
            { count: 135 },
            { count: 140 },
            { count: 145 },
            { count: 160 }
        ];
        const data5 = [
            { count: 35 },
            { count: 85 },
            { count: 75 },
            { count: 80 },
            { count: 100 },
            { count: 100 },
            { count: 125 },
            { count: 175 },
            { count: 165 },
            { count: 170 },
            { count: 175 },
            { count: 155 },
            { count: 160 },
            { count: 120 },
            { count: 125 },
            { count: 180 },
            { count: 185 },
            { count: 180 },
            { count: 185 },
            { count: 195 },
            { count: 170 },
            { count: 105 },
            { count: 90 },
            { count: 85 },
            { count: 80 },
            { count: 130 },
            { count: 145 },
            { count: 140 },
            { count: 155 },
            { count: 150 }
        ];

        new Chart(
            document.getElementById('acquisitions'),
            {
            type: 'line',
            data: {
                labels: data.map(row => row.day),
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
                    label: 'interest adjustment ',
                    data: data5.map(row => row.count)
                }
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


