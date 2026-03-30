import styled from "styled-components";
import ScoreContainer from "./ScoreContainer";
import SelectNumber from "./SelectNumber";
const PlayGame = () => {
  return (
    <PlayGameContainer className="container">
      <ScoreContainer />
      <SelectNumber />
    </PlayGameContainer>
  );
};

export default PlayGame;
const PlayGameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
