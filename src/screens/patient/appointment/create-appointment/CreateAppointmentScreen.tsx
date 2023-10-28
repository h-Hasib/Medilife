import React from 'react';
import { Text, View } from 'react-native';
import { Container } from 'src/components/containers/home-containers';
import ChamberCard from 'src/components/patients/ChamberCard';

const CreateAppointmentScreen = () => {
  return (
    <Container>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 21, fontWeight: '700', color: '#3C9979', textAlign: 'center' }}>
          Select Chamber
        </Text>
      </View>
      <ChamberCard
        onlineAppointmentAllow={false}
        name="OASIS Hospital Sylhet LTD"
        address="Subhanighat, Sylhet-3100,Bangladesh"
      />
      <ChamberCard
        onlineAppointmentAllow={true}
        name="Chander Hashi Hospital LTD"
        address="Freedom Fighter Complex, Old Hospital Rd, Habiganj 3300"
      />
    </Container>
  );
};

export default CreateAppointmentScreen;
