import styles from './Button.module.scss';

export default function Button({ text, onClick }) {
  return (
    <button type="submit" className={styles.btnGetWeather} onClick={onClick}>
      {text}
    </button>
  );
}
