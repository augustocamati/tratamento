"use client"

import { useEffect, useRef } from "react"

interface DonutChartProps {
  className?: string
}

export function DonutChart({ className }: DonutChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "200px")
    svg.setAttribute("height", "200px")
    svg.setAttribute("viewBox", "0 0 100 100")

    // Background circle
    const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    bgCircle.setAttribute("cx", "50")
    bgCircle.setAttribute("cy", "50")
    bgCircle.setAttribute("r", "45")
    bgCircle.setAttribute("fill", "none")
    bgCircle.setAttribute("stroke", "#E5E7EB")
    bgCircle.setAttribute("stroke-width", "10")

    // First segment (42%)
    const segment1 = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    segment1.setAttribute("cx", "50")
    segment1.setAttribute("cy", "50")
    segment1.setAttribute("r", "45")
    segment1.setAttribute("fill", "none")
    segment1.setAttribute("stroke", "#00AEEF")
    segment1.setAttribute("stroke-width", "10")
    segment1.setAttribute("stroke-dasharray", "283")
    segment1.setAttribute("stroke-dashoffset", "60")
    segment1.setAttribute("transform", "rotate(-90 50 50)")

    // Second segment (38%)
    const segment2 = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    segment2.setAttribute("cx", "50")
    segment2.setAttribute("cy", "50")
    segment2.setAttribute("r", "45")
    segment2.setAttribute("fill", "none")
    segment2.setAttribute("stroke", "#00D084")
    segment2.setAttribute("stroke-width", "10")
    segment2.setAttribute("stroke-dasharray", "283")
    segment2.setAttribute("stroke-dashoffset", "170")
    segment2.setAttribute("transform", "rotate(-90 50 50)")

    // Third segment (20%)
    const segment3 = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    segment3.setAttribute("cx", "50")
    segment3.setAttribute("cy", "50")
    segment3.setAttribute("r", "45")
    segment3.setAttribute("fill", "none")
    segment3.setAttribute("stroke", "#9747FF")
    segment3.setAttribute("stroke-width", "10")
    segment3.setAttribute("stroke-dasharray", "283")
    segment3.setAttribute("stroke-dashoffset", "240")
    segment3.setAttribute("transform", "rotate(-90 50 50)")

    svg.appendChild(bgCircle)
    svg.appendChild(segment1)
    svg.appendChild(segment2)
    svg.appendChild(segment3)

    chartRef.current.innerHTML = ""
    chartRef.current.appendChild(svg)

    // Add legend
    const legend = document.createElement("div")
    legend.className = "absolute h-full right-0 flex flex-col justify-center space-y-4"

    const legendItems = [
      { color: "bg-primary", label: "Doméstico (42%)" },
      { color: "bg-secondary", label: "Industrial (38%)" },
      { color: "bg-accent", label: "Irrigação (20%)" },
    ]

    legendItems.forEach((item) => {
      const div = document.createElement("div")
      div.className = "flex items-center"

      const colorSpan = document.createElement("span")
      colorSpan.className = `w-3 h-3 rounded-full ${item.color} mr-2`

      const labelSpan = document.createElement("span")
      labelSpan.className = "text-xs text-gray-600"
      labelSpan.textContent = item.label

      div.appendChild(colorSpan)
      div.appendChild(labelSpan)
      legend.appendChild(div)
    })

    chartRef.current.appendChild(legend)
  }, [])

  return <div ref={chartRef} className={`h-[240px] relative flex items-center justify-center ${className}`}></div>
}

