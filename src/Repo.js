import React from 'react';

export default function Repo({ repo }) {
    return (
        <>
            <div className="repoName">
                {repo.name} - <span className="language">{repo.language}</span>
            </div>
            <div className="repoDescription">{repo.description}</div>
            <br></br>
        </>
    );
}
