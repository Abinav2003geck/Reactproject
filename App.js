import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loginpage } from "./Loginpage";
import Adminportal from "./component/admin/Adminportal";
import Userportal from "./component/user/Userportal";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
        <Route path='/adminportal/*' element={<Adminportal/>}></Route>
        <Route path='/userportal/*' element={<Userportal/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
