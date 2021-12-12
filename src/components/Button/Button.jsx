import styles from './Button.module.scss'
import Icons from '../Icons'

export default function Button({ text, onClick, name, color, size }) {
  return (
    <button type="submit" className={styles.btn__weather} onClick={onClick}>
      <span>{text}</span>
      <span className={styles.btn__icon}>
        <Icons name={name} color={color} size={size} />
      </span>
    </button>
  )
}
