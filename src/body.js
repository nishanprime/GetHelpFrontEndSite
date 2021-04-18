import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { List } from "reactstrap";

function body() {
  function createChronicDiseaseList(diseases) {
    return (
      <div>
        <List type="unstyled">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </List>
      </div>
    );
  }
  return (
    <div>
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>UserName</h4>
                  <p className="text-secondary mb-1">PhoneNumber</p>
                  <p className="text-muted font-size-sm">FullAddress</p>
                  <button className="btn btn-primary">Emergency Contact</button>
                  <button className="btn btn-outline-primary">
                    Emergency Hospital
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-globe mr-2 icon-inline"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={2} y1={12} x2={22} y2={12} />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Website
                </h6>
                <span className="text-secondary">https://bootdey.com</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github mr-2 icon-inline"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Github
                </h6>
                <span className="text-secondary">bootdey</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter mr-2 icon-inline text-info"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Twitter
                </h6>
                <span className="text-secondary">@bootdey</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram mr-2 icon-inline text-danger"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </h6>
                <span className="text-secondary">bootdey</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook mr-2 icon-inline text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </h6>
                <span className="text-secondary">bootdey</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          {/* Emergency Notes */}
          <div>
            <Card>
              <CardImg
                top
                width="100%"
                style={{ height: "40px", width: "40px", marginLeft: "20px" }}
                src="https://icons-for-free.com/iconfiles/png/512/emergency+light+police+icon-1320190828028396427.png"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Emergency Notes</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Put what to do noext info from emergency here
                </CardSubtitle>
                <CardText>Pur emergency notes here</CardText>
                <Button>Contact</Button>
              </CardBody>
            </Card>
          </div>
          {/* end of emergecny notes */}
          {/* Chronic Diseases List-Dynamic */}
          Datas.map(createChronicDiseaseList)
          {/* End of chronic diseases list */}
          <div className="row gutters-sm">
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3">
                    <i className="material-icons text-info mr-2">assignment</i>
                    Project Status
                  </h6>
                  <small>Web Design</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>Website Markup</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow={72}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>One Page</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "89%" }}
                      aria-valuenow={89}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>Mobile Template</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>Backend API</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "66%" }}
                      aria-valuenow={66}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3">
                    <i className="material-icons text-info mr-2">assignment</i>
                    Project Status
                  </h6>
                  <small>Web Design</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>Website Markup</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow={72}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>One Page</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "89%" }}
                      aria-valuenow={89}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>Mobile Template</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small>Backend API</small>
                  <div className="progress mb-3" style={{ height: 5 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "66%" }}
                      aria-valuenow={66}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default body;
