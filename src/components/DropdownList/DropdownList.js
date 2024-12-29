import "./DropdownList.css"

function DropdownList (props) {
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={evento => props.toAdd(evento.target.value)} required={props.required} value={props.value}>
                {props.placeholder ? 
                    <option disabled value="">{props.placeholder}</option>
                : <></>}
                {props.itens.map(item => <option key={item} value={item} >{item}</option>)}
            </select> 
        </div>
    )
}

export default DropdownList;