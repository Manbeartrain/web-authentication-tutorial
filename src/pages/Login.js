import React from "react";
import {Link} from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import useAuthentication from "../hooks/useAuthentication";
import {
    DEFAULT_FORM_VALUES,
    ROUTES,
    SIGN_IN_FORM_INPUTS_ARRAY,
} from "../utils/constants";

const Login = () => {
    const {isLoading, signInCall} = useAuthentication();

    const onSubmit = async data =>
        await signInCall({email: data?.email, password: data?.password});

    return (
        <div className="w-full h-[100vh] flex justify-center items-center flex-col">
            <p className="text-6xl font-extrabold tracking-widest uppercase mb-16 text-center">
                user Login
            </p>
            <LoginForm
                inputs={SIGN_IN_FORM_INPUTS_ARRAY}
                defaultValues={DEFAULT_FORM_VALUES.SIGN_IN}
                onSubmit={onSubmit}
                isLoading={isLoading}
            />
            <Link
                to={ROUTES.SIGN_UP}
                className="text-blue-600 text-xl tracking-widest mt-8 cursor-pointer">
                Create Account
            </Link>
        </div>
    );
};

export default Login;
