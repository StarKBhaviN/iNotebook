import Notes from "./Notes";
import React from "react";

export const Home = (props) => {
  const {showAlert} = props
  return (
    <div style={{position : "absolute", top:"0" ,backgroundColor : "#36454F", minHeight : "100vh", width : "100%", border : "0px solid blue"}}>     
      <div className="alert" style={{border : "0px solid green", position : "relative", top : "75px", height : "60px"}}>
        
      </div>
      <Notes showAlert={showAlert} />
    </div>
  );
}

export default Home;
