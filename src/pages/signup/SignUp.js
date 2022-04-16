import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"

import styles from "./SignUp.module.css"


export default function SignUp() {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }
  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Sign Up</h2>
      <label>
        <span>Username:</span>
        <input
          type="text"
          autoComplete="username"
          onChange= {(e) => setDisplayName(e.target.value)}
          value={displayName}
         />
      </label>

      <label>
        <span>Email: </span>
        <input
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
         />
      </label>

      <label>
        <span>Password: </span>
        <input
          type="password"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
         />
      </label>
      { !isPending && <button className="btn">Sign Up</button>}
      { isPending && <button className="btn" disabled>loading</button>}
      { error && <p>{error}</p>}

    </form>
  )
}
