import React, { useState } from 'react';

const ContactCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here

    // Clear form fields after submission
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  const cardStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '5px 5px blue, 10px 10px red, 15px 15px green',
  };

  return (
    <div style={cardStyle}>
      {submitted ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Thank You!</h2>
          <p>Your message has been successfully submitted.</p>
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: 'center' }}>Contact</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', resize: 'vertical' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="submit" style={{ padding: '10px 20px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactCard;
