import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>关于我们</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>我们的使命</h2>
          <p>
            EchoLab HCI
            致力于推动人机交互领域的研究与创新。我们相信，通过深入理解用户需求
            和不断探索新技术，可以创造出更自然、更智能的人机交互体验。
          </p>
        </section>

        <section className="about-section">
          <h2>研究方向</h2>
          <ul>
            <li>自然用户界面设计</li>
            <li>多模态交互技术</li>
            <li>虚拟现实与增强现实</li>
            <li>智能交互系统</li>
            <li>用户体验评估</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>团队介绍</h2>
          <p>
            我们的团队由来自不同背景的研究人员和工程师组成，包括人机交互、计算机科学、
            心理学和设计等领域的专家。我们共同努力，将理论创新转化为实际应用。
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
