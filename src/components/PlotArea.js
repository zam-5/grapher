import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import stringToDataPoints from '../util';

class PlotArea extends React.Component {
    render() {
        let data = [];
        try {
            data = stringToDataPoints(
                this.props.eqText,
                this.props.xMin,
                this.props.xMax
            );
        } catch (err) {
            data = [{ x: 0, y: 0 }];
        }
        return (
            <VictoryChart domain={this.props.domain}>
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
}
export default PlotArea;
