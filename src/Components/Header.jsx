import React from 'react'
import { Link } from 'react-router-dom'

function Header({insidereview,insideHome}) {
  return (
    <div className='   '>
        <div className='p-3 w-100 text-center shadow d-flex justify-content-between' >
            <Link to={'/'} style={{textDecoration:'none'}}><h6 className='mainFont fs-1 text-info animate__animated animate__zoomInDown ' >Voyage Vibes</h6></Link>
            {
              insidereview&&<div><button className='btn btn-danger'>Logout</button></div>
            }
            {/* {
              insideHome&&
              <div>
                <button className='btn'>Login</button>
                <button>SignUp</button>
              </div>
            } */}
        </div>
    </div>
  )
}

export default Header