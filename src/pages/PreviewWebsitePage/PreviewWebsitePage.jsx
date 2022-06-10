import { useEffect, useState } from "react";
import { getAll, deleteWebsite } from "../../utilities/website-api";
//import { useParams } from "react-router-dom";
import WebsiteCard from "../../pages/WebsiteCard/WebsiteCard";
export default function PreviewWebsitePage({ formData, setFormData }) {

  const [website, setWebsite] = useState([]);
  async function getWebsite() {
    const website = await getAll();
    setWebsite(website);
  // useEffect (function () {
  // let selDate= formData.date;
  // let newDate = selDate.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")
  // console.log(newDate)
  // CountDownTimer(Date.parse(newDate), 'newcountdown');

  //  async function CountDownTimer(dt, id){
  //   let end = new Date(dt);
  //   let _second = 1000;
  //   let _minute = _second * 60;
  //   let _hour = _minute * 60;
  //   let _day = _hour * 24;
  //   let timer;

  //   function showRemaining() {
  //     let now = new Date();
  //     let distance = end - now;
  //       if (distance < 0) {
  //         clearInterval(timer);
  //         document.getElementById(id).innerHTML = '0';
  //         return;
  //       }
  //       let days = Math.floor(distance / _day);
  //       document.getElementById(id).innerHTML = days + ' days ';       
  //    }
  //    timer = setInterval(showRemaining, 1000);
  //   } 
  // },[]); 
  }
  useEffect(() => { 
    getWebsite();}, []);

    function handleDelete(id) {
      deleteWebsite(id);
      const newWebsite = website.filter(function (website) {
        return website._id !== id;
      });
      setWebsite(newWebsite);
    }

  return (
     <main className="preview-container">
       {/* <h2>Preview</h2>
      <p>Welcome to the wedding of {info.name1} & {info.name2} 
       <br />
      {info.data} | {info.location} 
       <br />
       <span id="newcountdown"></span> to go!
       </p>  */}


      {website.map(function (website) {
        return <WebsiteCard website={website} handleDelete={handleDelete} />;
      })}
      
      
     </main>
  );
}