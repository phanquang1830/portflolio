import React from "react";
import styles from "@/components/About/About.module.scss";

const About: React.FC = () => {
  return (
    <section className={styles.container}>
       <div className={styles.avatar}>
        <img src="/images/avatar.jpg" alt="Avatar" />
      </div>
      <div className={styles.content}>
        <h1>About me</h1>
        <p>
          Xin chào, tôi là Phan Minh Quang, một lập trình viên Backend đam mê
          với việc xây dựng hệ thống ổn định, tối ưu và dễ mở rộng. Tôi có kinh
          nghiệm làm việc với các công nghệ như Node.JS, Express.JS, Sequelize,
          MySQL và đang tiếp tục mở rộng kĩ năng ở các lĩnh vực như Docker,
          CI/CD, Cloud và bảo mật hệ thống. Với tinh thần yêu thích clean code,
          tôi luôn hướng tới việc phát triển những sản phẩm không chỉ hoạt động
          tốt mà còn dễ bảo trì và mở rộng về sau. Tôi luôn cố gắng nỗ lực mỗi
          ngày để có thể thiết kế và xây dựng những hệ thống chất lượng, ổn định
          và giúp ích cho cộng đồng.
        </p>
      </div>
    </section>
  );
};

export default About;
