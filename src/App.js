import React, { useState } from 'react';
import './App.css';
import Form from './components/form'
import PhoneList from './components/phoneList'



function App() {

  const [phoneL,setPhoneL]=useState([]);
  const clickHandler=(name,phone)=>{
    let tmp=[...phoneL];
    tmp.push({name,phone})
    setPhoneL(tmp);
  }


  return (
   <div>
     <Form clickHandler={clickHandler} phoneL={phoneL}></Form>
     <PhoneList phoneL={phoneL}></PhoneList>

   </div>
  );
}

export default App;
