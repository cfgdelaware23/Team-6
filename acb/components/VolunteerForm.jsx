"use client"
import React, { useState } from 'react';
import Select from 'react-select';

const Form = () => {
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
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );

};

export default Form;