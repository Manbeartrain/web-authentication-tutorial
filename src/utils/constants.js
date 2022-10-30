export const ROUTES = {
    LOGIN: "/login",
    HOME: "/",
};

export const SIGN_IN_FORM_INPUTS_ARRAY = [
    {
        name: "Email",
        value: "email",
        rules: {
            required: "Email is required",
            pattern: {
                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
            },
        },
    },
    {
        name: "Password",
        value: "password",
        rules: {required: "Password is required"},
    },
];

export const DEFAULT_FORM_VALUES = {
    SIGN_IN: {
        email: "",
        password: "",
    },
};
