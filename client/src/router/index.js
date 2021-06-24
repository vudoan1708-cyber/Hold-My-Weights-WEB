// Views
import LogIn from '@/views/LogIn';
import Home from '@/views/Home';

// React Router
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function AllRouters() {
  return (
    <Switch>
      <Route path={`/login`} component={ LogIn }/>
      <Route path={`/home`} component={ Home }/>
      <Redirect exact from="/" to="/login" />
    </Switch>
  )
}
