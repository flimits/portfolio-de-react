import React from 'react';

export default function Resume() {
    return (
        <div>
            <h1>Resume De Savoie</h1>
            <p>Here is my experience</p>
            <a href="/jason_savoie_resume.pdf" download>
                You can Download My Resume Here
            </a>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2>Front-End Skills</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Bootstrap</p>
                        <p>Javascript</p>
                        <p>React</p>
                    </div>
                    <div className="col-6">
                        <h2>Back-End Skills</h2>
                        <p>APIs</p>
                        <p>ExpressJs</p>
                        <p>MySql Sequalize</p>
                        <p>Mongoose</p>
                        <p>GraphQL</p>
                        <p>Node</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
