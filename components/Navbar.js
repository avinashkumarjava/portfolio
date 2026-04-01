"use client";

import { useState } from "react";

export default function Navbar() {

  const [open,setOpen] = useState(false);

  const navItems = [
    { name:"Home", link:"#home" },
    { name:"About", link:"#about" },
    { name:"Skills", link:"#skills" },
    { name:"Experience", link:"#experience" },
    { name:"Projects", link:"#projects" },
    { name:"Contact", link:"#contact" }
  ];

  const scrollToSection = (e,id)=>{
    e.preventDefault();

    const element = document.querySelector(id);

    if(element){
      element.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    }

    setOpen(false);
  };

  return (

    <nav className="navbar">

      <div className="nav-container">

        {/* LOGO */}

        <div className="logo">

          <div className="logo-ring">
            <div className="logo-circle">
              AK
            </div>
          </div>

          <span className="logo-name">
            Avinash Kushwaha
          </span>

        </div>


        {/* DESKTOP MENU */}

        <div className="nav-links">

          {navItems.map((item,i)=>(
            <a
              key={i}
              href={item.link}
              onClick={(e)=>scrollToSection(e,item.link)}
            >
              {item.name}
            </a>
          ))}

        </div>


        {/* RESUME */}

        <a
          href="/avinash-kushwaha-resume.pdf"
          download
          className="resume-btn"
        >
          Resume
        </a>


        {/* MOBILE BUTTON */}

        <div
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={()=>setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>


      {/* MOBILE MENU */}

      <div className={`mobile-menu ${open ? "show" : ""}`}>

        {navItems.map((item,i)=>(
          <a
            key={i}
            href={item.link}
            onClick={(e)=>scrollToSection(e,item.link)}
          >
            {item.name}
          </a>
        ))}

      </div>

    </nav>

  );
}