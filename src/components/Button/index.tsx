import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, GradientButton, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <GradientButton>
      <ButtonText>{children}</ButtonText>
    </GradientButton>
  </Container>
);

export default Button;
