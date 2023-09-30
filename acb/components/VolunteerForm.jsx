"use client"
import React, { useState } from 'react';
import { Select } from "@chakra-ui/react";

const VolunteerForm = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [events, setEvents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // logic
        console.log(first_name);
        console.log(last_name);
        console.log(email);
        console.log(events);
        console.log('Form submitted');
    };

    const EVENTS = ["Bingo Night", "Weekly Book Club", "Annual Friendsgiving Celebration", "Just a Chill Gathering", "Let's Talk About Life"]


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Volunteer Form</h1>
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
              <label htmlFor="events">Choose your event (Select all that apply): </label>
              <Select placeholder='Select option'>
                <option value='option1'>Bingo Night </option>
                <option value='option2'>Weekly Book Club</option>
                <option value='option3'>Annual Friendsgiving Celebration</option>
                <option value='option4'>Just A Chill Gathering</option>
                <option value='option5'>Let's Talk About Life</option>


                </Select>
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
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default VolunteerForm;