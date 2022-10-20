import React from "react"

const Categories = () => {
  const data = [
    {
      cateName: "All-Purpose Flour",
    },
    {
      cateName: "Whole Wheat Flour",
    },
    {
      cateName: "Self-Rising Flour",
    },
    {
      cateName: "Bakers’ Flour",
    },
    {
      cateName: " Atta Flour",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
