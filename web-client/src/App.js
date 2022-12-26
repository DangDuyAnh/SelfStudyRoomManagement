import './App.css';
import Dashboard from './screens/Dashboard';
import Login from "./screens/Login";
import { BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";
function App() {
  return (
    // <Dashboard />
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} /> 
          <Route path='/login' element={<Login />} /> 
        </Routes>
      </Router>
    </>
  )
}


export default App;
