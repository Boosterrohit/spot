import React from "react";
import Card from "react-bootstrap/Card";
import "../../Asset/Style/Hero.css";
const FeedBack = () => {
  return (
    <section className="overflow-hidden">
      <div className="container compan">
        <h1 className="text-center fw-bold py-4 com">COMPANY FEEDBACK</h1>
        <div className="row px-3 d-flex justify-content-center">
          <div className="col-sm-6 col-lg-4 mt-4">
            <Card className="company c1 ">
              <Card.Body>
                <div className="d-flex">
                  <Card.Title>Rachel</Card.Title>
                  <div className="px-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>

                <Card.Text>
                  "I recently used Fantastical Joinery for a custom wardrobe
                  installation and I couldn't be happier with the results. The
                  team of designers and craftsmen were professional,
                  knowledgeable, and dedicated to delivering the best possible
                  outcome. They worked closely with me to understand my specific
                  needs and preferences, and they created a custom wardrobe
                  solution that perfectly fit my space and exceeded my
                  expectations."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4 mt-4">
            <Card className="company c2">
              <Card.Body>
                <div className="d-flex">
                  <Card.Title>Oliver</Card.Title>
                  <div className="px-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>

                <Card.Text>
                  "I am so glad I chose Fantastical for my wardrobe installation
                  needs. From start to finish, the entire process was smooth and
                  enjoyable. The team was very helpful in guiding me through the
                  design phase, offering suggestions and recommendations that
                  helped me to create the perfect wardrobe for my space. The
                  quality of the materials and craftsmanship is excellent, and I
                  can tell that a lot of care and attention went into the
                  creation of my custom wardrobe."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4 mt-4">
            <Card className="company c3">
              <Card.Body>
                <div className="d-flex">
                  <Card.Title>John</Card.Title>
                  <div className="px-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>

                <Card.Text>
                  " The team of designers and craftsmen were knowledgeable,
                  friendly, and always willing to go the extra mile to ensure I
                  was completely satisfied with the final product. The wardrobe
                  they created for me is both functional and visually appealing,
                  and it has added a great deal of storage and style to my
                  room."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
