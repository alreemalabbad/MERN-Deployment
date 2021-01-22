import { Link } from '@reach/router'
import axios from 'axios'
import React, { useEffect, useState } from "react"
import List from '../components/list'
import './style.css'


const Main = (props) => {
    const [pirets, setpirets]= useState([]);
    const [isold,setisold]=useState(false);
    props.setname("Pirate Crew")

    useEffect(() => {
        axios.get('http://localhost:8000/api/exam')
        .then((res) => {
            setpirets(res.data)
        })
        .catch(err => console.log(err))
        }, [isold])


    return (
        <>
        <div className="overflow">
            {/* <h1>Pirate Crew</h1> */}
        <Link to={'/pirate/new'}><button style={{backgroundColor: "blue", color:'white'}}>Add New Piret</button></Link>
        <List pirets={pirets} setisold={setisold} isold={isold} />
        </div>
        </>
    )
}
export default Main;
