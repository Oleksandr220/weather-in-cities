import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import styles from './Searchbar.module.scss';
import weather from '../../redux/weatherCity/action';

export default function Searchbar() {
  const [request, setRequest] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (request.trim() === '') {
      return;
    }

    dispatch(weather(request));
    setRequest('');
  };

  return (
    <div>
      <form className={styles.weatherOnCity} onSubmit={handleSubmit}>
        <Input
          request={request}
          onChange={handleNameChange}
          placeholder="Search weather in city"
        />
        <Button text="search city" />
      </form>
    </div>
  );
}
