//import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useEffect } from 'react';
import './LandingPage.css';

export default function LandingPage({ setUser }) {

  useEffect (function () {
    const modalBtns = document.querySelectorAll(".button");
    const closeBtns = document.querySelectorAll(".close");

    modalBtns.forEach(function (btn) {
      btn.onclick = function () {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
      };
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
         let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      //close model anywhere outside of it
      window.onclick = function (event) { 
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
    });
  },[]); 

  return (
    <main>
      <div className="btn-div">
        <button className="button" id="signup-btn" data-modal="modalOne">Sign Up</button>
        <SignUpForm setUser={setUser} />
        <button className="button" id="login-btn" data-modal="modalTwo">Log In</button>
        <LoginForm setUser={setUser} />
      </div>
      <div className="center-landing-divs">
      <div className="landing1-div"> 
        <h1 className="landing1-heading">
          We'll walk you through <br />every part of your planning 
        </h1>
        <h3>
          made easy with <span className="mint-span">Mint</span>
        </h3>
        <button className="button" id="signup-btn" data-modal="modalOne">Sign Up</button>
        <SignUpForm setUser={setUser} />
      </div>
        <p className="landing1-heading2">What are others saying about us?</p>
        <div className="landing-cards"> 
        <div className="card"> 
          <p> We love Mint! Made our whole wedding planning experience so quick and easy!! Can't recommend it enough!! Our wedding site looks so clean and minimalistic which goes with our aesthetics!<br /> --Mary & Peter
</p>
        </div>
        <div className="card"> 
          <p>Great user interface. Very simple and easy to use <br /> --Sam & Kathy
</p>
        </div>
        <div className="card"> 
          <p>This app made everything wedding planning easy. Super helpful, and has a really cute website theme! <br /> --April & June</p>
        </div>
        <div className="card"> 
          <p>Using The Mint made wedding planning so easy. We  highly recommend it to anyone thinking about getting married. <br /> --James & Calvin</p>
        </div>
        </div>
        <p className="landing1-heading3">Take a peek..</p>
        <div className="landing-examples">
        <div className="left-div"> 
          <p> left div 1 </p>
        </div>
        <div className="right-div"> 
          <p> right div 2</p>
        </div>
        <div className="left-div"> 
          <p> left div 3</p>
        </div>
        <div className="right-div"> 
          <p> right div 4</p>
        </div>
        </div>
      </div>
    </main>
  );
}