import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div
      className="contact"
      style={{
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        padding: '20px',
        borderRadius: '10px',
        color: '#fff',
        maxWidth: '500px',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '2px solid white',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#feb47b')}
            onBlur={(e) => (e.target.style.borderColor = 'white')}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '2px solid white',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#feb47b')}
            onBlur={(e) => (e.target.style.borderColor = 'white')}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '2px solid white',
              outline: 'none',
              resize: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#feb47b')}
            onBlur={(e) => (e.target.style.borderColor = 'white')}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#ff7e5f',
            color: '#fff',
            padding: '10px 20px',
            border: '2px solid white',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#feb47b';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ff7e5f';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;