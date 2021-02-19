import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';

export const GradientButton = styled(LinearGradient).attrs({
  colors: ['#383E71', '#9D25B0'],
  useAngle: true,
  angle: 267.79,
  angleCenter: { x: 0.5, y: 0.5 },
})`
  width: 168px;
  height: 48px;


  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
`;

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;

  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-family: 'Montserrat-SemiBold';

  padding: 14px 49px 14px 50px;
`;
