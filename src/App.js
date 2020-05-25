import React, { useState } from 'react';
import './App.css';
import Forms from './components/form';
import PhoneList from './components/phoneList';
import Navigaton from './components/nav';



function App() {




  const [phoneL,setPhoneL]=useState([]);
  const clickHandler=(name,phone)=>{
    let tmp=[...phoneL];
    tmp.push({name,phone})
    setPhoneL(tmp);
  }

  const [filterName, setFilterName] = useState('');
    //const [list2, setList] = useState(list3);

    const handleSearch = (e) => {
        
        setFilterName(e.target.value);
      
    }
  
  return (
   <div>
     <Navigaton handleSearch={handleSearch}/>
     <Forms clickHandler={clickHandler} phoneL={phoneL} setPhoneL={setPhoneL}></Forms>
     <PhoneList filterName={filterName} phoneL={phoneL}></PhoneList>

   </div>
  );
}

export default App;
