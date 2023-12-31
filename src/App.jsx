import "./App.css"
import React, { createContext, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Activities from "./Activities";
import Routines from "./Routines";
import MyRoutines from "./MyRoutines";
export const UserContext = createContext()

const App = () => {
  const [token,setToken] = useState(null)
  const [user,setUser] = useState("")
  return (
    <UserContext.Provider value={{token,setToken,user,setUser}}>
    <BrowserRouter>
      <Header/>
      <main>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/routines" element = {<Routines/>}/>
        <Route path = "/activities" element = {<Activities/>}/>
        <Route path = "/myroutines" element = {<MyRoutines/>}/>




      </Routes>
      </main>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App