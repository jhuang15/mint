//import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LandingPage({ setUser }) {

  const modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          console.log("btn clicked!");
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
  const closeBtns = [...document.querySelectorAll(".close")];
    closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
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
        <button className="button" id="login-btn" data-modal="modalOne">Sign Up</button>
        <SignUpForm setUser={setUser} />
      </div>
        <p className="landing1-heading2">What are others saying about us?</p>
        <div className="landing-cards"> 
        <div className="card"> 
          <p> review card</p>
        </div>
        <div className="card"> 
          <p> review card</p>
        </div>
        <div className="card"> 
          <p> review card</p>
        </div>
        <div className="card"> 
          <p> review card</p>
        </div>
        </div>
        <p className="lnading1-heading3">Take a peek..</p>
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