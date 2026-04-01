export default function Architecture(){

  const systems = [
    {
      title:"Payment Gateway",
      desc:"High-scale payment gateway capable of processing 10K TPS with secure transaction processing."
    },
    {
      title:"Payout Processing",
      desc:"Distributed payout system for merchant settlements and bank transfers."
    },
    {
      title:"Kafka Event Streaming",
      desc:"Event-driven architecture handling real-time transaction workflows."
    },
    {
      title:"Microservices Platform",
      desc:"Spring Boot microservices with scalable distributed architecture."
    }
  ]

  return(
    <section id="architecture">

      <h2 style={{fontSize:"32px", marginBottom:"30px"}}>
        Fintech Architecture
      </h2>

      <div className="grid">

        {systems.map((sys,i)=>(
          <div className="card" key={i}>

            <h3 style={{marginBottom:"10px"}}>
              {sys.title}
            </h3>

            <p style={{lineHeight:"1.6"}}>
              {sys.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}