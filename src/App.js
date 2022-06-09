import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import LoginAdmin from "./pages/LoginAdmin";

function App() {
  return (
    <div className="App">
      <RegisterUser />
    <br/>
    <LoginAdmin />
    </div>
  );
}

export default App;
