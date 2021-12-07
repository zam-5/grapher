import React from 'react';
import EqInput from './EqInput';
import NewEqButton from './NewEqButton';

export default function EqTable(props) {
    function generateTable() {
        let eqList = [];
        for (let eq in props.eqText) {
            eqList.push(
                <tr key={eq}>
                    <td>
                        <EqInput
                            eqText={props.eqText[eq]}
                            handleEqChange={props.handleEqChange}
                            eqValiity={props.eqValidity[eq]}
                            id={eq}
                            key={eq}
                        />
                    </td>
                </tr>
            );
        }
        eqList.push(
            <tr key="addButRow">
                <td>
                    <NewEqButton addEqRow={props.addEqRow} />
                </td>
            </tr>
        );
        return eqList;
    }

    // function addEqRow() {
    //     console.log('here');
    //     const eqList = generateTable();
    //     const newId = 'eq' + eqList.length;
    //     props.handleEqChange('', newId);
    // }

    return (
        <div>
            <table className="eqTable">
                <tbody>{generateTable()}</tbody>
            </table>
        </div>
    );
}
