import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("useAuth must be used in a AuthProvider")
    }

    return context
}
