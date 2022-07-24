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
            <div style={{backgroundColor : "#36454F", minHeight : "41.1rem"}}>
                <div className='container d-flex justify-content-center align-items-center' style={{ height: "90px" }}>
                    <h1 className='text-center' style={{ color: "white" }}>My Profile</h1>
                </div>
                <div className="container">
                    <div className="container" style={{ backgroundColor: "#36494F", border: "1px solid #192841", borderRadius: "20px", boxShadow: "0px 0px 12px #888888", height: "510px", width: "500px" }}>
                        <img className='position-absolute' src={("../Images/Testig.jpg")} alt='Nothing here' style={{ border: "2px solid white", borderRadius: "20px", height: "220px", width: "440px", top: "160px", left: "548px" }}></img>
                        <label className='position-absolute' style={{ top: "410px", left: "548px", color: "white" }}>Name : {users[1]}</label>
                        <label className='position-absolute' key={users[0]} style={{ top: "440px", left: "548px", color: "white" }}>Gender : {users[2]}</label>
                        <label className='position-absolute' style={{ top: "470px", left: "548px", color: "white" }}>E-Mail : {users[3]}</label>
                        <label className='position-absolute' style={{ top: "500px", left: "548px", color: "white" }}>Ph. No : {users[4]}</label>
                        <label className='position-absolute' style={{ top: "530px", left: "548px", color: "white", width: "460px" }}>Bio : {users[5]}</label>
                        <label className='position-absolute' style={{ top: "590px", left: "548px", color: "white" }}>No of Notes : {notes.length}</label>
                        <label className='position-absolute' style={{ top: "620px", left: "675px", color: "white" }}>Member since {orgDate}</label>
                    </div>
                </div>
                {/* <label htmlFor="" style={{ color: "red" }}>{JSON.stringify(pros)} </label> */}
            </div>
        </>
    )
}

export default Profile