import { getClient } from '@/apollo-client'
import CalloutCard from '@/components/CalloutCard'
import StatCard from '@/components/StatCard'
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries'
import { Root } from '@/graphql/generated/types'
import InformationPanel from '@/components/InformationPanel'
import TempChart from '@/components/TempChart'
import RainChart from '@/components/RainChart'
import HumidityChart from '@/components/HumidityChart'
import { cleanData } from '@/lib/cleanData'
import getBasePath from '@/lib/getBasePath'
import { GPTWeatherResponse } from '@/lib/GPTResult'

export const revalidate = 60

type Props = {
  params: {
    city: string
    lat: string
    long: string
  }
}

async function WeatherPage({params: {city, lat, long}}: Props) {
  const client = getClient()
  const {data} = await client.query({
    query: fetchWeatherQuery,
    variables: {
      appid: 'b0ea087c2174390349250f1e4206c3be',
      lat: lat,
      lon: long,
      units: 'metric',
    }
  })
  const results:Root = data.myQuery
  const dataToSend = cleanData(results, city)
  console.log('dataToSend', dataToSend)
  // const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     weatherData:dataToSend
  //   })
  // })

  // const GPTData = await res.json()
  // const {content} = GPTData

  console.log('graphQL results', results.current)
  return (
    <div className='flex flex-col min-h-screen md:flex-row' >
      <InformationPanel
        city={city}
        lat={lat}
        long={long}
        results={results}
      />
      <div className='flex-1 p-5 lg:p-10'>
        <div className='p-5'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Todays Overview</h2>
            <p className='text-sm text-gray-400'>
              Last Updated at: {' '}
              {new Date(results.current.dt * 1000).toLocaleString('en-GB', {timeZone:results.timezone})}
              ({results.timezone})
            </p>
          </div>
          <div className='m-2 mb-10'>
            <CalloutCard  message={GPTWeatherResponse}/>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
            <StatCard
              title="Maximum Temperature"
              metric={`${results.daily[0].temp.max?.toFixed(1)}°`}
              color="yellow"
            />
            <StatCard
              title="Minimum Temperature"
              metric={`${results.daily[0].temp.min?.toFixed(1)}°`}
              color="green"
            />
            <div>
              <StatCard
                title="UV Index"
                metric={results.daily[0].uvi.toFixed(1)}
                color="rose"
              />
              {Number(results.daily[0].uvi.toFixed(1)) > 5 && (
                <CalloutCard
                  warning
                  message="The UV Index is high today, be sure to wear sunscreen!"
                />
              )}
            </div>
            <div className='flex space-x-3'>
              <StatCard
                title="Wind Speed"
                metric={`${results.current.wind_speed?.toFixed(1)}m/s`}
                color="cyan"
              />
              <StatCard
                title="Wind Direction"
                metric={`${results.current.wind_deg?.toFixed(1)}°`}
                color="violet"
              />
            </div>
          </div>
        </div>
        <hr className='mb-5' /> 
        <div className='space-y-3'>
          <TempChart results={results}/>
          <RainChart results={results}/>
          <HumidityChart results={results}/>
        </div>
      </div>
    </div>
  )
}

export default WeatherPage