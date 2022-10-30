import React from "react";
import {useForm} from "react-hook-form";
import useAuthentication from "../../hooks/useAuthentication";
import FormInput from "../form/FormInput";

const LoginForm = ({inputs, defaultValues}) => {
    const {signInCall} = useAuthentication();
    const {control, handleSubmit} = useForm({
        defaultValues,
    });

    const onSubmit = async data => await signInCall({data});

    return (
        <div className="flex flex-col justify-center items-center w-full">
            {inputs.map((item, index) => (
                <FormInput
                    key={index}
                    input={item}
                    control={control}
                    rules={item?.rules}
                />
            ))}
            <div
                className="w-[30vw] py-4 bg-blue-600 rounded-lg cursor-pointer"
                onClick={handleSubmit(onSubmit)}>
                <p className="text-white text-xl font-bold tracking-widest uppercase flex justify-center items-center">
                    Login
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
