import React from 'react'

import { NivoRadar } from 'library'
import 'library/dist/index.css';

const App = () => {
  return (
    <div className="main-wrapper">

      <div className="main-chart-wrapper">
        <h2>Engine 1</h2>
        <div className="chart-wrapper">
          <NivoRadar
            data={data1}
            keys={keys1}
            options={defaultOptions1}
          />
        </div>
      </div>

      <div className="main-chart-wrapper">
        <h2>Engines</h2>
        <div className="chart-wrapper">
          <NivoRadar
            data={data}
            keys={keys}
            options={defaultOptions}
          />
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    "propName": "Messurements & Inspections",
    "engine1": 5,
    "engine2": 3,
    "engine3": 2
  },
  {
    "propName": "Vibration",
    "engine1": 3,
    "engine2": 1,
    "engine3": 4,
  },
  {
    "propName": "Oil",
    "engine1": 4,
    "engine2": 4,
    "engine3": 5
  },
  {
    "propName": "Infrared",
    "engine1": 1,
    "engine2": 1,
    "engine3": 4
  },
  {
    "propName": "Visual",
    "engine1": 0,
    "engine2": 5,
    "engine3": 2
  },
  {
    "propName": "Ultrasound",
    "engine1": 2,
    "engine2": 1,
    "engine3": 2
  },
  {
    "propName": "MCA Tests",
    "engine1": 1,
    "engine2": 2,
    "engine3": 1
  },
];

const keys = ['engine1', 'engine2', 'engine3'];

const defaultOptions = {
  isInteractive: true,
  animated: true,
  enableDotLabel: false,
  customLabelEnabled: false,
  gridLabelOffset: 32,
  gridLevels: 5,
  indexBy: "propName",
  enabledLegend: true,
  enableDots: false,
  margins: { top: 90, right: 120, bottom: 50, left: 120 },
};

export default App;

const keys1 = ['engine1'];
const data1 = [
  {
    "propName": "Messurements & Inspections",
    "engine1": 5,
  },
  {
    "propName": "Vibration",
    "engine1": 3,
  },
  {
    "propName": "Oil",
    "engine1": 4,
  },
  {
    "propName": "Infrared",
    "engine1": 1,
  },
  {
    "propName": "Visual",
    "engine1": 0,
  },
  {
    "propName": "Ultrasound",
    "engine1": 2,
  },
  {
    "propName": "MCA Tests",
    "engine1": 1,
  },
];
const defaultOptions1 = {
  isInteractive: false,
  animated: false,
  colors: ["#03C800", "#29B1FF", "#FF706A"],
  enableDotLabel: true,
  customLabelEnabled: true,
  gridLabelOffset: 45,
  gridLevels: 5,
  indexBy: "propName",
  enabledLegend: false,
  enableDots: true,
  margins: { top: 90, right: 120, bottom: 50, left: 120 },
  title: 'Pump 5',
};