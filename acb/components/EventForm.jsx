import React, { useState } from 'react';


export var first_name; 
export var last_name;
export var email;
export var company;
export var dateData;  


const EventForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [affiliatedCompany, setAffiliatedCompany] = useState('');
    const [date, setDate] = useState('');

    const [submittedData, setSubmittedData] = useState(null);
    const [isDataSubmitted, setIsDataSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        first_name = firstName;
        last_name = lastName;
        email = emailAddress;
        company = affiliatedCompany;  
        dateData = date;
        
        console.log(firstName, lastName, emailAddress, affiliatedCompany, date)
        // setSubmittedData(firstName, lastName, emailAddress, affiliatedCompany, date);
        // first_name,last_name,email,company,date = JSON.stringify(firstName,lastName,emailAddress,affiliatedCompany,date);
        // console.log(first_name,last_name,email,company,date);
    };
    


  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //         ...formData,
  //         [name]: value,
  //     });
  // };

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
                        value={firstName}
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
                        value={lastName}
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
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="events">Affiliated Company: </label>
                    <input
                        type="text"
                        id="events"
                        name="events"
                        value={affiliatedCompany}
                        onChange={(e) => setAffiliatedCompany(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="date">What date is your event </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
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
            {/* {console.log(JSON.stringify(formData))} */}
            {/* {submittedData && (
                <div>
                    <h2>Submitted Data:</h2>
                    <pre>{JSON.stringify(submittedData, null)}</pre>
                </div>
            )} */}
        </div>
    );
};

export default EventForm;