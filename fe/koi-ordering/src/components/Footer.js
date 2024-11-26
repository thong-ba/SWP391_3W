import React from "react";
import './Footer.css'; // Import file CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Giới thiệu</h3>
          <ul>
            <li><a href="/about">Về chúng tôi</a></li>
            <li><a href="/contact">Liên hệ</a></li>
            <li><a href="/terms">Điều khoản sử dụng</a></li>
            <li><a href="/privacy">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Dịch vụ</h3>
          <ul>
            <li><a href="/shipping">Vận chuyển</a></li>
            <li><a href="/returns">Đổi trả</a></li>
            <li><a href="/support">Hỗ trợ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Thanh toán</h3>
          <ul>
            <li><a href="/payment">Thông tin thanh toán</a></li>
            <li><a href="/payment-methods">Phương thức thanh toán</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mạng xã hội</h3>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Koi Ordering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
