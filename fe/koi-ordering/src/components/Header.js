// import React from 'react';
// import './Header.css';

// const Header = () => {
//     return (
//         <header className="header">
//             <h1>SWPG5 - Vận Chuyển Cá Koi</h1>
//         </header>
//     );
// };

// export default Header;

// import React, { useState } from 'react';
// import './Header.css';

// const Header = () => {
//   const [language, setLanguage] = useState('vi');  // Default language is Vietnamese

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src="koi-login.png" alt="Website Logo" className="logo" />
//         <h1 className="website-name">Koi Ordering SWP</h1>
//       </div>
//       <nav className="navigation">
//         <ul>
//           <li><a href="/">TRANG CHỦ</a></li>
//           <li className="dropdown">
//             <a href="/dich-vu">DỊCH VỤ</a>
//             <div className="dropdown-content">
//               <a href="/service1">Dịch vụ 1</a>
//               <a href="/service2">Dịch vụ 2</a>
//             </div>
//           </li>
//           <li><a href="/theo-doi-don">THEO DÕI ĐƠN</a></li>
//           <li><a href="/chinh-sach">CHÍNH SÁCH</a></li>
//           <li><a href="/ho-tro">HỖ TRỢ</a></li>
//         </ul>
//       </nav>
//       <div className="header-tools">
//         <input type="text" className="search-box" placeholder="Tìm kiếm..." />
//         <select value={language} onChange={handleLanguageChange} className="language-selector">
//           <option value="vi">Tiếng Việt</option>
//           <option value="en">English</option>
//         </select>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [language, setLanguage] = useState('vi');  // Default language is Vietnamese

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src="koi-login.png" alt="Website Logo" className="logo" />
            </div>

            <div className="header-content">
                <nav className="navigation">
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li className="dropdown">
                            <a href="/dich-vu">Dịch vụ</a>
                            <div className="dropdown-content">
                                <a href="/service1">Dịch vụ 1</a>
                                <a href="/service2">Dịch vụ 2</a>
                            </div>
                        </li>
                        <li><a href="/chinh-sach">Chính sách</a></li>
                        <li><a href="/ho-tro">Hỗ trợ</a></li>
                        <li><a href="/login">Đăng nhập</a></li>
                        <li><a href="/register">Đăng ký</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
