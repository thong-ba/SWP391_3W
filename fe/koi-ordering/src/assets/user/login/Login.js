import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Đăng Nhập</h2>
            <form>
                <input type="text" placeholder="Tên đăng nhập" />
                <input type="password" placeholder="Mật khẩu" />
                <button type="submit">Đăng Nhập</button>
            </form>
            <p>
                Chưa có tài khoản? <Link to="/register">Đăng Ký</Link>
            </p>
        </div>
    );
};

export default Login;
