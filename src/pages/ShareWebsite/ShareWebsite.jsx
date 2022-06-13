import { useState } from "react";
import WebsiteStory from "../../pages/WebsiteStory/WebsiteStory";
import WebsitePhotos from "../../pages/WebsitePhotos/WebsitePhotos";
import '../WebsiteCard/WebsiteCard.css';

export default function ShareWebsite({website}) { 
  const [showPage, setShowPage] = useState(false);
  
  return (
    <main>
      <div className="img-div">
        <div className="preview-container">
          <h1 className="preview-h1">{website.name1} & {website.name2}</h1>
          <p className="preview-date-location">
            {website.date} | {website.location} 
          </p> 
        </div>
      </div>
      <div className="story-div">
        <button id="website-btn" onClick={() => setShowPage(!showPage)}>Our Story </button>
        <button id="website-btn" onClick={() => setShowPage(!showPage)}>Photos </button>
        { showPage ? 
          <WebsiteStory website={website}/>
          :
          <WebsitePhotos website={website}/>
        } 
      </div>
    </main>
  );
}