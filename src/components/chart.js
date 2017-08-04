import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default ({width, height, data, color, units = ''}) => {
  function average (data) {
    const avg = data.reduce((total, value) => total + value, 0) / data.length
    return Math.round(avg)
  }
  return (
    <div>
      <Sparklines height={height} width={width} data={data}>
        <SparklinesLine color={color} style={{strokeWidth: 0.2}}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>Avg: {average(data)} {units}</div>
    </div>
  )
}