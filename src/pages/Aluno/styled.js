import styled from 'styled-components';

export const Paragrafo = styled.p``;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    padding: 0 10px;
    border-radius: 8px;
    width: 100%;
    margin-top: 10px;
  }

  button {
    height: 40px;
    border-radius: 8px;
    font-size: 17px;
  }
`;
