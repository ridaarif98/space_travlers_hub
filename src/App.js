import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rocket from './pages/Rockets';
import MissionList from './pages/MissionsList';
import Missions from './components/Missions';
import RocketRender from './components/RocketsRender';
import MyProfile from './pages/MyProfile';
import Navbar from './components/NavBar';
import store from './redux/configureStore';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Missions />
      <RocketRender />
      <Switch>
        <Route exact path="/">
          <Rocket />
        </Route>
        <Route path="/missions">
          <MissionList />
        </Route>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
      </Switch>
      <Footer />
    </Provider>
  );
}

export default App;
