import React from 'react';

class AxisSelector extends React.Component {
    render() {
        const name = this.props.name;
        return <input type="number" name={name} />;
    }
}

class EqInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleEqChange = this.handleEqChange.bind(this);
    }

    handleEqChange(e) {
        const filter = /[^0-9x+*^/-]/g;

        this.props.handleEqChange(e.target.value.replace(filter, ''));
    }

    render() {
        return (
            <form className="eqForm">
                <div className="eqInput">
                    <label>
                        Enter an equation:&ensp;f(x)=
                        <input
                            type="text"
                            value={this.props.eqText}
                            onChange={this.handleEqChange}
                        />
                    </label>
                </div>
                <div className="axisInput">
                    <label>
                        x-min:&ensp;
                        <input type="number" />
                    </label>
                    <label>
                        &ensp;x-max:&ensp;
                        <input type="number" />
                    </label>
                    <label>
                        &ensp;y-min:&ensp;
                        <input type="number" />
                    </label>
                    <label>
                        &ensp;y-max:&ensp;
                        <input type="number" />
                    </label>
                </div>
            </form>
        );
    }
}

export default EqInput;
