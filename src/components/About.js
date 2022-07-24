import React from 'react'

function About() {

  return (
    <div style={{backgroundColor : "#36454F", height : "41.1rem"}}>
      <div className="container">
      <div className="head" style={{border : "2px solid red", padding : "0px 80px 0px 80px"}}>
        <h2 className='heading text-center' style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60px" }}>About iNotebook</h2>
        <div className="text" style={{border : "2px solid blue", display : "flex"}}>
          <img src={require("../Images/about.jpg")} alt="nothing to show" style={{height : "300px", width : "280px", opacity : "0.5"}} />
          <p className='font-face-gm' style={{marginLeft : "8px", marginTop : "10px"}}>
          iNotebook is a very simple web application which can easily take your notes on cloud and store it in your named account very ceurely and safe. Its free to use guys, you all should try it once. Seriously you will Love it and start using it for your cloud notes.   
          </p>
        </div>
      </div>
      <div className="content" style={{border : "2px solid pink", height : "150px"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cum error dicta enim neque, nemo in. Voluptatibus accusantium est inventore totam, incidunt vero consequatur non doloribus cum nihil cupiditate repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cum error dicta enim neque, nemo in. Voluptatibus accusantium est inventore totam, incidunt vero consequatur non doloribus cum nihil cupiditate repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cum error dicta enim neque, nemo in. Voluptatibus accusantium est inventore totam, incidunt vero consequatur non doloribus cum nihil cupiditate repudiandae.
      </div>
      </div>
    </div>
  )
}

export default About