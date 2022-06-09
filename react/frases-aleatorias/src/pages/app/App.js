import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import alienimg from "../../images/alien.png";
import { Quotes } from "../../components";
import { getQuote } from "../../services";
import marvelSound from "../../sounds/marvel.mp3";

const audio = new Audio(marvelSound);

export function App() {
  let isMounted = useRef(true);
  const [quoteState, setQuoteState] = useState({
    Quote: "loading quote...",
    Speaker: "loading speaker...",
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted) {
      //audio.play();
      console.log("teste", quote);

      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />;
      <AlienImg src={alienimg} alt="Alien imagem"></AlienImg>
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlienImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

export default App;
