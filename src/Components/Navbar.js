import React from 'react'
import { LogoutButton } from './Styles/LogoutButton'
import { logout } from '../redux/auth/authActions'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

const Tag=styled.p`
color:red;
text-decoration: underline; 
cursor:pointer;
`
function Navbar() {
    const dispatch = useDispatch()
  return (
    <div className='nav'>
       <h2 className='navTitle'>User</h2>
       <span className='nav-options'>
      {/* <h3>  </h3>  */}
      <Tag onClick={() => dispatch(logout())}>
          <LogoutButton>Logout</LogoutButton>
           </Tag>
       </span>
    </div>
  )
}

export default Navbar