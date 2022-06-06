import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function DashboardPage() {

  const [user, setUser] = useState(getUser());

  return (
    <>
      <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
    
    <h1>Dashboard Page</h1>
    <p>this is the page logging in redirects to </p>
    </>
  );
}