import { ThemeContext } from "./Theme";
import { useContext } from "react";

function Form() {
  const context = useContext(ThemeContext);

  const renderForm = (
    <form>
      <label>Nome:</label>
      <input></input>
      <label>Telefone:</label>
      <input></input>
      <label>Email:</label>
      <input></input>
      <label>Idade:</label>
      <input></input>
    </form>
  );

  const renderNotLogged = <h1>É necessario o login</h1>;

  return <div>{!context.token ? renderNotLogged : renderForm}</div>;
}

export default Form;
