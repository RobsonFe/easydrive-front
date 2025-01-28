"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import { useEffect, useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import Service from "@/service/service"

interface DataChartItem {
  brand: string
  quantity: number
}

export function PieChartComponent() {
  const service = new Service()
  const [rent, setRent] = useState([])

  useEffect(() => {
    const fetchRent = async () => {
      try {
        const response = await service.rentList()
        console.log("Dados: ", response)

        const dataChart = response.map((item: any) => ({
          brand: item?.vehicle_data?.brand || "Sem Marca",
          quantity: item?.vehicle_data?.quantity || 0,
        }))

        const dadosUnicos = dataChart.reduce(
          (acc: DataChartItem[], curr: DataChartItem) => {
            const dadosExistentes = acc.find(
              (item) => item.brand === curr.brand
            )
            if (dadosExistentes) {
              dadosExistentes.quantity += curr.quantity
            } else {
              acc.push({ ...curr })
            }
            return acc
          },
          [] as DataChartItem[]
        )
        setRent(dadosUnicos)
      } catch (error) {
        console.error("Erro ao buscar aluguéis:", error)
      }
    }

    fetchRent()
  }, [])

  const totalRent = rent.length

  // const totalVehicle = React.useMemo(() => {
  //   return rent.reduce((acc, curr) => acc + curr 0)
  // }, [rent])

  const chartConfig = {
    quantity: {
      label: "Quantity",
    },
    toyota: {
      label: "Toyota",
      color: "hsl(var(--chart-1))",
    },
    bmw: {
      label: "BMW",
      color: "hsl(var(--chart-2))",
    },
    honda: {
      label: "Honda",
      color: "hsl(var(--chart-3))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Easy Drive - Marcas de Veiculos</CardTitle>
        <CardDescription>As Marcas mais valorizadas.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  accessKey="brand"
                  color="hsl(var(--chart-3))"
                  hideLabel={true}
                />
              }
            />
            <Pie
              data={rent}
              dataKey="quantity"
              nameKey="brand"
              innerRadius={60}
              strokeWidth={5}
              fill="#0088FE"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalRent.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Aluguéis
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Quantidade de Veiculos {totalRent}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
