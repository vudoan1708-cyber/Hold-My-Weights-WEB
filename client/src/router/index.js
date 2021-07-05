import { useEffect, useState } from 'react';

// Views
import LogIn from '@/views/LogIn';
import Home from '@/views/Home';
import Workout from '@/views/Workout';
import UserAccount from '@/views/UserAccount';

// React Router
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function AllRouters(props) {
  // Props
  const [user, setUser] = useState(props.userInfo);

  useEffect(() => {
    setUser(props.userInfo);
  }, [props.userInfo]);

  return (
    <Switch>
      <Route path={`/login`} component={ LogIn }/>
      <Route path={`/home`} component={() => (<Home userInfo={user} />) }/>
      <Route path={`/workout`} component={() => (<Workout userInfo={user} />) }/>
      <Route path={`/user/${user.user_id}`} component={() => (<UserAccount userInfo={user} />) }/>
      <Redirect exact from="/" to="/login" />
    </Switch>
  )
}
