import * as S from "./styled";

export default function ItemAbaKnowFor({
  title,
  original_language,
  media_type,
  vote_average,
  release_date,
}) {
  return (
    <S.WrapperItemKnownFor>
      <h2>{title}</h2>
      <h4>
        Language: <span> {original_language}</span>
      </h4>
      <h4>
        Tipo: <span>{media_type}</span>
      </h4>
      <h4>
        Nota: <span>{vote_average}</span>
      </h4>
      <h4>
        Lançamento: <span>{release_date}</span>
      </h4>
    </S.WrapperItemKnownFor>
  );
}
