export default function Projects(){

  const projects=[
    {
      name:"High-Scale Payment Gateway",
      desc:"High-performance payment gateway capable of processing 10,000 TPS using Java 21, Spring Boot, Kafka and MongoDB.",
      tech:["Java","Spring Boot","Kafka","MongoDB"]
    },
    {
      name:"Payout Processing Platform",
      desc:"Scalable payout platform for merchant settlements and bank transfers with asynchronous processing.",
      tech:["Spring Boot","Kafka","Redis"]
    },
    {
      name:"Kafka Event-Driven Transaction System",
      desc:"Event-driven architecture managing real-time payment transaction states with high reliability.",
      tech:["Kafka","Microservices"]
    },
    {
      name:"Banking API Integration Platform",
      desc:"Secure integration layer for multiple banking APIs with authentication and resilient communication.",
      tech:["REST API","Spring Security"]
    },
    {
      name:"Distributed Microservices Platform",
      desc:"Microservices architecture supporting large-scale fintech workloads with optimized performance.",
      tech:["Docker","Spring Boot"]
    },
    {
      name:"Merchant Payment Management System",
      desc:"Backend services for merchant transaction tracking, reporting and reconciliation.",
      tech:["MongoDB","Java"]
    }
  ]

  return(

    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map((p,i)=>(

          <div className="project-card" key={i}>

            <h3>{p.name}</h3>

            <p>{p.desc}</p>

            <div className="project-tech">

              {p.tech.map((t,index)=>(
                <span key={index} className="tech">{t}</span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}