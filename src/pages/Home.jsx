import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const news = [
    {
      date: "March 15, 2024",
      title: "Paper Accepted at CHI 2024",
      content:
        "Our research on multimodal interaction has been accepted at CHI 2024.",
    },
    {
      date: "February 20, 2024",
      title: "NSF Grant Awarded",
      content:
        "Our project 'Intelligent Interface Design Based on Multimodal Interaction' has received funding from the National Science Foundation.",
    },
    {
      date: "January 10, 2024",
      title: "UIST 2024 Conference",
      content:
        "Lab members attended the UIST 2024 conference in San Francisco.",
    },
  ];

  const researchInterests = [
    {
      title: "Multimodal Interaction",
      description:
        "Researching speech, gesture, and eye-tracking technologies to create natural human-computer interaction experiences.",
      icon: "🎯",
    },
    {
      title: "Virtual Reality",
      description:
        "Exploring VR applications in education, healthcare, and other domains to enhance user experiences.",
      icon: "🎮",
    },
    {
      title: "Intelligent Interfaces",
      description:
        "Developing AI-powered interface design methods to improve user experience and interaction efficiency.",
      icon: "🤖",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to EchoLab HCI</h1>
        <p>Exploring the Future of Human-Computer Interaction</p>
        <div className="hero-buttons">
          <Link to="/projects" className="cta-button">
            Explore Projects
          </Link>
          <Link to="/publications" className="cta-button secondary">
            View Publications
          </Link>
        </div>
      </section>

      <section className="research-interests">
        <h2>Research Areas</h2>
        <div className="interests-grid">
          {researchInterests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="news">
        <h2>Latest News</h2>
        <div className="news-list">
          {news.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
