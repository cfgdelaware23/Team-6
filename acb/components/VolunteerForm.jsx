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

    const eventOptions = [
        { value: '1', label: 'ACB Presents the Daily Schedule' },
        { value: '2', label: 'The Breakfast Bunch' },
        { value: '3', label: 'Sunday Edition' },
        { value: '4', label: 'Ask the Pastor' },
        { value: '5', label: 'Quilting Guild' },
        { value: '6', label: 'Reading the 18th Century' },
        { value: '7', label: 'ST. Lucy\'s Guidey' },
    ]

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
              <Select
                defaultValue={[eventOptions[1], eventOptions[2]]}
                isMulti
                name="events"
                options={eventOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
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