import "./Form.css"
import TextField from "../TextField/TextField"
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";
import { useState } from "react";

function Form(props) {
    const [name, setName] = useState ('');
    const [position, setPosition] = useState ('');
    const [image, setImage] = useState (''); 
    const [team, setTeam] = useState ('');

    const saving = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            position,
            image,
            team
        })

        setName("");
        setPosition("");
        setImage("");
        setTeam("");
    }



    return (
        <section className="form">
            <form onSubmit={saving}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            
            <TextField 
            necessary={true} 
            label="Nome" 
            placeholder="Digite seu nome"
            value={name}
            toAdd={value => setName (value)}/>

            <TextField 
            necessary={true} 
            label="Cargo" 
            placeholder="Escreva seu cargo"
            value={position}
            toAdd={value => setPosition(value)}/>

            <TextField 
            necessary={true} 
            label="Imagem" 
            placeholder="Informe o endereço da imagem"
            value={image}
            toAdd={value => setImage(value)}/>

            <DropdownList 
            necessary={true} 
            label="Time" 
            itens={props.teams} 
            value={team}
            toAdd={value => setTeam(value)}
            placeholder="Informe um time"/>
            <Button>Criar card</Button>
            </form> 
        </section>
    )
}

export default Form;