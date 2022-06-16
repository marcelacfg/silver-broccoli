import { useState } from "react";
import useCelebrity from "../../hooks/celebrity-hooks";
import * as S from "./styled";
export default function Header() {
  const { getCelebrity } = useCelebrity();

  const [celebrityForSearch, setCelebrityForSearch] = useState();
  const submitGetCelebrity = () => {
    console.log("Botao Clicado");
    if (!celebrityForSearch) return;
    return getCelebrity(celebrityForSearch);
  };
  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          onChange={(event) => setCelebrityForSearch(event.target.value)}
          placeholder="Digite o nome do ator ou  atriz..."
        />
        <button onClick={submitGetCelebrity}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
}
