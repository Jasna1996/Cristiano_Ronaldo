import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaTrophy } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";

function Careers() {
  return (
    <div className=" container">
        <h1 className="text-center my-5">Achievements</h1>
      <div className="row">
        <div className="col-md-4">
          <Card className="outline-none">
          <Card.Title className="text-center"><FaTrophy className="achievementIcons" /></Card.Title>
            <Card.Body className="text-center">
              <Card.Title >5 Ballon d'Or</Card.Title>
              <Card.Text >
              Awarded for his outstanding football career.
              </Card.Text>
           </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <Card.Title className="text-center "><FaStar className="starIcon" /></Card.Title>
          
            <Card.Body className="text-center">
              <Card.Title>UEFA Champions League</Card.Title>
              <Card.Text >
              Won 5 UEFA Champions League titles.
              </Card.Text>
              </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card >
          <Card.Title className="text-center "><FaCrown className="crownIcon" /></Card.Title>
          <Card.Body className="text-center">
              <Card.Title >European Champion</Card.Title>
              <Card.Text >
              Led Portugal to victory in Euro 2016.
              </Card.Text>
                </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Careers;
