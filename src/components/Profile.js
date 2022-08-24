import React, { useContext,useState, useEffect } from 'react'
import NoteContext from "../Context/notes/NoteContext";

const Profile = () => {
    const [users, setUsers] = useState([])

    const context = useContext(NoteContext);
    const {notes} = context

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
        setUsers(userArr)
        // console.log(userArr)

    }
    useEffect(() => {
        userName()
        // eslint-disable-next-line
    }, [])


    var date = users[6]
    var conv = date?.toString() || 'XX-XX-XXXX'
    var converted = conv.split("T")[0]
    var orgDate = converted.split("-").reverse().join("-");

    return (
        <>
            {/* <div style={{backgroundColor : "#36454F", display : "flex", alignItems : "center", justifyContent : "center", position : "absolute", height : "100vh", top : "0", width : "100%"}}>
                <div className='container' style={{ height: "90px" }}>
                    <h1 className='text-center' style={{ color: "white" }}>My Profile</h1>
                </div>
                <div className="container">
                    <div className="container" style={{ backgroundColor: "#36494F", border: "1px solid #192841", borderRadius: "20px", boxShadow: "0px 0px 12px #888888", minHeight: "100%", width: "500px" }}>
                        <img src={("../Images/Testig.jpg")} alt='Nothing here' style={{ border: "2px solid white", borderRadius: "20px", height: "220px", width: "440px", top: "160px", left: "548px" }}></img>
                        <label>Name : {users[1]}</label>
                        <label>Gender : {users[2]}</label>
                        <label>E-Mail : {users[3]}</label>
                        <label>Ph. No : {users[4]}</label>
                        <label>Bio : {users[5]}</label>
                        <label>No of Notes : {notes.length}</label>
                        <label>Member since {orgDate}</label>
                    </div>
                </div>
                {/* <label htmlFor="" style={{ color: "red" }}>{JSON.stringify(pros)} </label> */}
            {/* </div> */} 

            <div style={{backgroundColor : "#36454F", height : "100vh", position : "absolute", top : "0px",width:"100%"}}>
                <h1 style={{position:"absolute",top:"60px",color : "white", display : 'flex', alignItems : "center", justifyContent : "center", width:"100%"}}>Your Profile</h1>
                <div className="container-body" style={{border : "0px solid red", height : "100vh", width : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                    <div className="card" style={{border : "2px solid red",backgroundColor: "#36494F", height : "70%", width : "30%", marginTop : "100px"}}>
                        <img src={("../Images/Testig.jpg")} alt="Nothing here" style={{ border: "2px solid white", borderRadius: "10px", height: "40%", width: "96%", marginLeft : "7px"}}/>
                        <table border="0" height="240px" width="95%" cellPadding="-10px" cellspacing="0px" style={{marginLeft : "10px", color:"white"}}>
                            <tr>
                                <td width="94px">Name</td>
                                <td>: {users[1]}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>: {users[2]}</td>
                            </tr>
                            <tr>
                                <td>E-Mail</td>
                                <td>: {users[3]}</td>
                            </tr>
                            <tr>
                                <td>Ph. No</td>
                                <td>: {users[4]}</td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign : "middle"}}>Bio</td>
                                <td>: {users[5]}</td>
                            </tr>
                            <tr>
                                <td>No of Notes </td>
                                <td>: {notes.length}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile