import HomeWebsiteForm from '../../components/HomeWebsiteForm/HomeWebsiteForm';
export default function WebsitePage({ setUser }) {
  
  return (
    <main>
      <h1>Your Wedding Website</h1>
      <div> 
        <HomeWebsiteForm setUser={setUser} />
      </div>
    </main>
  );
}