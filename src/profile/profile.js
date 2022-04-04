import React from "react";

function Profile(props) {
  const styleObject = { color: "navy" };
  return (
    <div>
      <h1>Personal Profile</h1>
      <img src={props.img} alt="" />
      <hr />
      <div style={styleObject}>
        <h2>Full Name: {props.name}</h2>
      </div>
      <h3>Profession: {props.profession}</h3>
      <div style={{ maxWidth: "40%", margin: "auto" }}>
        <p>Bio: {props.bio}</p>
      </div>
    </div>
  );
}

export default Profile;
