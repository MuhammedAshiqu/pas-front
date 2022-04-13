import React from 'react'
import axios from 'axios'
import './Adminheader.scss'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Adminheader() {
  const history = useHistory()

  const logout = () => {
    axios.get('https://productsandservices.herokuapp.com/admin/signout').then((response) => {
      console.log(response);
      history.push('/admin')
    })
  }
  return (

    <div className="mainhead">
      <div className='left'>
        {/* <h1>Admin Page</h1>   */}
      </div>
      <div className='right' >
        {/* <Link to='/admins' ><button>-</button></Link>  */}




      </div>
      <nav className="navbar navbar-dark bg-blue">
        <h2 className="nav-brand">Admin Panel</h2>
        <div className="navbar-nav">
          <ul className="nav-list">
          {/* <li className="nav-item">
              <Link to='/admin-Overview' > Overview </Link></li> */}
            <li className="nav-item">
              <Link to='/admin-products' > Products </Link></li>
            <li className="nav-item">
              <Link to='/admin-allusers' > Users</Link> </li>
            <li className="nav-item">
              <Link to='/admin-allsellers' > Sellers</Link></li>
            <li className="nav-item">
              <Link to='/admin-allorders' > Orders</Link></li>
            <li className="nav-item">
              <Link to='/admin-allshops' > Shops</Link> </li>
              <li className="nav-item">
              <Link to='/admin-allservices' > Services</Link> </li>
            <li className="nav-item">
              <Link to='/admin-addservice' >Add Service</Link></li>
            <li className="nav-item">
              <Link to='/admin-admin' onClick={logout}>LOGOUT</Link> </li>
          </ul>
        </div>
      </nav>

    </div>





  )
}

export default Adminheader
