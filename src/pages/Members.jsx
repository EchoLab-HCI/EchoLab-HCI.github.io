import "./Members.css";

function Members() {
  const members = [
    {
      name: "Yijing Jiang",
      title: "PhD Student",
      role: "Lab Co-Creator",
      image: "/avatar/Yijing.jpg",
      bio: "Personal Fabrication\nAssistive Technology\nInteraction Design",
      email: "y.jiang@cs.au.dk",
      homepage: "https://www.yijingjiang.com/",
      school: "Aarhus University",
    },
    {
      name: "Black Sun",
      title: "Master Student",
      role: "Lab Co-Creator",
      image: "/avatar/Black.png",
      bio: "Social Computing\nHealth",
      email: "blackthompson770@gmail.com",
      homepage: "https://blackthompson.github.io/",
      school: "Aarhus University",
    },
    {
      name: "Haiyang Xu",
      title: "Master Student",
      role: "Lab Co-Creator",
      image: "/avatar/sea.png",
      bio: "Accessibility\nHealth\nFabrication",
      email: "uniqsea@outlook.com",
      school: "Aarhus University",
    },
    {
      name: "Yunhui Song",
      title: "Master Student",
      role: "Lab Co-Creator",
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
