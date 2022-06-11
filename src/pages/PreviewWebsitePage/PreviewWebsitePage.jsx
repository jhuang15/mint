import { useEffect, useState } from "react";
import { getAll, deleteWebsite } from "../../utilities/website-api";
import WebsiteCard from "../../pages/WebsiteCard/WebsiteCard";
export default function PreviewWebsitePage() {

  const [website, setWebsite] = useState([]);
  async function getWebsite() {
    const website = await getAll();
    setWebsite(website);
    
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
    <>
      {website.map(function (website) {
        return <WebsiteCard website={website} handleDelete={handleDelete} />;
      })}
    </>
  );
}