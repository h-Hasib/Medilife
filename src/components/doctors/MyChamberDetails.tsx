import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { useDoctorChamberDelete, useDoctorChamberDetails } from 'src/hooks/doctor/chamber';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';
import ArStyles from '../common/ArStyles';
import RoundBadge from '../elements/RoundBadge';
interface Props {
  chamberId: number;
}
const MyChamberDetails = (params: Props) => {
  const { chamberId } = params;
  const chamberDetails = useDoctorChamberDetails(chamberId);
  const deleteChamberMutation = useDoctorChamberDelete();
  const data = chamberDetails?.data?.data.Data;
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  const handleDelete = () => {
    deleteChamberMutation.mutate(chamberId);
  };
  return (
    <View>
      <Divider style={styles.dividerStyle} />
      <View style={styles.availabilityRow}>
        <View style={{ width: '30%' }}>
          <Text variant="titleMedium">Availability</Text>
        </View>
        <View style={{ width: '70%', alignItems: 'flex-end' }}>
          <View style={{ flexDirection: 'row', margin: 0.5, marginRight: 2 }}>
            <RoundBadge text={'S'} active={data?.Saturday ?? false} />
            <RoundBadge text={'S'} active={data?.Sunday ?? false} />
            <RoundBadge text={'M'} active={data?.Monday ?? false} />
            <RoundBadge text={'T'} active={data?.Tuesday ?? false} />
            <RoundBadge text={'W'} active={data?.Wednesday ?? false} />
            <RoundBadge text={'T'} active={data?.Thursday ?? false} />
            <RoundBadge text={'F'} active={data?.Friday ?? false} />
          </View>
        </View>
      </View>
      <Divider style={styles.dividerStyle} />

      <View style={{ padding: 15, paddingRight: 20 }}>
        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Evening Shift</Text>
          <Text>
            {data?.ChamberVisitStartTime} - {data?.ChamberVisitEndTime}
          </Text>
        </View>
        <Divider style={styles.grayDividerStyle} />

        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Evening Shift Max. Patient</Text>
          <Text>{data?.EveningShiftMaxPatient ?? 'N/A'}</Text>
        </View>
        <Divider style={styles.grayDividerStyle} />

        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Online Appointment</Text>
          <Text>{data?.IsOnlineAppointmentAllow === true ? 'Available' : 'Not Available'}</Text>
        </View>
        <Divider style={styles.grayDividerStyle} />

        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Advance Appointment Booking</Text>
          <Text>{data?.IsFutureAppointmentAllow === true ? 'Available' : 'Not Available'}</Text>
        </View>
        <Divider style={styles.grayDividerStyle} />

        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Maximum Advance Booking Days</Text>
          <Text>{data?.FutureAppointmentMaxDays}</Text>
        </View>
        <Divider style={styles.grayDividerStyle} />

        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Chamber Contact No (Phone)</Text>
          <Text>{data?.ContactNo ?? 'N/A'}</Text>
        </View>
        <Divider style={styles.grayDividerStyle} />

        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Max. Booking Per User (Per Day)</Text>
          <Text>{data?.UserPerDayMaxAppointment ?? 'N/A'}</Text>
        </View>
        <Divider style={styles.grayDividerStyle} />

        <View style={ArStyles.rowSpaceBetween}>
          <Text style={styles.textTitle}>Address</Text>
          <Text>{data?.ChamberAddress}</Text>
        </View>
      </View>

      <View style={[ArStyles.rowSpaceBetween]}>
        <View style={{ padding: 5, width: '50%' }}>
          <Button
            theme={{ colors: { primary: '#259376' } }}
            mode="contained"
            style={styles.btnStyle}
            labelStyle={styles.btnLabel}
            onPress={() => console.log('Pressed')}>
            Edit Info
          </Button>
        </View>
        <View style={{ padding: 5, width: '50%' }}>
          <Button
            mode="contained"
            style={styles.btnStyle}
            theme={{ colors: { primary: '#DD4C4C' } }}
            labelStyle={styles.btnLabel}
            onPress={handleDelete}>
            Delete Chamber
          </Button>
        </View>
      </View>
    </View>
  );
};

export default MyChamberDetails;

const styles = StyleSheet.create({
  dividerStyle: {
    height: 2,
    width: '90%',
    marginVertical: 10,
    backgroundColor: '#259376',
    alignSelf: 'center',
  },
  grayDividerStyle: {
    height: 1,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#BCBCBC',
    alignSelf: 'center',
  },
  availabilityRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  textTitle: {
    color: '#259376',
    fontWeight: '800',
  },
  btnLabel: {
    fontSize: 12,
    fontWeight: '700',
  },
  btnStyle: { width: '100%', borderRadius: 5 },
});
