import "./Collaborator.css"

function Collaborator ({name , image, position, backgroundColor}) {
    return (
        <div className="collaborator">
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={image}></img>
            </div>

            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Collaborator;