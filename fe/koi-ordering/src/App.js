import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutUtils from './utils/LayoutUtils';
import Login from './assets/user/login/Login';
import Register from './assets/user/register/Register';

function App() {
    return (
        <Router>
            <LayoutUtils>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </LayoutUtils>
        </Router>
    );
}

export default App;
