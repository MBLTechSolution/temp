import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"

function App() {
  

  //Step 1 :
  const { productItems } = Data





  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact> <Pages productItems={productItems}/></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
