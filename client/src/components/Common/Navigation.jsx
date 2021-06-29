import { useState, useEffect } from 'react';

// SCSS
import '@/sass/Unique/_Common/_navigation.scss';

export default function Navigation(props) {
  // Props
  const [user, setUser] = useState(props.userInfo);

  useEffect(() => {
    setUser(props.userInfo);
  }, [props.userInfo]);

  return (
    <article id="Navigation_wrapper">

      {/* Logo */}
      <section>
        Logo Goes HERE
      </section>

      {/* Links */}
      <nav role="navigation">
        <ul id="Navigation_links">
          <li>Home</li>
          <li>Services</li>
        </ul>
      </nav>

      {/* User Account */}
      <section aria-roledescription="account_setting">
        <img alt="user_google_avatar" src={user.photo} />
      </section>
    </article>
  )
}
