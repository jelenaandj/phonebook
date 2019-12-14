import React from 'react';


const Phone=(props)=>{
    // let {phoneL}=props;
    let {list}=props;

    return(
        <div>
            <label>{list.name}</label>
            <br/>
            <label>{list.phone}</label>
            <hr/>
        </div>
    );
}
export default Phone