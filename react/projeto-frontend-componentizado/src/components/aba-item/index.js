import * as S from "./styled";

export default function ItemAba({ name, fullName }) {
  return (
    <S.Wrapper>
      <span>{name}</span>
      <h4>{fullName}</h4>
    </S.Wrapper>
  );
}
