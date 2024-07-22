import React from 'react';
import './Contact.css'; // Import the CSS file
import Logo from '../assets/asset/sbi.jpeg'
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header">
        <img src={Logo} alt="SBI Logo" className="logo" /> {/* Make sure to have the logo image */}
        <nav>
          <ul>
            <li>About Us</li>
            <li>Subsidiaries</li>
            <li>Corporate Governance</li>
            <li>Investor Relations</li>
            <li>SBI In the News</li>
          </ul>
        </nav>
      </div>

      <div className="main-menu">
        <ul>
          <li>PERSONAL</li>
          <li>NRI</li>
          <li>BUSINESS</li>
          <li>AGRICULTURAL & RURAL</li>
          <li>INTERNATIONAL BANKING</li>
          <li>SBI Wealth</li>
        </ul>
      </div>

      <div className="submenu">
        <ul>
          <li>Accounts</li>
          <li>Investments & Deposits</li>
          <li>Loans</li>
          <li>Cards</li>
          <li>SBI Rewardz</li>
          <li>Digital</li>
          <li>Information & Services</li>
        </ul>
      </div>

      <div className="contact-info">
        <h2>Contact Us</h2>
        <div className="contact-card">
          <h3>Call us</h3>
          <p>Toll free number: 1800 1234</p>
          <p>Toll free number: 1800 2100</p>
          <p>Toll free number: 1800 11 2211</p>
          <p>Toll free number: 1800 425 3800</p>
          <p>Toll number: 080-26599990</p>
        </div>

        <div className="unauthorised-transactions">
          <h3>For reporting Unauthorised Electronic transactions:</h3>
          <p>1. 1800 11 1109 (Toll Free)</p>
          <p>2. 94491 12211 (Mobile number, Toll Free)</p>
          <p>3. 080 - 2659 9990 (Toll number)</p>
        </div>

        <div className="email">
          <h3>E-mail us at:</h3>
          <p>customercare@sbi.co.in</p>
          <p>contactcentre@sbi.co.in</p>
          <p>socialreply@sbi.co.in (General)</p>
          <p>nodalofficer.aadhaarseeding@sbi.co.in (Aadhaar seeding)</p>
          <p>customercare.homeloans@sbi.co.in (Home Loan)</p>
          <p>gm.customer@sbi.co.in (General)</p>
        </div>
      </div>

      <div className="footer">
        <p>© 2024 SBI</p>
      </div>
    </div>
  );
}

export default Contact;
