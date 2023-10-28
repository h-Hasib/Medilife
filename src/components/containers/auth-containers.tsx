import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Img } from '../elements/images';

export const Container = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}>
      <View style={styles.wrapper}>
        {children}
        <View>
          <Img name="logo" alt="MLS Logo" />
        </View>
      </View>
    </ScrollView>
  );
};

export const Body = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <View style={{ width: '100%' }}>
      <Img name="bgAuth" alt="MLS" style={{ width: '100%', position: 'absolute' }} />
      {children}
    </View>
  );
};

export const Header = (props: PropsWithChildren) => {
  const { children } = props;
  return <View style={styles.header}>{children}</View>;
};
export const Footer = (props: PropsWithChildren) => {
  const { children } = props;
  return <View style={styles.footer}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    width: 247,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    width: '100%',
  },
});
