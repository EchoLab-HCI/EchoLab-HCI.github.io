import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const news = [
    {
      date: "April 25, 2025",
      title: "Participated in CHI 2025, Yokohama, Japan🌸",
      content:
        "🎉🎉🎉 One Full Paper and One Interactivity Paper were accepted at CHI 2025.",
    },
    {
      top: true,
      date: "Open Call",
      title: "🔥🔥🔥Finding collaborators!!!🔥🔥🔥",
      content:
        "If you are farmiliar with PCB design, FPGA, or embedded system, please contact Yijing Jiang! We are looking for collaborators to work on a project about interactive technology.",
    },
  ];

  // Separate top news and normal news
  const topNews = news.filter((item) => item.top);
  const normalNews = news.filter((item) => !item.top);

  const researchInterests = [
    {
      title: "Fabrication",
      description:
        "Using experimental prototyping and digital fabrication techniques to explore novel interactive technologies, tools, and materials for human-centered research.",
      icon: "🧪",
    },
    {
      title: "Extended Reality",
      description:
        "Exploring eye-tracking, gesture, and speech technologies to create natural extended reality experiences.",
      icon: "👓",
    },
    {
      title: "Health and Well-being",
      description:
        "Exploring how technologies can support physical, mental, and emotional health through user-centered design and in-depth qualitative research with individuals and communities.",
      icon: "❤️‍🩹",
    },
    {
      title: "Social Computing",
      description:
        "Investigating how people interact, collaborate, and build communities through digital platforms, with a focus on designing interactive systems and using qualitative methods to understand social dynamics.",
      icon: "🧑‍🤝‍🧑",
    },
    {
      title: "Human-Centered AI",
      description:
        "Designing AI systems that prioritize human values, interpretability, and collaboration—combining interactive technologies with qualitative insights to ensure ethical, inclusive, and user-aligned intelligence.",
      icon: "⚖️",
    },
    {
      title: "Human-AI Interaction",
      description:
        "Exploring how humans interact with AI-driven systems through interfaces, behaviors, and feedback loops,focusing on usability, trust, and understanding.",
      icon: "🤖",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Echo Lab 🪸</h1>
        <p>
          <strong>Echo Lab</strong> is a{" "}
          <strong> research group founded by students</strong> from Aarhus
          University, Denmark, dedicated to advancing{" "}
          <strong>Human-Computer Interaction (HCI)</strong>.<br />
          <br />
          We are passionate about{" "}
          <span style={{ color: "var(--primary-color)", fontWeight: 600 }}>
            improving human well-being
          </span>{" "}
          and{" "}
          <span style={{ color: "var(--primary-color)", fontWeight: 600 }}>
            designing inclusive technologies
          </span>
          . Our mission is to{" "}
          <span style={{ color: "var(--secondary-color)", fontWeight: 600 }}>
            support vulnerable
          </span>{" "}
          and{" "}
          <span style={{ color: "var(--secondary-color)", fontWeight: 600 }}>
            underserved communities
          </span>{" "}
          through innovative research and thoughtful design.
        </p>
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
          {topNews.map((item, index) => (
            <div key={"top-" + index} className="news-item top-news">
              <div className="news-top-label">TOP</div>
              <div className="news-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
          {normalNews.map((item, index) => (
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
