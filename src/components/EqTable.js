import React from 'react';
import EqInput from './EqInput';
import NewEqButton from './NewEqButton';

export default function EqTable(props) {
    let eqList = [];
    for (let eq in props.eqText) {
        eqList.push(
            <tr key={eq}>
                <td>
                    <EqInput
                        eqText={props.eqText[eq]}
                        handleEqChange={props.handleEqChange}
                        className={
                            props.eqValidity[eq] ? 'validInput' : 'invalidInput'
                        }
                        eqValiity={props.eqValidity[eq]}
                        id={eq}
                    />
                </td>
            </tr>
        );
    }
    // eqList.push(
    //     // <tr key="addButRow">
    //     //     <td>
    //     //         <NewEqButton addEqRow={props.addEqRow} />
    //     //     </td>
    //     // </tr>
    //     <button
    //         type="button"
    //         id="addButton"
    //         onClick={(e) => {
    //             e.preventDefault();
    //             props.addEqRow();
    //         }}
    //         disabled={false}
    //     >
    //         +
    //     </button>
    // );

    return (
        <div>
            <table className="eqTable">
                <tbody>
                    {eqList}
                    <tr key="addButRow">
                        <td>
                            <NewEqButton addEqRow={props.addEqRow} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
