import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Discount from "../components/discount/Discount"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems}) => {
  return (
    <>
      <Home/>
      <FlashDeals productItems={productItems}/>
      <Discount />
      <Wrapper />
    </>
  )
}

export default Pages
