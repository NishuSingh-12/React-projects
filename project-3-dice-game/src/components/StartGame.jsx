import styled from "styled-components";

const StartGame = ({ startGame }) => {
  return (
    <StartGameContainer>
      <div>
        <img src="./images/dices.png" alt="Dices image" />
      </div>
      <div className="content-container">
        <h1>DICE GAME</h1>
        <Button onClick={startGame}>Play Now</Button>
      </div>
    </StartGameContainer>
  );
};

export default StartGame;

const StartGameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: end;

    h1 {
      font-size: 96px;
    }
  }
`;
const Button = styled.button`
  font-size: 16px;
  padding: 8px 32px;
  border: 1px solid transparent;
  background-color: black;
  color: white;
  border-radius: 4px;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
