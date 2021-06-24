// All Routers
import AllRouters from '@/router/index';

// React Router
import {
  HashRouter as Router,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <AllRouters />
      </Router>
    </div>
  );
}
