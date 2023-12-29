import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import Header from "./components/Header";
import DetailPage from "./Page/Detail/DetailPage";
import HomeLayout from "./layout/HomeLayout";
import RegisterPage from "./Page/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            {/* outlet */}
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/detail/:idPhim" element={<DetailPage />}></Route>
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
