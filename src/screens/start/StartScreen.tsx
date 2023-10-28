import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Divider, Surface, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import ArStyles from 'src/components/common/ArStyles';
import { Body, Container, Footer, Header } from 'src/components/containers/auth-containers';
import { Img } from 'src/components/elements/images';
import { RootStackParamList } from 'src/navigation';

type Props = StackNavigationProp<RootStackParamList>;

const StartScreen = () => {
  const navigation = useNavigation<Props>();

  const item = {
    name: 'John Doe',
    age: 20,
  };

  return (
    <Container>
      <Header>
        <View>
          <Text style={{ fontSize: 15, fontWeight: '800', paddingBottom: 10 }} variant="titleSmall">
            Keep Health Care
          </Text>
          <Text variant="headlineLarge" style={{ fontSize: 45, fontWeight: '800' }}>
            at Your Fingertip
          </Text>
        </View>
        <Divider style={styles.dividerStyle} />
      </Header>
      <Body>
        <View style={{ backgroundColor: 'transparent', paddingVertical: 2 }}>
          <Img name="bgHome" alt="" />
        </View>
      </Body>
      <Footer>
        <Surface style={[styles.shadowBox, { backgroundColor: '#259376' }]}>
          <Pressable onPress={() => navigation.navigate('DoctorNavigation')}>
            <View style={styles.btnView}>
              <View>
                <Text style={styles.btnText}>Get Started as </Text>
              </View>
              <View>
                <Text style={[styles.btnText, { fontWeight: '800' }]}>Doctor </Text>
              </View>
              <View>
                <Icon name="arrow-right-circle" size={32} style={styles.icon} />
              </View>
            </View>
          </Pressable>
        </Surface>
        <Surface style={[styles.shadowBox, { backgroundColor: '#373737' }]}>
          <Pressable onPress={() => navigation.navigate('PatientNavigation')}>
            <View style={styles.btnView}>
              <View>
                <Text style={styles.btnText}>Get Started as </Text>
              </View>
              <View>
                <Text style={[styles.btnText, { fontWeight: '800' }]}>Patient </Text>
              </View>
              <View>
                <Icon name="arrow-right-circle" size={32} style={styles.icon} />
              </View>
            </View>
          </Pressable>
        </Surface>
        <Button
          style={styles.shadowBox}
          mode="contained-tonal"
          onPress={() => navigation.navigate('DemoComponents')}>
          DemoComponents
        </Button>
      </Footer>
    </Container>
  );
};

export default StartScreen;
const styles = StyleSheet.create({
  dividerStyle: {
    height: 7,
    width: '74%',
    borderRadius: 12,
    marginVertical: 10,
    backgroundColor: '#259376',
    alignSelf: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  shadowBox: {
    width: '50%',
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
});
