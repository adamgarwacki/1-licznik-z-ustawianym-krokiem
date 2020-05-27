import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.changeCounterMethod}>Dodaj Step</button>
            <button onClick={ () => props.setZeroOrResetMethod(0) }>Ustaw 0</button>
            <button onClick={ () => props.setZeroOrResetMethod(1) }>Reset</button>
        </div>
    );
};


export default Buttons;