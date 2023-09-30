"use client"
import React, { useState } from 'react';
import { DatePicker } from "@chakra-ui/react";

const EventForm = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [events, setCompany] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // logic
        console.log(first_name);
        console.log(last_name);
        console.log(email);
        console.log(events);
        console.log('Form submitted');
    };





    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
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
                value={email}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="description">Description: </label>
              <input
                type="des"
                id="des"
                name="des"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
            <label htmlFor="date">What date is your event </label>
            <input type="date" id="date" name="event_date"/> 

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
                  onclick: { set_new_user }
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default EventForm;