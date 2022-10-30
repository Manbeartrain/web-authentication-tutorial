import React from "react";
import {Controller} from "react-hook-form";

const FormInput = ({input, control, rules}) => {
    const renderInput = ({field: {onChange, value}, fieldState: {error}}) => (
        <div className="mb-4">
            <input
                className="w-[80vw] text-black border-2 border-gray-300 font-light px-4 py-3 rounded-md"
                type={input?.name === "Password" ? "password" : "text"}
                onChange={onChange}
                value={value}
                placeholder={input?.name}
            />
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
    return (
        <Controller
            control={control}
            rules={rules}
            render={renderInput}
            name={input?.value}
        />
    );
};

export default FormInput;
