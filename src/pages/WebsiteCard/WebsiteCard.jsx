import { useEffect } from "react";
import { useState } from "react";
import WebsiteStory from "../../pages/WebsiteStory/WebsiteStory";
import WebsitePhotos from "../../pages/WebsitePhotos/WebsitePhotos";
import './WebsiteCard.css';

export default function WebsiteCard({website, handleDelete}) { 
  const [showPage, setShowPage] = useState(false);
  // useEffect (function () {
     let selDate= website.date;
     let newDate = selDate.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")
  //   CountDownTimer(Date.parse(newDate), 'newcountdown');

  //   async function CountDownTimer(dt, id){
  //     let end = new Date(dt);
  //     let _second = 1000;
  //     let _minute = _second * 60;
  //     let _hour = _minute * 60;
  //     let _day = _hour * 24;
  //     let timer;

  //   function showRemaining() {
  //     let now = new Date();
  //     let distance = end - now;
  //       if (distance < 0) {
  //         clearInterval(timer);
  //         document.getElementById(id).innerHTML = '0';
  //         return;
  //       }
  //       let days = Math.floor(distance / _day);
  //       if (days !== null ){
  //       document.getElementById(id).inner = days + ' days ';    
  //     } 
  //    }
  //    timer = setInterval(showRemaining, 1000);
  //   } 
  // }); // removed [] because of warning msgx

    return (
      <main>
        
        <a href={`/profile/${website.user}`}>User: {website.user}</a>
        <button onClick={() => handleDelete(website._id)}>DELETE WEBSITE</button>
        <div className="img-div">
        <div className="preview-container">
        <h1 className="preview-h1">{website.name1} & {website.name2}</h1>
       <p className="preview-date-location">
      {newDate} | {website.location} 
       <span id="newcountdown"></span> to go!   
       </p> 
       </div>
       </div>
       <div className="story-div">
       <button className="website-btn" onClick={() => setShowPage(!showPage)}>Our Story </button>
       <button className="website-btn" onClick={() => setShowPage(!showPage)}>Photos </button>
        { showPage ? 
          <WebsiteStory website={website}/>
          :
          <WebsitePhotos website={website}/>
        }
        
       </div>
       </main>
    )
}