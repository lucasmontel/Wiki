import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #f4f4f5;
  border-radius: 1rem;

  height: 4rem;
  width: 80%;

  margin: 1.25rem;

  input {
    width: 90%;
    height: 4rem;
    padding: 0 1.25rem;

    background: transparent;
    border: 0;
    color: #f4f4f5;
    font-size: 1.25rem;

    &:focus {
      outline: none;
    }
  }
`;
