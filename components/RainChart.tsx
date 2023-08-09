'use client'
import { Card, AreaChart, Title } from '@tremor/react'
import { Root } from '@/graphql/generated/types'

type Props = {
  results: Root
}

function RainChart({results}:Props) {
  // const hourly = results.hourly.slice(0, 24)
  const hourly = results.hourly.map(hour => (
    new Date(hour.dt * 1000).toLocaleString('en-US', {
      hour: 'numeric',
      hour12: false,
      timeZone: results.timezone
    }) 
  )).slice(0, 24)
  const hourlyData = hourly.map((hour, i) => ({
    // time: `${Number(hour)}:00`,
    time: Number(hour),
    'Rain (%)': (results.hourly[i].pop) * 100
  }))
  const dataFormatter = (number:number) => `${number} %`
  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        className='mt-6'
        data={hourlyData}
        showLegend
        index="time"
        categories={['Rain (%)']}
        colors={['blue']}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  )
}

export default RainChart