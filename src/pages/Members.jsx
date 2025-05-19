import "./Members.css";

function Members() {
  const members = [
    {
      name: "Black Sun",
      title: "Master Student",
      role: "Lab Creator",
      image: "/EchoLab-HCI.github.io/avatar/Black.png",
      bio: "Social Computing\nHealth",
      email: "blackthompson770@gmail.com",
    },
    {
      name: "Haiyang Xu",
      title: "Master Student",
      role: "Lab Co-Creator",
      image: "/EchoLab-HCI.github.io/avatar/sea.png",
      bio: "Accessibility\nHealth\nFabrication",
      email: "uniqsea@outlook.com",
    },
    // {
    //   name: "Michael Chen",
    //   title: "Ph.D. Student",
    //   role: "Graduate Researcher",
    //   image: "https://via.placeholder.com/150",
    //   bio: "Multimodal Interaction\nGesture Recognition\nEye Tracking\nNatural Language Processing\nAI Interfaces",
    //   email: "michael.chen@example.com",
    // },
    // {
    //   name: "Michael Chen",
    //   title: "Ph.D. Student",
    //   role: "Graduate Researcher",
    //   image: "https://via.placeholder.com/150",
    //   bio: "Research focuses on multimodal interaction and intelligent interface design for enhanced user experience.",
    //   email: "michael.chen@example.com",
    // },
    // {
    //   name: "Michael Chen",
    //   title: "Ph.D. Student",
    //   role: "Graduate Researcher",
    //   image: "https://via.placeholder.com/150",
    //   bio: "Research focuses on multimodal interaction and intelligent interface design for enhanced user experience.",
    //   email: "michael.chen@example.com",
    // },
    // {
    //   name: "Michael Chen",
    //   title: "Ph.D. Student",
    //   role: "Graduate Researcher",
    //   image: "https://via.placeholder.com/150",
    //   bio: "Research focuses on multimodal interaction and intelligent interface design for enhanced user experience.",
    //   email: "michael.chen@example.com",
    // },
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
              <h2>{member.name}</h2>
              <p className="member-title">{member.title}</p>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
              <a href={`mailto:${member.email}`} className="member-email">
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
