import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { stringToDataPoints } from '../util';

export default function PlotArea(props) {
    let data = [];
    try {
        data = stringToDataPoints(props.eqText, props.xMin, props.xMax);
    } catch (err) {
        data = [{ x: 0, y: 0 }];
    }

    //const lines =
    return (
        <VictoryChart domain={props.domain} theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                    data: { stroke: '#c43a31' },
                    parent: { border: '1px solid #ccc' },
                }}
                data={data}
            />
            <VictoryLine
                domain={props.domain}
                style={{
                    data: { stroke: '#31c43d' },
                    parent: { border: '1px solid #ccc' },
                }}
                data={[
                    { x: 0, y: 0 },
                    { x: 10, y: 10 },
                ]}
            />
        </VictoryChart>
    );
}
