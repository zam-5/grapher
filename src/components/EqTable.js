import React from 'react';
import EqInput from './EqInput';
import NewEqButton from './buttons/NewEqButton';
import DelEqButton from './buttons/DelEqButton';
import ColorPickButton from './buttons/ColorPickButton';

export default function EqTable(props) {
    let eqList = [];
    for (let eq in props.eqText) {
        eqList.push(
            <tr key={eq} className="eqRow">
                <td>
                    <ColorPickButton color={props.eqColors[eq]} />
                </td>
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
                        <td></td>
                        <td>
                            <NewEqButton
                                addEqRow={props.addEqRow}
                                incColorTracker={props.incColorTracker}
                            />
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
