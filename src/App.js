import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./screens/homepage/HomePage"
import MountainBike from "./screens/mountainBike/MountainBike"
import Shop from "./screens/shop/Shop"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/mountain-bike" component={MountainBike} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  )
}

export default App
