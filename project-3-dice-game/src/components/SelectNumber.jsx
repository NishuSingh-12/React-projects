import styled from "styled-components";
const SelectNumber = () => {
  const numArr = [1, 2, 3, 4, 5, 6];
  return (
    <SelectNumberContainer>
      <div className="box-container">
        {numArr.map((value, i) => (
          <Box key={i}>{value}</Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectNumberContainer>
  );
};

export default SelectNumber;
const SelectNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .box-container {
    display: flex;
    gap: 16px;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    text-align: end;
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border: 2px solid gray;
  font-size: 18px;
  font-weight: bold;
  transition: 0.4s all ease-in;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    border: 2px solid transparent;
    transition: 0.3s all ease-in;
  }
`;
