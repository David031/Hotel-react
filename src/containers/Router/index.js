import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import AccountPage from "../AccountPage";
import NotFoundPage from "../NotFoundPage";
import DetailPage from "../DetailPage";
import HotelDetailPage from "../HotelDetailPage";
import HotelOrderPage from "../HotelOrderPage";
import PaymentPage from "../PaymentPage";
import PaymentDonePage from "../PaymentDonePage";
import Testing from "../Testing";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Hotel-react/" component={HomePage} />
        <Route exact path="/Hotel-react/home" component={HomePage} />
        <Route exact path="/Hotel-react/account" component={AccountPage} />
        <Route exact path="/Hotel-react/testing" component={Testing} />
        <Route exact path="/Hotel-react/login" component={LoginPage} />
        <Route exact path="/Hotel-react/detail" component={DetailPage} />
        <Route exact path="/Hotel-react/detail/hotel" component={HotelDetailPage} />
        <Route exact path="/Hotel-react/detail/hotel/order" component={HotelOrderPage} />
        <Route exact path="/Hotel-react/detail/hotel/order/pay" component={PaymentPage} />
        <Route exact path="/Hotel-react/detail/hotel/order/pay/done" component={PaymentDonePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
