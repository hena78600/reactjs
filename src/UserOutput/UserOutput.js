import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
       <div className='UserOutput'>
            <p>
                Usename: {props.username}
            </p>
        <p>
            I hope i'll be overwritten
        </p>
       </div>
    )
}
export default userOutput;