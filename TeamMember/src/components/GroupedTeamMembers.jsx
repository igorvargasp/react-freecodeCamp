import React, { useState } from "react";

const GroupedTeamMembers = ({ selectedTeam, employees }) => {
  const groupTeamMembers = () => {
    let teams = [];
    let teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    var teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapse: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    var teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapse: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);
    let teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    var teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapse: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);
    let teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    var teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapse: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  };

  const handleTeamClick = (event) => {
    let transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapse: !groupedData.collapse }
        : groupedData
    );
    setGroupEmployees(transformedGroupData);
  };

  const [groupedEmployees, setGroupEmployees] = useState(groupTeamMembers);

  return (
    <header className="container">
      {groupedEmployees.map((item, index) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapse === true ? "collapse" : ""}
            >
              {item.members.map((member) => (
                <div className="mt-2">
                  <h5 className="card-title mt-2">
                    <span className="text-dark">
                      Full Name: {member.fullName}
                    </span>
                  </h5>
                  <p style={{ textAlign: "center" }}>
                    Designation: {member.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </header>
  );
};

export default GroupedTeamMembers;
