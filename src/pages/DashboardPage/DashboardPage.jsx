import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import InvitePage from '../InvitePage/InvitePage';
import WebsitePage from '../WebsitePage/WebsitePage';
import NavBar from '../../components/NavBar/NavBar';

export default function DashboardPage() {

  const [user, setUser] = useState(getUser());

  return (
    <main>
      
    
    <h1>Dashboard Page</h1>
    <p>this is the page logging in redirects to </p>
    </main>
  );
}