import { useState, useContext } from 'react';

// Context from Store
import { ServiceContext } from '@/store/index';

// JSON
import Equipment from '@/components/JSON/equipment.json';

// Logic
import { isCharactersFromString } from '@/components/Utils/logic/string';
import { isEmpty } from '@/components/Utils/logic/object';

// Equipment Cards
import EquipmentCard from '@/components/Reusable/EquipmentCard';
// Info Box
import InfoBox from '@/components/Reusable/InfoBox';

// SCSS
import '@/sass/Unique/_Common/_equipment_lists.scss';

function parseEquipmentInfo(equipment) {
  return equipment;
}

export default function EquipmentLists() {
  const [equipment] = useState(() => parseEquipmentInfo(Equipment.equipment));

  const [proxyEquipmentList, setProxyEquipmentList] = useState(() => parseEquipmentInfo(equipment));

  const [selectedEquipment] = useContext(ServiceContext);

  function handleChangeInput(e) {
    // Empty The List First
    setProxyEquipmentList([]);
    // Loop through the original array
    equipment.forEach((eq) => {
      // Perform String Match
      if (isCharactersFromString((e.target.value).toLowerCase().trim(), (eq.name).toLowerCase().trim())) {
        // Append New Element To The Emptied Array
        setProxyEquipmentList((proxy_eq) => [...proxy_eq, eq]);
      }
    });

    // If there is no search, restore the original array
    if (e.target.value === '') setProxyEquipmentList(equipment);
  }

  return (
    <section id="EquipmentLists_wrapper">
      {/* Search Area */}
      <section id="EquipmentLists_search">
        <input
          type="text"
          placeholder="Search for Equipment Item..."
          onChange={handleChangeInput} />
      </section>

      {/* Equipment Cards */}
      <section id="EquipmentLists_equipment_card">
        { proxyEquipmentList.map((e, i) => <EquipmentCard equipment={e} key={i} />) }
      </section>

      {/* Info Box */}
      { (!isEmpty(selectedEquipment)) ? <InfoBox equipment={selectedEquipment} /> : null }
    </section>
  );
}
