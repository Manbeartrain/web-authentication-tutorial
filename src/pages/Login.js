import React from "react";
import LoginForm from "../components/auth/LoginForm";
import {
    DEFAULT_FORM_VALUES,
    SIGN_IN_FORM_INPUTS_ARRAY,
} from "../utils/constants";

const Login = () => (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
        <p className="text-6xl font-extrabold tracking-widest uppercase mb-16">
            user Login
        </p>
        <LoginForm
            inputs={SIGN_IN_FORM_INPUTS_ARRAY}
            defaultValues={DEFAULT_FORM_VALUES.SIGN_IN}
        />
    </div>
);

export default Login;
