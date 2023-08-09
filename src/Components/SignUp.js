import React, { useContext, useState } from 'react'
import './Login.css'
import { loginContext } from '../Context/PageContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { allUser, setAllUser } = useContext(loginContext);
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handlePasswordChnage = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedArray = [
            ...allUser,
            {
                name: input,
                password: password
            }

        ];
        setAllUser(updatedArray)
        navigate('/')

        // updatedArray.push(
        //     {
        //         name: input,
        //         password: password
        //     }
        // )
        // console.log(updatedArray);
        // setAllUser(updatedArray)
        // navigate('/')
    }


    return (
        <section className="form-container flex-box">
            <div className="form-box">
                <h2>Sign Up Here...</h2>
                <form onSubmit={handleSubmit}>
                    <div className="info-box">
                        <div className="inner-form flex-box">
                            <div className="input-box">
                                <input type="text" value={input} onChange={handleInputChange} required />
                                <label>User Name</label>
                            </div>
                            <div className="input-box">
                                <input type="password" value={password} onChange={handlePasswordChnage} required />
                                <label>Password</label>
                            </div>
                            <div className="submit-box">
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp
