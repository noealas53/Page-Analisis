import Login from './Pages/Login/Login';
import PrivateR from './Components/PrivateRoute/PrivateRoute'
import Home from './Pages/Home/Home';
import User from './Pages/UserPage/UserMainPage';
import Admin from './Pages/AdminPage/AdminMainPage';
import UserFavorite from './Pages/UserFavorites/UserFavoritePage';
import Error from './Pages/404NF/Error';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Error />} />

        <Route path="/admin" element={<PrivateR role="admin"> <Admin/></PrivateR>}/>
        <Route path="/user" element={<PrivateR role="user"> <User/></PrivateR>}/>
        <Route path="/userfavorite" element={<PrivateR role="user"> <UserFavorite/></PrivateR>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
