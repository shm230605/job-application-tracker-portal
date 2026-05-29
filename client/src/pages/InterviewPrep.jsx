const topics = [
  "DSA Preparation",
  "React Interview Questions",
  "System Design",
  "JavaScript Concepts",
  "HR Interview Tips",
  "Resume Optimization",
];

export default function InterviewPrep() {
  return (
    <div>

      <h1 className="section-title">
        Interview Preparation
      </h1>

      <div className="companies">

        {topics.map((topic, i) => (
          <div
            key={i}
            className="company-card"
          >

            <h2>{topic}</h2>

            <p>
              Start preparation now
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}