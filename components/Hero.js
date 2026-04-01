"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero(){

  const titles = [
    "Software Engineering Team Lead",
    "Java & Spring Boot Architect",
    "Fintech Backend Engineer",
    "Payment Systems Specialist"
  ];

  const [index,setIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prev)=> (prev + 1) % titles.length);
    },2500);

    return ()=> clearInterval(interval);
  },[]);

  return(

    <section id="home" className="hero">

      {/* LEFT */}

      <div className="hero-left">

        <p className="hero-tag">
          FINTECH BACKEND ENGINEER
        </p>

        <h1 className="hero-name">
          Avinash Kushwaha
        </h1>

        <h2 className="hero-role">
          {titles[index]}
        </h2>

        <p className="hero-desc">
          I design and build scalable fintech infrastructure including
          payment gateways, payout platforms and distributed microservices.
          Specialized in high-performance backend systems using
          <b> Java 21, Spring Boot, Apache Kafka, MongoDB and microservices architecture.</b>
        </p>

        {/* TECH STACK */}

        <div className="hero-tech">

          <span className="tech">Java</span>
          <span className="tech">Spring Boot</span>
          <span className="tech">Kafka</span>
          <span className="tech">MongoDB</span>
          <span className="tech">Microservices</span>

        </div>

        {/* STATS */}

        <div className="hero-stats">

          <div>
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3>10K TPS</h3>
            <p>Payment Systems</p>
          </div>

          <div>
            <h3>1M+</h3>
            <p>Users Supported</p>
          </div>

        </div>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <a href="#projects" className="hero-btn-primary">
            View Projects
          </a>

          <a
           href="/avinash-kushwaha-resume.pdf"
           className="hero-btn-outline"
          >
            Download Resume
          </a>

        </div>

      </div>


      {/* PROFILE */}

      <div className="hero-image">

        <Image
          src="/profile.jpeg"
          alt="Avinash Kushwaha"
          width={320}
          height={320}
          priority
        />

      </div>

    </section>

  )
}