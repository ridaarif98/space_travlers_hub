import { Route, Switch } from 'react-router-dom';
import Rocket from './pages/Rockets';
import Mission from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Navbar from './pages/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Rocket />
        </Route>
        <Route path="/mission">
          <Mission />
        </Route>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
