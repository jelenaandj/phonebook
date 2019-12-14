import React, { useState } from 'react';
import Phone from './phone';

const PhoneList = (props) => {

    let { phoneL } = props;
    let list = [...phoneL];
    const [filterName, setFilterName] = useState('');
    //const [list2, setList] = useState(list3);

    const handleSearch = (e) => {
        // e.preventDefault();
        //if (e.target.value !== "") {
        setFilterName(e.target.value);
        // list3 = list3.filter(item => {
        //     // const lcase=item.toLowerCase();
        //     // const filter=e.target.value.toLowerCase();
        //     return item.name.includes(e.target.value);
        // });
        // console.log(list3);
        //}
        //setList(list3);
    }

    return (
        <><form>
            <label>Search</label>
            <input type='text' id='search' onChange={handleSearch} />
        </form>
            <div>
                {
                    list.filter(item => {
                        return item.name.includes(filterName);
                    }).map(item => {
                        return <Phone item={item} key={item.name}/>
                    })
                }
            </div></>
    );
}

export default PhoneList