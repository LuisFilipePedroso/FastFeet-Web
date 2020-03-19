import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 16px;
        color: #dddddd;
      }
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
