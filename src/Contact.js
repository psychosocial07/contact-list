import React,{useState} from 'react'
import styled from 'styled-components';
import { LoremIpsum } from 'react-lorem-ipsum';

function Contact(props) {


  const [details,setDetails] = useState(false);

  return (
    <ContactInfo>
    <Container>
      <p>{props.member.company.name}</p>
      <Container2>
        <p><b>Contact</b></p>
        <p>{props.member.name}</p>
      </Container2>
      <Container2>
        <p><b>City</b></p>
        <p>{props.member.address.city}</p>
      </Container2>
      <Container2>
        <p><b>State</b></p>
        <p>Uttrakhand</p>
      </Container2>
      <Container2>
      <Button onClick={()=>{
        setDetails(!details);
        console.log(details);
      }}>
        View Details
      </Button>
      </Container2>
    </Container>
    {details && 
      (<Container3>
        <Container2>
          <p><b>Description</b></p>
          <LoremIpsum/>
        </Container2>
        <Container4>
          <Container3>
            <Container2>
              <p><b>Contact Person</b></p>
              <p>{props.member.name}</p>
            </Container2>
            <Container2>
              <p><b>Designation</b></p>
              <p>{props.member.name}</p>
            </Container2>
            <Container2>
              <p><b>Emails</b></p>
              <p>{props.member.email}</p>
            </Container2>
            <Container2>
              <p><b>Phones</b></p>
              <p>{props.member.phone}</p>
            </Container2>
          </Container3>
          <Container3>
            <Container2>
              <p><b>Address</b></p>
              <p>{props.member.address.suite}, {props.member.address.street}, {props.member.address.city} ({props.member.address.zipcode})</p>
            </Container2>
            <Container2>
              <p><b>City</b></p>
              <p> {props.member.address.city}</p>
            </Container2>
            <Container2>
              <p><b>State</b></p>
              <p>Uttrakhand</p>
            </Container2>
            <Container2>
              <p><b>Country</b></p>
              <p>India</p>
            </Container2>
          </Container3>
        </Container4>
      </Container3>)
    }
    
    </ContactInfo>
  )
  
}

const Container = styled.div`
  
  margin:5px;
  width:99%;
  height:120px;
  border-radius:10px;
  display:grid;
  justify-items:center;
  align-items:center;
  grid-template-columns:1fr 1fr 1fr 1fr 0.5fr;
`;

const Container2 = styled.div`
  display:flex;
  flex-direction:column;
  width:60%;
  margin:auto;
  justify-content:center;
`;

const Container4 = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;s
`

const Container3 = styled.div`
  display:flex;
  flex-direction:column;
`;

const Button = styled.button`
  border-radius:10px;
  height:50px;
  color:white;
  background-color:red;
`
const ContactInfo = styled.div`
  display:flex;
  flex-direction:column;
  background-color: lightgrey;
  margin:30px;
`

export default Contact