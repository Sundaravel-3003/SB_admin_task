import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./DashBoard";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './fontawesome-free/css/fontawesome.min.css';
import SideBar from "./sideBar";
import TopBar from "./TopBar";
import User from "./User";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar></SideBar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Routes>
              <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
              <Route path="/users" element={<User></User>}></Route>
              <Route path="/products" element={<Product></Product>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
