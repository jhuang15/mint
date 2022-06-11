import { useEffect } from "react";

export default function WebsiteCard({website, handleDelete}) { 

  useEffect (function () {
    let selDate= website.date;
    let newDate = selDate.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")
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
        if (days !== null ){
        document.getElementById(id).inner = days + ' days ';    
      } 
     }
     timer = setInterval(showRemaining, 1000);
    } 
  }); // removed [] because of warning msgx

    return (
      <main className="preview-container">
        <a href={`/profile/${website.user}`}>User: {website.user}</a>
        <p>Welcome to the wedding of {website.name1} & {website.name2} 
       <br />
      {website.data} | {website.location} 
       <br />
       <span id="newcountdown"></span> to go!
       
        <button onClick={() => handleDelete(website._id)}>DELETE WEBSITE</button>
       </p> 
       </main>
    )
}