export const pathDetails = '/weather-in-cities/details/'

export const suntime = (data) => {
  return new Date(data * 1000).toLocaleTimeString('en-US')
}

export const getTemperature = (data) => {
  return Math.round(data - 273)
}
