import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <h2>Đăng Ký</h2>
            <form>
                <input type="text" placeholder="Tên đăng nhập" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mật khẩu" />
                <button type="submit">Đăng Ký</button>
            </form>
            <p>
                Đã có tài khoản? <Link to="/login">Đăng Nhập</Link>
            </p>
        </div>
    );
};

export default Register;
