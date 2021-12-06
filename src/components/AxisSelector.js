import React from 'react';

class AxisSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleAxisChange = this.handleAxisChange.bind(this);
    }

    handleAxisChange(e) {
        const filter = /[^0-9-]/g;
        this.props.handleAxisChange(
            this.props.name,
            e.target.value.replace(filter, '')
        );
    }

    render() {
        const name = this.props.name;
        const label = `${name[0]}-${name.slice(1).toLowerCase()}: `;
        return (
            <label htmlFor={name}>
                {label}
                <input
                    type="number"
                    name={name}
                    id={name}
                    value={this.props.axisValue}
                    onChange={(e) => {
                        this.handleAxisChange(e);
                    }}
                />
            </label>
        );
    }
}

export default AxisSelector;
