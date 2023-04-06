import React, { createContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const register = (email, password) => {
        setIsLoading(true);
        axios
            .post(`http://localhost:5001/signup`, {
                email,
                password,
                confpassword
            })
            .then((res) => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
            })
            .catch((e) => {
                console.log(`gagal melakukan register ${e}`);
                setIsLoading(false);
            });
    };

    const login = async (email, password) => {
        setIsLoading(true);

        try {
            const res = await axios.post(`http://localhost:5001/signin`, {
                email,
                password,
            });
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
            setIsLoading(false);
            return userInfo;
        } catch (e) {
            console.log(`login error ${e}`);
            setIsLoading(false);
            throw e; // melemparkan error agar bisa ditangkap oleh try-catch di tempat lain
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                register,
                login,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}