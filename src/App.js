import { Route, Switch } from 'react-router-dom';
import Rocket from './components/rockets';
import Mission from './components/missions';
import MyProfile from './components/myProfile';
import Navbar from './components/navBar';

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
