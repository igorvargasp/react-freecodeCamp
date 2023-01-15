import React from "react";
import TeamMemberCard from "./TeamMemberCard";
const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
      employees={employee}
    />
  ));
};
export default TeamMembers;
