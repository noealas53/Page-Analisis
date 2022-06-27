import React, { useCallback, useMemo, useState, useEffect, } from "react";
import Services from "../Services/UserServices";

const UserContext = React.createContext();
const TOKEN_KEY = "token";

const Swal = require("sweetalert2");

const message = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
}


export const Provider = (props) => {
    const [Token, setToken] = useState(undefined);
    const [User, setUser] = useState(undefined);

    const GetAllTokens = (Token) => {
        localStorage.setItem(TOKEN_KEY, Token);
        setToken(Token);
    }

    useEffect(() => {
        const VerifyToken = async () => {
            const TheToken = getToken();

            if (TheToken) {
                const { username, role } =
                    await Services.verifyToken(TheToken);
                if (username && role) {
                    setUser({ username, role });
                    GetAllTokens(TheToken);
                }
            }
        }

        VerifyToken();
    }, [Token])

    const Login = useCallback((username, password) => {
        const login = async () => {
            let status = false;
            try {
                const { token: tokenQ } = await Services.loginAdmin(username, password);
                if (tokenQ) {
                    GetAllTokens(tokenQ);
                    status = true;
                    message("Bienvenido", "login admin", "success");
                }
            } catch (error) {
                console.error(error);
                console.error("Error in credentials");
            } finally {
                return status;
            }
        };

        return login();
    }, [])

    const Exit = useCallback(() => {
        setUser(undefined);
        GetAllTokens(undefined);
    }, [])

    const value = useMemo(() => ({
        token: Token,
        user: User,
        login: Login,
        Exit: Exit
    }), [Token, User, Login, Exit]);

    return <UserContext.Provider value={value} {...props} />;
}

export const useUserContext = () => {
    const contexts = React.useContext(UserContext);
    if (!contexts) {
        throw new Error("useUserContext() must be inside of UserProvider");
    }
    return contexts;
}

const getToken = () => localStorage.getItem(TOKEN_KEY);
