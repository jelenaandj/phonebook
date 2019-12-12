import React from 'react';


const Phone=(props)=>{
    let {phoneL}=props;

    return(
        <div>
            <label>{phoneL.name}</label>
            <br/>
            <label>{phoneL.phone}</label>
            <hr/>
        </div>
    );
}
export default Phone