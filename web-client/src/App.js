import './App.css';
import Dashboard from './screens/Dashboard';
import { BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";
function App() {
  return (
    // <Dashboard />
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
