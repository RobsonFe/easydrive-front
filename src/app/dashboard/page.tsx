import Layout from "@/components/layout"
import { PieChartComponent } from "./components/PieChart"
import { BarChartComponent } from "./components/BarChart"
import { AreaChartComponent } from "./components/AreaChart"
import { LineChartComponent } from "./components/LineChart"
import { RadialChartComponent } from "./components/RadialChart"

const Dashboard = () => {
  return (
    <Layout title="Easy Drive - Dashboard">
      <div className="flex flex-col justify-center items-center flex-wrap gap-5">
        <h1 className="font-bold text-pretty text-2xl">
          Análises do Sistema em Tempo Real
        </h1>
        <div className="flex w-full gap-5 mb-5">
          <PieChartComponent />
          <BarChartComponent />
          <LineChartComponent />
          <RadialChartComponent />
        </div>
      </div>
      <AreaChartComponent />
    </Layout>
  )
}

export default Dashboard
