import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert'


const Forms = (props) => {
    let phoneL = props.phoneL;
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [error, setError] = useState('');

    let clickHandler = props.clickHandler;
    let phoneno = /^\+[0-9]{3}\s[0-9]{9}/;

    const handleInput = (e) => {
        setError("");
        if (newName !== '' && newPhone !== '') {

            if (newPhone.match(phoneno)) {
                let tmp = [...phoneL]
                // console.log(tmp)
                tmp = tmp.filter(x => newName === x.name);
                // console.log(tmp)

                if (tmp.length > 0) {
                    // alert('Pitanje');
                    const r = window.confirm('Do you want to change the phone number?');
                    if (r === true) {
                        let index = phoneL.indexOf(tmp[0]);
                        phoneL.splice(index, 1);
                        clickHandler(newName, newPhone);
                    }
                } else {
                    // console.log(`name${newName}${newPhone}`);
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
   <div style={{width:'40%',margin:'10%',}}>

 

  <InputGroup className="mb-3">
    <FormControl onChange={onNameChange}
      placeholder="Name"
      aria-label="Name"
      aria-describedby="basic-addon2"
    />
    <FormControl onChange={onPhoneChange}
      placeholder="Number +ххх ххххххххх"
      aria-label="Phone number"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button onClick={handleInput} variant="outline-secondary">Submit</Button>
    </InputGroup.Append>
  </InputGroup>

  {error&&<Alert variant='danger' style={{width:'fit-content'}}>
  {error}
  </Alert>}

</div>
        // <form >
        //     <input type='text' id='name' placeholder='name' onChange={onNameChange} />
        //     <input type='text' id='phone' placeholder='+ххх ххххххххх' onChange={onPhoneChange} />
        //     <button type='submit' onClick={handleInput} >SUBMIT</button>
        //     {/* <button type='submit' onClick={() => clickHandler(ime, broj)} >SUBMIT</button> */}
        //     <br/>
        //     <label>{error}</label>
        // </form>
    );
}
export default Forms;