import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import './App.css'
import ShowData from './Components/ShowData';
import SignUp from './Components/SignUp';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <div className="main-app">
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path='/logged' element={<ShowData />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
