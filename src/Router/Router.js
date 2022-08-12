import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Cart from "pages/Cart/Cart";
import DetailProduct from "pages/DetailProduct/DetailProduct";
import LoginPage from "pages/LoginPage/LoginPage";
import Register from "components/Register/Register";
import User from "pages/User/User";
import WishList from "pages/WishList/WishList";
import Photos from "pages/Photos/Photos";
import Dates from "pages/Dates/Dates";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import Contact from "pages/Contact/Contact";
import Profile from "pages/Profile/Profile";
import UserDetail from "pages/Profile/UserDetail.jsx/UserDetail";
import UserOrders from "pages/Profile/UserOrders/UserOrders";
import UserWishList from "pages/Profile/UserWishList/UserWishList";
import NavBar from "components/NavBar/NavBar";

const Router = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Register />} path="/signup" />
      <Route element={<Home />} path="/" />
      <Route path="/" element={<NavBar />}>
        <Route element={<Shop />} path="shop" />
        <Route element={<DetailProduct />} path="detail/:id" />
        <Route element={<Cart />} path="cart" />
        <Route element={<User />} path="user" />
        <Route element={<WishList />} path="wishlist" />
        <Route element={<Photos />} path="photos" />
        <Route element={<Dates />} path="dates" />
        <Route element={<Contact />} path="contact" />
        <Route element={<Profile />} path="profile">
          <Route index element={<UserDetail />} />
          <Route element={<UserOrders />} path="userOrder" />
          <Route element={<UserWishList />} path="userWishlist" />
        </Route>
        <Route element={<ErrorPage />} path="*" />
      </Route>
    </Routes>
  );
};

export default Router;
