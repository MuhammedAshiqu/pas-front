import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Signup.scss';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../../Context/Context';

function Signup() {
    const { Users, AdminTrue, Cartcount, IsLoaged } = useContext(DataContext);

    const [isLoaged, setisLoaged] = IsLoaged;
    const LoginSuccess = () => toast('Login Success');

    const [adminTrue, setadminTrue] = AdminTrue;

    let history = useHistory();
    const notify = () => toast('successfuly SignUp');

    const [error, seterror] = useState('');
    const [input, setinput] = useState({
        Name: '',
        Email: '',
        Address: '',
        Phone: '',
        Password: '',
    });

    const handleChane = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        notify();
        axios.post('https://productsandservices.herokuapp.com/signup', input).then((result) => {
            console.log(result);
            if (result.data.message === 'set') {

                localStorage.setItem('user', input.Email);
                LoginSuccess();
                setisLoaged(true);
                history.push('/');
            } else {
                seterror('All fields required');
            }
        });
    };

    useEffect(() => {
        setadminTrue(false);
    }, []);

    return (
        <div className='signup'>

            {/* <form className='signup-form' onSubmit={handleClick}>
                <h3> {error && 'All fields Required'} </h3>

                <input
                    type='text'
                    name='Name'
                    value={input.Name}
                    onChange={handleChane}
                    placeholder='username'
                />
                <input
                    type='text'
                    name='Email'
                    value={input.Email}
                    onChange={handleChane}
                    placeholder='email'
                />
                <input
                    type='text'
                    name='Address'
                    value={input.Address}
                    onChange={handleChane}
                    placeholder='address'
                />
                <input
                    type='number'
                    name='Phone'
                    value={input.Phone}
                    onChange={handleChane}
                    placeholder='phonne number'
                />
                <input
                    type='password'
                    name='Password'
                    value={input.Password}
                    onChange={handleChane}
                    placeholder='password'
                />

                <button>Signup</button>
                <Link to='/Login'>
                    {' '}
                    <Button>Already have an account ?</Button>{' '}
                </Link>
            </form> */}

            {/* try */}
            <div className="signup_body">
                <div className="signupSection">
                    <div class="info">
                        <h2>Welcome</h2>
                        <br /><br />
                        <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                        <p>To The Products And Service</p>
                        <br /><br />
                        <img src="data:image/jpeg;base64,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" alt="" srcset="" />
                    </div>
                    <form class="signupForm" onSubmit={handleClick}>
                        <h2>Sign Up</h2>
                        <ul class="noBullet">
                            <li>
                                <label for="username"></label>
                                <input
                                    type='text'
                                    name='Name'
                                    value={input.Name}
                                    onChange={handleChane}
                                    class="inputFields"
                                    placeholder='username'
                                />
                            </li>
                            <li>
                                <label for="password"></label>
                                <input
                                    type='text'
                                    name='Email'
                                    value={input.Email}
                                    onChange={handleChane}
                                    class="inputFields"
                                    placeholder='email'
                                />
                            </li>
                            <li>
                                <label for="address"></label>
                                <input
                                    type='text'
                                    name='Address'
                                    value={input.Address}
                                    onChange={handleChane}
                                    class="inputFields"
                                    placeholder='address'
                                />
                                <label for="phone"></label>
                                <input
                                    type='number'
                                    name='Phone'
                                    value={input.Phone}
                                    class="inputFields"
                                    onChange={handleChane}
                                    placeholder='phone number'
                                />
                                <label for="pwd"></label>
                                <input
                                    type='password'
                                    name='Password'
                                    class="inputFields"
                                    value={input.Password}
                                    onChange={handleChane}
                                    placeholder='password'
                                />
                            </li>

                            <li id="center-btn">

                                <button id="join-btn">Signup</button><br />
                                <Link to='/Login'>
                                    {' '}
                                    <button id="join-btn">Already have an account ?</button>{' '}
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Signup;
