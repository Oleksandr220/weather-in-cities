import styles from './Input.module.scss';

export default function Input({ request, onChange, placeholder }) {
  return (
    <input
      className={styles.weatherOnCityInput}
      value={request}
      onChange={onChange}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder={placeholder}
    />
  );
}
