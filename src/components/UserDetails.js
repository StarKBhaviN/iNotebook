import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Userdetails = () => {
  const [users, setUsers] = useState([])
  const userName = async () => {

    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    const userArr = Object.values(json)
    setUsers([userArr[1]]) // aava bija banave to output malse profile mate
    // name = setUsers([userArr[1]])
    // console.log(userArr)
  }

  useEffect(() => {
    userName()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        users.map(user => (
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{background : "none", border : "0px"}}>
            <i className="fa-solid fa-user" style={{ marginRight: "4px" ,marginTop : "4px" }}>

            </i>
            {users}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{marginTop : "10px"}}>
                <li><Link className="dropdown-item" to="/Profile" key={user[0]}>My Profile</Link></li>
                <li><Link className="dropdown-item" to="#" key={user[1]}>Dark Mode</Link></li>
              </ul>
          </div>
        ))
      }
    </>
  )
}
export default Userdetails