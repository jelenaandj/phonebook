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
  // const clickDelete=(index,1)=>{
  //   let tmp=[...phoneL];
  //   tmp.splice({index,1});
  //   setPhoneL(tmp);

  // }

  return (
   <div>
     <Form clickHandler={clickHandler} phoneL={phoneL} setPhoneL={setPhoneL}></Form>
     <PhoneList phoneL={phoneL}></PhoneList>

   </div>
  );
}

export default App;
