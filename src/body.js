import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function body({ userData }) {
  // function createChronicDiseaseList(diseases){
  //     return <div>
  //          <List type="unstyled">
  //   <li>Lorem ipsum dolor sit amet</li>
  //   <li>Consectetur adipiscing elit</li>
  //   <li>Integer molestie lorem at massa</li>
  //   <li>Facilisis in pretium nisl aliquet</li>
  //   <li>Nulla volutpat aliquam velit
  //     <ul>
  //       <li>Phasellus iaculis neque</li>
  //       <li>Purus sodales ultricies</li>
  //       <li>Vestibulum laoreet porttitor sem</li>
  //       <li>Ac tristique libero volutpat at</li>
  //     </ul>
  //   </li>
  //   <li>Faucibus porta lacus fringilla vel</li>
  //   <li>Aenean sit amet erat nunc</li>
  //   <li>Eget porttitor lorem</li>
  // </List>
  //     </div>
  // }
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
                  <h4>{userData?.name}</h4>
                  <p className="text-secondary mb-1">{userData?.bloodGroup}</p>
                  <p className="text-muted font-size-sm">
                    {userData?.currentAddress}
                  </p>
                  <button className="btn btn-primary">Emergency Contact</button>
                  <button className="btn btn-outline-primary">
                    Emergency Hospital
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header">Emergency Contacts</div>
            <ul className="list-group list-group-flush">
              {userData?.emergencyContacts?.map((contact, index) => (
                <li key={index} className="list-group-item">
                  <h6 className="mb-0">
                    {contact.name} --
                    {contact.relationship}
                  </h6>
                  <small className="text-secondary">{contact.address}</small>
                  <p className="text-info">{contact.phoneNumber}</p>
                </li>
              ))}
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
                <h3>Emergency Notes:</h3>
                {userData?.emergencyNotes?.map((note, index) => (
                  <div key={note.title}>
                    <CardTitle tag="h5">
                      {index + 1} {note.title}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {note.description}
                    </CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-danger">
                      {note.whatToDoNow}
                    </CardSubtitle>
                  </div>
                ))}

                <Button>Contact</Button>
              </CardBody>
            </Card>
          </div>
          {/* end of emergecny notes */}
          {/* Chronic Diseases List-Dynamic */}
          {/* db.map(createChronicDiseaseList) */}
          {/* End of chronic diseases list */}
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div className="card ">
                <div className="card-header">Chronic Diseases</div>
                <ul className="list-group list-group-flush">
                  {userData?.chronicDiseases?.map((allergy, index) => (
                    <li key={index} className="list-group-item">
                      {allergy.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card-header">Serious Injuries</div>
              <div className="card">
                <div className="card-body">
                  {userData?.seriousInjuries?.map((allergy, index) => (
                    <div key={index}>
                      <small>{allergy.timeOfInjury}</small>
                      <br />
                      <small className="text-info">
                        {allergy.typeOfInjuries}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card-header">Vaccinations</div>
              <div className="card">
                <div className="card-body">
                  {userData?.vaccinations?.map((allergy, index) => (
                    <div key={index}>
                      <small>{allergy.timeTaken}</small>
                      <br />
                      <small className="text-info">
                        {allergy.nameOfVaccination}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-header">Allergies</div>
                <div className="card-body">
                  {userData?.allergies?.map((allergy) => (
                    <div key={allergy.name}>
                      <small>{allergy.name}</small>
                    </div>
                  ))}
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
