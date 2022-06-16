import useCelebrity from "../../hooks/celebrity-hooks";
import * as S from "./styled";

export default function Profile() {
  const { celebrityState } = useCelebrity();

  return (
    <S.Wrapper>
      <S.WrapperImage
        alt="Icone"
        src={`data:image/png;base64,${celebrityState.celebrity.avatar}`}
      />
      {/* <S.WrapperImage
        alt="Icone"
        src="https://avatars.githubusercontent.com/u/39008435?v=4"
      /> */}
      <S.WrapperInfoUser>
        <div>
          <h1>{celebrityState.celebrity.name}</h1>
          <S.WrapperUsername>
            <h4>Category:</h4>
            <span>{celebrityState.celebrity.category}</span>
          </S.WrapperUsername>
          <S.WrapperUsername>
            <h4>Birthday:</h4>
            <span>{celebrityState.celebrity.birthday}</span>
          </S.WrapperUsername>
          <S.WrapperUsername>
            <h4>Birthplace:</h4>
            <span>{celebrityState.celebrity.birthplace}</span>
          </S.WrapperUsername>
          <S.WrapperUsername>
            <h4>Age:</h4>
            <span>{celebrityState.celebrity.age}</span>
          </S.WrapperUsername>
          <S.WrapperUsername>
            <h4>Birthsign:</h4>
            <span>{celebrityState.celebrity.birthsign}</span>
          </S.WrapperUsername>
        </div>
        {/* <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>3</span>
          </div>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount> */}
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}
