import { useEffect } from "react";
import ItemAbaKnowFor from "../../aba-item-know-for";
import useCelebrity from "../../hooks/celebrity-hooks";
import ItemAba from "../aba-item";
import * as S from "./styled";

export default function Abas() {
  const { celebrityState, getCelebrityKnownFor } = useCelebrity();

  useEffect(() => {
    if (celebrityState.hasCelebrity) {
      console.log("Pesquisando Know For ", celebrityState.celebrity.name);
      getCelebrityKnownFor(celebrityState.celebrity.name);
      console.log(celebrityState);
    }
  }, [celebrityState.hasCelebrity]);

  return (
    <>
      {celebrityState.hasCelebrity ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Curiosidades</S.WrapperTab>
            <S.WrapperTab>Filmes</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <div>
              {/* {celebrityState.celebrity.facts.map((item) => ( */}
              {celebrityState.facts.map((item) => (
                <ItemAba
                  key={item.name}
                  name={item.name}
                  fullName={item.value}
                />
              ))}
            </div>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <div>
              {celebrityState.knownfor.map((item) => (
                <ItemAbaKnowFor
                  key={item.title ? item.title : item.name}
                  title={item.title ? item.title : item.name}
                  original_language={item.original_language}
                  media_type={item.media_type}
                  release_date={
                    item.release_date ? item.release_date : item.first_air_date
                  }
                  vote_average={item.vote_average}
                />
              ))}
            </div>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
}
