// Google Login Handler
import { LogInHandler } from '@/handlers/google';

// SCSS
import '@/sass/Unique/_Views/_login.scss';

export default function LogIn() {
  return (
    <div id="login_wrapper">
      <section>Login</section>
      <section>
        <button onClick={ LogInHandler }>Connect with Google</button>
      </section>
    </div>
  );
}
