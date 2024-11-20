import React from "react";

const Team = () => {

    return (
        <div className="team-container">
            <h2>Meet the developer</h2>
            <div className="team-card">
                <div className="team-photo">
                    <img
                        src="/image-photo.jpg"  // photo in 'public folder'
                        alt="Dev"
                        className="photo"
                    />
                </div>
                <div className="team-info">
                    <h2>Kevin Musembi</h2>
                    <div className="title">Software Engineer</div>
                    <p>Software engineer with a passion for creating apps that have a societal impact. Musembi has 2 years experience in backend software development, and has worked on several projects. You can contact him through the email provided below.</p>
                    <p> Email: kevinmusembi.m@gmail.com</p>
                    <p> LinkedIn: <a href="https://www.linkedin.com/in/kevin-musembi/" target="_blank" rel="noopener noreferrer">Profile</a></p>
                </div>
            </div>
        </div>
    );
};

export default Team;
