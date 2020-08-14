import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 30px;
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

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    padding-left: 2px;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
`;
