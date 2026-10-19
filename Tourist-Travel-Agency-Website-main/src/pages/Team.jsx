import React from 'react'

const guides = [
  { name: 'Rohan Bhat', role: 'Senior Travel Curator', image: 'assets/img/team-1.jpg' },
  { name: 'Kavya Menon', role: 'India & Asia Specialist', image: 'assets/img/team-2.jpg' },
  { name: 'Aditya Kulkarni', role: 'Experience Designer', image: 'assets/img/team-3.jpg' },
  { name: 'Ishita Rao', role: 'Travel Operations Lead', image: 'assets/img/team-4.jpg' },
]

export default function Team() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Our Guides</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Travel Guides</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
            <h1 className="mb-5">Meet Our Guides</h1>
          </div>
          <div className="row g-4">
            {guides.map((guide, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={guide.name}>
                <div className="team-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={guide.image} alt={guide.name} />
                  </div>
                  <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                    <a className="btn btn-square mx-1" href="/contact" aria-label={`${guide.name} Facebook`}><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href="/contact" aria-label={`${guide.name} Twitter`}><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href="/contact" aria-label={`${guide.name} Instagram`}><i className="fab fa-instagram" /></a>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">{guide.name}</h5>
                    <small>{guide.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
