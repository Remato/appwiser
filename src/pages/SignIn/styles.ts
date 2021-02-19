import styled from 'styled-components/native';

import { Surface } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export const BackgroundImage = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 386px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#693999', '#130525'],
  useAngle: true,
  angle: 180,
  angleCenter: { x: 0.5, y: 0.5 },
})`
  flex: 1;

  justify-content: center;
  align-items: center;
  padding: 0 32px;
`;

export const SignInBox = styled(Surface).attrs({})`
  width: 100%;
  height: 357px;

  border-radius: 8px;
  background-color: #faf5ff;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #383E71;
  font-family: 'Montserrat-Regular';
  text-align: center;

  margin: 24px 0 16px;
`;

export const InfoText = styled.Text`
  font-size: 12px;
  color: #989FDB;
  font-family: 'Montserrat-SemiBold';
  text-align: center;

  margin-bottom: 20px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 47px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'Montserrat-Regular';
  text-align: center;
`;
