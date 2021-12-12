import { Chart, Ticks, Layer, Bars } from 'rumble-charts'

export default function Chrat({ country, temp, tempMax, tempMin, tempFeels }) {
  const startTemp = 35
  return (
    <Chart
      width={600}
      height={500}
      series={[
        {
          data: [startTemp, temp, tempMax, tempMin, tempFeels],
          name: country,
        },
      ]}
      minY={0}
      style={{
        fontFamily: 'sans-serif',
        fontSize: '0.75em',
      }}
    >
      <Layer width="70%" height="80%">
        <Ticks
          axis="y"
          lineLength="100%"
          lineVisible
          lineStyle={{
            stroke: 'black',
          }}
          labelStyle={{
            dominantBaseline: 'middle',
            fill: 'black',
            textAnchor: 'end',
          }}
          labelAttributes={{
            x: -5,
          }}
        />
        <Ticks
          axis="x"
          label={function noRefCheck() {}}
          labelStyle={{
            dominantBaseline: 'text-before-edge',
            fill: 'black',
            textAnchor: 'middle',
          }}
          labelAttributes={{
            y: 3,
          }}
        />
        <Bars groupPadding="8%" innerPadding="1%" />
      </Layer>
    </Chart>
  )
}
