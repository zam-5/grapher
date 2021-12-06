import React from 'react';

// class AxisSelector extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAxisChange = this.handleAxisChange.bind(this);
//     }

//     handleAxisChange(e) {
//         const filter = /[^0-9-]/g;
//         this.props.handleAxisChange(
//             this.props.name,
//             Number(e.target.value.replace(filter, ''))
//         );
//     }

//     render() {
//         const name = this.props.name;
//         const label = `${name[0]}-${name.slice(1).toLowerCase()}: `;
//         return (
//             <label htmlFor={name} className="axisInput">
//                 {label}
//                 <input
//                     type="number"
//                     name={name}
//                     id={name}
//                     value={this.props.axisValue}
//                     onChange={(e) => {
//                         this.handleAxisChange(e);
//                     }}
//                 />
//             </label>
//         );
//     }
// }

// export default AxisSelector;

export function AxisSelector(props) {
    function handleAxisChange(e) {
        const filter = /[^0-9-]/g;
        props.handleAxisChange(
            props.name,
            Number(e.target.value.replace(filter, ''))
        );
    }

    const name = props.name;
    const label = `${name[0]}-${name.slice(1).toLowerCase()}: `;
    return (
        <label htmlFor={name} className="axisInput">
            {label}
            <input
                type="number"
                name={name}
                id={name}
                value={props.axisValue}
                onChange={handleAxisChange}
            />
        </label>
    );
}
