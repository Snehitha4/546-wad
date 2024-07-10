import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Country" required />
        <input type="text" placeholder="Zip Code" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="date" placeholder="Date of Birth" required />
        <textarea placeholder="About Yourself" required></textarea>
        <button type="submit">Register</button>
        <p>Already registered?</p>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Register;
