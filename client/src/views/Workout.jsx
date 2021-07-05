import Barcode from 'react-barcode';

// SCSS
import '@/sass/Unique/_Views/_workout.scss';


export default function Workout(props) {
  return (
    <div className="Workout">
      <Barcode value="#" />,
    </div>
  );
}
