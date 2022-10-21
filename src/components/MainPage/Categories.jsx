import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {

  return (
    <>
      <div className='category'>
        <div >
          <ul>
          <span className='box f_flex'>
              <li>
                <Link to='/'>All-Purpose Flour</Link>
              </li>
            </span>
            <span className='box f_flex'>
              <li>
                <Link to='/'>Whole Wheat Flour</Link>
              </li>
            </span>
            <span className='box f_flex'>
              <li>
                <Link to='/pages'>Self-Rising Flour</Link>
              </li>
            </span>
            <span className='box f_flex'>
              <li>
                <Link to='/user'>Bakers’ Flour</Link>
              </li>
            </span>
            <span className='box f_flex'>
              <li>
                <Link to='/contact'>Atta Flour</Link>
              </li>
            </span>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Categories
