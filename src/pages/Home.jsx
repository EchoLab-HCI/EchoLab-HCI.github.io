import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>欢迎来到 EchoLab HCI</h1>
        <p>探索人机交互的未来</p>
        <Link to="/about" className="cta-button">
          了解更多
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>研究创新</h3>
          <p>探索前沿的人机交互技术，推动行业发展</p>
        </div>
        <div className="feature-card">
          <h3>用户体验</h3>
          <p>以用户为中心，创造卓越的交互体验</p>
        </div>
        <div className="feature-card">
          <h3>技术实践</h3>
          <p>将理论转化为实践，打造创新解决方案</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
