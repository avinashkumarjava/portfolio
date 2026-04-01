export default function Experience(){

  const jobs = [

    {
      company:"SecurePay",
      role:"Software Engineering Team Lead",
      period:"Jan 2026 – Present",
      desc:"Leading development of a high-scale payment gateway platform capable of processing 10,000 TPS. Managing engineering teams and designing distributed fintech infrastructure using Java 21, Spring Boot and Kafka."
    },

    {
      company:"SecurePay",
      role:"Senior Software Developer",
      period:"Apr 2025 – Dec 2025",
      desc:"Developed backend services for payout platforms and payment gateway infrastructure with Kafka event-driven architecture."
    },

    {
      company:"Safexpay",
      role:"Software Developer",
      period:"Oct 2022 – Mar 2025",
      desc:"Built fintech backend services and banking API integrations while supporting production payment systems."
    },

    {
      company:"Safexpay",
      role:"Trainee Software Developer / Intern",
      period:"Apr 2022 – Sept 2022",
      desc:"Started career in fintech engineering assisting with backend development and banking integrations."
    }

  ];

  return(

    <section id="experience">

      <h2>Professional Experience</h2>

      <div className="timeline">

        {jobs.map((job,i)=>(

          <div className="timeline-item" key={i}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>{job.role}</h3>

              <p className="company">{job.company}</p>

              <p className="period">{job.period}</p>

              <p>{job.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}