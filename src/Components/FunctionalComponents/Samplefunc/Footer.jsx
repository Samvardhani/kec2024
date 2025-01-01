import React from 'react';
import "../../../assets/css/Footer.css"; // Ensure this path is correct

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <footer className="footer">
      {/* Title with Life Quote */}
      <h2 className="footer-title">"Life is what happens when you're busy making other plans."</h2>
      
      <form onSubmit={handleSubmit} className="footer-form">
        {/* Full Name */}
        <input type="text" name="name" placeholder="Full Name" required />

        {/* Email */}
        <input type="email" name="email" placeholder="Email Address" required />

        {/* Phone Number */}
        <input type="tel" name="phone" placeholder="Phone Number" required />

        {/* Gender Dropdown */}
        <select name="gender" required>
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Date of Birth */}
        <input type="date" name="dob" placeholder="Date of Birth" required />

        

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </footer>
  );
}

export default Footer;
