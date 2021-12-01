import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './CitiesWeather.module.scss'
import getWeatherApi from '../../../services/weatherhelf-api'
import CitiesList from '../../CitiesList'
import Searchbar from '../../Searchbar'
import weather from '../../../redux/weatherCity/action'
import {
  addCity,
  removeCity,
  updateCity,
} from '../../../redux/citiesItems/action'
import getCityWeather from '../../../redux/weatherCity/selector'
import getCities from '../../../redux/citiesItems/selector'

const CitiesWeather = () => {
  const dispatch = useDispatch()

  const cities = useSelector(getCities)
  const cityRequest = useSelector(getCityWeather)

  const responseWeather = async function (cityName) {
    try {
      const result = await getWeatherApi(cityName)
      const curentObj = cities.find((el) => result.id === el.id)
      if (curentObj) {
        return
      }
      dispatch(addCity(result))
      return
    } catch (error) {
      alert('Enter the correct city name...')
    }
  }

  useEffect(() => {
    if (cityRequest) {
      responseWeather(cityRequest)
      dispatch(weather(''))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityRequest])

  const onDelelte = (id) => {
    const newCities = cities.filter((el) => el.id !== id)
    dispatch(removeCity(newCities))
  }

  const onUpdate = async (name) => {
    const result = await getWeatherApi(name)
    const curName = cities.find((el) => el.name === result.name)
    const idx = cities.indexOf(curName)
    cities.splice(idx, 1, result)

    dispatch(updateCity(cities))
  }

  return (
    <>
      <Searchbar className={styles.searchbar} />
      <CitiesList onDelete={onDelelte} onUpdate={onUpdate} />
    </>
  )
}

export default CitiesWeather
