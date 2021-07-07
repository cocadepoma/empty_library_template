import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    "country": "AD",
    "hot dog": 2,
    "hot dogColor": "hsl(229, 70%, 50%)",
    "burger": 61,
    "burgerColor": "hsl(278, 70%, 50%)",
    "sandwich": 33,
    "sandwichColor": "hsl(160, 70%, 50%)",
    "kebab": 56,
    "kebabColor": "hsl(131, 70%, 50%)",
    "fries": 21,
    "friesColor": "hsl(237, 70%, 50%)",
    "donut": 61,
    "donutColor": "hsl(261, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 2,
    "hot dogColor": "hsl(266, 70%, 50%)",
    "burger": 64,
    "burgerColor": "hsl(121, 70%, 50%)",
    "sandwich": 101,
    "sandwichColor": "hsl(208, 70%, 50%)",
    "kebab": 173,
    "kebabColor": "hsl(331, 70%, 50%)",
    "fries": 150,
    "friesColor": "hsl(266, 70%, 50%)",
    "donut": 34,
    "donutColor": "hsl(357, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 26,
    "hot dogColor": "hsl(186, 70%, 50%)",
    "burger": 108,
    "burgerColor": "hsl(190, 70%, 50%)",
    "sandwich": 129,
    "sandwichColor": "hsl(348, 70%, 50%)",
    "kebab": 180,
    "kebabColor": "hsl(258, 70%, 50%)",
    "fries": 12,
    "friesColor": "hsl(338, 70%, 50%)",
    "donut": 118,
    "donutColor": "hsl(71, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 165,
    "hot dogColor": "hsl(123, 70%, 50%)",
    "burger": 79,
    "burgerColor": "hsl(291, 70%, 50%)",
    "sandwich": 166,
    "sandwichColor": "hsl(11, 70%, 50%)",
    "kebab": 200,
    "kebabColor": "hsl(59, 70%, 50%)",
    "fries": 50,
    "friesColor": "hsl(72, 70%, 50%)",
    "donut": 60,
    "donutColor": "hsl(64, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 1,
    "hot dogColor": "hsl(41, 70%, 50%)",
    "burger": 192,
    "burgerColor": "hsl(131, 70%, 50%)",
    "sandwich": 5,
    "sandwichColor": "hsl(176, 70%, 50%)",
    "kebab": 7,
    "kebabColor": "hsl(154, 70%, 50%)",
    "fries": 56,
    "friesColor": "hsl(127, 70%, 50%)",
    "donut": 106,
    "donutColor": "hsl(54, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 15,
    "hot dogColor": "hsl(92, 70%, 50%)",
    "burger": 153,
    "burgerColor": "hsl(164, 70%, 50%)",
    "sandwich": 164,
    "sandwichColor": "hsl(159, 70%, 50%)",
    "kebab": 187,
    "kebabColor": "hsl(125, 70%, 50%)",
    "fries": 185,
    "friesColor": "hsl(28, 70%, 50%)",
    "donut": 124,
    "donutColor": "hsl(109, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 90,
    "hot dogColor": "hsl(214, 70%, 50%)",
    "burger": 47,
    "burgerColor": "hsl(158, 70%, 50%)",
    "sandwich": 121,
    "sandwichColor": "hsl(296, 70%, 50%)",
    "kebab": 116,
    "kebabColor": "hsl(198, 70%, 50%)",
    "fries": 49,
    "friesColor": "hsl(111, 70%, 50%)",
    "donut": 170,
    "donutColor": "hsl(292, 70%, 50%)"
  }
];

export const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    valueFormat={{ format: '', enabled: false }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)
