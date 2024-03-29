"use client"
import React, { useState } from 'react';
import { HStack, Img, Heading } from "@chakra-ui/react";


export var firstName;
export var lastName;
export var emailAddress;
export var company;
export var dateData;

const EventForm = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [events, setCompany] = useState('');
    const [date, setDate] = useState(new Date);

    const handleSubmit = (e) => {
        e.preventDefault();
        // logic
        firstName = first_name;
        lastName = last_name;
        emailAddress = email;
        company = events;  
        dateData = date;
                
        console.log(firstName);
        console.log(lastName);
        console.log(emailAddress);
        console.log(company);
        console.log(dateData);
        console.log('Form submitted');

        // construct body of data we want to send
        const body = {
            firstName,
            lastName,
            emailAddress,
            company,
            dateData
        }

        fetch('http://localhost:5000/', { // not completing request
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Form submitted successfully', data);
            // Reset after submit, form is cleared
            setFirstName(''); 
            setLastName('');
            setEmail('');
            setCompany('');
            setDate('');
          }).catch((error) => {
            console.error('Error submitting form', error);
          });
    };

    return (
      <div>
              <HStack p={6} bg="#362B7C"justify="space-between">
                <HStack>
                  <Img src="./logo.jpeg" alt="ACB Logo" height="100px"/>
                 <Heading size="xl" pl={2} color="#FFFFFF">American Council of the Blind </Heading>
               </HStack>
               </HStack>

        <div style={{ display: 'flex', justifyContent: 'center',  minHeight: '100vh' }}>
          <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Event Coordinator Form</h1>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="first_name">First Name: </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="last_name">Last Name: </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="company">Affiliated Company: </label>
              <input
                type="company"
                id="company"
                name="company"
                value={events}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="date">What date is your event: </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

    </div>


            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '10px 20px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  onSubmit: "You have successfully created a new event!"
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      );
    };
    
    export default EventForm;
    
