import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.theme === "light" ? "#2F3A8F" : "#FEECE9")};
  background: ${(props) => (props.theme === "light" ? "#FEECE9" : "#2F3A8F")};
  border: 1px solid pink;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 3px 3px 3px #ff9b8e;
  }
  padding: 10px;
`;

export const Div = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  background: grey;
  justify-content: center;
  & > p {
    color: green;
    cursor: pointer;
  }
  & > p:hover {
    color: blue;
  }
`;
