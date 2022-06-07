import HomeWebsiteForm from '../../components/HomeWebsiteForm/HomeWebsiteForm';

export default function WebsitePage({ setUser }) {
  
  
  return (
    <main>
      <h1>Website page</h1>
      <div className="website-home"> 
        <HomeWebsiteForm setUser={setUser} />

      </div>

      
    </main>
  );
}