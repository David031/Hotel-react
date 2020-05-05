import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import AccountPage from "../AccountPage";
import NotFoundPage from "../NotFoundPage";
import DetailPage from "../DetailPage";
import HotelDetailPage from "../HotelDetailPage";
import HotelOrderPage from "../HotelOrderPage";
import Testing from "../Testing";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/testing" component={Testing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/detail/hotel" component={HotelDetailPage} />
        <Route exact path="/detail/hotel/order" component={HotelOrderPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
