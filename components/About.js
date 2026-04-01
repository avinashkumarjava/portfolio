export default function About(){

  return(

    <section id="about">

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-text">

          <h2>About Me</h2>

          <p>
            I am a <b>Software Engineering Team Lead</b> with over
            <b> 4+ years of experience</b> building scalable fintech
            infrastructure and high-performance backend platforms.
            My core expertise is designing secure and reliable
            financial systems using modern backend technologies.
          </p>

          <p>
            I specialize in <b>payment gateway architecture</b>,
            distributed microservices, and real-time transaction
            systems using <b>Java 21, Spring Boot, Apache Kafka,
            MongoDB, and Redis</b>.
          </p>

          <p>
            Currently I lead engineering initiatives focused on
            building <b>high-scale payment infrastructure</b>
            capable of processing thousands of transactions per
            second while maintaining reliability, security,
            and high availability.
          </p>

          <p>
            My work includes payment gateway platforms, payout
            processing systems, banking API integrations,
            event-driven transaction architectures, and
            fintech platforms used by thousands of users.
          </p>

        </div>

        {/* RIGHT SIDE STATS */}

        <div className="about-stats">

          <div className="stat-card">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>10K TPS</h3>
            <p>Payment Systems</p>
          </div>

          <div className="stat-card">
            <h3>1M+</h3>
            <p>Users Supported</p>
          </div>

          <div className="stat-card">
            <h3>1000+</h3>
            <p>APIs Built</p>
          </div>

        </div>

      </div>

    </section>

  )
}