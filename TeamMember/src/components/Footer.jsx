import React from "react";

const Footer = () => {
  let today = new Date();
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5>Team Member Allocation App - {today.getFullYear()}</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;