import HomeWebsiteForm from "../../components/HomeWebsiteForm/HomeWebsiteForm";
import { deleteWebsite } from "../../utilities/website-api";

export default function ListingCard({website, handleDelete}) { 

    return (
        <>
        <p>Welcome to the wedding of {website.name1} & {website.name2} 
       <br />
      {website.data} | {website.location} 
       <br />
       <a href={`/profile/${website.user}`}>User: {website.user}</a>
        <button onClick={() => handleDelete(website._id)}>DELETE WEBSITE</button>
       </p> 
        </>
    )
}