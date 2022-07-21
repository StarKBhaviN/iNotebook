import React from 'react'

function Alert(props) {

  const capitalize = (word) => {
    if(word==="danger"){
      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    // Style={"width: 50%;margin-left: 400px; margin-top: 17.5px"}
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{width : "50%" , display : "flex", alignItems : "center", justifyContent : "center" , marginBottom : "-78px" , marginTop : "20px" , marginLeft : "400px"}} role="alert">
            <div className="center text-center">
              <b>{capitalize(props.alert.type)}</b> : {props.alert.msg}
            </div>
        </div>
      
  )
}

export default Alert
