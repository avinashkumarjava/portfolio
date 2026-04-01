"use client";

export default function Contact(){

  return(

    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* ABOUT */}

        <div className="footer-col">

          <h3 className="footer-title">
            Avinash Kushwaha
          </h3>

          <p>
            Software Engineering Team Lead specializing in scalable fintech
            infrastructure, payment gateway systems and distributed backend
            platforms using Java, Spring Boot, Kafka and MongoDB.
          </p>

        </div>


        {/* CONTACT */}

        <div className="footer-col">

          <h3 className="footer-title">
            Contact
          </h3>

          <div className="contact-item">
            <span className="contact-icon">📧</span>

            <a href="mailto:avinashkushwaha06@gmail.com">
              avinashkushwaha06@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>

            <a href="tel:+919993729698">
              +91 9993729698
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Dehradun, Uttarakhand, India</span>
          </div>

        </div>


        {/* PROFESSIONAL LINKS */}

        <div className="footer-col">

          <h3 className="footer-title">
            Professional Links
          </h3>

          <ul className="footer-links">

            <li>
              <a
                href="https://www.linkedin.com/in/avinashsoftwaredevloper/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/avinashkumarjava/Java"
                target="_blank"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://leetcode.com/u/avinashkushwaha06/"
                target="_blank"
              >
                LeetCode
              </a>
            </li>

            <li>
              <a
                href="https://www.hackerrank.com/profile/avinashkushwaha3"
                target="_blank"
              >
                HackerRank
              </a>
            </li>

          </ul>

        </div>


        {/* NAVIGATION */}

        <div className="footer-col">

          <h3 className="footer-title">
            Navigation
          </h3>

          <ul className="footer-links">

            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>

          </ul>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Avinash Kushwaha — All Rights Reserved
        </p>

      </div>

    </footer>

  );
}