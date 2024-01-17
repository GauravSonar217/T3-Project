import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../layout/Main/Main";
import Footer from "../layout/Footer/Footer";
import Home from "../Home/Home";
import DatabaseForm from "../BackendUi/Form/DatabaseForm";
import Nav from "../layout/Nav/Nav";
import PageNotFound from "../page-not-found/ErrorPage";
import AdminPanel from "../BackendUi/adminpanel/AdminPanel";
import TrekPage from "../Pages/TrekPage";
import TourPage from "../Pages/TourPage";
import TravelPage from "../Pages/TravelPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<DatabaseForm />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/trek" element={<TrekPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
