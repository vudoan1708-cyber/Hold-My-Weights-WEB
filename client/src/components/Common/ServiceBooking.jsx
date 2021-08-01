import { useEffect, useContext, useState } from 'react';

// Context from Store
import { ServiceContext } from '@/store/index';

// Database
import { GetServicesFromDatabase } from '@/handlers/GraphQL/index';

// SCSS
import '@/sass/Unique/_Common/_service_booking.scss';

export default function ServiceBooking() {
  // Get Services From MongoDB Database
  const {
    loading: serviceDataLoading,
    error: serviceDataErr,
    data: serviceData
  } = GetServicesFromDatabase();

  const [isRendered, setIsRendered] = useState(false);

  // Store Context
  const { equipmentListInStore } = useContext(ServiceContext);
  const [equipmentList, setEquipmentList] = equipmentListInStore;

  useEffect(() => {
    console.log(isRendered);
    if (serviceData && !isRendered) {
      console.log('THERE');
      let equipmentInput = null;
      for (let i = 0; i < serviceData.getServicesFromDatabase.length; i += 1) {
        const service = serviceData.getServicesFromDatabase[i];
        equipmentInput = {
          booked: service.equipment.booked,
          time: {
            expected_time: service.equipment.time.expected_time,
            finishing_time: service.equipment.time.finishing_time,
          },
        };
      }

      // Add The Service to the Equipment Lists from store
      setEquipmentList((list) => [...list, { equipment: equipmentInput }]);
      // Switch isRendered to true to stop re-rendering this component
      setIsRendered(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (serviceDataLoading) return <section>...Loading</section>
  if (serviceDataErr) return <section>...Error while loading data</section>

  if (serviceData && isRendered) {
    return (
      <article id="ServiceBooking_wrapper">
        {/* Booking Box */}
        <section id="BookingBox">
          {/* Selected Equipment Lists */}
          { equipmentList.map( (equipment) =>
            equipment.equipment
              ? equipment.equipment.booked.map( ((booked) =>
                <section className="BookedEquip" key={ booked.description }>{ booked.name }</section>) )
              : <section>...Loading Data, Please Wait!!!</section> )
          }
        </section>
      </article>
    );
  } else return <section>...Loading Data, Please Wait!!!</section>
}
