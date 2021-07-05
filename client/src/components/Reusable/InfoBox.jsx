import { useRef, useContext, useState, useEffect } from 'react';

// JSON
import Time from '@/components/JSON/time.json';

// Context from Store
import { ServiceContext } from '@/store/index';

// SCSS
import '@/sass/Unique/_Reusable/_infobox.scss';

export default function InfoBox(props) {
  // DOM Ref
  const infoBoxRef = useRef(null);

  const [filteredTime, setFilteredTime] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [selectedEquipment, setSelectedEquipment] = useContext(ServiceContext);

  // Close Info Box
  function closeInfoBox(e) {
    // If a Click Event is Registered Outside The InfoBox Container
    if (!infoBoxRef.current.contains(e.target)) {
      // Close The Info Box
      setSelectedEquipment({});
    }
  }

  useEffect(() => {
    setFilteredTime([]);
    function filterBookedTime() {
      for (let time of Time.bookingTime) {
        for (let i = 0; i < selectedEquipment.bookedTime.length; i += 1) {
          const bookedTime = selectedEquipment.bookedTime[i];
          if (bookedTime === time) {
            const filteredObject = {
              time,
              classifiedName: 'non_bookable',
            };
            setFilteredTime((obj) => [...obj, filteredObject]);
            break;
          } else if (i === selectedEquipment.bookedTime.length - 1) {
            const filteredObject = {
              time,
              classifiedName: 'bookable',
            };
            setFilteredTime((obj) => [...obj, filteredObject]);
          }
        }
      }
    }
    filterBookedTime();
  }, [selectedEquipment]);

  function bookTime(index) {
    // Make a shallow copy of the items
    let items = [...filteredTime];
    // Mutate an element of the copy
    let item = {
      ...items[index],
      classifiedName: filteredTime[index].classifiedName === 'bookable' ? 'booked' : 'bookable',
    }
    // Put it back into the copied array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // Set the state to the new copy
    setFilteredTime(items);
    // Make The clones Undefined so that they will be collected by garbage collection (reduce space complexity)
    items = undefined;
    item = undefined;
  }

  return (
    <section id="InfoBox_wrapper" onClick={closeInfoBox}>
      <section id="InfoBox_container" ref={infoBoxRef}>
        {/* Headers */}
        <header>
          <h3>{ props.equipment.name }</h3>
          <p>{ props.equipment.description }</p>
        </header>
        {/* Equipment Photo */}
        <img alt={ props.equipment.name } src={ props.equipment.photo } />

        {/* Booked Time */}
        <section id="InfoBox_booking">
          { filteredTime ? filteredTime.map((obj, index) =>
            <button key={index}
                    onClick={() =>
                      obj.classifiedName === 'bookable' || obj.classifiedName === 'booked'
                        ? bookTime(index)
                        : undefined}
                    className={obj.classifiedName}>
              {obj.time}
            </button>) : null }
        </section>

        {/* Book Button */}
        <section id="InfoBox_finish_btn">
          <button>Book</button>
        </section>
      </section>
    </section>
  )
}
