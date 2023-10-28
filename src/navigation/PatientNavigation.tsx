import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CalendarIcon, HomeIcon, UserPlusIcon, UserRoundIcon } from 'src/assets/svg';

import AppointmentDetailScreen from 'src/screens/patient/appointment/appointment-detail/AppointmentDetailScreen';
import CreateAppointmentScreen from 'src/screens/patient/appointment/create-appointment/CreateAppointmentScreen';
import MyAppointmentsScreen from 'src/screens/patient/appointment/my-appointments/MyAppointmentsScreen';
import NewAppointmentScreen from 'src/screens/patient/appointment/new-appointment/NewAppointmentScreen';
import TodaysAppointmentScreen from 'src/screens/patient/appointment/todays-appointment/TodaysAppointmentScreen';
import LoginScreen from 'src/screens/patient/auth/login/LoginScreen';
import OtpScreen from 'src/screens/patient/auth/otp/OtpScreen';
import DoctorDetailScreen from 'src/screens/patient/doctors/doctor-detail/DoctorDetailScreen';
import InternationalDoctorsScreen from 'src/screens/patient/doctors/international-doctors/InternationalDoctorsScreen';
import MyDoctorsScreen from 'src/screens/patient/doctors/my-doctors/MyDoctorsScreen';
import EditFamilyMemberScreen from 'src/screens/patient/family-member/edit-family-member/EditFamilyMemberScreen';
import MyFamilyMembersScreen from 'src/screens/patient/family-member/my-family-members/MyFamilyMembersScreen';
import HomeScreen from 'src/screens/patient/home/HomeScreen';
import MyHealthFilesScreen from 'src/screens/patient/my-health/my-health-files/MyHealthFilesScreen';
import MyHealthReportsScreen from 'src/screens/patient/my-health/my-health-reports/MyHealthReportsScreen';
import MyPrescriptionsScreen from 'src/screens/patient/my-prescriptions/MyPrescriptionsScreen';
import EditAccountInfoScreen from 'src/screens/patient/my-profile/edit-account-info/EditAccountInfoScreen';
import EditHealthInfoScreen from 'src/screens/patient/my-profile/edit-health-info/EditHealthInfoScreen';
import EditPersonalInfoScreen from 'src/screens/patient/my-profile/edit-personal-info/EditPersonalInfoScreen';
import BasicInfoScreen from 'src/screens/patient/my-profile/initial-basic-info/BasicInfoScreen';
import ProfileScreen from 'src/screens/patient/my-profile/profile/ProfileScreen';
import { NotificationScreen } from 'src/screens/patient/notification/NotificationScreen';
import OrderMedicineScreen from 'src/screens/patient/order-medicine/OrderMedicineScreen';
import OtherServicesScreen from 'src/screens/patient/other-services/OtherServicesScreen';
import PIDScreen from 'src/screens/patient/pid/PIDScreen';
import { PatientRootStackParamList } from 'src/types/navigation/PatientNavigation';

//########### Patient Root Navigation ###########//
const PatientRootStack = createStackNavigator<PatientRootStackParamList>();

const PatientNavigation = () => (
  <PatientRootStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="PatientTabNavigation">
    <PatientRootStack.Screen name="PatientAuthStack" component={PatientAuthStackNavigation} />
    <PatientRootStack.Screen name="PatientTabNavigation" component={PatientTabNavigation} />
    <PatientRootStack.Screen name="AppointmentDetailScreen" component={AppointmentDetailScreen} />
    <PatientRootStack.Screen name="CreateAppointmentScreen" component={CreateAppointmentScreen} />
    <PatientRootStack.Screen name="DoctorDetailScreen" component={DoctorDetailScreen} />
    <PatientRootStack.Screen name="EditAccountInfoScreen" component={EditAccountInfoScreen} />
    <PatientRootStack.Screen name="EditFamilyMemberScreen" component={EditFamilyMemberScreen} />
    <PatientRootStack.Screen name="EditHealthInfoScreen" component={EditHealthInfoScreen} />
    <PatientRootStack.Screen name="EditPersonalInfoScreen" component={EditPersonalInfoScreen} />
    <PatientRootStack.Screen name="InitialBasicInfoScreen" component={BasicInfoScreen} />
    <PatientRootStack.Screen
      name="InternationalDoctorsScreen"
      component={InternationalDoctorsScreen}
    />
    <PatientRootStack.Screen name="MyDoctorsScreen" component={MyDoctorsScreen} />
    <PatientRootStack.Screen name="MyFamilyMembersScreen" component={MyFamilyMembersScreen} />
    <PatientRootStack.Screen name="MyHealthFilesScreen" component={MyHealthFilesScreen} />
    <PatientRootStack.Screen name="MyHealthReportsScreen" component={MyHealthReportsScreen} />
    <PatientRootStack.Screen name="MyPrescriptionsScreen" component={MyPrescriptionsScreen} />
    <PatientRootStack.Screen name="NotificationScreen" component={NotificationScreen} />
    <PatientRootStack.Screen name="OrderMedicineScreen" component={OrderMedicineScreen} />
    <PatientRootStack.Screen name="OtherServicesScreen" component={OtherServicesScreen} />
    <PatientRootStack.Screen name="PIDScreen" component={PIDScreen} />
    <PatientRootStack.Screen name="TodaysAppointmentScreen" component={TodaysAppointmentScreen} />
  </PatientRootStack.Navigator>
);

export default PatientNavigation;

//########### Patient Auth Navigation ###########//
const PatientAuthStack = createStackNavigator<PatientRootStackParamList>();

const PatientAuthStackNavigation = () => (
  <PatientAuthStack.Navigator screenOptions={{ headerShown: false }}>
    <PatientAuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <PatientAuthStack.Screen name="OtpScreen" component={OtpScreen} />
  </PatientAuthStack.Navigator>
);

//########### Patient Tab Navigation ###########//
const PatientTab = createBottomTabNavigator<PatientRootStackParamList>();

const PatientTabNavigation = () => {
  return (
    <PatientTab.Navigator
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
      <PatientTab.Screen
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
                    fontSize: 8,
                    fontWeight: '600',
                    color: focused ? '#259376' : '#A6A6A6',
                  },
                ]}>
                {'Home'}
              </Text>
            </View>
          ),
        }}
      />
      <PatientTab.Screen
        name="MyAppointmentsScreen"
        component={MyAppointmentsScreen}
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
                    fontSize: 8,
                    fontWeight: '600',
                    color: focused ? '#259376' : '#A6A6A6',
                  },
                ]}>
                {'My Appointments'}
              </Text>
            </View>
          ),
        }}
      />
      <PatientTab.Screen
        name="NewAppointmentScreen"
        component={NewAppointmentScreen}
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
                    fontSize: 8,
                    fontWeight: '600',
                    color: focused ? '#259376' : '#A6A6A6',
                  },
                ]}>
                {'New Appointment'}
              </Text>
            </View>
          ),
        }}
      />
      <PatientTab.Screen
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
                    fontSize: 8,
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
    </PatientTab.Navigator>
  );
};
