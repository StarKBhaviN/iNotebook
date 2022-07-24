import Notes from "./Notes";
import React from "react";

export const Home = (props) => {
  const {showAlert} = props
  return (
    <div style={{backgroundColor : "#36454F", minHeight : "41.1rem"}}>     
      <Notes showAlert={showAlert} />
    </div>
  );
}

export default Home;
