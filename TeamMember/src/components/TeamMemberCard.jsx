import maleImage from "../assets/maleProfile.jpg";
import FemaleImge from "../assets/femaleProfile.jpg";
import React from "react";

const TeamMemberCard = ({
  employees,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return (
    <div
      className={
        employees.teamName === selectedTeam ? "standout card m-2" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      id={employees.id}
      onClick={handleEmployeeCardClick}
    >
      <img
        src={`${employees.gender === "male" ? maleImage : FemaleImge}`}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employees.fullName}</h5>
        <p className="card-text">Designation: {employees.designation}</p>
      </div>
    </div>
  );
};
export default TeamMemberCard;
