import React, { useState } from "react";
import "./room.css";

const Room = () => {
  const [isLit, setIsLit] = useState(false);
  const [age, setAge] = useState(72);

  return (
    <div className={`room ${isLit ? "light" : "dark"}`}>
      <h1>Light is {isLit ? "Light" : "Dark"}</h1>
      <button onClick={() => setIsLit(true)}>Light ON</button>
      <button onClick={() => setIsLit(false)}>Light OFF</button>

      <h1>Temperature is {age}</h1>
      <button onClick={() => setAge(age + 1)}>Increase Temp</button>
      <button onClick={() => setAge(age - 1)}>Decrease Temp</button>
    </div>
  );
};

export default Room;
