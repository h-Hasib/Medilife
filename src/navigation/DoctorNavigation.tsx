import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CalendarIcon, UserPlusIcon, UserRoundIcon } from 'src/assets/svg';
import HomeIcon from 'src/assets/svg/HomeIcon';
import ListAppointmentsScreen from 'src/screens/doctor/appointment/list-appointments/ListAppointmentsScreen';
import AddAccountScreen from 'src/screens/doctor/auth/add-account/AddAccountScreen';
import LoginScreen from 'src/screens/doctor/auth/login/LoginScreen';
import OtpScreen from 'src/screens/doctor/auth/otp/OtpScreen';
import RegistrationSuccessScreen from 'src/screens/doctor/auth/registration-success/RegistrationSuccessScreen';
import RegistrationScreen from 'src/screens/doctor/auth/registration/RegistrationScreen';
import MyChambersScreen from 'src/screens/doctor/chamber/my-chambers/MyChambersScreen';
import HomeScreen from 'src/screens/doctor/home/HomeScreen';
import ProfileScreen from 'src/screens/doctor/my-profile/profile/ProfileScreen';
import NotificationScreen from 'src/screens/doctor/notification/NotificationScreen';
import AddPatientScreen from 'src/screens/doctor/patient/add-patient/AddPatientScreen';
import PatientAccountsScreen from 'src/screens/doctor/patient/patient-accounts/PatientAccountsScreen';
import PatientAppointmentDetailsScreen from 'src/screens/doctor/patient/patient-appointment-details/PatientAppointmentDetailsScreen';
import PatientHistoryScreen from 'src/screens/doctor/patient/patient-history/PatientHistoryScreen';
import TodaysPatientsScreen from 'src/screens/doctor/patient/todays-patients/TodaysPatientsScreen';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const DoctorRootStack = createStackNavigator<DoctorRootStackParamList>();

const DoctorNavigation: React.FC = () => {
  return (
    <DoctorRootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="DoctorAuthStack">
      <DoctorRootStack.Screen name="DoctorAuthStack" component={DoctorAuthStackNavigation} />
      <DoctorRootStack.Screen name="DoctorTabNavigation" component={DoctorTabNavigation} />
      <DoctorRootStack.Screen name="NotificationScreen" component={NotificationScreen} />
      <DoctorRootStack.Screen name="PatientAccountsScreen" component={PatientAccountsScreen} />
      <DoctorRootStack.Screen name="ListAppointmentsScreen" component={ListAppointmentsScreen} />
      <DoctorRootStack.Screen name="MyChambersScreen" component={MyChambersScreen} />
      <DoctorRootStack.Screen name="PatientHistoryScreen" component={PatientHistoryScreen} />
      <DoctorRootStack.Screen
        name="PatientAppointmentDetailsScreen"
        component={PatientAppointmentDetailsScreen}
      />
    </DoctorRootStack.Navigator>
  );
};
export default DoctorNavigation;

//FIXME:
const DoctorAuthStack = createStackNavigator<DoctorRootStackParamList>();
const DoctorAuthStackNavigation = () => (
  <DoctorAuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen">
    <DoctorAuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <DoctorAuthStack.Screen name="OtpScreen" component={OtpScreen} />
    <DoctorAuthStack.Screen name="AddAccountScreen" component={AddAccountScreen} />
    <DoctorAuthStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    <DoctorAuthStack.Screen
      name="RegistrationSuccessScreen"
      component={RegistrationSuccessScreen}
    />
  </DoctorAuthStack.Navigator>
);

//########### Doctor Tab Navigations ###########//
//FIXME:
const DoctorTab = createBottomTabNavigator<DoctorRootStackParamList>();
function DoctorTabNavigation() {
  return (
    <DoctorTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          margin: 15,
          position: 'absolute',
          height: 62,
          borderRadius: 25,
          backgroundColor: '#fafafa',

          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,

          shadowColor: '#000000',
        },
      }}>
      <DoctorTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <HomeIcon width={24} height={24} color={focused ? '#259376' : '#A6A6A6'} />
              <Text
                style={[
                  {
                    fontFamily: 'Montserrat',
                    padding: 3,
                    marginTop: 0.5,
                    fontSize: 10,
                    fontWeight: '600',
                    color: focused ? '#259376' : '#A6A6A6',
                  },
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <DoctorTab.Screen
        name="TodaysPatientsScreen"
        component={TodaysPatientsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CalendarIcon width={24} height={24} color={focused ? '#259376' : '#A6A6A6'} />
              <Text
                style={[
                  {
                    fontFamily: 'Montserrat',
                    padding: 3,
                    marginTop: 0.5,
                    fontSize: 10,
                    fontWeight: '600',
                    color: focused ? '#259376' : '#A6A6A6',
                  },
                ]}>
                {"Today's Patients"}
              </Text>
            </View>
          ),
        }}
      />

      <DoctorTab.Screen
        name="AddPatientScreen"
        component={AddPatientScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <UserPlusIcon width={24} height={24} color={focused ? '#259376' : '#A6A6A6'} />
              <Text
                style={[
                  {
                    fontFamily: 'Montserrat',
                    padding: 3,
                    marginTop: 0.5,
                    fontSize: 10,
                    fontWeight: '600',
                    color: focused ? '#259376' : '#A6A6A6',
                  },
                ]}>
                {'Add Patient'}
              </Text>
            </View>
          ),
        }}
      />
      <DoctorTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <UserRoundIcon width={24} height={24} color={focused ? '#259376' : '#A6A6A6'} />
              <Text
                style={[
                  {
                    fontFamily: 'Montserrat',
                    padding: 3,
                    marginTop: 0.5,
                    fontSize: 10,
                    fontWeight: '600',
                    color: focused ? '#259376' : '#A6A6A6',
                  },
                ]}>
                {'My Profile'}
              </Text>
            </View>
          ),
        }}
      />
    </DoctorTab.Navigator>
  );
}
