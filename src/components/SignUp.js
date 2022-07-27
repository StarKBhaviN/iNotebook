import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
  const host = "http://localhost:5000"

  const [name, setName] = useState({ name: "" })
  const [gender, setGender] = useState({ gender: "" })
  const [email, setEmail] = useState({ email: "" })
  const [contact, setContact] = useState({ contact: "" })
  const [bio, setBio] = useState({ bio: "" })
  const [password, setPassword] = useState({ password: "" })
  const [cpassword, setCpassword] = useState({ cpassword: "" })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name.name, gender: gender.gender, email: email.email, bio: bio.bio, contact: contact.contact, password: password.password })
    });
    const json = await response.json()
    console.log(json)

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Successfully Created User", "success")
      navigate("/login")
    }
    else {
      props.showAlert("Invalid Detials", "danger")
    }
  }

  const onNameChange = (e) => {
    setName({ name: e.target.value })
  }
  const onGenderChange = (e) => {
    setGender({ gender: e.target.value })
  }
  const mailChanged = (e) => {
    setEmail({ email: e.target.value })
  }
  const contactChanged = (e) => {
    setContact({ contact: e.target.value })
  }
  const bioChanged = (e) => {
    setBio({ bio: e.target.value })
  }
  const passwordChanged = (e) => {
    setPassword({ password: e.target.value })
  }
  const onCpassChange = (e) => {
    setCpassword({ password: e.target.value })
  }

  return (
    <>
      <section className="vh-110" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input autoComplete="off" type="text" id="name" onChange={onNameChange} name="name" value={name.name} className="form-control shadow-none" style={{border : "1px solid silver"}} />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div >


                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <div className="form-outline flex-fill mb-0 mx-2">
                              <input autoComplete="off" type="radio" id="genderMale" onChange={onGenderChange} value={"Male"} name="gender" /> Male
                            </div>
                            <div className="form-outline flex-fill mb-0 mx-2" >
                              <input autoComplete="off" type="radio" id="genderFemale" onChange={onGenderChange} value={"Female"} name="gender" /> Female
                            </div>
                          </div>

                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input autoComplete="off" type="email" id="email" onChange={mailChanged} name="email" value={email.email} className="form-control shadow-none" style={{border : "1px solid silver"}} minLength="5" required />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input autoComplete="off" type="text" id="contact" onChange={contactChanged} value={contact.contact} name="contact" className="form-control shadow-none" style={{border : "1px solid silver"}} minLength="10" maxLength="10" required />
                            <label className="form-label" htmlFor="form3Example3c">Contact No.</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input autoComplete="off" type="text" id="bio" onChange={bioChanged} value={bio.bio} name="bio" className="form-control shadow-none" style={{border : "1px solid silver"}} minLength={10} maxLength={115} required/>
                            <label className="form-label" htmlFor="form3Example3c">Your Bio</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input autoComplete="off" type="password" id="password" onChange={passwordChanged} name="password" value={password.password} className="form-control shadow-none" style={{border : "1px solid silver"}} minLength="5" required />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input autoComplete="off" type="password" id="cpassword" onChange={onCpassChange} name="cpassword" value={cpassword.cpassword} className="form-control shadow-none" style={{border : "1px solid silver"}} minLength="5" required />
                            <label className="form-label" htmlFor="form3Example4cd">Confirm password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button id='Button' type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample " />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp