import React from 'react';

const dropDownCountries = ( props ) => {

    return (
        <div>
            <select>
            {
            props.list.map((element, index) => {
            return <option key={index} value={element.name}></option>
            })
            }
            </select>
        </div>
    )
};

export default dropDownCountries;