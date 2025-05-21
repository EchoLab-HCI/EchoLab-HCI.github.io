import "./Members.css";

function Members() {
  const members = [
    {
      name: "Mengyao Guo",
      title: "Assistant Professor",
      role: "Member",
      image: "/avatar/Mengyao.jpg",
      bio: "Human-AI Co-Creation\nVisual Storytelling\nAIGC & XR\nDigital Cultural Heritage",
      email: "guomengyao@hit.edu.cn",
      homepage: "https://guomengyao.com/",
      school: "Harbin Institute of Technology, Shenzhen",
    },
    {
      name: "Yijing Jiang",
      title: "PhD Student",
      role: "Lab Co-Founder",
      image: "/avatar/Yijing.jpg",
      bio: "Personal Fabrication\nAssistive Technology\nInteraction Design",
      email: "y.jiang@cs.au.dk",
      homepage: "https://www.yijingjiang.com/",
      school: "Aarhus University",
    },
    {
      name: "Yufeng Wu",
      title: "PhD Student",
      role: "Member",
      image: "/avatar/yufeng.jpg",
      bio: "Health\nRemembering Experiences\nAugmented Reality",
      email: "Yufeng.wu@uts.edu.au",
      homepage:
        "https://www.linkedin.com/in/yufeng-wu-b53566286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      school: "University of Technology Sydney",
    },
    {
      name: "Black Sun",
      title: "Master Student",
      role: "Lab Co-Founder",
      image: "/avatar/Black.png",
      bio: "Social Computing\nHealth",
      email: "blackthompson770@gmail.com",
      homepage: "https://blackthompson.github.io/",
      school: "Aarhus University",
    },
    {
      name: "Haiyang Xu",
      title: "Master Student",
      role: "Lab Co-Founder",
      image: "/avatar/sea.png",
      bio: "Accessibility\nHealth\nFabrication",
      email: "uniqsea@outlook.com",
      school: "Aarhus University",
    },
    {
      name: "Yunhui Song",
      title: "Master Student",
      role: "Lab Co-Founder",
      image: "/avatar/yunhui.jpg",
      bio: "Digital Fabrication\nRobotics",
      email: "au777954@uni.au.dk",
      school: "Aarhus University",
    },
    {
      name: "Ge Kacy Fu",
      title: "Master Student",
      role: "Member",
      image: "/avatar/Kacy.jpg",
      bio: "Collaboration",
      email: "kacyfu@163.com",
      school: "Aarhus University",
    },
    {
      name: "Yang Liu",
      title: "Master Student",
      role: "Member",
      image: "/avatar/yang.jpg",
      bio: "Extended Reality",
      email: "yangliu@post.au.dk",
      school: "Aarhus University",
    },
    {
      name: "Kexin (Bella) Nie",
      title: "Master",
      role: "Member",
      image: "/avatar/Bella.jpg",
      bio: "Human-AI Co-Creation\nAIGC & XR\nDigital Cultural Heritage\nInteraction Design",
      email: "niekexinbella@gmail.com",
      school: "The University of Sydney",
    },
  ];

  return (
    <div className="members">
      <h1>Team Members</h1>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <div className="member-header">
                <h2>{member.name}</h2>
                <div className="member-title-school">
                  <span>{member.title}</span>
                  {member.school && <span>{member.school}</span>}
                </div>
                <p className="member-role">{member.role}</p>
              </div>
              <div className="member-bio-block">
                <p className="member-bio">{member.bio}</p>
              </div>
              <div className="member-actions">
                <a href={`mailto:${member.email}`} className="member-email">
                  {member.email}
                </a>
                {member.homepage && (
                  <a
                    href={member.homepage}
                    className="member-homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      role="img"
                      aria-label="homepage"
                      style={{ marginRight: "0.4em" }}
                    >
                      🌐
                    </span>
                    Homepage
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
