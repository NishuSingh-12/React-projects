import styled from "styled-components";
const ScoreContainer = () => {
  return (
    <ScoreContainerStyle>
      <div className="content">
        <h1>0</h1>
        <p>Total Score</p>
      </div>
    </ScoreContainerStyle>
  );
};

export default ScoreContainer;
const ScoreContainerStyle = styled.div`
  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 96px;
      position: relative;
    }
    p {
      position: absolute;
      top: 110px;
    }
  }
`;
