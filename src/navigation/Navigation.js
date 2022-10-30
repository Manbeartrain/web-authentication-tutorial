import React from "react";
import {Route, Routes} from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import {ROUTES} from "../utils/constants";

const Navigation = () => (
    <Routes>
        <Route
            path={ROUTES.HOME}
            element={
                <AuthGuard>
                    <Home />
                </AuthGuard>
            }
        />
        <Route
            path={ROUTES.LOGIN}
            element={
                <GuestGuard>
                    <Login />
                </GuestGuard>
            }
        />
        <Route
            path={ROUTES.SIGN_UP}
            element={
                <GuestGuard>
                    <SignUp />
                </GuestGuard>
            }
        />
    </Routes>
);

export default Navigation;
