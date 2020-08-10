import styled from 'styled-components';

export const AlunosContainer = styled.div`
  margin-top: 20px;

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50px;
  }
`;

export const AlunoContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 280px 80px 80px;
  align-items: center;
  justify-items: center;
  padding: 5px 0;
`;
