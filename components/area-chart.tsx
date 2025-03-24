"use client"

import { useEffect, useRef } from "react"

interface AreaChartProps {
  className?: string
}

export function AreaChart({ className }: AreaChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    svg.setAttribute("viewBox", "0 0 600 240")
    svg.setAttribute("fill", "none")

    // Create path for the line
    const linePath = document.createElementNS("http://www.w3.org/2000/svg", "path")
    linePath.setAttribute(
      "d",
      "M0,180 C40,160 80,190 120,170 C160,150 200,120 240,110 C280,100 320,130 360,120 C400,110 440,90 480,70 C520,50 560,80 600,60",
    )
    linePath.setAttribute("stroke", "url(#gradient)")
    linePath.setAttribute("stroke-width", "3")
    linePath.setAttribute("fill", "none")

    // Create path for the area
    const areaPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
    areaPath.setAttribute(
      "d",
      "M0,180 C40,160 80,190 120,170 C160,150 200,120 240,110 C280,100 320,130 360,120 C400,110 440,90 480,70 C520,50 560,80 600,60 L600,240 L0,240 Z",
    )
    areaPath.setAttribute("fill", "url(#areaGradient)")
    areaPath.setAttribute("fill-opacity", "0.3")

    // Create defs for gradients
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs")

    // Line gradient
    const lineGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")
    lineGradient.setAttribute("id", "gradient")
    lineGradient.setAttribute("x1", "0")
    lineGradient.setAttribute("y1", "0")
    lineGradient.setAttribute("x2", "600")
    lineGradient.setAttribute("y2", "0")
    lineGradient.setAttribute("gradientUnits", "userSpaceOnUse")

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    stop1.setAttribute("offset", "0%")
    stop1.setAttribute("stop-color", "#00AEEF")

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    stop2.setAttribute("offset", "100%")
    stop2.setAttribute("stop-color", "#7CDBFF")

    lineGradient.appendChild(stop1)
    lineGradient.appendChild(stop2)

    // Area gradient
    const areaGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")
    areaGradient.setAttribute("id", "areaGradient")
    areaGradient.setAttribute("x1", "0")
    areaGradient.setAttribute("y1", "0")
    areaGradient.setAttribute("x2", "0")
    areaGradient.setAttribute("y2", "240")
    areaGradient.setAttribute("gradientUnits", "userSpaceOnUse")

    const areaStop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    areaStop1.setAttribute("offset", "0%")
    areaStop1.setAttribute("stop-color", "#00AEEF")

    const areaStop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    areaStop2.setAttribute("offset", "100%")
    areaStop2.setAttribute("stop-color", "#7CDBFF")
    areaStop2.setAttribute("stop-opacity", "0")

    areaGradient.appendChild(areaStop1)
    areaGradient.appendChild(areaStop2)

    defs.appendChild(lineGradient)
    defs.appendChild(areaGradient)

    svg.appendChild(defs)
    svg.appendChild(areaPath)
    svg.appendChild(linePath)

    chartRef.current.innerHTML = ""
    chartRef.current.appendChild(svg)

    // Add dates at the bottom
    const dates = ["01/06", "06/06", "11/06", "16/06", "21/06", "26/06", "30/06"]
    const datesContainer = document.createElement("div")
    datesContainer.className = "absolute bottom-0 w-full flex justify-between text-xs text-gray-500 px-2"

    dates.forEach((date) => {
      const span = document.createElement("span")
      span.textContent = date
      datesContainer.appendChild(span)
    })

    chartRef.current.appendChild(datesContainer)
  }, [])

  return <div ref={chartRef} className={`h-[240px] relative ${className}`}></div>
}

