import { useState } from "react"

import styles from "./SignUp.module.css"


export default function SignUp() {
  const [username, setUsername] = useState("")
  const [mail, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("username: " + username, "mail: " + mail, "password: " + password )
  }
  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Sign Up</h2>
      <label>
        <span>Username:</span>
        <input
          type="text"
          autoComplete="username"
          onChange= {(e) => setUsername(e.target.value)}
          value={username}
         />
      </label>

      <label>
        <span>Email: </span>
        <input
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          value={mail}
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
      <button className="btn">Sign Up</button>
    </form>
  )
}
