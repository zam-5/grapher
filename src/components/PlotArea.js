import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { stringToDataPoints } from '../util';

export default function PlotArea(props) {
    let data = [];
    try {
        data = stringToDataPoints(props.eqText, props.xMin, props.xMax);
        //props.setEqValidity(true);
    } catch (err) {
        data = [{ x: 0, y: 0 }];
        //props.setEqValidity(false);
    }
    return (
        <VictoryChart domain={props.domain} theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                    data: { stroke: '#c43a31' },
                    parent: { border: '1px solid #ccc' },
                }}
                data={data}
            />
        </VictoryChart>
    );
}
