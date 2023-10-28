import NetInfo from '@react-native-community/netinfo';

export const checkConnection = async (): Promise<boolean> => {
  try {
    const response = await NetInfo.fetch();
    return response.isConnected ?? false;
  } catch (error) {
    return false;
  }
};
