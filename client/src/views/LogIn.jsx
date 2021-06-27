// Google Login Handler
import { LogInHandler } from '@/handlers/OAuth/google';

// SCSS
import '@/sass/Unique/_Views/_login.scss';

export default function LogIn() {
  return (
    <div id="Login_wrapper">
      <section>Login</section>
      <section>
        <button onClick={ LogInHandler }>Connect with Google</button>
      </section>
    </div>
  );
}
