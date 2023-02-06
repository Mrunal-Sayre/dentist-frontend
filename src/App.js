import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Patients from './Components/Patients'
import EditPatient from './Components/EditPatient'
import AddPatient from './Components/AddPatient'
import Home from './Components/Home';



function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Patients />  */}
      {/* <Header />
      <AddPatient />
      <Sidebar /> */}
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Patients/>}/>
          <Route path="/add" element={<AddPatient/>}/>
          <Route path="/edit" element={<EditPatient/>}/>
        </Routes>
      </BrowserRouter>

    </> 
    </div>
  );
}

export default App;
