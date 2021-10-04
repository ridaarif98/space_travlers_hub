import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Rocket from './pages/Rockets';
import Mission from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Navbar from './pages/NavBar';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
