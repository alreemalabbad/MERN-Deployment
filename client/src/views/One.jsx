import { useState, useEffect } from 'react'
import { Link } from "@reach/router"
import axios from "axios"
import './style.css'


const One = ({id, setname}) => {
    const [piret, setpiret] = useState({})
    const [status,setstatus] = useState("No")
    setname(piret.name)
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/exam/" + id)
        .then((res) => {
            setpiret(res.data)
        })
        .catch((err) => console.log(err))
    }, [id])
    return (
        <>
        <Link to={'/pirates'}><p>Crew Board</p></Link>
        <div className="left">
        <p><img src={piret.img} alt={piret.name} style={{width: '400px', height: '250px'}}/></p>
        <h1 style={{textAlign:'center'}}>"{piret.phrase}"</h1>
        </div>
        <div className="right">
        <h1 style={{textAlign:'center'}}>About:</h1>
        <h5>Position: {piret.position}</h5>
        <h5>Treasurs: {piret.number}</h5>
        <h5 >Peg Leg: {piret.leg}</h5>
        <h5>Eye Patch: {piret.eye}</h5>
        <h5>Hook Hand: {piret.hand}</h5>
        </div>
        </>
    )
}
export default One;