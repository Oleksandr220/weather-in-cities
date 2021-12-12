import IconsSVG from './icons.svg'

export default function Icons({ name, color, size, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}
