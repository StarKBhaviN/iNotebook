import React from 'react'

function About() {

  return (
    <div style={{ backgroundColor: "#36454F", height: "100vh", color : "white" }}>
      <div className="container">
        <div className="head" style={{ border: "0px solid red", padding: "0px 80px 0px 80px" }}>
          <h2 className='heading text-center' style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60px", color : "red" }}>About iNotebook</h2>

          <div className="text" style={{ display: "flex" }}>
            <img src={require("../Images/about.jpg")} alt="nothing to show" style={{ height: "300px", width: "280px", opacity: "0.7", display : "flex", alignItems : "flex-end" }} />
            <p className='font-face-gm' style={{ marginTop: "10px", fontSize: "24px", marginLeft: "16px" }}>
              iNotebook is a very simple web application which can easily take your notes on cloud and store it in your named account very ceurely and safe. Its free to use guys, you all should try it once. Seriously you will Love it and start using it for your cloud notes.
            </p>
          </div>

          <div className="container d-flex" style={{ border: "0px solid pink", height: "150px", marginTop: "12px", padding : "0"}}>
            <img src={require("../Images/about.jpg")} alt="nothing to show" style={{ height: "250px", width: "280px", opacity: "0.7", alignItems : "end"}} />
            <h2 style={{marginLeft : "12px"}}>Key Features :-</h2>
            <ol style={{position: "relative",left: "-210px",top: "50px"}}>
              <li>Create your Notes</li>
              <li>Update Notes</li>
              <li>Save your Notes on cloud</li>
              <li>Word counter</li>
              <li>Secure</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About