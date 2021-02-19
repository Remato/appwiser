import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// ----- PAGES ----- //
import SignIn from '../pages/SignIn';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#130525' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>

);

export default AuthRoutes;
