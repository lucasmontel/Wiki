import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 2rem;
    color: #f4f4f5;
  }

  p {
    font-size: 1rem;
    color: #d4d4d460;
    margin-bottom: 1.25rem;
  }

  .buttons {
    display: flex;
    gap: 2rem;

    font-size: .75rem;
    font-weight: 700;
  }

  a {
    width: 6.25rem;
    padding: .65rem;
    border-radius: .5rem;

    text-align: center;
    color: #f4f4f5;
    text-decoration: none;

    background-color: #18181b;
    transition: all;
    
    &:hover {
      background-color: #3f3f46;
    }
  }

  .remove {
    background-color: #ff0000;

    &:hover {
      background-color:#dc2626;
    }
  }

  hr {
    color: #fafafa60;
    margin: 1.25rem 0;
  }
`;
