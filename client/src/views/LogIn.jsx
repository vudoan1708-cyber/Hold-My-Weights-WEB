// Google Login Handler
import { LogInHandler } from '@/handlers/OAuth/google';

// SCSS
import '@/sass/Unique/_Views/_login.scss';

export default function LogIn() {
  return (
    <div id="Login_wrapper">
      <div id="Login_container">
        <section id="Login_header"><h3>Login</h3></section>
        <section id="Login_button_wrapper">
          <button onClick={ LogInHandler }>Connect with Google</button>
        </section>
      </div>
    </div>
  );
}
