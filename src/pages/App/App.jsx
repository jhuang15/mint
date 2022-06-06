import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <DashboardPage user={user} setUser={setUser}/>
        </>
        :
        <LandingPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
