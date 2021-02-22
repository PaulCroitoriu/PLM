import React, { useState } from "react"
import "./register.styles.scss"
import FormInput from "./FormInput"
import Button from "../button/Button"
import { signInWithGoogle } from "../../firebase/firebase.utils"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setPassword("")
    setEmail("")
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <span>Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          onChange={e => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Login</Button>
        <Button onClick={signInWithGoogle}>Login with Google</Button>
      </form>
    </div>
  )
}

export default Login
