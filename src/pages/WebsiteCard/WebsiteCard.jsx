import { useState } from "react";
import WebsiteStory from "../../pages/WebsiteStory/WebsiteStory";
import WebsitePhotos from "../../pages/WebsitePhotos/WebsitePhotos";
import './WebsiteCard.css';

export default function WebsiteCard({website, handleDelete}) { 
  const [showPage, setShowPage] = useState(false);
  
    let selDate= website.date;
    let newDate = selDate.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")

    return (
      <main>
        <div className="link-and-reset">
          <div>
            <p className="link-div">Shareable Link: <a href={`/profile/${website.user}`}>https://mint-wedding.herokuapp.com/profile/{website.user}</a> </p>
            <p id="copynpaste">Copy and paste to share with your friends and family!</p>
          </div>
          <button className="restartbtn" onClick={() => handleDelete(website._id)}>Restart</button>
        </div>
        <div className="img-div">
          <div className="preview-container">
            <h1 className="preview-h1">{website.name1} & {website.name2}</h1>
            <p className="preview-date-location">
              {newDate} | {website.location} 
            </p> 
          </div>
        </div>
        <div className="story-div">
          <button id="website-btn" onClick={() => setShowPage(!showPage)}>Our Story </button>
          <button id="website-btn" onClick={() => setShowPage(!showPage)}>Photos </button>
          { showPage ? 
            <WebsiteStory website={website}/>
            :
            // <WebsitePhotos website={website}/>
            <WebsitePhotos />
          } 
        </div>
      </main>
    );
}