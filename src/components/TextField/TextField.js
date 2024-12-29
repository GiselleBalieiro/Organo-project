import "./TextField.css"

function TextField (props) {
    const typing = (evento) => {
        props.toAdd(evento.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.necessary} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField 