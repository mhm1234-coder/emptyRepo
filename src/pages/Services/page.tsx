import React from "react";

const Services = () => {
  const services = [
    {
      title: "Fast Delivery",
      desc: "We deliver medicines within 24 hours at your doorstep.",
    },
    {
      title: "24/7 Support",
      desc: "Our pharmacy experts are available anytime for help.",
    },
    {
      title: "Quality Assurance",
      desc: "All medicines are 100% verified and authentic.",
    },
    {
      title: "Online Prescription",
      desc: "Upload your prescription and get medicines easily.",
    },
  ];

  return (
    <div className="services-clean">

      <h1>Our Services</h1>
      <p>We provide trusted healthcare services for your well-being</p>

      {services.map((service, index) => (
        <div className="card" key={index}>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}

    </div>
  );
};

export default Services;