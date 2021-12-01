import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './CitiesList.module.scss';
import Button from '../Button';
import getCities from '../../redux/citiesItems/selector';

const CitiesView = ({ onUpdate, onDelete }) => {
  const cities = useSelector(getCities);
  const location = useLocation();

  return (
    <ul className={styles.citiesList}>
      {cities.map(city => (
        <li key={city.id} className={styles.citiesListItem}>
          <Link
            className={styles.citiesListItem__link}
            to={{
              pathname: `/weather-in-cities/details/${city.name}`,
              state: { from: location },
            }}
          >
            <p>Country: {city.sys.country}</p>
            <p>City: {city.name}</p>
            <p>Temp: {Math.round(city.main.temp - 273)} °C</p>
          </Link>
          <Button text="Delete" onClick={() => onDelete(city.id)} />
          <Button text="Update" onClick={() => onUpdate(city.name)} />
        </li>
      ))}
    </ul>
  );
};

export default CitiesView;
