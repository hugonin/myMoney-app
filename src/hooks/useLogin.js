import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      //sign the user out
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      //dispatch logout action
      dispatch({ type: "LOG_IN", payload: res.user });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, login };
};
