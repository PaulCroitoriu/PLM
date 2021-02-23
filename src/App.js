import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/header/Header"
import HomePage from "./screens/homepage/HomePage"
import MountainBike from "./screens/mountainBike/MountainBike"
import Shop from "./screens/shop/Shop"
import { auth } from "./firebase/firebase.utils"
import Login from "./components/register/Login"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [currentUser])

  return (
    <div>
      {console.log(currentUser)}
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/mountain-bike" component={MountainBike} />
        <Route path="/shop" component={Shop} />
        <Route path="/register" component={Login} />
      </Switch>
    </div>
  )
}

export default App
