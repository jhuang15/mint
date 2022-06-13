import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getAll } from "../../utilities/website-api";
import LandingPage from '../LandingPage/LandingPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import WebsitePage from '../WebsitePage/WebsitePage';
import PreviewWebsitePage from '../PreviewWebsitePage/PreviewWebsitePage';
import ShareWebsite from '../ShareWebsite/ShareWebsite';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [website, setWebsite] = useState([]);

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
          <Route path="/profile/:id" element={<ShareWebsite user={user} website={website}/>} />
        </Routes>
        </>
        :
        <Routes>
          <Route path="/" element={<LandingPage setUser={setUser}/>} />
          <Route path="/profile/:id" element={<ShareWebsite user={user} website={website}/>} />
        </Routes>
      }
    </main>
  );
}

export default App;
