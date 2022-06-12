import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import WebsitePage from '../WebsitePage/WebsitePage';
import PreviewWebsitePage from '../PreviewWebsitePage/PreviewWebsitePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
 

  return (
    <main className="App">
      { user ?
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<DashboardPage user={user} setUser={setUser}/>} />
          <Route path="/wedding-website" element={<WebsitePage />} />
          <Route path="/preview-website" element={<PreviewWebsitePage />} />
        </Routes>
        </>
        :
        <LandingPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
