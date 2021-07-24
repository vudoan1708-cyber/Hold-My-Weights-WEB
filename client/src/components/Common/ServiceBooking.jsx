import { useContext } from 'react';

// Context from Store
import { ServiceContext } from '@/store/index';

// SCSS
import '@/sass/Unique/_Common/_service_booking.scss';

export default function ServiceBooking() {
  const { equipmentListInStore } = useContext(ServiceContext);
  const [equipmentList] = equipmentListInStore;

  return (
    <article id="ServiceBooking_wrapper">
      {/* Booking Box */}
      <section id="BookingBox">
        {/* Selected Equipment Lists */}
        { equipmentList.map( (equipment) =>
          equipment.equipment.booked.map( ((booked) =>
            <section key={ booked.description }>{ booked.name }</section>) ) )
        }
      </section>
    </article>
  );
}
