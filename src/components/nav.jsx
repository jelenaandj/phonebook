import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Navigation=(props)=>{

    let handleSearch=props.handleSearch;
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand style={{marginLeft:'10%', fontSize:'30px'}} href="#home">PhoneBook</Navbar.Brand>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearch} />
      {/* <Button variant="outline-info" >Search</Button> */}
    </Form>
  </Navbar>
        </div>
    );
}
export default Navigation;