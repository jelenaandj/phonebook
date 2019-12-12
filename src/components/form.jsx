import React, { useState } from 'react';

const Form = (props) => {
    let phoneL = props.phoneL;
    let setPhoneL=props.phoneL;
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    let clickHandler = props.clickHandler;
    // let clickDelete=props.clickDelete;

    const handleInput = (e) => {
        // e.preventDefault();
        // console.log(`name${newName}${newPhone}`);
        // clickHandler(newName, newPhone);
        let tmp = [...phoneL]
        console.log(tmp)
        tmp = tmp.filter(x => newName === x.name);
        console.log(tmp)

        if (tmp.length > 0) {
            // alert('Pitanje');
            const r = window.confirm('Do you want to change the phone number');
            if (r === true) {
                
                // setPhoneL('');
                clickHandler(newName, newPhone);
            }
        } else {
            console.log(`name${newName}${newPhone}`);
            clickHandler(newName, newPhone);
            // alert('Ne postoji, dodajemo');
        }
        e.preventDefault();
    }

    const onNameChange = (e) => {
        setNewName(e.target.value);
    }

    const onPhoneChange = (e) => {
        setNewPhone(e.target.value);
    }

    return (
        <form >
            <input type='text' id='name' onChange={onNameChange} />
            <input type='text' id='phone' onChange={onPhoneChange} />
            <button type='submit' onClick={handleInput}>SUBMIT</button>
        </form>
    );
}
export default Form