import React, {useState} from 'react';

const Form=(props)=>{
    // let [phoneL]=props;
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    let {clickHandler}=props;

const handleInput= (e) =>{
    e.preventDefault();
    console.log(`name${newName}${newPhone}`);
    clickHandler(newName, newPhone);
}

const onNameChange= (e) =>{
    
    setNewName(e.target.value);
}




const onPhoneChange= (e) =>{
    setNewPhone(e.target.value);
}

// clickHandler=(e)=>{
//     // setPhoneL('')
// }



    return(
        <form >
            <input type='text' id='name' onChange={onNameChange}/>
            <input type='text' id='phone' onChange={onPhoneChange}/>
            <button type='submit' onClick={handleInput}>SUBMIT</button>
        </form>
    );
}
export default Form