import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import { Body, Container } from 'src/components/containers/auth-containers';
import LoginFrom from './LoginFrom';

const LoginScreen = () => {
  return (
    <Container>
      <Body>
        <View
          style={{
            width: '85%',
            backgroundColor: '#ffffff',
            paddingHorizontal: 30,
            paddingTop: 20,
            paddingBottom: 70,
            alignSelf: 'center',
          }}>
          <View style={ArStyles.columnCenter}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: 18,
              }}>
              Welcome
            </Text>
            <Text
              style={{
                color: '#000000',
                paddingBottom: 10,
                fontFamily: 'Montserrat',
                fontWeight: '800',
                fontSize: 45,
              }}>
              Doctor
            </Text>
            <Text
              style={{
                color: '#525252',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontWeight: '700',
                paddingBottom: 20,
                fontSize: 15,
                lineHeight: 16,
              }}>
              Please enter your{' '}
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontWeight: '800',
                  fontSize: 17,
                  lineHeight: 16,
                }}>
                Phone Number
              </Text>{' '}
              to start the journey
            </Text>
          </View>
          <View style={{ width: '100%' }}>
            <LoginFrom />
          </View>
        </View>
      </Body>
    </Container>
  );
};

export default LoginScreen;
