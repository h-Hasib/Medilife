import React, { PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';

export const Container = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <ScrollView
      contentContainerStyle={{
        width: '100%',
        paddingHorizontal: '4%',
        paddingTop: 45,
        paddingBottom: 80,
        flexGrow: 1,
        backgroundColor: 'white',
      }}>
      {children}
    </ScrollView>
  );
};
