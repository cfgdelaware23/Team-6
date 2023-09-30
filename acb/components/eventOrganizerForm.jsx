// import Form from "../components/Form"
"use client"
import React, { useState } from 'react';

const EventOrganizerForm = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [date, setDate] = useState('')
  const [recurrence, setRecurrence] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>Event Organizer Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{margin: '10px'}}>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div style={{margin: '10px'}}>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div style={{margin: '10px'}}>
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
          <div style={{margin: '10px'}}>
            <label htmlFor="text">Company: </label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div style={{margin: '10px'}}>
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div style={{margin: '10px'}}>
            <label htmlFor="text">Recurrence: </label>
            <input
              type="text"
              id="recurrence"
              name="recurrence"
              value={recurrence}
              onChange={(e) => setRecurrence(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
      </form>
    </div>
  );
};

export default EventOrganizerForm;