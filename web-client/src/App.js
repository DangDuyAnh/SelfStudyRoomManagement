import './App.css';
import Dashboard from './screens/Dashboard';
import Login from "./screens/Login";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DetailBuilding from './screens/DetailBuilding/DetailBuilding';
import CreateRoom from './screens/CreateRoom/CreateRoom';
import CreateServed from './screens/CreateServed/CreateServed';
import DetailRoom from './screens/DetailRoom/DetailRoom';
import ServiceSchedule from './screens/ServiceSchedule/ServiceSchedule';
import DetailSchedule from './screens/DetailSchedule/DetailSchedule';
import RoomStatus from './screens/RoomStatus';
import WaitingRegister from './screens/WaitingRegister';
import AddAcount from './screens/AddAcount';
import ScheduleConfigue from './screens/DetailSchedule/ScheduleConfigue';
import {PrivateRoute} from './components/private-route';
import RegisterForm from './screens/RegisterForm';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact component={Dashboard} /> 
          <Route path='/login' component={Login} />
          <Route path='/building/:id' component={DetailBuilding}/>
          <Route path='/create-room/:id' component={CreateRoom}/>
          <Route path='/create-served' component={CreateServed}/>
          <Route path='/detail-room/:id' component={DetailRoom} />
          <Route path='/service-schedule' component={ServiceSchedule} />
          <Route path='/detail-schedule' component={DetailSchedule} />
          <Route path='/schedule-configue/:id' component={ScheduleConfigue} />
          <Route path='/room-status' component={RoomStatus}/>
          <Route path='/waiting-register' component={WaitingRegister} />
          <Route path='/create-account' component={AddAcount}/>
          <Route path='/register-form' component={RegisterForm}/>
        </Switch>
      </Router>
    </>
  )
}


export default App;
