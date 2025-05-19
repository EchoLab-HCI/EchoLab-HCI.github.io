import "./Publications.css";

function Publications() {
  const publications = [
    {
      year: "2024",
      items: [
        {
          title: "Intelligent Interface Design Based on Multimodal Interaction",
          authors: "Smith, J., Johnson, S., Chen, M.",
          venue: "CHI 2024",
          type: "Conference",
          link: "#",
        },
        {
          title:
            "Enhancing Natural Interaction in Virtual Reality Environments",
          authors: "Johnson, S., Smith, J.",
          venue: "UIST 2024",
          type: "Conference",
          link: "#",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: "Augmented Reality Applications in Industrial Design",
          authors: "Chen, M., Smith, J.",
          venue: "IEEE VR 2023",
          type: "Conference",
          link: "#",
        },
        {
          title: "Affective Computing in Human-Computer Interaction",
          authors: "Smith, J., Johnson, S., Chen, M.",
          venue: "International Journal of Human-Computer Studies",
          type: "Journal",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="publications">
      <h1>Publications</h1>
      <div className="publications-content">
        {publications.map((yearGroup, index) => (
          <div key={index} className="year-group">
            <h2>{yearGroup.year}</h2>
            <div className="publication-list">
              {yearGroup.items.map((pub, pubIndex) => (
                <div key={pubIndex} className="publication-item">
                  <div className="publication-type">{pub.type}</div>
                  <h3>{pub.title}</h3>
                  <p className="authors">{pub.authors}</p>
                  <p className="venue">{pub.venue}</p>
                  <a
                    href={pub.link}
                    className="publication-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
