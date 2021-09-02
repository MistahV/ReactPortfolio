import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Navbar';


function Contact() {
    return (
      <div>
        <Navbar />
        
        <br></br>
        <br></br>

     <section className="contact">
        <h3>Contact Information</h3>
        <div>
           <li>Email: christophervanetten@gmail.com</li>
           <li>Phone: XXX-XXX-XXXX</li>
           <li> 
             LinkedIn: <Link href="https://www.linkedin.com/in/chris-van-etten-452261a0">Chris Van Etten</Link>
           </li>
        </div>
     </section>
      </div>
    );
  }
  

export default Contact;