import NetInfo from '@react-native-community/netinfo';
import { syncLocalToFirebase } from './sync';

/**
 * Monitor network status and trigger sync when online
 */
export const monitorNetworkStatus = () => {
  NetInfo.addEventListener((state) => {
    const isConnected = state.isConnected;

    if (isConnected) {
      console.log('Device is online. Initiating sync...');
      syncLocalToFirebase(); // Start sync when the device goes online
    } else {
      console.log('Device is offline. Sync will resume when online.');
    }
  });
};
