import React from 'react';

const Phone=(props)=>{
    // let {phoneL}=props;
    let {item}=props;

    return(
        <div>
            <label >{item.name}</label>
            <br/>
            <label >{item.phone}</label>
            <hr/>
        </div>
    );
}
export default Phone