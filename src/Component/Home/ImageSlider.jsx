import React from "react";
import Card from "react-bootstrap/Card";
import a1 from "../../Asset/Image/a1.png";
import "../../Asset/Style/Hero.css";
const ImageSlider = () => {
  return (
    <section className="py-5 mt-5 mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-6 col-md-12 col-lg-4 mt-4">
            <Card className="card1">
              <Card.Img variant="top" src={a1} className="zoom" />
              <Card.Body>
                <Card.Title>Spot On Flooting</Card.Title>
                <Card.Text>
                  "Revamp your space with Spot-On Flooring! 🏡✨ Expert flooring
                  solutions that redefine elegance and style. Contact us today
                  for a FREE consultation. #SpotOnFlooring #HomeUpgrade"
                </Card.Text>
                <button className="filter">Contact Us</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-md-12 col-lg-8 mt-4">
            <div>
              <h1 className="hi1 px-3 text-uppercase mobile-the">
                Welcome to Spot on Flooring pty ltd
              </h1>
              <p className="lining">
                At Fantastical Joinery, we understand the importance of a
                functional and organized wardrobe. That's why we offer top-notch
                wardrobe service to help you get the most out of your storage
                space. Our team of experts will work with you to design and
                install a custom wardrobe solution that fits your specific needs
                and style preferences.
                <span className="d-block py-4">
                  We believe that your wardrobe should not only be functional,
                  but also reflect your personal style and taste. That's why we
                  offer a wide range of design options, materials, and
                  accessories to choose from. Whether you're looking for a
                  simple and sleek wardrobe or a more elaborate and luxurious
                  one, our team will work with you to make your vision a
                  reality.Our commitment to quality, customer satisfaction, and
                  attention to detail sets us apart from the competition. We are
                  dedicated to ensuring that your new wardrobe meets and exceeds
                  your expectations.
                </span>
                <span className="d-block">
                  Please don't hesitate to contact us for more information about
                  our wardrobe service. We look forward to working with you!
                </span>
              </p>
              <button className="filter mt-3 fw-bold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
