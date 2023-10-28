import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ArStyles from '../common/ArStyles';

export interface ChamberCardProps {
  name: string;
  address: string;
  onlineAppointmentAllow: boolean;
}

const ChamberCard: React.FC<ChamberCardProps> = ({
  name = '',
  address = '',
  onlineAppointmentAllow,
}) => {
  return (
    <Card
      onPress={() => {
        null;
      }}
      style={{ backgroundColor: '#fff', marginVertical: 5 }}>
      <Card.Content>
        <View style={ArStyles.rowSpaceBetween}>
          <View style={{ width: '68%' }}>
            <Text variant="bodyLarge" style={{ fontWeight: '700', color: '#3C9979' }}>
              {name}
            </Text>
            <Text variant="bodySmall" style={{ fontWeight: '700' }}>
              {address}
            </Text>
          </View>
          <View style={{ width: '10%', alignItems: 'flex-end' }}>
            <Feather name="chevron-right" size={35} color={'#3C9979'} />
          </View>
        </View>
        {onlineAppointmentAllow ? (
          <View style={[ArStyles.rowEnd, { marginBottom: -10 }]}>
            <Text variant="bodySmall" style={{ fontWeight: '600', paddingRight: 3 }}>
              Online Appointment Allow
            </Text>
            <MaterialIcons name="online-prediction" size={25} color={'#3C9979'} />
          </View>
        ) : null}
      </Card.Content>
    </Card>
  );
};

export default ChamberCard;
