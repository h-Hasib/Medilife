import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { AppointmentListItem } from 'src/types/doctor/Appointment';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';
import ArStyles from '../common/ArStyles';
interface Props {
  data: AppointmentListItem[];
  navigation: StackNavigationProp<DoctorRootStackParamList>;
}
const AppointmentList = (params: Props) => {
  const { data, navigation } = params;
  return (
    <>
      <View style={[{ paddingBottom: 20 }, ArStyles.rowCenter]}>
        <Text style={{ fontWeight: '800' }}>Need to Add a drop down here</Text>
      </View>
      <Surface style={styles.shadowBox}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '11%' }}>
            <Text style={styles.textBox}>S/N</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text style={styles.textBox}>P.Name</Text>
          </View>
          <View style={{ width: '17%' }}>
            <Text style={styles.textBox}>Age</Text>
          </View>
          <View style={{ width: '17%' }}>
            <Text style={styles.textBox}>Time</Text>
          </View>
          <View style={{ width: '17%' }}>
            <Text style={styles.textBox}>Type</Text>
          </View>
          <View style={{ width: '8%' }}>
            <Text style={styles.textBox}>
              <Icon name="caretright" size={18} />
            </Text>
          </View>
        </View>
      </Surface>
      {data && (
        <FlashList
          // showsVerticalScrollIndicator={false}
          estimatedListSize={{ height: 80, width: 50 }}
          estimatedItemSize={30}
          data={data}
          renderItem={({ item }) => (
            <Surface style={styles.rowBox}>
              <Pressable
                onPress={() =>
                  navigation.navigate('PatientAppointmentDetailsScreen', {
                    appointmentId: item.Id,
                  })
                }>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: '11%' }}>
                    <Text style={styles.rowtextBox}>01</Text>
                  </View>
                  <View style={{ width: '30%' }}>
                    <Text style={styles.rowtextBox}>{item.PatientName}</Text>
                  </View>
                  <View style={{ width: '17%' }}>
                    <Text style={styles.rowtextBox}>{item.AgeYear}</Text>
                  </View>
                  <View style={{ width: '17%' }}>
                    <Text style={styles.rowtextBox}>7:30</Text>
                  </View>
                  <View style={{ width: '17%' }}>
                    <Text style={styles.rowtextBox}>N</Text>
                  </View>
                  <View style={{ width: '8%' }}>
                    <Text style={styles.rowtextBox}>
                      <Icon name="caretright" size={18} color="#259376" />
                    </Text>
                  </View>
                </View>
              </Pressable>
            </Surface>
          )}
        />
      )}
    </>
  );
};

export default AppointmentList;

const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: '#259376',
    borderRadius: 20,
    padding: 10,
  },
  textBox: {
    color: 'white',
    fontWeight: '800',
  },
  rowBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 10,
    margin: 2.5,
  },
  rowtextBox: {
    fontWeight: '800',
  },
});
