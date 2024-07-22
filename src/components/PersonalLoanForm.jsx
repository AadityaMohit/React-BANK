import React from 'react';
import './PersonalLoanForm.css';
import Logo from '../assets/asset/logo.jpeg';
import MoneyBag from '../assets/asset/money-bag.png';
import RupeeSymbol from '../assets/asset/file.png';

function PersonalLoanForm() {
  return (
    <div className="content">
      <section className="left">
        <div className="features-header">
          <img src={MoneyBag} alt="Money Bag" className="feature-icon" />
          <h2>Product Features</h2>
        </div>
        <ul>
          <li><img src={RupeeSymbol} alt="Rupee Symbol" className="feature-icon" /> Low interest rates. Further, we charge interest on a daily reducing balance!</li>
         <br /><br /> <li><img src={RupeeSymbol} alt="Rupee Symbol" className="feature-icon" /> Low processing charges</li>
         <br /><br /> <li><img src={RupeeSymbol} alt="Rupee Symbol" className="feature-icon" /> No hidden cost / administrative charges</li>
          <br /><br /><li><img src={RupeeSymbol} alt="Rupee Symbol" className="feature-icon" /> Minimal documentation... something that you had always wanted</li>
          <br /><br /><li><img src={RupeeSymbol} alt="Rupee Symbol" className="feature-icon" /> No prepayment penalties. Reduce your interest burden and optimally utilize your surplus funds by prepaying the loan</li>
        </ul>
      </section>

      <section className="right">
        <div className="header1">
          <img src={Logo} alt="SBI Logo" className="logo" />
       
          <a href='/'>
          <button className="home-button">Home 🏠</button>
          </a>
        </div>

        <div className="form">
          <h2>Purpose of Loan</h2>
          <select name="purposeOfLoan" disabled>
            <option value="Personal Loan">Personal Loan</option>
          </select>

          <h2>Applicant Details</h2>
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" />
          </label>
          <label>
            Resident Type:
            <select name="residentType">
              <option value="Resident Indian">Resident Indian</option>
            </select>
          </label>

          <h2>Income Details</h2>
          <label>
            Employment Nature:
            <select name="employmentNature">
              <option value="">Select employment nature</option>
            </select>
          </label>
          <label>
            Organization Type:
            <select name="organizationType">
              <option value="">Select organization type</option>
            </select>
          </label>
          <label>
            Working in current organization since:
            <div className="working-since">
              <select name="workingSinceYear">
                <option value="">Select year</option>
              </select>
              <select name="workingSinceMonth">
                <option value="">Select month</option>
              </select>
            </div>
          </label>
          <label>
            Gross Monthly Salary (₹):
            <input type="number" name="grossMonthlySalary" />
          </label>

          <label>
            <input type="checkbox" name="declaration" />
            I hereby declare that the information provided is true and correct to the best of my knowledge.
          </label>

          <button type="submit" className="submit-button">Submit</button>
        </div>
      </section>
    </div>
  );
}

export default PersonalLoanForm;
