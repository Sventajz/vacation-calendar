// pages/welcome.js
import withAuth from '../components/Login/withAuth';

function WelcomePage() {
  return <h1>Welcome!</h1>;
}

export default withAuth(WelcomePage);
