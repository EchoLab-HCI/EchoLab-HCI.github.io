import "./Publications.css";

function Publications() {
  const publications = [
    {
      year: "2025",
      items: [
        {
          title:
            "Breaking Barriers or Building Dependency? Exploring Team-LLM Collaboration in AI-infused Classroom Debate",
          authors: [
            { name: "Zihan Zhang", equal: true },
            { name: "Black Sun", equal: true },
            { name: "Pengcheng An", corresponding: true },
          ],
          venue:
            "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems",
          type: "Conference",
          link: "https://dl.acm.org/doi/full/10.1145/3706598.3713853",
        },
        {
          title:
            "Demonstration of BIOral: Fabricating Intraoral pH Sensor for Continuous Health Monitoring",
          authors: [
            { name: "Yijing Jiang" },
            { name: "Junzhe Jin" },
            { name: "Yunhui Song" },
            { name: "Haiyang Xu" },
            { name: "Michael Wessely", corresponding: true },
          ],
          venue:
            "Proceedings of the Extended Abstracts of the 2025 CHI Conference on Human Factors in Computing Systems",
          type: "Conference",
          link: "https://dl.acm.org/doi/full/10.1145/3706599.3721178",
        },
        {
          title:
            "Resonix: Prototyping VR for Fostering Remote Collaboration in Sound Art Curation",
          authors: [
            { name: "Zijun Wan", corresponding: true },
            { name: "Yuxuan Guo" },
            { name: "Kexin Nie" },
            { name: "Haowei Xiong" },
            { name: "Xudong Cai" },
            { name: "Fanjing Meng" },
            { name: "Xin Tong", corresponding: true },
          ],
          venue:
            "Proceedings of the Extended Abstracts of the 2025 CHI Conference on Human Factors in Computing Systems",
          type: "Conference",
          link: "https://dl.acm.org/doi/full/10.1145/3706599.3720247",
        },
        {
          title:
            "Conversational Agents to Support People with Communication Disability: A Co-design Study with Speech Pathologists",
          authors: [
            { name: "Fahad Khan" },
            { name: "Yufeng Wu" },
            { name: "Julia Dray" },
            { name: "Bronwyn Hemsley" },
            { name: "A Baki Kocaballi" },
          ],
          venue:
            "Proceedings of the Extended Abstracts of the 2025 CHI Conference on Human Factors in Computing Systems",
          type: "Conference",
          link: "https://dl.acm.org/doi/full/10.1145/3706599.3719800",
        },
      ],
    },
  ];

  return (
    <div className="publications">
      <h1>Publications</h1>
      <div className="publication-notes">
        <span className="equal-contribution">*</span> Equal contribution
        &nbsp;&nbsp;
        <span className="corresponding-author">†</span> Corresponding author
      </div>
      <div className="publications-content">
        {publications.map((yearGroup, index) => (
          <div key={index} className="year-group">
            <h2>{yearGroup.year}</h2>
            <div className="publication-list">
              {yearGroup.items.map((pub, pubIndex) => (
                <div key={pubIndex} className="publication-item">
                  <div className="publication-type">{pub.type}</div>
                  <h3>{pub.title}</h3>
                  <div className="publication-authors">
                    {pub.authors.map((author, j) => (
                      <span key={j}>
                        {author.name}
                        {author.equal && (
                          <span className="equal-contribution">*</span>
                        )}
                        {author.corresponding && (
                          <span className="corresponding-author">†</span>
                        )}
                        {j < pub.authors.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
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
