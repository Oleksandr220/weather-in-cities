import { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import Button from '../Button'
import getWeatherApi from '../../services/weatherhelf-api'
import styles from './WeatherDeatails.module.scss'
import { suntime } from '../../constants'
import { getTemperature } from '../../constants'
import Chart from '../Chart'

export default function WeatherDetailsView() {
  const history = useHistory()
  const location = useLocation()
  const [city, setCity] = useState()
  const { cityName } = useParams()

  async function getResponseCity(cityName) {
    const result = await getWeatherApi(cityName)
    const { description } = result.weather[0]

    const currentCity = {
      countryName: result.sys.country,
      cityName: result.name,
      description,
      temp: getTemperature(result.main.temp),
      temp_max: getTemperature(result.main.temp_max),
      temp_min: getTemperature(result.main.temp_min),
      feels_like: getTemperature(result.main.feels_like),
      sunrise: suntime(result.sys.sunrise),
      sunset: suntime(result.sys.sunset),
    }
    return setCity(currentCity)
  }

  useEffect(() => {
    getResponseCity(cityName)
  }, [cityName])

  const onGoBack = () => {
    if (location?.state?.search) {
      return history.push(`?query=${location?.state?.search}`)
    }
    history.push(location?.state?.from)
  }

  return (
    <>
      <Button text="Back" onClick={onGoBack} size="16" name="home" />
      {city && (
        <div className={styles.details__container}>
          <div className={styles.info}>
            <h3 className={styles.field}>Country: {city.countryName}</h3>
            <p className={styles.field}>City: {city.cityName}</p>
            <p className={styles.field}>Sky: {city.description}</p>
            <p className={styles.field}>Temp: {city.temp} °C</p>
            <p className={styles.field}>Temp max: {city.temp_max} °C</p>
            <p className={styles.field}>Temp min: {city.temp_min} °C</p>
            <p className={styles.field}>Feels like: {city.feels_like} °C</p>
            <p className={styles.field}>Sunrise: {city.sunrise}</p>
            <p className={styles.field}>Sunset: {city.sunset}</p>
          </div>
          <Chart
            country={city.cityName}
            temp={city.temp}
            tempMax={city.temp_max}
            tempMin={city.temp_min}
            tempFeels={city.feels_like}
          />
        </div>
      )}
    </>
  )
}
