import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './Admin.css'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../../Context/Context'

function Admin() {
    const { AdminTrue } = useContext(DataContext)
    const [adminTrue, setadminTrue] = AdminTrue
    const history = useHistory()
    const [input, setinput] = useState({
        Email: '',
        password: ''
    })
    const [message, setmessage] = useState()

    const handleChange = (e) => {
        setmessage('')
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault()
        axios.post('https://productsandservices.herokuapp.com/admin/signin', input).then((res) => {
            console.log(res);
            setadminTrue(res.data.admin)
            setmessage(res.data.message)
            res.data.Signed && history.push('/admin-products')
        })
    }

    useEffect(() => {
        localStorage.removeItem('user')
        setadminTrue(false)

    }, [])

    return (
        <div classNameName="admin_body">
            <div className="admin_container">
                <div className="row">

                    <div className="col-lg-6 col-md-8 login-box">

                        <div className="col-lg-12 login-title">
                            ADMIN PANEL
                        </div>
                        <h2 classNameName='yyy'>{message}</h2>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={handleClick} >
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label>
                                        <input type="text" placeholder='email' name='Email' onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" placeholder='password' name='password' onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">

                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary"  >LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>

            </div>
        </div>




    )
}

export default Admin
