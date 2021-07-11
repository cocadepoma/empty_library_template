import React from 'react';

import { ResponsiveRadar } from '@nivo/radar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

/*
        animate={false}
        colors={["#03C800", "#29B1FF", "#FF706A"]}
        enableDotLabel={true}
        gridLevels={5}
        indexBy="propName"
        legends
*/
const NivoRadar = ({ data, keys, options }) => {
    const {
        isInteractive,
        animated,
        colors,
        enableDotLabel,
        customLabelEnabled,
        gridLevels,
        indexBy,
        enabledLegend,
        enableDots,
        margins,
        gridLabelOffset
    } = options;

    const handleLabelClick = (id) => {
        const singleMessure = data.map((singleData) => {
            return ({
                [indexBy]: singleData[indexBy],
                [id]: singleData[id],
            });
        });
        alert(JSON.stringify(singleMessure));
    };

    return (
        <React.Fragment>
            <ResponsiveRadar
                animate={animated}
                borderWidth={2}
                borderColor={{ from: 'color' }}
                blendMode="normal"
                curve="linearClosed"
                colorBy="index"
                colors={colors && colors.length > 0 ? colors : { scheme: 'set2' }}
                data={data}
                dotSize={13}
                dotColor={{ from: 'color', modifiers: [] }}
                dotBorderWidth={2}
                dotBorderColor="#fff"
                dotLabel="value"
                dotLabelYOffset={-12}
                // dotLabel={(e) => { console.log(e) }}
                enableDots={enableDots}
                enableDotLabel={enableDotLabel}
                fillOpacity={0.3}
                gridLabel={(event) => LabelComponent({ customLabelEnabled, event, data, indexBy, keys })}
                gridLevels={gridLevels}
                gridShape="circular"
                gridLabelOffset={gridLabelOffset}
                indexBy={indexBy}
                keys={keys}
                isInteractive={isInteractive}
                margin={margins}
                maxValue="auto"
                motionConfig="wobbly"
                theme={theme}
                tooltipFormat={(value) => TooltipComponent(value)}
                legends={
                    enabledLegend
                        ? [{
                            onClick: ({ id }) => { handleLabelClick(id) },
                            anchor: 'top-left',
                            direction: 'column',
                            translateX: -65,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            symbolSize: 12,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000',
                                    }
                                }
                            ]
                        }]
                        : []
                }
            />
        </React.Fragment>
    )
}

export default NivoRadar;

const theme = {
    "tooltip": {
        "container": {
            "position": "absolute",
            "left": "150%",
            "transform": "translateX(-50%)",
            "margin-top": 25
        }
    },
    scheme: "set1",
    axis: {
        ticks: {
            text: {
                fill: "rgba(0, 0, 0, .55)",
                fontSize: 14,
            }
        }
    },
    grid: {
        line: {
            stroke: "#DEDEDE",
            strokeDasharray: "0"
        }
    },
    dots: {
        text: {
            fill: "#737373",
            fontSize: 12,
            fontWeight: 800
        }
    },
    tooltip: {
        container: {
            background: "#fff",
            color: "inherit",
            boxShadow: "10px 3px 9px rgba(0, 0, 0, 0.5)",
            fontFamily: "monospace"
        }
    }
};

/* CUSTOM COMPONENTS */
const messureColors = ['#19CB00', '#DEE500', '#E5AA00', '#F63A07', '#B03300', '#000000'];
const messureMessage = ['No fault', 'Anomaly', 'Low', 'High', 'Critical', 'Not messure'];

const TooltipComponent = (value) => {
    return (
        <div>
            <span style={{
                fontSize: 12,
                fontWeight: 'bold',
                letterSpacing: 1.1,
                textTransform: 'uppercase',
                color: messureColors[value],
            }}>
                {messureMessage[value]}
            </span>
        </div>
    );
};

const LabelComponent = ({ event, data, indexBy, keys, customLabelEnabled }) => {
    const { id, anchor } = event;
    const filter = data.find((singleData) => singleData[indexBy] === id);
    const arrayPosition = [filter[keys[0]]];

    const handleClickLabel = () => {
        alert(`${keys[0]} => ${filter[indexBy]}: ${messureMessage[arrayPosition]}`);
    };

    const handleClickLabels = () => {
        // alert(`${filter[indexBy]}`);
        let alertMessage = `${filter[indexBy]}\n`;
        keys.map(key => {
            alertMessage += `${key}: ${messureMessage[filter[key]]}\n`;
        });
        alert(alertMessage);
    };

    return (
        customLabelEnabled
            ? (
                <g
                    onClick={handleClickLabel}
                    transform={
                        `translate(${anchor === 'end' ? -40 : anchor === 'middle' ? -30 : 0}, -20)`
                    }
                    style={{ cursor: 'pointer' }}
                >
                    <text style={{ fontSize: 12 }}>{filter[indexBy]}</text>
                    <text
                        y={24}
                        style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            letterSpacing: 1.1,
                            textTransform: 'uppercase',
                            fill: messureColors[arrayPosition],
                        }}
                    >
                        {messureMessage[arrayPosition]}
                    </text>
                </g>
            )
            : (
                <g style={{ cursor: 'pointer' }} onClick={handleClickLabels} transform={`translate(${anchor === 'end' ? -40 : anchor === 'middle' ? -30 : 0}, -10)`}>
                    <text style={{ fontSize: 12 }}>{id}</text>
                </g>
            )
    );
};
