import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState({email : ""})
    const [password, setPassword] = useState({password : ""})

    let navigate  = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email : email.email, password : password.password})
          });
          const json = await response.json()
          
          if(json.success){
            localStorage.setItem('token', json.authtoken);
            
            props.showAlert("Logged In Successfully", "success")
            navigate("/Home")
          }
          else{
            props.showAlert("Invalid Credentials", "danger")
          }
    }

    const mailChanged = (e) => {
        setEmail({email : e.target.value})
    }
    const passwordChanged = (e) => {
        setPassword({password : e.target.value})
    }
    return (
        <div className="body" style={{height : "10%"}}>
            <img src={require("../Images/BG2.jpg")} style={{height : "657.5px", width : "100%", zIndex : "-1", opacity : "95%"}} alt="" />

            <div className="container" style={{position : "fixed",top : "160px", left : "120px", display : "flex", alignItems : "center", justifyContent : "center"}}>
                <div className="box" style={{border : "1px solid silver", boxShadow : "0px 0px 4px white", padding : "60px 30px 60px 30px", borderRadius : "12px", backgroundColor : "#12171a"}}>
                {/* <img src="../Images/logincard.jpg" alt="nothing here" style={{opacity : "10%"}}/> */}
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <input type="email" autoComplete="off" placeholder="Enter Your Registered E-mail" style={{width: "400px",color : "white", borderBottom : "1px solid white", backgroundColor: "transparent", borderTop : "none", borderLeft : "none", borderRight : "none", borderRadius : "0"}} className="form-control" id="exampleInputEmail1" onChange={mailChanged} value={email.email} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" autoComplete="off" placeholder="Your Password" className="form-control" style={{width: "400px",color : "white", borderBottom : "1px solid white", backgroundColor: "transparent", borderTop : "none", borderLeft : "none", borderRight : "none", borderRadius : "0", marginTop : "30px"}} id="exampleInputPassword1" onChange={passwordChanged} value={password.password}  />
                    </div>
                    <button type="submit" style={{height : "40px", width : "400px", backgroundColor : "cyan", marginTop : "20px"}} className="btn" >LOGIN</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login