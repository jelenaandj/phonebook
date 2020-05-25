import React from 'react';
import Phone from './phone';


const PhoneList = (props) => {

    let { phoneL } = props;
    let list = [...phoneL];
    let filterName=props.filterName;
    // const [filterName, setFilterName] = useState('');
    // //const [list2, setList] = useState(list3);

    // const handleSearch = (e) => {
        
    //     setFilterName(e.target.value);
      
    // }

    return (
        
            <div style={{marginLeft:'10%'}}>
                {
                    list.filter(item => {
                        return item.name.includes(filterName);
                    }).map(item => {
                        return <Phone item={item} key={item.name}/>
                    })
                }
            </div>
    );
}

export default PhoneList