"use client"
import React, {useState} from 'react';

const Form = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic
    console.log('Form submitted');
  };


  return (
    <div>
      <h1>Volunteer Form</h1>
      <div>
          <label htmlFor="email">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Choose your event (Select all that apply):</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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