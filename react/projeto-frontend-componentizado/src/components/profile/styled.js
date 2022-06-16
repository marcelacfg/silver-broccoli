import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  font-size: 16px;
  h4 {
    margin-right: 8px;
    width: 80px;
    align-items: center;
  }

  span {
    margin-left: 10px;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3px;
  height: 200px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 150px;
  margin: 8px;
`;
