import React from "react";

export const Render = ({ id, firstName, email, image }) => {
  const DivContClick = () => {
    alert(`User_id: ${id}`);
  };

  return (
    <div>
      <div className="DivCont" onClick={DivContClick}>
        <div>
          <div className="Neem">
            <img src={image} alt={firstName} width={"200px"} height={"190px"} />
          </div>
          <p>First Name: {firstName}</p>
          <p className="email">Email: {email}</p>
        </div>
      </div>
    </div>
  );
};
