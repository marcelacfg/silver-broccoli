import styled from "styled-components";

export const WrapperItemKnownFor = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  //width: 150px;
  min-height: 75px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;

    span {
      font-weight: normal;
    }
  }
`;
