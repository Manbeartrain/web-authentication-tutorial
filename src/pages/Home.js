import React from "react";
import {useSelector} from "react-redux";
import useAuthentication from "../hooks/useAuthentication";

const Home = () => {
    const {signOutCall} = useAuthentication();
    const user = useSelector(({UserSlice}) => UserSlice.user);

    const signOut = async () => {
        await signOutCall();
    };

    return (
        <div className="w-full h-[100vh] flex justify-center items-center flex-col px-8">
            <p className="text-2xl font-bold text-center">
                Welcome {user?.email}! You are logged in.
            </p>
            <div
                className="w-[55vw] py-4 bg-red-600 rounded-lg cursor-pointer mt-8"
                onClick={signOut}>
                <p className="text-white text-xl font-bold tracking-widest uppercase flex justify-center items-center">
                    Sign Out
                </p>
            </div>
        </div>
    );
};

export default Home;
