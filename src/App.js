import React,{useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
// import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  },[dispatch])

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = dispatch => ({
//   checkUserSession:()=>dispatch(checkUserSession())
// })


export default App;
