
const Form = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
    <p>
        Pirate Name:
        <input
        type="text"
        name="name"
        value={props.formInputs.name}
        onChange={props.handleChange}
        />
    </p>
    <p>
        Image Url:
        <input
        type="text"
        name="img"
        value={props.formInputs.img}
        onChange={props.handleChange}
        />
    </p>
    <p>
        # of Treasure Chests:
        <input
        type="number"
        name="number"
        value={props.formInputs.number}
        onChange={props.handleChange}
        />
    </p>
    <p>
        Pirate catch Captin:
        <input
        type="text"
        name="phrase"
        value={props.formInputs.phrase}
        onChange={props.handleChange}
        />
    </p>
    <p>
        Crew position:
        <select value={props.formInputs.position} name="position" onChange={props.handleChange}>
                <option value="Captin">Captin</option>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">films</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
            </select>
    </p>
    <p>
    Peg Leg
    <input type="checkbox" id ="check" value={props.formInputs.leg} name="leg" onChange={props.handleChange} defaultChecked="true" />
    </p>
    <p>
    Eye Patch
    <input type="checkbox" id ="check" name="eye" value={props.formInputs.eye} onChange={props.handleChange} defaultChecked="true"/>
    </p>
    <p>
    Hook Hand
    <input type="checkbox" id ="check" name="hand" value={props.formInputs.hand} onChange={props.handleChange} defaultChecked="true"/>
    </p>
    <button type="submit" style={{backgroundColor: "darkblue", color:'white'}}>{props.buttonText}</button>
    
    </form>
)
}
export default Form