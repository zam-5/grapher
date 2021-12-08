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
                    data: { stroke: '#c43a31' },
                    parent: { border: '1px solid #ccc' },
                }}
                data={data}
            />
        );
    }

    // let data = [];
    // try {
    //     data = stringToDataPoints(props.eqText, props.xMin, props.xMax);
    // } catch (err) {
    //     data = [{ x: 0, y: 0 }];
    // }

    //const lines =
    return (
        <VictoryChart
            width={width}
            height={height}
            padding={{ top: 3, bottom: 3, left: 3, right: 4 }}
            domain={props.domain}
            theme={VictoryTheme.material}
            typ
        >
            {lines}
        </VictoryChart>
    );
}
