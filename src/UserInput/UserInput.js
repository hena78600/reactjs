import React from 'react';

const userInput = (props) => {

    const inputstyle = {
        border: '2px solid red',
        width: '60%',
        textAlign: 'center'
    }

    return <input type='text' style={inputstyle} onChange={props.changed} value={props.currentName} />;
}

export default userInput;