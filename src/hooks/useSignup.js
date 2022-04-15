import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuth } from "./useAuth";

export const useSignup = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useAuth()

    const signup =  async(email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if(!res) {
                throw new Error("Could not complet signup")

            }
            // add username to user
            await res.user.updateProfile({ displayName })

            // dispatch login action
            dispatch({ type: "LOG_IN", payload: res.user });
            
            setIsPending(false)
            setError(null)

        }
        catch(err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }


    }

    return { error, isPending, signup }

}