import React, { useContext, useState } from 'react';
import './Login.css'
import { loginContext } from '../Context/PageContext';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const { allUser, setSingleUser } = useContext(loginContext)
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handlePasswordChnage = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        var Check = 0;
        event.preventDefault()
        allUser.map((user) => {
            if (user.name === input && user.password === password) {
                // console.log(user.name + ' is logged');
                setSingleUser(user)
                navigate('/logged')
                // setError('');
                Check = 1;
                return user;
            }
            return null
        });
        if (Check === 0) {
            setError('not logged');
        }

        // if (isLogged !== true) {
        //     setError('Kindly Enter Valid User Name & Password')
        //     console.log('not logged');
        // }
        // for (let n = 0; n < allUser.length; n++) {
        //     const userName = allUser[n].name;
        //     const userPass = allUser[n].password;
        //     if (userName === input && userPass === password) {
        //         console.log(userName + ' is logged');
        //     }
        //     else {
        //         console.log('not logged');
        //     }
        // }
    }
    return (
        <section className="form-container flex-box">
            <div className="form-box">
                <h2>Login Here...</h2>
                <form onSubmit={handleSubmit}>
                    <div className="info-box">
                        <div className="inner-form flex-box">
                            <div className="input-box" >
                                <input type="text" value={input} onChange={handleInputChange} required />
                                <label>User Name</label>
                            </div>
                            <div className="input-box" >
                                <input type="password" value={password} onChange={handlePasswordChnage} required />
                                <label>Password</label>
                            </div>
                            <div className="submit-box">
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='submit-box'>
                    <NavLink to='/signUp'>
                        <button>Sign Up</button>
                    </NavLink>
                </div>
                <div className="error">
                    <p>{error}</p>
                </div>
            </div>
        </section>

    );
};
export default Login
