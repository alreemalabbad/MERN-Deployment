import axios from "axios"
import { Link } from '@reach/router'
// import './style.css'

const Piret = (props) => {
    const handleClick = (e) => {
        axios
            .delete("http://localhost:8000/api/exam/" + props.piret._id)
            .then((res) => {
            props.setisold(!props.isold)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
        <div className="piret">
            <h5 key={props.piret._id} >{props.piret.name}</h5>
            <p><img src={props.piret.img} alt={props.piret.name} style={{width: '250px'}}/></p>
            <p>
                <Link to={'/pirate/'+props.piret._id}><button style={{backgroundColor: "darkblue", color:'white'}}>view piret</button></Link>
                <button style={{backgroundColor: "red", color:'white'}} onClick={handleClick}>Walk the Piret</button>
            </p>
        </div>
        </>
    )
}

export default Piret