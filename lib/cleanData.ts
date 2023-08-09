import { Root } from '@/graphql/generated/types'

export const cleanData = (data:Root, city:string) => {
  const {
    current,
    timezone,
    hourly,
  } = data
  const {
    temp,
    wind_speed,
    wind_deg,
    weather,
    dt
  } = current
  const currentTime = new Date(dt * 1000).toLocaleString('en-GB', {timeZone: timezone})
  const hourlyTemp:number[] = []
  const hourlyHumidity:number[] = []
  const hourly_precipitation_probability:number[] = []
  const hourlyUvi:number[] = []
  const hourlyWeather:string[] = []
  for (let i = 0; i < 24; i++) {
    hourlyTemp.push(hourly[i].temp)
    hourlyHumidity.push(hourly[i].humidity)
    hourly_precipitation_probability.push(hourly[i].pop)
    hourlyUvi.push(hourly[i].uvi)
    hourlyWeather.push(hourly[i].weather[0].description)
  }
  // const {
  //   temp:hourlyTemp,
  //   humidity,
  //   pop:Precipitation_probability,
  //   uvi,
  //   weather:hourlyWeather,
  // } = hourly[0]
  const {
    description:currentWeather,
  } = weather[0]
  return {
    current: {
      temp,
      wind_speed,
      wind_deg,
      currentTime,
      currentWeather,
    },
    hourly: {
      hourlyTemp,
      hourlyHumidity,
      hourly_precipitation_probability,
      hourlyUvi,
      hourlyWeather,
    },
    timezone,
    city: decodeURI(city)
  }
}