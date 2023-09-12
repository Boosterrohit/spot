import React from "react";
import "../../Asset/Style/Hero.css";
import Card from "react-bootstrap/Card";
import c1 from "../../Asset/Image/c1.jpg";
import c2 from "../../Asset/Image/c2.jpg";
import c3 from "../../Asset/Image/c3.jpg";
import c4 from "../../Asset/Image/c4.jpg";
import c5 from "../../Asset/Image/c5.jpg";
import c6 from "../../Asset/Image/c6.jpg";
const OurService = () => {
  return (
    <section className="py-5 service">
      <div className="container">
        <h1 className="text-center text-uppercase fw-bold">
          Our Ser<span className="serv">vic</span>es
        </h1>
        <div className="row pt-4">
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={c1} />
              <Card.Body>
                <Card.Title>Custom Wardrobe Design and Installation</Card.Title>
                <Card.Text>
                  Fantastical specializes in designing and installing custom
                  wardrobes that meet the specific needs and requirements of our
                  clients. Experienced designers work closely with clients to
                  understand their storage needs, preferences, and budget, and
                  create a unique wardrobe solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={c2} />
              <Card.Body>
                <Card.Title>Wardrobe Repair and Maintenance</Card.Title>
                <Card.Text>
                  Fantastical Business is a leading provider of wardrobe repair
                  and maintenance services for homeowners and businesses alike.
                  Their experienced technicians are skilled in repairing all
                  types of wardrobes, from built-in to walk-in and sliding door
                  wardrobes.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={c3} />
              <Card.Body>
                <Card.Title>Kitchen cabinetry</Card.Title>
                <Card.Text>
                  Whether you are looking for a modern, contemporary design or a
                  traditional style, Fantastical has the expertise and
                  experience to bring your kitchen vision to life. They offer a
                  wide range of materials, finishes, and hardware options to
                  match any style and taste.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={c4} />
              <Card.Body>
                <Card.Title>Joinery</Card.Title>
                <Card.Text>
                  Fantastical is a full-service joinery company that specializes
                  in designing, manufacturing, and installing custom wooden
                  fixtures and furniture for homes and businesses. Our
                  experienced team of designers and craftsmen are dedicated to
                  delivering high-quality and bespoke joinery solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={c5} />
              <Card.Body>
                <Card.Title>Built-in entertainment units</Card.Title>
                <Card.Text>
                  Fantastical provides a complete solution for built-in
                  entertainment units, from design to installation. Our team of
                  experts works closely with clients to understand their
                  specific requirements and preferences, and they use the latest
                  tools and technology to create a customized entertainment
                  unit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={c6} />
              <Card.Body>
                <Card.Title>Bathroom cabinetry</Card.Title>
                <Card.Text>
                  Fantastical offers a complete solution for custom bathroom
                  cabinetry, from design to installation. Our team of experts
                  works closely with clients to understand their specific needs
                  and preferences, and they use the latest tools and technology
                  to create a customized cabinetry solution that perfectly fits
                  the space.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <p className="text-center mt-5 fs-4 kk">
          Call Now for your Free In-Home Consultation.
          <a href="tel: 61 452 393 213" className="ser-para">
            Call us at +61 452 393 213
          </a>
        </p>
      </div>
    </section>
  );
};

export default OurService;
