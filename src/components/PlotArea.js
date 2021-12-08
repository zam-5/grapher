import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { stringToDataPoints, useWindowDimensions } from '../util';

export default function PlotArea(props) {
    const { height, width } = useWindowDimensions();

    let lines = [];
    for (let eq in props.eqText) {
        let data = [];
        try {
            data = stringToDataPoints(props.eqText[eq], props.xMin, props.xMax);
        } catch (err) {
            data = [{ x: 0, y: 0 }];
        }

        lines.push(
            <VictoryLine
                key={props.eqText[eq] + 'line'}
                style={{
                    data: { stroke: props.eqColors[eq] },
                    parent: { border: '1px solid #ccc' },
                }}
                data={data}
            />
        );
    }

    return (
        <VictoryChart
            width={width - 210}
            height={height - 40}
            padding={{ top: 10, bottom: 10, left: 10, right: 10 }}
            domain={props.domain}
            theme={VictoryTheme.material}
            typ
        >
            {lines}
        </VictoryChart>
    );
}
