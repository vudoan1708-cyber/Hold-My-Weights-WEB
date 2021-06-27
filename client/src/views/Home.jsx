import { useEffect, useState } from 'react';

// Handlers
import { GetUserProfile } from '@/handlers/OAuth/google';

// Logic
import { randomCharacters } from '@/components/Utils/logic/random';

// import {
//   InvokeCreateService,
//   ExecuteCreateService,
//   GetServices,
// } from '@/handlers/GraphQL/index';

export default function Home() {
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
    <div className="Home">
      { JSON.stringify(userInfo, null, 2) }
      <section>
        <img alt="user_photo" src={userInfo.photo} />
      </section>
      {/* <button onClick={() => ExecuteCreateService(addService, MOCKED_DATA)}>Add A Service</button> */}
    </div>
  );
}
