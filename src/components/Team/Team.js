import Collaborator from "../Collaborator/Collaborator";
import "./Team.css"

function Team (props) {
    const css = { backgroundColor: props.colorSecundary }
    const border = { borderColor: props.colorPrimary }

    return (
        props.colaboradores.length > 0 && <section className="team" style={css}> 
            <h3 style={border}>{props.name}</h3>
            <div className="collaborators">
                {props.colaboradores.map(colaborador => <Collaborator backgroundColor={props.colorPrimary} key={colaborador.name} name={colaborador.name} position={colaborador.position} image={colaborador.image}/>)}
            </div>
        </section>
    )
}

export default Team;