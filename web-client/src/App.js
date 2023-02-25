import './App.css';
import Dashboard from './screens/Dashboard';
import Login from "./screens/Login";
import { BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";
import DetailBuilding from './screens/DetailBuilding/DetailBuilding';
import CreateRoom from './screens/CreateRoom/CreateRoom';
import DetailRoom from './screens/DetailRoom/DetailRoom';
import ServiceSchedule from './screens/ServiceSchedule/ServiceSchedule';
import DetailSchedule from './screens/DetailSchedule/DetailSchedule';
import RoomStatus from './screens/RoomStatus';
import WaitingRegister from './screens/WaitingRegister';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/detail' element={<DetailBuilding />}/>
          <Route path='/create-room' element={<CreateRoom />}/>
          <Route path='/detail-room' element={<DetailRoom />} />
          <Route path='/service-schedule' element={<ServiceSchedule />} />
          <Route path='/detail-schedule' element={<DetailSchedule />} />
          <Route path='/room-status' element={<RoomStatus />}/>
          <Route path='/waiting-register' element={<WaitingRegister />} />
        </Routes>
      </Router>
    </>
  )
}


export default App;
