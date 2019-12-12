import React from 'react';
import Phone from './phone';


const PhoneList=(props)=>{
    
let {phoneL}=props;

    return(
        <div>
            {phoneL.map(item=>{
                return <Phone phoneL={item} />
            })}

        </div>

    );
}

export default PhoneList