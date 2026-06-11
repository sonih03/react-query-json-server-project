import React from 'react'
import {useDashboard} from '../../store/hooks/sales/useDashBoard'
import {
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js"
import { Bar } from 'react-chartjs-2'
import { plugins } from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,BarElement,Tooltip,Legend)

const Dashboard = () => {
    const {kpi, userRanking, productRanking} = useDashboard();
    const userChartData = {
        labels: userRanking.map(item => item.name),
        datasets: [
            {
                label: "구매 건수",
                data: userRanking.map(item=>item.count)
            }
        ]
    }
    const productChartData = {
        labels: productRanking.map(item => item.name),
        datasets: [
            {
                label: "판매 수량",
                data: productRanking.map(item=>item.quantity)
            }
        ]
    }
    const chartOptions = {
        responsiv: true,
        maintainAspectRation: false,
        indexAxis: "y",
        plugins:{
            legend:{
                position: "top"
            }
        }
    }
  return (
    <div>
      <div>
        <div>
            <div>총 매출액</div>
            <div>{kpi.totalSalesAmount.toLocaleString()}원</div>
        </div>
        <div>
            <div>총 판매수량</div>
            <div>{kpi.totalQuantity.toLocaleString()}개</div>
        </div>
        <div>
            <div>총 주문건수</div>
            <div>{kpi.totalOrderCount.toLocaleString()}건</div>
        </div>
        <div>
            <div>고객 수</div>
            <div>{kpi.customerCount.toLocaleString()}명명</div>
        </div>
        <div>
            <div>상품 수</div>
            <div>{kpi.productCount.toLocaleString()}개</div>
        </div>
      </div>
      <div>
        <div>
            <div>고객 구매 랭킹 TOP 10</div>
            <div>
              <Bar data={userChartData} options={chartOptions}/>
            </div>
            
        </div>
        <div>
            <div>상품 판매 랭킹 TOP 10</div>
            <div>
            <Bar data={productChartData} options={chartOptions}/>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Dashboard
