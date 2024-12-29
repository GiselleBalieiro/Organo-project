import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  const teams = [
    {
      name: "Programação",
      colorPrimary:"#57C278",
      colorSecundary: "#D9F7E9"

    },
    {
      name: "Front-End",
      colorPrimary:"#82CFFA",
      colorSecundary: "#E8F8FF"

    },
    {
      name: "Data Science",
      colorPrimary:"#A6D157",
      colorSecundary: "#F0F8E2"

    },
    {
      name: "Devops",
      colorPrimary:"#E06B69",
      colorSecundary: "#FDE7E8"

    },
    {
      name: "UX e Design",
      colorPrimary:"#DB6EBF",
      colorSecundary: "#FAE9F5"

    },
    {
      name: "Mobile",
      colorPrimary:"#FFBA05",
      colorSecundary: "#FFF5D9"

    },
    {
      name: "Inovação e Gestão",
      colorPrimary:"#FF8A29",
      colorSecundary: "#FFEEDF"

    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores ([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado (colaborador)}/>

      {teams.map(team => <Team 
        name={team.name} 
        key={team.name} 
        colorPrimary={team.colorPrimary} 
        colorSecundary={team.colorSecundary}
        colaboradores={colaboradores.filter(colaborador => colaborador.team === team.name)}/>)}
        <Footer />
    </div>
  );
}
export default App;
