import styled, { css } from 'styled-components/native';

interface TextInputProps {
  isErrored: boolean;
  isFocused: boolean;
  error: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 48px;
  padding: 0 27px;
  margin-bottom: 16px;
`;

export const TitleTextInput = styled.Text`
  margin: 0px 0px 8px 38px;

  color: #383e71;
  font-size: 10px;
  font-family: 'Montserrat-Regular';
`;

export const IconView = styled.View``;

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  align-items: center;

  color: #383e71;
  font-size: 10px;
  font-family: 'Montserrat-Regular';

  padding: 0px 52px 0px 17px;

  border: 1px solid #989fdb;

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid #989fdb;
    `}

  ${props =>
    props.error &&
    css`
      border: 1px solid #ff377f;
    `}

  border-radius: 8px;
`;
