import React, { useState } from 'react';

// import Phone from './phone';

const Form = (props) => {
    let phoneL = props.phoneL;
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [error, setError] = useState('');

    let clickHandler = props.clickHandler;
    //let phoneno = /^\+?([0-9]{3})\)?[ ]?([0-9]{9})$/;
    let phoneno = /^\+[0-9]{3}\s[0-9]{9}/;

    const handleInput = (e) => {
        setError("");
        if (newName !== '' && newPhone !== '') {

            if (newPhone.match(phoneno)) {
                let tmp = [...phoneL]
                console.log(tmp)
                tmp = tmp.filter(x => newName === x.name);
                console.log(tmp)

                if (tmp.length > 0) {
                    // alert('Pitanje');
                    const r = window.confirm('Do you want to change the phone number?');
                    if (r === true) {
                        let index = phoneL.indexOf(tmp[0]);
                        phoneL.splice(index, 1);
                        clickHandler(newName, newPhone);
                    }
                } else {
                    console.log(`name${newName}${newPhone}`);
                    clickHandler(newName, newPhone);
                    // alert('Ne postoji, dodajemo');
                }
            } else {
                setError('Number has to be +ххх ххххххххх format')
                // clickHandler('Number has to be','+ххх ххххххххх format');

            }
        } else {
            setError('Error!')
            //clickHandler('Error!', 'Error!');
        }
        e.preventDefault();
    }

    const onNameChange = (e) => {
        // let tmp=[...phoneL]
        // tmp=tmp.filter(x=>(
        //     x.e.target.value
        // )).map(<Phone/>)
        setNewName(e.target.value);
    }

    const onPhoneChange = (e) => {
        setNewPhone(e.target.value);
    }
    ////


    //////
    return (
        <form >
            <input type='text' id='name' placeholder='name' onChange={onNameChange} />
            <input type='text' id='phone' placeholder='+ххх ххххххххх' onChange={onPhoneChange} />
            <button type='submit' onClick={handleInput} >SUBMIT</button>
            <br/>
            <label>{error}</label>
        </form>
    );
}
export default Form