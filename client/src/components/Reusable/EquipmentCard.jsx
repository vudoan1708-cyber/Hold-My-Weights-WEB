import { useState, useEffect, useContext } from "react";

// Context from Store
import { ServiceContext } from '@/store/index';

// SCSS
import '@/sass/Unique/_Reusable/_equipment_card.scss';

export default function EquipmentCard(props) {
  const [equipment, setEquipment] = useState(props.equipment);

  const { selectedEquipmentInStore } = useContext(ServiceContext);
  // eslint-disable-next-line no-unused-vars
  const [_, setSelectedEquipment] = selectedEquipmentInStore;

  useEffect(() => {
    setEquipment(props.equipment);
  }, [props.equipment]);

  function showInfoBox() {
    setSelectedEquipment(equipment);
  }

  return (
    <section className="EquipmentCard_wrapper" onClick={showInfoBox}>
      {/* Equipment Photo */}
      <img className="EquipmentCard_imgs" alt={equipment.name} src={equipment.photo} />
      {/* Header and Description */}
      <header>
        <h4>{ equipment.name }</h4>
        {/* <p>{ equipment.description }</p> */}
        <p><b>Type:</b> { equipment.type }</p>
      </header>
    </section>
  );
}
