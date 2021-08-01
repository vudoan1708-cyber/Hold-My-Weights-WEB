import { useEffect, useState } from 'react';

// All Routers
import AllRouters from '@/router/index';

// React Router
import {
  HashRouter as Router,
} from "react-router-dom";

// Google Handlers
import { GetUserProfile } from '@/handlers/OAuth/google';

// Logic
import { randomCharacters } from '@/components/Utils/logic/random';

export default function App() {
  const [userInfo, setUserInfo] = useState({
    user_id: '',
    name: '',
    email: '',
    photo: '#',
    dateOfBirth: '',
  });

  useEffect(() => {
    async function getUserInfo() {
      const userProfile = await GetUserProfile();
      const cleanupUserProfile = {
        user_id: userProfile.sub ? userProfile.sub : randomCharacters(21),
        name: userProfile.name ? userProfile.name : 'N/A',
        email: userProfile.email ? userProfile.email : 'No Email Provided',
        photo: userProfile.picture ? userProfile.picture : '#',
        dateOfBirth: userProfile.birthdate ? userProfile.birthdate : 'No Birthday Provided',
      };

      setUserInfo(cleanupUserProfile);
    }
    getUserInfo();
  }, []);

  return (
    <div className="App">
      <Router>
        {/* Do This Checking to Make Sure There is No Redundant Re-rendering
        for The Children Components */}
        {userInfo.user_id !== '' ? <AllRouters userInfo={userInfo} /> : null} 
      </Router>
    </div>
  );
}
