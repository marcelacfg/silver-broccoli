import styled from "styled-components";
import { string, func } from "prop-types";
import { Button } from "../button";

export const Quotes = ({ Quote, Speaker, onUpdate }) => {
  return (
    <Wrapper>
      <QuoteComp role="p">{Quote}</QuoteComp>
      <SpeakerComp role="p">- {Speaker}</SpeakerComp>
      <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
  );
};

Quotes.protoTypes = {
  quote: string,
  speaker: string,
  onUpdate: func,
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-direction: center;
`;

const QuoteComp = styled.p`
  font-size: 2em;
  flex: 1;
  margin: 0;
  color: #fff;
`;

const SpeakerComp = styled(QuoteComp)`
  text-align: right;
  margin-bottom: 50px;
`;
