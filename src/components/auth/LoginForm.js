import React from "react";
import {useForm} from "react-hook-form";
import {Bars} from "react-loader-spinner";
import FormInput from "../form/FormInput";

const LoginForm = ({inputs, defaultValues, onSubmit, isLoading}) => {
    const {control, handleSubmit} = useForm({
        defaultValues,
    });

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
                className="w-[80vw] h-16 bg-blue-600 rounded-lg cursor-pointer flex justify-center items-center"
                onClick={handleSubmit(onSubmit)}>
                {isLoading ? (
                    <Bars height="32" color="white" ariaLabel="bars-loading" />
                ) : (
                    <p className="text-white text-xl font-bold tracking-widest uppercase flex justify-center items-center">
                        Login
                    </p>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
