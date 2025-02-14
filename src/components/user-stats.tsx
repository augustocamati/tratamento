"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


 const chartData = [
   { date: "Jan", pH: 3.1, conductivity: 480, oxygen: 8.2 },
   { date: "Feb", pH: 5.2, conductivity: 500, oxygen: 8.4 },
   { date: "Mar", pH: 7.0, conductivity: 510, oxygen: 8.3 },
   { date: "Apr", pH: 13.3, conductivity: 490, oxygen: 8.6 },
   { date: "May", pH: 12.2, conductivity: 505, oxygen: 8.5 },
   { date: "Jun", pH: 10.2, conductivity: 500, oxygen: 8.5 },
 ]

const chartConfig = {
  pH: {
    label: "pH",
    color: "hsl(var(--chart-1))",
  },
  conductivity: {
    label: "conductivity",
    color: "hsl(var(--chart-2))",
  },
  oxygen: {
    label: "oxygen",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Medições</CardTitle>
        <CardDescription>
          Dados para os últimos 6 meses seriam exibidos aqui.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="pH"
              type="natural"
              fill="var(--color-pH)"
              fillOpacity={0.4}
              stroke="var(--color-pH)"
              stackId="a"
            />
            <Area
              dataKey="conductivity"
              type="natural"
              fill="var(--color-conductivity)"
              fillOpacity={0.4}
              stroke="var(--color-conductivity)"
              stackId="a"
            />
            <Area
              dataKey="oxygen"
              type="natural"
              fill="var(--color-oxygen)"
              fillOpacity={0.4}
              stroke="var(--color-oxygen)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
