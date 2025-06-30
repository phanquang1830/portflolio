import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Bên trái: nội dung */}
      <div className={styles.content}>
        <h1>Xin chào, tôi là <br />Phan Minh Quang</h1>
        <p>
          Em là một lập trình viên backend yêu thích code sạch, thích xây dựng hệ
          thống hiệu quả và nuôi một chú chó siêu dễ thương 🐶. Mục tiêu của em là
          trở thành một kỹ sư đáng tin cậy, tạo ra những sản phẩm có ích và chất
          lượng.
        </p>
        <a href="#skills">
          <div className={styles.buttonWrapper}>
          <button>Xem thêm về tôi</button>
          </div>
        </a>
      </div>

      {/* Bên phải: avatar */}
      <div className={styles.avatar}>
        <img src="/images/avatar.jpg" alt="Avatar" />
      </div>
    </section>
  );  
};

export default Hero;
