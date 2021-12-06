import React from 'react';

class EqInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleEqChange = this.handleEqChange.bind(this);
    }

    handleEqChange(e) {
        const filter = /[^0-9a-xEPI+*^/().-]/g;

        this.props.handleEqChange(e.target.value.replace(filter, ''));
    }

    render() {
        return (
            <div className="eqBox">
                <label>
                    Enter an equation:&ensp;f(x)=
                    <input
                        type="text"
                        value={this.props.eqText}
                        onChange={this.handleEqChange}
                    />
                </label>
            </div>
        );
    }
}

export default EqInput;
