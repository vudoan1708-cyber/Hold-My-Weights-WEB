import { useEffect, useState } from 'react';

// Components
import Navigation from '@/components/Common/Navigation';
import EquipmentLists from '@/components/Common/EquipmentLists';
import ServiceBooking from '@/components/Common/ServiceBooking';

// import {
//   InvokeCreateService,
//   ExecuteCreateService,
//   GetServices,
// } from '@/handlers/GraphQL/index';

// SCSS
import '@/sass/Unique/_Views/_home.scss';

export default function Home(props) {
  // Props
  const [user, setUser] = useState(props.userInfo);

  useEffect(() => {
    setUser(props.userInfo);
  }, [props.userInfo]);

  return (
    <>
      {/* Navigation */}
      <Navigation userInfo={user} />

      <main role="main" id="Home_wrapper">

        {/* Left Side: Service Booking Card */}
        <ServiceBooking />
        {/* Right Side: Equipment Lists */}
        <EquipmentLists userInfo={user} />
        {/* <button onClick={() => ExecuteCreateService(addService, MOCKED_DATA)}>Add A Service</button> */}
      </main>
    </>
  );
}
