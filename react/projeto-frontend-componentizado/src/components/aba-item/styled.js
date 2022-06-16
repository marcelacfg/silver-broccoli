import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  // width: 150px;
  //min-height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
  }
  h4 {
    margin-left: 8px;
    font-size: 14px;
  }
`;
