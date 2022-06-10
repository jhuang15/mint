import { useEffect } from "react";
export default function PreviewWebsite({ formData }) {

  useEffect (function () {
  let selDate= formData.date;
  let newDate = selDate.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")
  console.log(newDate)
  CountDownTimer(Date.parse(newDate), 'newcountdown');

  async function CountDownTimer(dt, id){
    let end = new Date(dt);
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    function showRemaining() {
      let now = new Date();
      let distance = end - now;
        if (distance < 0) {
          clearInterval(timer);
          document.getElementById(id).innerHTML = '0';
          return;
        }
        let days = Math.floor(distance / _day);
        document.getElementById(id).innerHTML = days + ' days ';       
    }
    timer = setInterval(showRemaining, 1000);
  } 
},[]); 

  return (
    <main className="preview-container">
      <h2>Preview</h2>
      <p>Welcome to the wedding of {formData.name1} & {formData.name2} 
      <br />
      {formData.data} | {formData.location}
      <br />
      <span id="newcountdown"></span> to go!
      </p>

      
      
    </main>
  );
}