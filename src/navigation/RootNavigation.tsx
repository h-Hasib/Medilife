import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import StartScreen from 'src/screens/start/StartScreen';
import DoctorNavigation from './DoctorNavigation';
import PatientNavigation from './PatientNavigation';
import DemoComponents from 'src/screens/test/DemoComponents';

export type RootStackParamList = {
  StartScreen: undefined;
  DoctorNavigation: undefined;
  PatientNavigation: undefined;
  DemoComponents: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartScreen">
    <RootStack.Screen name="StartScreen" component={StartScreen} />
    <RootStack.Screen name="PatientNavigation" component={PatientNavigation} />
    <RootStack.Screen name="DoctorNavigation" component={DoctorNavigation} />
    <RootStack.Screen name="DemoComponents" component={DemoComponents} />
  </RootStack.Navigator>
);

export default RootNavigation;
