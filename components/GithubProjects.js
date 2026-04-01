"use client";

import { useEffect, useState } from "react";

export default function GithubProjects(){

  const [repos,setRepos] = useState([]);

  useEffect(()=>{

    fetch("https://api.github.com/users/avinashkumarjava/repos")
      .then(res => res.json())
      .then(data => {

        if (!Array.isArray(data)) {
          console.error("GitHub API error:", data);
          return;
        }

        const sorted = data
          .sort((a,b) => b.stargazers_count - a.stargazers_count)
          .slice(0,6);

        setRepos(sorted);

      })
      .catch(err => console.error("Fetch error:", err));

  },[]);

  return(

    <section id="github">

      <h2 style={{fontSize:"32px", marginBottom:"30px"}}>
        GitHub Projects
      </h2>

      <div className="grid">

        {repos.length === 0 && (
          <p>No repositories found.</p>
        )}

        {repos.map((repo)=>(
          <div className="card" key={repo.id}>

            <h3>{repo.name}</h3>

            <p style={{margin:"10px 0"}}>
              {repo.description || "No description available"}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color:"#C9A227",
                textDecoration:"none"
              }}
            >
              View Repository →
            </a>

          </div>
        ))}

      </div>

    </section>

  )
}