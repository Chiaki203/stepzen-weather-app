import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CityPicker from './CityPicker'
import { Root } from '@/graphql/generated/types'

type Props = {
  city: string
  results: Root
  lat: string
  long: string
}

function InformationPanel({city, lat, long, results}:Props) {
  console.log('results.current.weather[0].icon', results.current.weather[0].icon)
  return (
    <div className='bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white p-10'>
      <div className='pb-5'>
        <h1 className='text-6xl font-bold mb-2'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>
          Long/Lat: {long}, {lat}
        </p>
      </div>
      <CityPicker/>
      <hr className='mt-10 mb-5'/>
      <div className='flex items-center justify-between'>
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${results.current.weather[0].icon}@2x.png`}
            alt={results.current.weather[0].description}
            width={100}
            height={100}
          />
          <div className='flex items-center justify-between space-x-10'>
            <p className='text-6xl font-semibold' >
              {results.current.temp?.toFixed(1)}℃
            </p>
            <p className='text-right font-extralight text-lg'>
              {results.current.weather[0].description}
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-2 py-5'>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]'>
          <SunIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight' >Sunrise</p>
            <p className='uppercase text-2xl'>
              {new Date(results.current.sunrise * 1000).toLocaleTimeString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
                timeZone: results.timezone
              })}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]'>
          <MoonIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight' >Sunset</p>
            <p className='uppercase text-2xl'>
              {new Date(results.current.sunset * 1000).toLocaleTimeString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
                timeZone: results.timezone
              })}
            </p>
          </div>
        </div>
      </div>
      <hr className='my-10' />
      {/* <p className='my-5 text-sm'>Currently you are...</p> */}
      <div className=' flex items-center justify-between space-x-10'>
        <div>
          <p className='text-xl'>
            {new Date().toLocaleDateString("en-GB", {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p className='font-extralight'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className='text-xl font-bold uppercase'>
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: false
          })}
        </p>
      </div>
    </div>
  )
}

export default InformationPanel