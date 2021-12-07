import React from 'react';
import EqInput from './EqInput';
import NewEqButton from './NewEqButton';
import DelEqButton from './DelEqButton';

export default function EqTable(props) {
    let eqList = [];
    for (let eq in props.eqText) {
        eqList.push(
            <tr key={eq} className="eqRow">
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
                <td>
                    <DelEqButton name={eq} deleteEqRow={props.deleteEqRow} />
                </td>
            </tr>
        );
    }

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
