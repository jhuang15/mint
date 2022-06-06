//import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LandingPage({ setUser }) {
  //const [showSignUp, setShowSignUp] = useState(false);

  let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
  let closeBtns = [...document.querySelectorAll(".close")];
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
      <button className="button" data-modal="modalOne">Sign Up</button>
      <SignUpForm setUser={setUser} />
      <button className="button" data-modal="modalTwo">Log In</button>
      <LoginForm setUser={setUser} />

    </main>
  );
}