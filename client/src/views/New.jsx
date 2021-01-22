import { navigate, Link  } from "@reach/router"
import axios from "axios"
import { useState } from "react"
import Form from "../components/form"

const New = (props) => {
    const [errors, setErrors] = useState([])
    props.setname("Add Piret")
    const [namee,setnamee] = useState('')
    const [numbere,setnumbere] = useState('')
    const [positione,setpositione] = useState('')
    const [imge,setimge] = useState('')
    const [phrasee,setphrasee] = useState('')

    const [formInputs, setFormInputs] = useState({
        name: "",
        img: "",
        number:1,
        phrase:"",
        position:"Captin",
        leg:"Yes",
        eye:"Yes",
        hand:"Yes",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/api/exam/", formInputs)
            .then((res) => {
                console.log(res.data)
                navigate("/pirates")
            })
            .catch((err) => {
                console.log(err.response)
                const errorResponse = err.response.data.errors // Get the errors from err.response.data
                const errorArr = [] // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            })
        }

    const handleChange = (e) => {
        console.log("e.target.name: ", e.target.name)
        console.log("e.target.value: ", e.target.value)
        console.log("e.target.checked: ", e.target.checked)
        console.log("e.target.id: ", e.target.id)
        if (e.target.id === "check"){
            if (e.target.checked === false) {
                setFormInputs({
                ...formInputs,
                [e.target.name]: "No",
            })
            } else {
                setFormInputs({
                    ...formInputs,
                [e.target.name]: "Yes",
            })
        }
        }
        else if(e.target.name === "name"){
            if(e.target.value.length < 1) {
                setnamee("name is required!");
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
            }
            else{
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
                setnamee("")
            }
        }
        else if(e.target.name === "img"){
            if(e.target.value.length < 1) {
                setimge("img is required!");
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
            }
            else{
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
                setimge("")
            }
        }
        else if(e.target.name === "number"){
            if(e.target.value.length < 1) {
                setnumbere("number is required!");
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
            }
            else{
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
                setnumbere("")
            }
        }
        else if(e.target.name === "position"){
            if(e.target.value.length < 1) {
                setpositione("position is required!");
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
            }
            else{
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
                setpositione("")
            }
        }
        else if(e.target.name === "phrase"){
            if(e.target.value.length < 1) {
                setphrasee("phrase is required!");
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
            }
            else{
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.value,
                    })
                setphrasee("")
            }
        }
        else{
            setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value,
            })

        }
    }

    return (
        <div>
        {/* <h1>Add Piret</h1> */}
        <Link to={'/pirates'}>Crew Board</Link>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        {
                    namee ?
                    <p style={{color:'red'}}>{ namee }</p> :
                    ''
        }    
        {
                    imge ?
                    <p style={{color:'red'}}>{ imge }</p> :
                    ''
        }     
                {
                    numbere ?
                    <p style={{color:'red'}}>{ numbere }</p> :
                    ''
        }     
                        {
                    positione ?
                    <p style={{color:'red'}}>{ positione }</p> :
                    ''
        } 
                        {
                    phrasee ?
                    <p style={{color:'red'}}>{ phrasee }</p> :
                    ''
        } 
        <Form
            formInputs={formInputs}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonText={"Add Piret"}
        />
        </div>
    )
}
export default New