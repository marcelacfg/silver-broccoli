import React from "react";
import Button from "./Button";

const showEvent = (e) => {
  console.log("Evento Clicado");
  console.log(e);
};
const buttonA = <button onClick={showEvent}>Historico dos clientes</button>;
const buttonB = <button onClick={showEvent}>Cadastrar Cliente</button>;

const handleChange = (e) => {
  const { value } = e.target;
  console.log(value);
};

const listCustomer = [
  {
    id: 1,
    nome: "Marcela",
    skills: ["React", "Node"],
  },
  {
    id: 2,
    nome: "Maria",
    skills: ["Android", "Java"],
  },
  {
    id: 3,
    nome: "Jose",
    skills: ["Angular", "Node"],
  },
  {
    id: 4,
    nome: "Joao",
    skills: ["Python", "Delphi"],
  },
];

const hasCustumer = true;
const App = () => {
  const handleClick = (e, id) => {
    alert(`ID do cliente: ${id}`);
  };

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>
          {customer.nome}{" "}
          <button onClick={(e) => handleClick(e, customer.id)}>
            Deletar Cliente
          </button>
        </li>
        {customer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: "30px" }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    );
  };

  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar historico dos clientes
      <br />
      {buttonA}
    </div>
  );

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar cliente <br /> {buttonB}
    </div>
  );

  const showCutomer = () => {
    if (!hasCustumer) return null;

    return (
      <div>
        <h1>Nome do cliente: Marcela Gomes</h1>
      </div>
    );
  };

  return (
    <div>
      <p>Marcela Gomes</p>
      <p>Teste webpack + Babel</p>
      <p>Teste hot reload</p>
      <Button />
      {hasCustumer ? renderShowHistory : renderAddCustomer}
      <div>{showCutomer()}</div>
      <div>
        <ul>{listCustomer.map(renderCustomers)}</ul>
      </div>
      <input onChange={handleChange} />
    </div>
  );
};

export default App;
