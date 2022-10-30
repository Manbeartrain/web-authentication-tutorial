import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import {ROUTES} from "../utils/constants";

const Navigation = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
);

export default Navigation;
