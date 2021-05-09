
import axios from 'axios';
import { BASE_URL } from 'components/utils/request';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    
    //Forma Errada
    let chartData: ChartData = { labels: [], series: [] }

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            chartData = {labels: myLabels, series: mySeries};
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    const options = {
        legend: {
            show: true
        }
    };

    return (
        <Chart
            options={{ ...options, labels: chartData.labels, }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    )
}
export default DonutChart;