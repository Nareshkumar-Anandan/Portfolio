import React from "react";
import "../Styles/Profile.css";

const cards = [
  {
    title: "Educator and mentor",
    description:
      "Has educated thousands of developers, sharing in-depth knowledge and expertise in tech.",
  },
  {
    title: "Cloud consultant",
    description:
      "Provides insightful consultancy to companies embarking on their cloud journeys.",
  },
  {
    title: "Community leader & keynote speaker",
    description:
      "Renowned for exceptional community leadership and engaging as a speaker at global tech conferences.",
    link: true,
  },
  {
    title: "Empathy and professionalism",
    description:
      "Known for a unique blend of empathetic understanding and professional acumen in his approach to work and life.",
  },
];

const Profile = () => {
  return (
    <div className="profile-container" id="about">
      <div className="profile-cards">
        {cards.map((card, index) => (
          <div key={index} className="profile-card">
            <h3 className="card-title">
              {card.title.includes("keynote speaker") ? (
                <>
                  Community leader &{" "}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    keynote speaker ↗
                  </a>
                </>
              ) : (
                card.title
              )}
            </h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
