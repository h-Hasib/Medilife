import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import RootNavigation from 'src/navigation/RootNavigation';

const queryClient = new QueryClient();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
const App = () => (
  <PaperProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  </PaperProvider>
);

export default App;
