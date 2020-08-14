import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

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
  grid-template-columns: 80px 80px 280px 60px 60px;
  align-items: center;
  padding: 5px 0;
`;

export const NovoAluno = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px 0;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  color: white;
  background-color: ${colors.primaryColor};
  transition: all 300ms;
  font-weight: 700;

  &:hover {
    filter: brightness(75%);
  }
`;
