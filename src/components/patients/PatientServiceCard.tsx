import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import ArStyles from '../common/ArStyles';
import { Img } from '../elements/images';

export const PatientServiceCard = () => {
  return (
    <Surface style={styles.patientServiceCard}>
      <View style={[ArStyles.rowSpaceBetween, styles.cardContainer]}>
        <View style={styles.image}>
          <Img name="PatientMyDoctors" alt="MLS Logo" />
        </View>
        <View style={styles.headline}>
          <Text style={styles.line1}>My</Text>
          <Text style={styles.line2}>Doctors</Text>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  patientServiceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    margin: 2.5,
    borderTopWidth: 3.5,
    borderTopColor: '#259376',
  },
  cardContainer: { marginLeft: 5 },
  image: { width: '35%' },
  headline: { width: '65%' },
  line1: { fontSize: 16 },
  line2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#259376',
  },
});
