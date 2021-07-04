import { useState, useEffect } from 'react';

// SCSS
import '@/sass/Unique/_Common/_navigation.scss';

// Assets
import HoldMyWeightsIcon from '@/assets/icons/hmw.png';

export default function Navigation(props) {
  // Props
  const [user, setUser] = useState(props.userInfo);

  useEffect(() => {
    setUser(props.userInfo);
  }, [props.userInfo]);

  // Redirect TO Homepage Via Clicking on The App Icon
  function reloadPage() {
    window.location.reload();
  }

  function showUserSettings() {

  }

  return (
    <article id="Navigation_wrapper">

      {/* Logo */}
      <section aria-roledescription="app_icon"
        id="Navigation_logo" onClick={reloadPage}>
        <img alt="Hold My Weights Logo" src={HoldMyWeightsIcon} />
      </section>

      {/* Links */}
      <nav role="navigation" id="Navigation_links_wrapper">
        <ul id="Navigation_links">
          <li><h3>Home</h3></li> |
          <li><h3>Services</h3></li>
        </ul>
      </nav>

      {/* User Account */}
      <section aria-roledescription="account_setting"
        id="Navigation_user_account_wrapper" onClick={showUserSettings}>
        <img alt="user_google_avatar" src={user.photo} />
        <span>
          &#x02207;
        </span>
      </section>
    </article>
  )
}
