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
        <div className="container" style={{marginTop : "100px" , position : "fixed"}}>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={mailChanged} value={email.email} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={passwordChanged} value={password.password}  />
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>

        </div>
    )
}

export default Login