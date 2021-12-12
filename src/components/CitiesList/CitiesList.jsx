import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './CitiesList.module.scss'
import Button from '../Button'
import getCities from '../../redux/citiesItems/selector'
import { getTemperature } from '../../constants'
import { pathDetails } from '../../constants'

const CitiesView = ({ onUpdate, onDelete }) => {
  const cities = useSelector(getCities)
  const location = useLocation()
  return (
    <ul className={styles.citiesList}>
      {cities.map((city) => (
        <li key={city.id} className={styles.citiesListItem}>
          <Link
            className={styles.citiesListItem__link}
            to={{
              pathname: `${pathDetails}${city.name}`,
              state: { from: location },
            }}
          >
            <p>Country: {city.sys.country}</p>
            <p>City: {city.name}</p>
            <p>Temp: {getTemperature(city.main.temp)} °C</p>
          </Link>
          <Button
            text="Delete"
            onClick={() => onDelete(city.id)}
            size="18"
            name="trash-can"
          />
          <Button
            text="Update"
            onClick={() => onUpdate(city.name)}
            size="18"
            name="loop2"
          />
        </li>
      ))}
    </ul>
  )
}

export default CitiesView

// useMemo
// useCallBack
// saga
