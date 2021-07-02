export default function InfoBox(props) {
  return (
    <section id="InfoBox_wrapper">
      {/* Headers */}
      <header>
        <h3>{ props.equipment.name }</h3>
        <p>{ props.equipment.description }</p>
      </header>
      {/* Equipment Photo */}
      <img alt="equipment_photo" src={ props.equipment.photo } />
    </section>
  )
}
