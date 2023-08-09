import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
  query myQuery(
    $appid: String!
    $exclude: String
    $lat: String!
    $lon: String!
    $units: String!) {
    myQuery(
      appid: $appid,
      exclude: $exclude, 
      lat: $lat, 
      lon: $lon
      units: $units) {
      current {
        clouds
        dew_point
        dt
        feels_like
        humidity
        pressure
        sunrise
        sunset
        temp
        uvi
        visibility
        weather {
          description
          icon
          id
          main
        }
        wind_deg
        wind_speed
      }
      daily {
        clouds
        dew_point
        dt
        feels_like {
          day
          eve
          morn
          night
        }
        humidity
        moon_phase
        moonrise
        moonset
        pop
        pressure
        # rain
        summary
        sunrise
        sunset
        temp {
          day
          eve
          max
          min
          morn
          night
        }
        uvi
        weather {
          description
          icon
          id
          main
        }
        wind_deg
        wind_gust
        wind_speed
      }
      hourly {
        clouds
        dew_point
        dt
        feels_like
        humidity
        pop
        pressure
        # rain
        temp
        uvi
        visibility
        weather {
          description
          icon
          id
          main
        }
        wind_deg
        wind_gust
        wind_speed
      }
      lat
      lon
      timezone
      timezone_offset
    }
  }
`

// const fetchWeatherQuery = gql`
//   query myQuery(
//     $current_weather: String
//     $daily: String
//     $hourly: String
//     $latitude: String! 
//     $longitude: String! 
//     $timezone: String!) {
//     myQuery(
//       current_weather: $current_weather, 
//       daily: $daily, 
//       hourly: $hourly, 
//       latitude: $latitude, 
//       longitude: $longitude, 
//       timezone: $timezone){
//       current_weather{
//         is_day
//         temperature
//         time
//         weathercode
//         winddirection
//         windspeed
//       }
//       daily{
//         temperature_2m_max
//         time
//         weathercode
//       }
//       daily_units{
//         temperature_2m_max
//         time
//         weathercode
//       }
//       elevation
//       generationtime_ms
//       hourly{
//         apparent_temperature
//         dewpoint_2m
//         precipitation_probability
//         relativehumidity_2m
//         temperature_2m
//         time
//         uv_index
//         uv_index_clear_sky
//       }
//       hourly_units{
//         apparent_temperature
//         dewpoint_2m
//         precipitation_probability
//         relativehumidity_2m
//         temperature_2m
//         time
//         uv_index
//         uv_index_clear_sky
//       }
//       latitude
//       longitude
//       timezone
//       timezone_abbreviation
//       utc_offset_seconds
//     }
//   }
// `

export default fetchWeatherQuery