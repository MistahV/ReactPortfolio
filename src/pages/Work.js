import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Navbar';

import refactorPic from '../assets/images/RefactorPic.png';
import passwordGenPic from '../assets/images/PasswordGen.png';



function Work() {
  return (
    <div>
      <Navbar />
      
      <br></br>
      <br></br>

      <section className="workFlex">

        <article className="sample">
           <h2>Refactoring for Accessibility Standards</h2>
           <p>As part of my first project, I refactored existing HTML and CSS sheets to meet certain acceptance criteria around accessibility. Click on the link below to view this work for yourself!</p>
           <br></br>
           <img className="sampleImg" src={refactorPic} alt="refactor"></img>
           <br></br>
           <p>
              <Link href="https://mistahv.github.io/Accessibility-Code-Refactoring_VanEtten/" alt="Accessibily Code Refactoring - Work Sample 1">Link to project</Link>
           </p>
        </article>

        <article className="sample">
            <h2>Random Password Generator</h2>
            <p>As part of my first project, I refactored existing HTML and CSS sheets to meet certain acceptance criteria around accessibility. Click on the link below to view this work for yourself!</p>
            <br></br>
            <img className="sampleImg" src={passwordGenPic} alt="password"></img>
            <br></br>
            <p>
               <Link href="https://mistahv.github.io/RandomPasswordGenerator/" alt="Random Password Generator - Work Sample 2">Link to project</Link>
            </p>
         </article>

      </section>
    </div>
  );
}

export default Work;