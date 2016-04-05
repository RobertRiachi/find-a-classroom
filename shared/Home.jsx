import React from 'react';
import ReactDom from "react-dom";
import RoomNumbers from "./RoomNumbers";

function Home() {
    const hstyle ={
        color: "#00BCD4"
        };
  return (
  <div>
    <center>
    <h1 style={hstyle}>Marianopolis Empty Classroom Finder!</h1>
    <RoomNumbers />
    </center>
  </div>

  );
}

export default Home;
