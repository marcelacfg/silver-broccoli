import { useEffect, useState } from "react";
import Card from "./Card";
import Form from "./Form";
import { ThemeContext, themes } from "./Theme";

function AppContextAPI() {
  const [token, setToken] = useState();

  useEffect(() => {
    setTimeout(() => {
      setToken("asdf215sdf46fs");
    }, 4000);
  }, [setToken]);

  return (
    <ThemeContext.Provider value={{ ...themes.primary, token }}>
      <div>
        <p>Teste</p>
        <Form></Form>
        <Card></Card>
      </div>
    </ThemeContext.Provider>
  );
}

export default AppContextAPI;
